
-- 1. Blog posts: admin-only writes
DROP POLICY IF EXISTS "Authenticated users can create blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authors can update their blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authors can delete their blog posts" ON public.blog_posts;

CREATE POLICY "Admins can create blog posts"
ON public.blog_posts FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update blog posts"
ON public.blog_posts FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete blog posts"
ON public.blog_posts FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 2. Downloads: admin-only writes (consistent with storage policies)
DROP POLICY IF EXISTS "Authenticated users can create downloads" ON public.downloads;
DROP POLICY IF EXISTS "Uploaders can update their downloads" ON public.downloads;
DROP POLICY IF EXISTS "Uploaders can delete their downloads" ON public.downloads;

CREATE POLICY "Admins can create downloads"
ON public.downloads FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update downloads"
ON public.downloads FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete downloads"
ON public.downloads FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 3. user_roles: explicit admin-only management
CREATE POLICY "Admins can insert user roles"
ON public.user_roles FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update user roles"
ON public.user_roles FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete user roles"
ON public.user_roles FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 4. Lock down SECURITY DEFINER function: revoke from anon/public
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO service_role;
