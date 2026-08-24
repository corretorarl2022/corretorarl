import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const jsonResponse = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Método não permitido." }, 405);
  }

  let client: SMTPClient | null = null;

  try {
    const { name, email, phone, message } = await req.json();

    const cleanName = String(name ?? "").trim();
    const cleanEmail = String(email ?? "").trim();
    const cleanPhone = String(phone ?? "").trim();
    const cleanMessage = String(message ?? "").trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return jsonResponse(
        { error: "Nome, e-mail e mensagem são obrigatórios." },
        400,
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(cleanEmail)) {
      return jsonResponse({ error: "Informe um e-mail válido." }, 400);
    }

    const smtpHost = Deno.env.get("SMTP_HOST");
    const smtpPort = Number(Deno.env.get("SMTP_PORT") || "465");
    const smtpUser = Deno.env.get("SMTP_USER");
    const smtpPass = Deno.env.get("SMTP_PASS");

    if (!smtpHost || !smtpUser || !smtpPass || !Number.isInteger(smtpPort)) {
      console.error("SMTP configuration is incomplete.");
      return jsonResponse({ error: "Serviço de e-mail não está configurado." }, 500);
    }

    client = new SMTPClient({
      connection: {
        hostname: smtpHost,
        port: smtpPort,
        tls: true,
        auth: {
          username: smtpUser,
          password: smtpPass,
        },
      },
    });

    const phoneInfo = cleanPhone
      ? `<p><strong>Telefone/WhatsApp:</strong> ${escapeHtml(cleanPhone)}</p>`
      : "";

    await client.send({
      from: smtpUser,
      to: "contato@corretorarl.com.br",
      replyTo: cleanEmail,
      subject: `Nova mensagem de contato - ${cleanName}`,
      content: "text/html",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
          <h2 style="color:#1a365d;border-bottom:2px solid #e67e22;padding-bottom:10px;">Nova Mensagem de Contato</h2>
          <p><strong>Nome:</strong> ${escapeHtml(cleanName)}</p>
          <p><strong>E-mail:</strong> ${escapeHtml(cleanEmail)}</p>
          ${phoneInfo}
          <p><strong>Mensagem:</strong></p>
          <div style="background:#f7f7f7;padding:15px;border-radius:8px;white-space:pre-wrap;">${escapeHtml(cleanMessage)}</div>
          <hr style="margin-top:30px;border:none;border-top:1px solid #ddd;">
          <p style="font-size:12px;color:#999;">Enviado pelo formulário de contato do site Corretora RL</p>
        </div>
      `,
    });

    return jsonResponse({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return jsonResponse(
      { error: "Não foi possível enviar a mensagem. Tente novamente mais tarde." },
      500,
    );
  } finally {
    if (client) {
      try {
        await client.close();
      } catch (closeError) {
        console.error("Error closing SMTP client:", closeError);
      }
    }
  }
});
