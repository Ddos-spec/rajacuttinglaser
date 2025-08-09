// /api/notify-n8n.js
// Astro API endpoint to send a signal to an N8N webhook when a user clicks a WhatsApp button.

export async function POST({ request }) {
  const n8nWebhookUrl = import.meta.env.N8N_WEBHOOK_URL;

  if (!n8nWebhookUrl) {
    console.error('N8N_WEBHOOK_URL is not set in environment variables.');
    return new Response(JSON.stringify({ status: 'error', message: 'Server configuration error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();
    const { source, message } = body;

    // Prepare payload for N8N
    const payload = {
      event: 'whatsapp_button_click',
      source: source || 'unknown',
      message_template: message || 'No message provided',
      timestamp: new Date().toISOString(),
    };

    // Asynchronously send the request to N8N without waiting for it to complete
    fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(error => {
      // Log the error but don't block the user's experience
      console.error('Failed to send signal to N8N:', error);
    });

    // Immediately return a success response to the client
    return new Response(JSON.stringify({ status: 'success', message: 'Signal sent.' }), {
      status: 202, // Accepted
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error processing N8N notification request:', error);
    return new Response(JSON.stringify({ status: 'error', message: 'Invalid request.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}