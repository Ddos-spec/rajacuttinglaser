// /api/ai-chat.js
// Astro API endpoint to interact with OpenRouter AI and log conversations to Supabase.

import { supabase } from '@/integrations/supabase/client';

const openRouterApiKey = import.meta.env.OPENROUTER_API_KEY;

export async function POST({ request }) {
  if (!openRouterApiKey) {
    console.error('OPENROUTER_API_KEY is not set.');
    return new Response(JSON.stringify({ error: 'Server configuration error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { message, whatsappNumber, conversationHistory = [] } = await request.json();
    if (!message || !whatsappNumber) {
      return new Response(JSON.stringify({ error: 'Missing `message` or `whatsappNumber`.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Construct messages for the AI, including history for context
    const messages = [
      { 
        role: 'system', 
        content: `You are a friendly and professional customer service assistant for "Raja Cutting Laser", a laser cutting company in Indonesia. Your goal is to answer questions, provide information, and determine if the user is a potential lead.
        - Be concise and helpful.
        - If asked about prices, explain that prices depend on material, thickness, and design complexity, and offer to provide a quote if they provide these details.
        - Your primary language is Indonesian.
        - If the user seems interested in a service, ask for their name, location, and details about their project to qualify them as a lead.`
      },
      ...conversationHistory, // Spread the history if provided
      { role: 'user', content: message },
    ];

    const aiResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openRouterApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek/chat',
        messages: messages,
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

    // Log conversation to Supabase
    const { error: logError } = await supabase
      .from('conversations')
      .insert({
        whatsapp_number: whatsappNumber,
        message_text: message,
        ai_response_text: aiMessageContent,
      });

    if (logError) {
      console.error('Supabase logging error:', logError);
    }

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