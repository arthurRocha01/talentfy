import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const socialIcons = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "Twitter" },
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black/30">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <motion.div
            className="max-w-sm"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 text-lg font-semibold">
              <span className="rounded-full bg-brand/20 px-3 py-1 text-brand">Talentfy</span>
              <span className="text-text-light/80">Conexões que impulsionam carreiras</span>
            </div>
            <p className="mt-4 text-sm text-text-light/70">
              Simulação de uma plataforma que transforma a forma como clientes e especialistas se conectam.
            </p>
          </motion.div>

          <div className="grid flex-1 grid-cols-2 gap-8 text-sm text-text-light/70 md:grid-cols-4">
            <div>
              <h3 className="text-text-light/90">Sobre</h3>
              <ul className="mt-3 space-y-2">
                <li>Como funciona</li>
                <li>Planos</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-text-light/90">Talentos</h3>
              <ul className="mt-3 space-y-2">
                <li>Catálogo</li>
                <li>Profissões</li>
                <li>Mentorias</li>
              </ul>
            </div>
            <div>
              <h3 className="text-text-light/90">Suporte</h3>
              <ul className="mt-3 space-y-2">
                <li>FAQ</li>
                <li>Central de ajuda</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h3 className="text-text-light/90">Legal</h3>
              <ul className="mt-3 space-y-2">
                <li>Privacidade</li>
                <li>Termos</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 border-t border-white/5 pt-6 text-sm text-text-light/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Talentfy. Projeto conceitual.</span>
          <div className="flex items-center gap-4">
            {socialIcons.map(({ icon: Icon, label }) => (
              <motion.button
                key={label}
                className="rounded-full border border-white/10 p-2 text-text-light/80 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
