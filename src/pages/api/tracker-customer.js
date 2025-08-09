// /api/tracker-customer.js
// Astro API endpoint to create or update customer profiles in Supabase.

import { supabase } from '@/integrations/supabase/client';

export async function POST({ request }) {
  try {
    const body = await request.json();
    const {
      whatsappNumber,
      name,
      phone,
      location,
      productInterest,
      isLead,
    } = body;

    if (!whatsappNumber) {
      return new Response(JSON.stringify({ error: '`whatsappNumber` is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Data to be inserted or updated
    const customerData = {
      whatsapp_number: whatsappNumber,
      name: name,
      phone: phone,
      location: location,
      product_interest: productInterest,
      is_lead: isLead,
      last_interaction: new Date().toISOString(),
    };

    // Remove null/undefined fields so they don't overwrite existing data with nulls
    Object.keys(customerData).forEach(key => {
      if (customerData[key] === null || customerData[key] === undefined) {
        delete customerData[key];
      }
    });

    // Perform an "upsert" operation
    const { data, error } = await supabase
      .from('customers')
      .upsert(customerData, { onConflict: 'whatsapp_number' })
      .select();

    if (error) {
      console.error('Supabase upsert error:', error);
      throw error;
    }

    return new Response(JSON.stringify({ status: 'success', data: data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in /api/tracker-customer:', error);
    return new Response(JSON.stringify({ error: 'An internal error occurred.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// GET method to retrieve customer data and conversation history
export async function GET({ request }) {
    const url = new URL(request.url);
    const whatsappNumber = url.searchParams.get('whatsapp_number');

    if (!whatsappNumber) {
        return new Response(JSON.stringify({ error: '`whatsapp_number` query parameter is required.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        // Fetch customer profile
        const { data: customer, error: customerError } = await supabase
            .from('customers')
            .select('*')
            .eq('whatsapp_number', whatsappNumber)
            .single();

        if (customerError && customerError.code !== 'PGRST116') { // Ignore "single row not found" error
            throw customerError;
        }

        // Fetch conversation history
        const { data: conversations, error: conversationsError } = await supabase
            .from('conversations')
            .select('message_text, ai_response_text, created_at')
            .eq('whatsapp_number', whatsappNumber)
            .order('created_at', { ascending: true })
            .limit(20); // Limit history to the last 20 messages for context

        if (conversationsError) {
            throw conversationsError;
        }

        return new Response(JSON.stringify({
            status: 'success',
            data: {
                customer,
                conversations,
            },
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error fetching customer data:', error);
        return new Response(JSON.stringify({ error: 'An internal error occurred.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}