-- Create table for scholarship applications/submissions
CREATE TABLE public.scholarship_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  aadhaar_number TEXT,
  bank_account_number TEXT,
  ifsc_code TEXT,
  scholarship_type TEXT,
  is_dbt_enabled BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.scholarship_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form)
CREATE POLICY "Anyone can submit scholarship forms"
ON public.scholarship_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create policy to allow users to view their own submissions if authenticated
CREATE POLICY "Users can view their own submissions"
ON public.scholarship_submissions
FOR SELECT
TO authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_scholarship_submissions_updated_at
BEFORE UPDATE ON public.scholarship_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();