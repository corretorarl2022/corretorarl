import { useState, useEffect } from "react";
import { FileDown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Downloads = () => {
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      const { data } = await supabase
        .from("downloads")
        .select("*")
        .order("created_at", { ascending: false });
      setFiles(data || []);
      setLoading(false);
    };
    fetchFiles();
  }, []);

  return (
    <section className="py-16">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Área de Downloads</h1>
        <p className="text-muted-foreground mb-8">Baixe os documentos disponíveis abaixo.</p>

        {loading ? (
          <div className="text-center py-8 text-muted-foreground">Carregando...</div>
        ) : files.length === 0 ? (
          <div className="bg-card rounded-xl p-12 text-center border">
            <FileDown className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Nenhum arquivo disponível no momento.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {files.map((file) => (
              <a
                key={file.id}
                href={file.file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-card rounded-xl p-4 border hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileDown className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-heading font-semibold text-foreground text-sm">{file.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {file.description && `${file.description} · `}
                    {file.file_size ? `${(file.file_size / 1024).toFixed(0)} KB` : ""}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Downloads;
