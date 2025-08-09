// /api/webhook-whatsapp.js
// Astro API endpoint to receive WhatsApp webhook messages

export async function POST({ request }) {
  try {
    // Parse the incoming webhook payload
    const body = await request.json();
    
    // Log the incoming webhook for debugging
    console.log('WhatsApp webhook received:', JSON.stringify(body, null, 2));
    
    // Extract message data from WhatsApp webhook payload
    const { entry } = body;
    
    if (!entry || !entry[0] || !entry[0].changes || !entry[0].changes[0]) {
      console.log('Invalid webhook payload structure');
      return new Response(JSON.stringify({ status: 'error', message: 'Invalid payload' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    const change = entry[0].changes[0];
    const { value } = change;
    
    // Check if this is a message event
    if (!value.messages || value.messages.length === 0) {
      console.log('No messages in webhook payload');
      return new Response(JSON.stringify({ status: 'ok', message: 'No messages to process' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    const message = value.messages[0];
    const contact = value.contacts ? value.contacts[0] : null;
    
    // Extract relevant data
    const messageData = {
      messageId: message.id,
      from: message.from,
      timestamp: message.timestamp,
      type: message.type,
      text: message.text ? message.text.body : '',
      contactName: contact ? contact.profile.name : '',
      whatsappBusinessAccountId: value.metadata.phone_number_id
    };
    
    // Only process text messages for now
    if (message.type !== 'text') {
      console.log('Non-text message received, skipping');
      return new Response(JSON.stringify({ status: 'ok', message: 'Non-text message skipped' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    // Forward to N8N webhook using environment variable
    const n8nWebhookUrl = import.meta.env.N8N_WEBHOOK_URL;
    
    if (n8nWebhookUrl) {
      try {
        const n8nResponse = await fetch(n8nWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(messageData),
        });
        
        if (!n8nResponse.ok) {
          console.error('Failed to forward to N8N:', n8nResponse.status, n8nResponse.statusText);
        } else {
          console.log('Successfully forwarded message to N8N');
        }
        
      } catch (error) {
        console.error('Error forwarding to N8N:', error);
      }
    } else {
      console.warn('N8N_WEBHOOK_URL is not set. Skipping forwarding.');
    }
    
    // Return success response to WhatsApp
    return new Response(JSON.stringify({ status: 'ok' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
  } catch (error) {
    console.error('Error processing WhatsApp webhook:', error);
    
    return new Response(JSON.stringify({ 
      status: 'error', 
      message: 'Internal server error' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// Handle webhook verification (required by WhatsApp)
export async function GET({ request }) {
  const url = new URL(request.url);
  const mode = url.searchParams.get('hub.mode');
  const token = url.searchParams.get('hub.verify_token');
  const challenge = url.searchParams.get('hub.challenge');
  
  // Verify token from environment variable
  const verifyToken = import.meta.env.WHATSAPP_VERIFY_TOKEN;
  
  if (mode === 'subscribe' && token === verifyToken) {
    console.log('WhatsApp webhook verified successfully');
    return new Response(challenge, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } else {
    console.log('WhatsApp webhook verification failed. Make sure WHATSAPP_VERIFY_TOKEN is set correctly.');
    return new Response('Forbidden', {
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}