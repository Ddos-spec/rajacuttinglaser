// /api/ai-chat.js
// Astro API endpoint to interact with OpenRouter AI and log conversations to Supabase.

import { createClient } from '@supabase/supabase-js';

const openRouterApiKey = import.meta.env.OPENROUTER_API_KEY;
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST({ request }) {
  // 1. Check for API keys
  if (!openRouterApiKey || !supabaseUrl || !supabaseKey) {
    console.error('Missing environment variables for AI Chat API.');
    return new Response(JSON.stringify({ error: 'Server configuration error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // 2. Parse incoming request
    const { message, whatsappNumber } = await request.json();
    if (!message || !whatsappNumber) {
      return new Response(JSON.stringify({ error: 'Missing `message` or `whatsappNumber` in request body.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 3. Call OpenRouter API (DeepSeek)
    const aiResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openRouterApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek/chat', // As requested by the user
        messages: [
          { role: 'system', content: 'You are a helpful customer service assistant for Raja Cutting Laser, a laser cutting company. Be concise and helpful.' },
          { role: 'user', content: message },
        ],
      }),
    });

    if (!aiResponse.ok) {
      const errorBody = await aiResponse.text();
      console.error('OpenRouter API error:', errorBody);
      throw new Error(`OpenRouter API failed with status: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const aiMessageContent = aiData.choices[0]?.message?.content;

    if (!aiMessageContent) {
      throw new Error('Invalid response structure from OpenRouter API.');
    }

    // 4. Log conversation to Supabase
    const { error: logError } = await supabase
      .from('conversations')
      .insert([
        {
          whatsapp_number: whatsappNumber,
          message_text: message,
          ai_response_text: aiMessageContent,
          created_at: new Date().toISOString(),
        },
      ]);

    if (logError) {
      // Log the error but still return the AI response to the user
      console.error('Supabase logging error:', logError);
    }

    // 5. Return AI response to the client (e.g., N8N)
    return new Response(JSON.stringify({ reply: aiMessageContent }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in /api/ai-chat:', error);
    return new Response(JSON.stringify({ error: 'An internal error occurred.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}