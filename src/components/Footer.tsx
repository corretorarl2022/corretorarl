import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoRL from "@/assets/logo-corretora-rl.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoRL} alt="Corretora RL" className="h-10 w-10 object-contain" />
              <span className="font-heading text-xl font-bold">Corretora RL</span>
            </div>
            <p className="text-sm opacity-80">
              Sua corretora de seguros de confiança. Proteção e tranquilidade para você e sua família.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-secondary">Links Rápidos</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/" className="hover:text-secondary transition-colors">Início</Link></li>
              <li><Link to="/quem-somos" className="hover:text-secondary transition-colors">Quem Somos</Link></li>
              <li><Link to="/servicos" className="hover:text-secondary transition-colors">Serviços</Link></li>
              <li><Link to="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
              <li><Link to="/contato" className="hover:text-secondary transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-secondary">Serviços</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/seguros" className="hover:text-secondary transition-colors">Seguros</Link></li>
              <li><Link to="/consorcios" className="hover:text-secondary transition-colors">Consórcios</Link></li>
              <li><Link to="/financeiro-previdencia-saude" className="hover:text-secondary transition-colors">Financeiro e Previdência</Link></li>
              <li><Link to="/financeiro-previdencia-saude" className="hover:text-secondary transition-colors">Saúde</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-secondary">Contato</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a href="https://wa.me/5514981229823" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">(14) 98122-9823</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <Link to="/contato" className="hover:text-secondary transition-colors">contato@corretorarl.com.br</Link>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                <Link to="/contato" className="hover:text-secondary transition-colors">Rua Terenos, 541 - Tupã - SP</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Corretora RL - Corretora de Seguros. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
