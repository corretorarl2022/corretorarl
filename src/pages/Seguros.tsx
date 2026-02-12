import { Car, Home, Heart, Plane, Briefcase, PiggyBank, Shield } from "lucide-react";
import PageHero from "@/components/PageHero";
import segurosCover from "@/assets/seguros-cover.jpg";

const insuranceTypes = [
  {
    icon: Heart,
    title: "Seguro de Vida",
    description: "O pilar da segurança familiar. Garante um apoio financeiro para seus entes queridos em caso de falecimento do segurado, ou pode oferecer coberturas em vida para doenças graves e invalidez.",
    link: "https://villa.segfy.com/Publico/Segurados/Orcamentos/SolicitarCotacaoVida?e=im5kTl0v6WBQ/0TP1JvOyA==",
    cta: "Cotar Seguro de Vida",
  },
  {
    icon: Car,
    title: "Seguro Automóvel",
    description: "Protege seu veículo contra roubo, furto, colisão, incêndio e danos a terceiros. Indispensável para quem quer dirigir com a certeza de que está amparado.",
    link: "https://villa.segfy.com/Publico/Segurados/Orcamentos/SolicitarCotacao?e=im5kTl0v6WBQ/0TP1JvOyA==",
    cta: "Cotar Seguro Auto",
  },
  {
    icon: Home,
    title: "Seguro Residencial",
    description: "Cuida do seu lar. Cobre desde danos por incêndio, vendaval e roubo, até serviços de emergência como chaveiro e eletricista.",
    link: "https://villa.segfy.com/Publico/Segurados/Orcamentos/SolicitarCotacaoResidencial?e=im5kTl0v6WBQ/0TP1JvOyA==",
    cta: "Cotar Seguro Residencial",
  },
  {
    icon: Shield,
    title: "Seguro Saúde e Odontológico",
    description: "Fundamental para o seu bem-estar. Garante acesso a consultas, exames, internações e tratamentos médicos e odontológicos.",
  },
  {
    icon: Plane,
    title: "Seguro Viagem",
    description: "Para desbravar o mundo sem preocupações. Oferece cobertura para emergências médicas, extravio de bagagem e outros imprevistos.",
  },
  {
    icon: Briefcase,
    title: "Seguro Empresarial",
    description: "Essencial para a proteção do seu negócio. Cobre desde danos à estrutura física, equipamentos, até responsabilidade civil e lucros cessantes.",
    link: "https://villa.segfy.com/Publico/Segurados/Orcamentos/SolicitarCotacaoEmpresarial?e=im5kTl0v6WBQ/0TP1JvOyA==",
    cta: "Cotar Seguro Empresarial",
  },
  {
    icon: PiggyBank,
    title: "Previdência Privada",
    description: "Um seguro para o seu futuro. É uma forma de poupar e investir a longo prazo, complementando sua aposentadoria.",
  },
];

const Seguros = () => {
  return (
    <>
      <PageHero
        image={segurosCover}
        title="Sua Tranquilidade em Cada Capítulo da Vida"
        subtitle="Os seguros são seus maiores aliados para viver cada momento com mais tranquilidade e segurança."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A vida é cheia de imprevistos, mas também de oportunidades. Para que você possa viver cada momento com mais tranquilidade e segurança, os seguros são seus maiores aliados. Eles funcionam como uma rede de proteção, amparando você e sua família nos momentos mais desafiadores.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Um seguro não é apenas uma despesa, é um investimento em paz de espírito. É saber que, se algo inesperado acontecer, você terá o suporte financeiro necessário para se reerguer, sem comprometer o que você construiu.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Conheça os Principais Tipos de Seguros
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceTypes.map((type) => (
              <div key={type.title} className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <type.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-3">{type.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{type.description}</p>
                {type.link && (
                  <a
                    href={type.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2 rounded-lg bg-secondary text-secondary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    {type.cta}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
              Pronto para proteger o que mais importa?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Fale com nossos especialistas e descubra a tranquilidade de estar segurado!
            </p>
            <a
              href="https://www.segfy.com/corretoras/?NEIDEGILIOLEMES"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-heading font-semibold hover:opacity-90 transition-opacity"
            >
              Faça uma Cotação
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Seguros;
