-- Create conversations table
CREATE TABLE IF NOT EXISTS conversations (
  id BIGSERIAL PRIMARY KEY,
  whatsapp_number VARCHAR(20) NOT NULL,
  message_text TEXT NOT NULL,
  ai_response_text TEXT,
  extracted_name VARCHAR(100),
  extracted_phone VARCHAR(20),
  extracted_location VARCHAR(100),
  extracted_product_interest VARCHAR(200),
  is_lead_ready BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id BIGSERIAL PRIMARY KEY,
  whatsapp_number VARCHAR(20) UNIQUE NOT NULL,
  name VARCHAR(100),
  phone VARCHAR(20),
  location VARCHAR(100),
  product_interest VARCHAR(200),
  is_lead BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_interaction TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_conversations_whatsapp_number ON conversations(whatsapp_number);
CREATE INDEX IF NOT EXISTS idx_conversations_created_at ON conversations(created_at);
CREATE INDEX IF NOT EXISTS idx_customers_whatsapp_number ON customers(whatsapp_number);
CREATE INDEX IF NOT EXISTS idx_customers_is_lead ON customers(is_lead);

-- Enable Row Level Security (RLS)
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (adjust as needed for security)
CREATE POLICY "Allow public read access on conversations" ON conversations
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert access on conversations" ON conversations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read access on customers" ON customers
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert access on customers" ON customers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update access on customers" ON customers
  FOR UPDATE USING (true);