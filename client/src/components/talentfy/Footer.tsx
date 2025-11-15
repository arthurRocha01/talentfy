
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Talentfy
            </h3>
            <p className="text-sm text-muted-foreground">
              Conectando talentos e oportunidades através da geolocalização.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Como funciona</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Encontrar talentos</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Oferecer serviços</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Preços</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Central de ajuda</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contato</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Segurança</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Termos de uso</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Política de privacidade</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cookies</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Licenças</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Talentfy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
