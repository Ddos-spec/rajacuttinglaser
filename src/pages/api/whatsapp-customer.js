// /api/whatsapp-customer.js
// Astro API endpoint to receive WhatsApp webhook messages and forward them to N8N.

export async function POST({ request }) {
  const n8nWebhookUrl = import.meta.env.N8N_WEBHOOK_URL;

  if (!n8nWebhookUrl) {
    console.error('N8N_WEBHOOK_URL is not set. Cannot forward WhatsApp message.');
    // Still return 200 to the webhook provider to prevent it from being disabled.
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
      // Log the error but don't block the response to the webhook provider
      console.error('Error forwarding to N8N:', error);
    });

    // Acknowledge receipt to the webhook provider immediately
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