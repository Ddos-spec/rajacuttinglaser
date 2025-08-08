// /api/track-customer.js
// Astro API endpoint to store customer data and conversation history

export async function POST({ request }) {
  try {
    // Parse the incoming request body
    const body = await request.json();
    
    // Log the incoming data for debugging
    console.log('Customer tracking data received:', JSON.stringify(body, null, 2));
    
    // Validate required fields
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
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    // Prepare data for Supabase
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
    
    // Store in Supabase PostgreSQL
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase credentials not configured');
      return new Response(JSON.stringify({ 
        status: 'error', 
        message: 'Database configuration missing' 
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    try {
      // Insert data into Supabase
      const supabaseResponse = await fetch(`${supabaseUrl}/rest/v1/conversations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(customerData),
      });
      
      if (!supabaseResponse.ok) {
        const errorText = await supabaseResponse.text();
        console.error('Supabase insert failed:', supabaseResponse.status, errorText);
        throw new Error(`Supabase insert failed: ${supabaseResponse.status}`);
      }
      
      console.log('Successfully stored customer data in Supabase');
      
      // Also update or create customer profile if we have extracted info
      if (extractedName || extractedPhone || extractedLocation) {
        await updateCustomerProfile({
          whatsappNumber,
          extractedName,
          extractedPhone,
          extractedLocation,
          extractedProductInterest,
          isLeadReady,
          supabaseUrl,
          supabaseKey
        });
      }
      
    } catch (error) {
      console.error('Error storing data in Supabase:', error);
      return new Response(JSON.stringify({ 
        status: 'error', 
        message: 'Failed to store data in database' 
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    // Return success response
    return new Response(JSON.stringify({ 
      status: 'success',
      message: 'Customer data stored successfully'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
  } catch (error) {
    console.error('Error processing customer tracking request:', error);
    
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

// Helper function to update customer profile
async function updateCustomerProfile({
  whatsappNumber,
  extractedName,
  extractedPhone,
  extractedLocation,
  extractedProductInterest,
  isLeadReady,
  supabaseUrl,
  supabaseKey
}) {
  try {
    // Check if customer profile exists
    const checkResponse = await fetch(
      `${supabaseUrl}/rest/v1/customers?whatsapp_number=eq.${whatsappNumber}`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
        },
      }
    );
    
    if (!checkResponse.ok) {
      console.error('Failed to check existing customer');
      return;
    }
    
    const existingCustomers = await checkResponse.json();
    
    const customerProfileData = {
      whatsapp_number: whatsappNumber,
      name: extractedName || null,
      phone: extractedPhone || null,
      location: extractedLocation || null,
      product_interest: extractedProductInterest || null,
      is_lead: isLeadReady || false,
      last_interaction: new Date().toISOString()
    };
    
    if (existingCustomers.length > 0) {
      // Update existing customer
      const updateResponse = await fetch(
        `${supabaseUrl}/rest/v1/customers?whatsapp_number=eq.${whatsappNumber}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify(customerProfileData),
        }
      );
      
      if (updateResponse.ok) {
        console.log('Customer profile updated successfully');
      } else {
        console.error('Failed to update customer profile');
      }
    } else {
      // Create new customer
      customerProfileData.created_at = new Date().toISOString();
      
      const createResponse = await fetch(`${supabaseUrl}/rest/v1/customers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(customerProfileData),
      });
      
      if (createResponse.ok) {
        console.log('Customer profile created successfully');
      } else {
        console.error('Failed to create customer profile');
      }
    }
    
  } catch (error) {
    console.error('Error updating customer profile:', error);
  }
}

// GET endpoint to retrieve customer data (optional, for admin purposes)
export async function GET({ request }) {
  try {
    const url = new URL(request.url);
    const whatsappNumber = url.searchParams.get('whatsapp_number');
    
    if (!whatsappNumber) {
      return new Response(JSON.stringify({ 
        status: 'error', 
        message: 'Missing whatsapp_number parameter' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return new Response(JSON.stringify({ 
        status: 'error', 
        message: 'Database configuration missing' 
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    // Fetch customer conversations
    const conversationsResponse = await fetch(
      `${supabaseUrl}/rest/v1/conversations?whatsapp_number=eq.${whatsappNumber}&order=created_at.desc`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
        },
      }
    );
    
    if (!conversationsResponse.ok) {
      throw new Error('Failed to fetch conversations');
    }
    
    const conversations = await conversationsResponse.json();
    
    // Fetch customer profile
    const customerResponse = await fetch(
      `${supabaseUrl}/rest/v1/customers?whatsapp_number=eq.${whatsappNumber}`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
        },
      }
    );
    
    let customer = null;
    if (customerResponse.ok) {
      const customers = await customerResponse.json();
      customer = customers.length > 0 ? customers[0] : null;
    }
    
    return new Response(JSON.stringify({ 
      status: 'success',
      data: {
        customer,
        conversations
      }
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
  } catch (error) {
    console.error('Error retrieving customer data:', error);
    
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

