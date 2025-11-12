import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow" />
              <span className="text-xl font-bold">Talentfy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Conectando talentos com oportunidades, de forma simples e eficiente.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <NavLink to="#" className="hover:text-primary transition-colors">
                  Como Funciona
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="hover:text-primary transition-colors">
                  Categorias
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="hover:text-primary transition-colors">
                  Preços
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="hover:text-primary transition-colors">
                  Para Empresas
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <NavLink to="#" className="hover:text-primary transition-colors">
                  Central de Ajuda
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="hover:text-primary transition-colors">
                  Contato
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Talentfy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
