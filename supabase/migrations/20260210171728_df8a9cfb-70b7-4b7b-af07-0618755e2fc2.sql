
-- Blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Everyone can read blog posts
CREATE POLICY "Anyone can read blog posts"
  ON public.blog_posts FOR SELECT
  USING (true);

-- Only authenticated users can insert
CREATE POLICY "Authenticated users can create blog posts"
  ON public.blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = author_id);

-- Only the author can update
CREATE POLICY "Authors can update their blog posts"
  ON public.blog_posts FOR UPDATE
  TO authenticated
  USING (auth.uid() = author_id);

-- Only the author can delete
CREATE POLICY "Authors can delete their blog posts"
  ON public.blog_posts FOR DELETE
  TO authenticated
  USING (auth.uid() = author_id);

-- Downloads table
CREATE TABLE public.downloads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  file_size BIGINT,
  uploaded_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.downloads ENABLE ROW LEVEL SECURITY;

-- Everyone can read downloads
CREATE POLICY "Anyone can read downloads"
  ON public.downloads FOR SELECT
  USING (true);

-- Only authenticated users can insert
CREATE POLICY "Authenticated users can create downloads"
  ON public.downloads FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = uploaded_by);

-- Only the uploader can update
CREATE POLICY "Uploaders can update their downloads"
  ON public.downloads FOR UPDATE
  TO authenticated
  USING (auth.uid() = uploaded_by);

-- Only the uploader can delete
CREATE POLICY "Uploaders can delete their downloads"
  ON public.downloads FOR DELETE
  TO authenticated
  USING (auth.uid() = uploaded_by);

-- Storage buckets
INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('downloads', 'downloads', true);

-- Storage policies for blog images
CREATE POLICY "Anyone can view blog images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can upload blog images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can delete blog images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'blog-images');

-- Storage policies for downloads
CREATE POLICY "Anyone can view download files"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'downloads');

CREATE POLICY "Authenticated users can upload download files"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'downloads');

CREATE POLICY "Authenticated users can delete download files"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'downloads');

-- Trigger for updated_at on blog_posts
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
