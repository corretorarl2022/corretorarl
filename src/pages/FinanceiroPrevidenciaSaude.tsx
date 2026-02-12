import { Link } from "react-router-dom";
import { TrendingUp, PiggyBank, Heart, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import financeiroImg from "@/assets/financeiro-card.jpg";

const sections = [
  {
    icon: TrendingUp,
    title: "Planejamento Financeiro: O Mapa para Seus Sonhos",
    intro: "Ter as rédeas da sua vida financeira é o primeiro passo para qualquer conquista. Com o nosso apoio, você vai:",
    items: [
      "Organizar suas finanças: Entender para onde seu dinheiro está indo e como otimizar seus gastos.",
      "Poupar de forma inteligente: Criar hábitos de economia que realmente funcionam para seus objetivos.",
      "Investir com propósito: Descobrir as melhores opções para fazer seu dinheiro crescer.",
      "Construir reservas: Estar preparado para imprevistos, garantindo sua segurança.",
    ],
  },
  {
    icon: PiggyBank,
    title: "Previdência Privada: Sua Aposentadoria Sem Preocupações",
    intro: "A aposentadoria é um capítulo da vida que merece ser vivido com total conforto e independência. Com a previdência privada, você:",
    items: [
      "Complementa sua renda: Garante um padrão de vida desejado quando parar de trabalhar.",
      "Conta com flexibilidade: Escolhe o valor da contribuição e a forma de recebimento mais adequados.",
      "Aproveita benefícios fiscais: Algumas modalidades oferecem vantagens na declaração do IR.",
      "Planeja o longo prazo: Constrói um patrimônio para desfrutar de uma velhice tranquila.",
    ],
  },
  {
    icon: Heart,
    title: "Saúde e Plano de Saúde: Cuidado Essencial para a Vida",
    intro: "Sua saúde é seu bem mais valioso. Ter um plano de saúde de qualidade é fundamental. Com ele, você:",
    items: [
      "Acessa uma ampla rede: Escolhe entre hospitais, clínicas e profissionais renomados.",
      "Realiza consultas e exames: Faz seu check-up regularmente e monitora sua saúde.",
      "Recebe atendimento de emergência: Tem suporte rápido e eficiente quando mais precisa.",
      "Protege sua família: Garante que seus entes queridos também estarão seguros e bem cuidados.",
    ],
  },
];

const FinanceiroPrevidenciaSaude = () => {
  return (
    <>
      <PageHero
        image={financeiroImg}
        title="Financeiro, Previdência e Saúde"
        subtitle="Conquiste tranquilidade com planejamento financeiro, previdência e saúde."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Planejar o futuro é garantir a liberdade de viver o presente com mais tranquilidade e segurança. Oferecemos um conjunto de soluções integradas que cuidam de você em todas as fases da vida.
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title} className="bg-card rounded-xl p-8 shadow-md border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground">{section.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{section.intro}</p>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
              Que tal começar a planejar hoje mesmo?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Fale com nossos especialistas e construa a segurança que você e sua família merecem!
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-heading font-semibold hover:opacity-90 transition-opacity"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinanceiroPrevidenciaSaude;
