import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });
      setPosts(data || []);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Blog</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Fique por dentro das novidades sobre seguros, consórcios, saúde e planejamento financeiro.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          {loading ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">Carregando...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">Nenhuma matéria publicada ainda. Volte em breve!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="block">
                  <article className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group h-full">
                    {post.image_url && (
                      <div className="h-52 overflow-hidden">
                        <img src={post.image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {formatDate(post.created_at)}
                        </span>
                      </div>
                      <h3 className="font-heading font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post.content.substring(0, 150)}...
                      </p>
                      <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                        Ler mais <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
