import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logoRL from "@/assets/logo-corretora-rl.jpg";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const serviceItems = [
    { label: "Seguros", to: "/seguros" },
    { label: "Consórcios", to: "/consorcios" },
    { label: "Financeiro e Previdência", to: "/financeiro-previdencia-saude" },
    { label: "Saúde", to: "/financeiro-previdencia-saude" },
  ];

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoRL} alt="Corretora RL" className="h-10 w-10 object-contain" />
          <span className="font-heading font-bold text-lg text-foreground">Corretora RL</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground"}`}>
            Início
          </Link>
          <Link to="/quem-somos" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/quem-somos") ? "text-primary" : "text-foreground"}`}>
            Quem Somos
          </Link>

          {/* Services dropdown */}
          <div className="relative group">
            <button className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${["/servicos", "/seguros", "/consorcios", "/financeiro-previdencia-saude"].includes(location.pathname) ? "text-primary" : "text-foreground"}`}>
              Serviços <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                <Link to="/servicos" className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors text-foreground">
                  Todos os Serviços
                </Link>
                {serviceItems.map((item) => (
                  <Link key={item.label} to={item.to} className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors text-foreground">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/blog" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/blog") ? "text-primary" : "text-foreground"}`}>
            Blog
          </Link>
          <Link to="/contato" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/contato") ? "text-primary" : "text-foreground"}`}>
            Contato
          </Link>
        </nav>

        <a
          href="https://www.segfy.com/corretoras/?NEIDEGILIOLEMES"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Faça uma Cotação
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t pb-4">
          <nav className="container flex flex-col gap-1 pt-2">
            <Link to="/" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm font-medium text-foreground hover:text-primary">Início</Link>
            <Link to="/quem-somos" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm font-medium text-foreground hover:text-primary">Quem Somos</Link>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="py-2.5 text-sm font-medium text-foreground hover:text-primary flex items-center gap-1 text-left">
              Serviços <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-1">
                <Link to="/servicos" onClick={() => setMobileOpen(false)} className="py-2 text-sm text-muted-foreground hover:text-primary">Todos os Serviços</Link>
                {serviceItems.map((item) => (
                  <Link key={item.label} to={item.to} onClick={() => setMobileOpen(false)} className="py-2 text-sm text-muted-foreground hover:text-primary">{item.label}</Link>
                ))}
              </div>
            )}
            <Link to="/blog" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm font-medium text-foreground hover:text-primary">Blog</Link>
            <Link to="/contato" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm font-medium text-foreground hover:text-primary">Contato</Link>
            <a
              href="https://www.segfy.com/corretoras/?NEIDEGILIOLEMES"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-heading font-semibold text-sm"
            >
              Faça uma Cotação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
