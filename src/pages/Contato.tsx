import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const Contato = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app this would send to backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Contato</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato conosco!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Fale Conosco</h2>
              <p className="text-muted-foreground mb-8">
                Tem alguma dúvida ou precisa de uma cotação personalizada? Preencha o formulário ou entre em contato diretamente pelos nossos canais.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">Telefone</p>
                    <a href="https://wa.me/5514981229823" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">(14) 98122-9823</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">WhatsApp</p>
                    <a href="https://wa.me/5514981229823" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-secondary transition-colors">(14) 98122-9823</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">E-mail</p>
                    <p className="text-muted-foreground text-sm">contato@corretorarl.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">Endereço</p>
                    <p className="text-muted-foreground text-sm">Rua Terenos, 541 - Tupã - SP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-xl p-8 shadow-md border">
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">Envie sua Mensagem</h3>

              {submitted && (
                <div className="mb-6 p-4 rounded-lg bg-secondary/10 text-secondary font-semibold text-sm">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Nome</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Mensagem</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none"
                    placeholder="Como podemos ajudar você?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:opacity-90 transition-opacity"
                >
                  <Send className="h-4 w-4" /> Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
