import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, FileText, Upload, Plus, Trash2, Image } from "lucide-react";
import type { User } from "@supabase/supabase-js";

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"blog" | "downloads">("blog");
  const navigate = useNavigate();

  // Blog state
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [blogForm, setBlogForm] = useState({ title: "", content: "", category: "" });
  const [blogImage, setBlogImage] = useState<File | null>(null);
  const [blogLoading, setBlogLoading] = useState(false);

  // Downloads state
  const [downloads, setDownloads] = useState<any[]>([]);
  const [downloadName, setDownloadName] = useState("");
  const [downloadDesc, setDownloadDesc] = useState("");
  const [downloadFile, setDownloadFile] = useState<File | null>(null);
  const [downloadLoading, setDownloadLoading] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) navigate("/login");
      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (!session?.user) navigate("/login");
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (user) {
      fetchBlogPosts();
      fetchDownloads();
    }
  }, [user]);

  const fetchBlogPosts = async () => {
    const { data } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
    setBlogPosts(data || []);
  };

  const fetchDownloads = async () => {
    const { data } = await supabase.from("downloads").select("*").order("created_at", { ascending: false });
    setDownloads(data || []);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setBlogLoading(true);

    let image_url = "";
    if (blogImage) {
      const ext = blogImage.name.split(".").pop();
      const path = `${Date.now()}.${ext}`;
      const { error: uploadError } = await supabase.storage.from("blog-images").upload(path, blogImage);
      if (!uploadError) {
        const { data: urlData } = supabase.storage.from("blog-images").getPublicUrl(path);
        image_url = urlData.publicUrl;
      }
    }

    await supabase.from("blog_posts").insert({
      title: blogForm.title,
      content: blogForm.content,
      image_url: image_url || null,
      author_id: user.id,
    });

    setBlogForm({ title: "", content: "", category: "" });
    setBlogImage(null);
    fetchBlogPosts();
    setBlogLoading(false);
  };

  const handleDeletePost = async (id: string) => {
    await supabase.from("blog_posts").delete().eq("id", id);
    fetchBlogPosts();
  };

  const handleUploadFile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !downloadFile) return;
    setDownloadLoading(true);

    const ext = downloadFile.name.split(".").pop();
    const path = `${Date.now()}-${downloadFile.name}`;
    const { error: uploadError } = await supabase.storage.from("downloads").upload(path, downloadFile);

    if (!uploadError) {
      const { data: urlData } = supabase.storage.from("downloads").getPublicUrl(path);
      await supabase.from("downloads").insert({
        name: downloadName || downloadFile.name,
        description: downloadDesc || null,
        file_url: urlData.publicUrl,
        file_size: downloadFile.size,
        uploaded_by: user.id,
      });
    }

    setDownloadName("");
    setDownloadDesc("");
    setDownloadFile(null);
    fetchDownloads();
    setDownloadLoading(false);
  };

  const handleDeleteDownload = async (id: string) => {
    await supabase.from("downloads").delete().eq("id", id);
    fetchDownloads();
  };

  if (loading) return <div className="py-16 text-center text-muted-foreground">Carregando...</div>;

  return (
    <section className="py-8">
      <div className="container max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-heading font-bold text-foreground">Painel Administrativo</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <LogOut className="h-4 w-4" /> Sair
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setTab("blog")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-heading font-semibold text-sm transition-colors ${tab === "blog" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
          >
            <FileText className="h-4 w-4" /> Blog
          </button>
          <button
            onClick={() => setTab("downloads")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-heading font-semibold text-sm transition-colors ${tab === "downloads" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
          >
            <Upload className="h-4 w-4" /> Arquivos
          </button>
        </div>

        {/* Blog Tab */}
        {tab === "blog" && (
          <div className="space-y-8">
            <div className="bg-card rounded-xl p-6 border shadow-sm">
              <h2 className="font-heading font-semibold text-foreground text-lg mb-4 flex items-center gap-2">
                <Plus className="h-5 w-5" /> Nova Matéria
              </h2>
              <form onSubmit={handleCreatePost} className="space-y-4">
                <input
                  type="text"
                  required
                  value={blogForm.title}
                  onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition"
                  placeholder="Título da matéria"
                />
                <textarea
                  required
                  rows={8}
                  value={blogForm.content}
                  onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition resize-none"
                  placeholder="Conteúdo da matéria..."
                />
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    <Image className="inline h-4 w-4 mr-1" /> Imagem (opcional)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setBlogImage(e.target.files?.[0] || null)}
                    className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={blogLoading}
                  className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {blogLoading ? "Publicando..." : "Publicar Matéria"}
                </button>
              </form>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-foreground text-lg">Matérias Publicadas ({blogPosts.length})</h2>
              {blogPosts.map((post) => (
                <div key={post.id} className="flex items-center gap-4 bg-card rounded-xl p-4 border">
                  {post.image_url && (
                    <img src={post.image_url} alt="" className="w-16 h-16 rounded-lg object-cover" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-heading font-semibold text-foreground text-sm truncate">{post.title}</p>
                    <p className="text-muted-foreground text-xs">
                      {new Date(post.created_at).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                  <button onClick={() => handleDeletePost(post.id)} className="text-destructive hover:text-destructive/80 transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
              {blogPosts.length === 0 && (
                <p className="text-muted-foreground text-sm">Nenhuma matéria publicada.</p>
              )}
            </div>
          </div>
        )}

        {/* Downloads Tab */}
        {tab === "downloads" && (
          <div className="space-y-8">
            <div className="bg-card rounded-xl p-6 border shadow-sm">
              <h2 className="font-heading font-semibold text-foreground text-lg mb-4 flex items-center gap-2">
                <Plus className="h-5 w-5" /> Novo Arquivo
              </h2>
              <form onSubmit={handleUploadFile} className="space-y-4">
                <input
                  type="text"
                  value={downloadName}
                  onChange={(e) => setDownloadName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition"
                  placeholder="Nome do arquivo (opcional)"
                />
                <input
                  type="text"
                  value={downloadDesc}
                  onChange={(e) => setDownloadDesc(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition"
                  placeholder="Descrição (opcional)"
                />
                <input
                  type="file"
                  required
                  onChange={(e) => setDownloadFile(e.target.files?.[0] || null)}
                  className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                />
                <button
                  type="submit"
                  disabled={downloadLoading || !downloadFile}
                  className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {downloadLoading ? "Enviando..." : "Enviar Arquivo"}
                </button>
              </form>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-foreground text-lg">Arquivos Enviados ({downloads.length})</h2>
              {downloads.map((file) => (
                <div key={file.id} className="flex items-center gap-4 bg-card rounded-xl p-4 border">
                  <div className="flex-1 min-w-0">
                    <p className="font-heading font-semibold text-foreground text-sm truncate">{file.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {file.description && `${file.description} · `}
                      {file.file_size ? `${(file.file_size / 1024).toFixed(0)} KB · ` : ""}
                      {new Date(file.created_at).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                  <button onClick={() => handleDeleteDownload(file.id)} className="text-destructive hover:text-destructive/80 transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
              {downloads.length === 0 && (
                <p className="text-muted-foreground text-sm">Nenhum arquivo enviado.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Admin;
