// /api/track-customer.js
// Astro API endpoint to store customer data and conversation history
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client from environment variables
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase credentials not configured in environment variables.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST({ request }) {
  if (!supabaseUrl || !supabaseKey) {
    return new Response(JSON.stringify({ 
      status: 'error', 
      message: 'Database configuration missing' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();
    console.log('Customer tracking data received:', JSON.stringify(body, null, 2));

    const {
      whatsappNumber,
      messageText,
      aiResponseText,
      extractedName,
      extractedPhone,
      extractedLocation,
      extractedProductInterest,
      isLeadReady,
      timestamp
    } = body;
    
    if (!whatsappNumber || !messageText) {
      return new Response(JSON.stringify({ 
        status: 'error', 
        message: 'Missing required fields: whatsappNumber and messageText' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    const customerData = {
      whatsapp_number: whatsappNumber,
      message_text: messageText,
      ai_response_text: aiResponseText || null,
      extracted_name: extractedName || null,
      extracted_phone: extractedPhone || null,
      extracted_location: extractedLocation || null,
      extracted_product_interest: extractedProductInterest || null,
      is_lead_ready: isLeadReady || false,
      created_at: timestamp || new Date().toISOString()
    };
    
    const { error: insertError } = await supabase
      .from('conversations')
      .insert(customerData);

    if (insertError) {
      console.error('Supabase insert failed:', insertError);
      throw new Error(`Supabase insert failed: ${insertError.message}`);
    }
    
    console.log('Successfully stored customer data in Supabase');
    
    if (extractedName || extractedPhone || extractedLocation) {
      await updateCustomerProfile({
        whatsappNumber,
        extractedName,
        extractedPhone,
        extractedLocation,
        extractedProductInterest,
        isLeadReady
      });
    }
    
    return new Response(JSON.stringify({ 
      status: 'success',
      message: 'Customer data stored successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Error processing customer tracking request:', error);
    return new Response(JSON.stringify({ 
      status: 'error', 
      message: 'Internal server error' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

async function updateCustomerProfile(data) {
  try {
    const { data: existingCustomers, error: checkError } = await supabase
      .from('customers')
      .select('id')
      .eq('whatsapp_number', data.whatsappNumber)
      .limit(1);

    if (checkError) {
      console.error('Failed to check existing customer:', checkError);
      return;
    }

    const customerProfileData = {
      whatsapp_number: data.whatsappNumber,
      name: data.extractedName || null,
      phone: data.extractedPhone || null,
      location: data.extractedLocation || null,
      product_interest: data.extractedProductInterest || null,
      is_lead: data.isLeadReady || false,
      last_interaction: new Date().toISOString()
    };

    if (existingCustomers && existingCustomers.length > 0) {
      const { error: updateError } = await supabase
        .from('customers')
        .update(customerProfileData)
        .eq('whatsapp_number', data.whatsappNumber);
      
      if (updateError) console.error('Failed to update customer profile:', updateError);
      else console.log('Customer profile updated successfully');
    } else {
      const { error: createError } = await supabase
        .from('customers')
        .insert({ ...customerProfileData, created_at: new Date().toISOString() });
      
      if (createError) console.error('Failed to create customer profile:', createError);
      else console.log('Customer profile created successfully');
    }
  } catch (error) {
    console.error('Error updating customer profile:', error);
  }
}

export async function GET({ request }) {
  if (!supabaseUrl || !supabaseKey) {
    return new Response(JSON.stringify({ status: 'error', message: 'Database configuration missing' }), { status: 500 });
  }
  
  try {
    const url = new URL(request.url);
    const whatsappNumber = url.searchParams.get('whatsapp_number');
    
    if (!whatsappNumber) {
      return new Response(JSON.stringify({ status: 'error', message: 'Missing whatsapp_number parameter' }), { status: 400 });
    }
    
    const { data: conversations, error: convError } = await supabase
      .from('conversations')
      .select('*')
      .eq('whatsapp_number', whatsappNumber)
      .order('created_at', { ascending: false });

    if (convError) throw convError;

    const { data: customer, error: custError } = await supabase
      .from('customers')
      .select('*')
      .eq('whatsapp_number', whatsappNumber)
      .maybeSingle();

    if (custError) throw custError;
    
    return new Response(JSON.stringify({ status: 'success', data: { customer, conversations } }), { status: 200 });
    
  } catch (error) {
    console.error('Error retrieving customer data:', error);
    return new Response(JSON.stringify({ status: 'error', message: 'Internal server error' }), { status: 500 });
  }
}