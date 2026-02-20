import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface SiteSettings {
  endereco: string;
  telefone: string;
  email: string;
  whatsapp: string;
}

const defaults: SiteSettings = {
  endereco: "Rua Terenos, 541 - Tupã - SP",
  telefone: "(14) 98122-9823",
  email: "contato@corretorarl.com.br",
  whatsapp: "5514981229823",
};

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings>(defaults);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("site_settings" as any)
        .select("key, value");

      if (data) {
        const map: Record<string, string> = {};
        (data as any[]).forEach((row: { key: string; value: string }) => {
          map[row.key] = row.value;
        });
        setSettings({
          endereco: map.endereco || defaults.endereco,
          telefone: map.telefone || defaults.telefone,
          email: map.email || defaults.email,
          whatsapp: map.whatsapp || defaults.whatsapp,
        });
      }
      setLoading(false);
    };
    fetch();
  }, []);

  return { settings, loading };
}
