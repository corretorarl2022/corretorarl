
DROP POLICY IF EXISTS "Authenticated users can upload blog images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete blog images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload download files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete download files" ON storage.objects;

CREATE POLICY "Admins can upload blog images"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'blog-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update blog images"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'blog-images' AND public.has_role(auth.uid(), 'admin'))
WITH CHECK (bucket_id = 'blog-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete blog images"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'blog-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can upload download files"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'downloads' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update download files"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'downloads' AND public.has_role(auth.uid(), 'admin'))
WITH CHECK (bucket_id = 'downloads' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete download files"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'downloads' AND public.has_role(auth.uid(), 'admin'));
