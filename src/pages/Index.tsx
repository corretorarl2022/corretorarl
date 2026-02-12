import { Link } from "react-router-dom";
import { Shield, Car, Home, Heart, TrendingUp, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import segurosImg from "@/assets/seguros-card.jpg";
import consorciosImg from "@/assets/consorcios-card.jpg";
import financeiroImg from "@/assets/financeiro-card.jpg";
import saudeImg from "@/assets/saude-card.jpg";

const Index = () => {
  const services = [
    {
      title: "Seguros",
      description: "Proteção completa para você, sua família e seu patrimônio contra imprevistos.",
      icon: Shield,
      image: segurosImg,
      link: "/seguros",
    },
    {
      title: "Consórcios",
      description: "Realize seus sonhos de forma planejada e sem juros.",
      icon: Car,
      image: consorciosImg,
      link: "/consorcios",
    },
    {
      title: "Financeiro e Previdência",
      description: "Planeje seu futuro com segurança e inteligência financeira.",
      icon: TrendingUp,
      image: financeiroImg,
      link: "/financeiro-previdencia-saude",
    },
    {
      title: "Saúde",
      description: "Cuide do seu maior patrimônio com planos de saúde de qualidade.",
      icon: Heart,
      image: saudeImg,
      link: "/financeiro-previdencia-saude",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[550px] md:h-[650px] flex items-center overflow-hidden">
        <img src={heroImage} alt="Proteção familiar" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Proteção e Tranquilidade para Sua Vida
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Seguros, consórcios, planejamento financeiro e saúde. Encontre as melhores soluções para proteger o que mais importa para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link
                to="/servicos"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Cotar Seguro Grátis
              </Link>
              <Link
                to="/quem-somos"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 font-heading font-semibold text-sm hover:bg-primary-foreground/30 transition-colors"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 section-gradient">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Soluções completas para a sua proteção e planejamento financeiro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <service.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary transition-colors gap-1">
                    Saiba Mais <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Proteja o que é mais importante
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Fale conosco e descubra a melhor solução para as suas necessidades. Atendimento personalizado e as melhores condições do mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.segfy.com/corretoras/?NEIDEGILIOLEMES"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-heading font-semibold hover:opacity-90 transition-opacity"
            >
              Faça uma Cotação
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-heading font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
