import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow" />
            <span className="text-xl font-bold">Talentfy</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </NavLink>
            <NavLink to="#servicos" className="text-sm font-medium hover:text-primary transition-colors">
              Serviços
            </NavLink>
            <NavLink to="#comunidade" className="text-sm font-medium hover:text-primary transition-colors">
              Comunidade
            </NavLink>
            <NavLink to="#sobre" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre
            </NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Entrar
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Publicar Serviço
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <NavLink
              to="/"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="#servicos"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </NavLink>
            <NavLink
              to="#comunidade"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Comunidade
            </NavLink>
            <NavLink
              to="#sobre"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </NavLink>
            <div className="space-y-2 pt-4 border-t border-border">
              <Button variant="ghost" className="w-full">
                Entrar
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Publicar Serviço
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
