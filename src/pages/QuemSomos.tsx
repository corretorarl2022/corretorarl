import { Shield, Users, Award, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import quemSomosImg from "@/assets/quem-somos.jpg";

const QuemSomos = () => {
  const values = [
    { icon: Shield, title: "Confiança", description: "Trabalhamos com transparência e ética em todos os nossos relacionamentos." },
    { icon: Users, title: "Atendimento Personalizado", description: "Cada cliente é único e merece soluções sob medida para suas necessidades." },
    { icon: Award, title: "Excelência", description: "Buscamos sempre as melhores soluções e condições do mercado para você." },
    { icon: Target, title: "Compromisso", description: "Estamos ao seu lado em todos os momentos, especialmente nos mais desafiadores." },
  ];

  return (
    <>
      <PageHero image={quemSomosImg} title="Quem Somos" subtitle="Conheça a nossa história e os valores que nos guiam." />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Nossa Missão</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Somos uma corretora de seguros comprometida em oferecer as melhores soluções de proteção e planejamento financeiro para nossos clientes. Com anos de experiência no mercado, nossa missão é proporcionar tranquilidade e segurança para você e sua família, com atendimento personalizado e as melhores condições disponíveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">Vamos conversar?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Estamos prontos para ajudar você a encontrar a melhor proteção para o seu momento de vida.
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
      </section>
    </>
  );
};

export default QuemSomos;
