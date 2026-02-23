import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("id", id)
          .single();

        if (fetchError) {
          console.error("Error fetching post:", fetchError);
          setError(true);
          return;
        }
        setPost(data);
      } catch (err) {
        console.error("Unexpected error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  if (loading) {
    return (
      <section className="py-16">
        <div className="container text-center">
          <p className="text-muted-foreground text-lg">Carregando...</p>
        </div>
      </section>
    );
  }

  if (error || !post) {
    return (
      <section className="py-16">
        <div className="container text-center">
          <p className="text-muted-foreground text-lg mb-4">Matéria não encontrada.</p>
          <Link to="/blog" className="text-primary hover:underline inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Voltar ao Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-primary py-16">
        <div className="container">
          <Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground inline-flex items-center gap-2 mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Voltar ao Blog
          </Link>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">{post.title}</h1>
          <p className="text-primary-foreground/70 flex items-center gap-2 mt-3">
            <Calendar className="h-4 w-4" /> {formatDate(post.created_at)}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-3xl">
          {post.image_url && (
            <img src={post.image_url} alt={post.title} className="w-full rounded-xl mb-8 object-cover max-h-[400px]" />
          )}
          <div className="max-w-none text-foreground text-lg leading-relaxed">
            {post.content.split(/\n\n+/).map((paragraph: string, idx: number) => (
              <p key={idx} className="mb-4">
                {paragraph.split(/\n/).map((line: string, lineIdx: number, arr: string[]) => (
                  <span key={lineIdx}>
                    {line}
                    {lineIdx < arr.length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
