
-- Create site_settings table (key-value store for site configuration)
CREATE TABLE public.site_settings (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key text NOT NULL UNIQUE,
  value text NOT NULL DEFAULT '',
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Anyone can read settings (public site needs this)
CREATE POLICY "Anyone can read site settings"
ON public.site_settings
FOR SELECT
USING (true);

-- Only authenticated users can update settings
CREATE POLICY "Authenticated users can update site settings"
ON public.site_settings
FOR UPDATE
TO authenticated
USING (true);

-- Only authenticated users can insert settings
CREATE POLICY "Authenticated users can insert site settings"
ON public.site_settings
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Trigger for updated_at
CREATE TRIGGER update_site_settings_updated_at
BEFORE UPDATE ON public.site_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default settings
INSERT INTO public.site_settings (key, value) VALUES
  ('endereco', 'Rua Exemplo, 123 - Centro, Cidade - UF'),
  ('telefone', '(00) 0000-0000'),
  ('email', 'contato@corretorarl.com.br'),
  ('whatsapp', '5500000000000');
