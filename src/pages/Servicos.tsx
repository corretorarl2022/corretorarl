import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import servicosCover from "@/assets/servicos-cover.jpg";
import segurosImg from "@/assets/seguros-card.jpg";
import consorciosImg from "@/assets/consorcios-card.jpg";
import financeiroImg from "@/assets/financeiro-card.jpg";
import saudeImg from "@/assets/saude-card.jpg";

const servicesData = [
  {
    title: "Seguros",
    image: segurosImg,
    text: "No dia a dia, imprevistos acontecem. Ter um seguro é a garantia de que você e sua família estarão amparados nos momentos mais desafiadores.\n\nCom as opções de seguros que oferecemos, você encontra a tranquilidade e a segurança financeira necessárias para viver sem preocupações. Deixe-nos ajudar você a proteger o seu patrimônio e o seu bem-estar.\n\nFale conosco e descubra a melhor solução para suas necessidades!",
    link: "/seguros",
  },
  {
    title: "Consórcios",
    image: consorciosImg,
    text: "Construir o futuro que você deseja ficou mais fácil e inteligente. Com o consórcio, você planeja a compra do seu carro novo, da casa própria, ou até mesmo daquela viagem dos sonhos, sem juros.\n\nCom transparência e segurança, o consórcio é a ferramenta ideal para transformar seus planos em realidade.\n\nQuer saber como o consórcio pode te ajudar a chegar lá? Fale conosco!",
    link: "/consorcios",
  },
  {
    title: "Financeiro e Previdência",
    image: financeiroImg,
    text: "Seu futuro começa hoje. Com as soluções de planejamento financeiro e previdência que oferecemos, você constrói a tranquilidade e a segurança que merece para realizar seus objetivos e viver sem preocupações.\n\nNão deixe para depois o que você pode começar a planejar agora. Estamos aqui para guiar você em cada passo, com soluções personalizadas e um suporte que faz a diferença.\n\nQuer dar o próximo passo rumo à sua liberdade financeira? Converse com nossos especialistas!",
    link: "/financeiro-previdencia-saude",
  },
  {
    title: "Saúde",
    image: saudeImg,
    text: "Sua saúde é seu maior patrimônio. Sabemos que imprevistos acontecem, e ter um plano de saúde é a garantia de que você terá acesso à melhor assistência médica, sem surpresas e com toda a tranquilidade que você e sua família merecem.\n\nNão espere pelo imprevisto. Cuide da sua saúde hoje e garanta um futuro com mais qualidade de vida e menos preocupações.\n\nDescubra o plano de saúde perfeito para você. Entre em contato e cuide-se!",
    link: "/financeiro-previdencia-saude",
  },
];

const Servicos = () => {
  return (
    <>
      <PageHero
        image={servicosCover}
        title="Proteja o que é mais importante para você!"
        subtitle="Seja um problema de saúde, um acidente de carro, um dano em sua casa ou até mesmo um planejamento para o futuro, ajudamos você nesse momento."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            As melhores soluções para Você
          </h2>

          <div className="space-y-16">
            {servicesData.map((service, index) => (
              <div key={service.title} className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}>
                <div className="md:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img src={service.image} alt={service.title} className="w-full h-72 object-cover" />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{service.title}</h3>
                  {service.text.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground mb-3 leading-relaxed">{paragraph}</p>
                  ))}
                  <Link to={service.link} className="inline-flex items-center gap-2 mt-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity">
                    Saiba Mais <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicos;
