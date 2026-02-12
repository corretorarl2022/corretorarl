import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import consorciosImg from "@/assets/consorcios-card.jpg";

const benefits = [
  { title: "Economia Significativa", text: "A grande vantagem do consórcio é a ausência de juros. Você paga apenas uma taxa de administração, tornando as parcelas mais acessíveis." },
  { title: "Flexibilidade e Planejamento", text: "Com diversas opções de prazos e valores de parcelas, o consórcio se adapta ao seu orçamento e te ajuda a poupar." },
  { title: "Diversidade de Bens e Serviços", text: "Seja para a compra de um imóvel, um veículo, ou serviços como cirurgias e viagens, o consórcio oferece opções para diversas necessidades." },
  { title: "Poder de Compra à Vista", text: "Ao ser contemplado, você recebe uma carta de crédito com o valor total do bem, permitindo negociar melhores preços." },
  { title: "Segurança e Transparência", text: "Regulamentado e fiscalizado pelo Banco Central do Brasil, o sistema de consórcios oferece toda a segurança necessária." },
];

const Consorcios = () => {
  return (
    <>
      <PageHero
        image={consorciosImg}
        title="Consórcio: A Maneira Inteligente de Conquistar Seus Sonhos"
        subtitle="Realize seus maiores objetivos de forma planejada, econômica e sem juros."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Sonhar é o primeiro passo. Realizar é a nossa especialidade. Com o consórcio, você encontra uma forma planejada, econômica e inteligente de conquistar seus maiores objetivos, sem a cobrança de juros que os financiamentos tradicionais geralmente incluem.
            </p>
            <h3 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">Como Funciona o Consórcio?</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              O consórcio é um sistema de compra planejada baseado na união de pessoas em grupos, com o objetivo comum de adquirir bens ou serviços. Todos os participantes contribuem mensalmente com um valor predefinido. Esses valores formam um fundo comum que é utilizado para contemplar os membros do grupo, seja por meio de sorteio ou lance.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Por que o Consórcio é a escolha certa?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4 bg-card rounded-xl p-6 shadow-md border">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
              Pronto para transformar seus planos em realidade?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Fale com nossos especialistas e descubra a melhor opção de consórcio para você!
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

export default Consorcios;
