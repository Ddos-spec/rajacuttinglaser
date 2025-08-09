// /api/whatsapp-customer.js
// Astro API endpoint to receive WhatsApp webhook messages and forward them to N8N.

export async function POST({ request }) {
  const n8nWebhookUrl = import.meta.env.N8N_WEBHOOK_URL;

  if (!n8nWebhookUrl) {
    console.error('N8N_WEBHOOK_URL is not set. Cannot forward WhatsApp message.');
    // Still return 200 to WhatsApp to prevent it from disabling the webhook.
    return new Response(JSON.stringify({ status: 'ok', message: 'Server configuration error.' }), { status: 200 });
  }

  try {
    const body = await request.json();
    console.log('WhatsApp webhook received:', JSON.stringify(body, null, 2));

    // Forward the entire payload to N8N
    // N8N is better equipped to handle the complex structure of WhatsApp webhooks.
    fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).catch(error => {
      // Log the error but don't block the response to WhatsApp
      console.error('Error forwarding to N8N:', error);
    });

    // Acknowledge receipt to WhatsApp immediately
    return new Response(JSON.stringify({ status: 'ok' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error processing WhatsApp webhook:', error);
    return new Response(JSON.stringify({ status: 'error', message: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Handle webhook verification (required by WhatsApp)
export async function GET({ request }) {
  const url = new URL(request.url);
  const mode = url.searchParams.get('hub.mode');
  const token = url.searchParams.get('hub.verify_token');
  const challenge = url.searchParams.get('hub.challenge');

  const verifyToken = import.meta.env.WHATSAPP_VERIFY_TOKEN;

  if (!verifyToken) {
    console.error('WHATSAPP_VERIFY_TOKEN is not set.');
    return new Response('Forbidden: Server configuration missing.', { status: 403 });
  }

  if (mode === 'subscribe' && token === verifyToken) {
    console.log('WhatsApp webhook verified successfully.');
    return new Response(challenge, {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    });
  } else {
    console.error('WhatsApp webhook verification failed. Tokens do not match.');
    return new Response('Forbidden', { status: 403 });
  }
}