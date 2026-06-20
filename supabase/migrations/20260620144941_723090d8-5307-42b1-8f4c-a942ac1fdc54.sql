
DROP POLICY IF EXISTS "Anyone can view blog images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view download files" ON storage.objects;

CREATE POLICY "Admins can list blog images"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'blog-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can list download files"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'downloads' AND public.has_role(auth.uid(), 'admin'));
