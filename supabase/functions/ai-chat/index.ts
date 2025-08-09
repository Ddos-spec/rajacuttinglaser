import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0'

// CORS headers wajib untuk Supabase Edge Functions
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Menangani preflight request OPTIONS
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Mengambil OpenRouter API key dari environment variables (secrets)
    const openRouterApiKey = Deno.env.get('OPENROUTER_API_KEY');
    if (!openRouterApiKey) {
      throw new Error('OPENROUTER_API_KEY belum diatur di dalam function secrets.');
    }

    // Mengambil body dari request
    const { message, whatsappNumber, conversationHistory = [] } = await req.json();
    if (!message || !whatsappNumber) {
      return new Response(JSON.stringify({ error: '`message` atau `whatsappNumber` tidak ada.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Membuat Supabase client dengan service role key untuk akses admin
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Menyusun pesan untuk AI, termasuk histori percakapan
    const messages = [
      { 
        role: 'system', 
        content: `You are a friendly and professional customer service assistant for "Raja Cutting Laser", a laser cutting company in Indonesia. Your goal is to answer questions, provide information, and determine if the user is a potential lead.
        - Be concise and helpful.
        - Your primary language is Indonesian.
        - If asked about prices, explain that prices depend on material, thickness, and design complexity, and offer to provide a quote if they provide these details.
        - If the user seems interested in a service, ask for their name, location, and details about their project to qualify them as a lead.
        - **IMPORTANT ESCALATION RULE:** If the user insists on getting a price quote, asks a very complex technical question you cannot answer, or seems angry/frustrated, you MUST end your response with the exact phrase: [ESKALASI_MANUSIA]. Do not explain why, just add the phrase.`
      },
      ...conversationHistory,
      { role: 'user', content: message },
    ];

    // Memanggil OpenRouter API
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
      throw new Error(`OpenRouter API gagal dengan status: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const aiMessageContent = aiData.choices[0]?.message?.content;

    if (!aiMessageContent) {
      throw new Error('Struktur respons dari OpenRouter API tidak valid.');
    }

    // Menyimpan percakapan ke Supabase
    const { error: logError } = await supabaseAdmin
      .from('conversations')
      .insert({
        whatsapp_number: whatsappNumber,
        message_text: message,
        ai_response_text: aiMessageContent,
      });

    if (logError) {
      // Catat error tapi jangan gagalkan respons ke pengguna
      console.error('Supabase logging error:', logError);
    }

    // Mengembalikan balasan dari AI
    return new Response(JSON.stringify({ reply: aiMessageContent }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error di dalam fungsi ai-chat:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
})