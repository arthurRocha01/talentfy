import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { href: "#home", label: "Início" },
  { href: "#categorias", label: "Categorias" },
  { href: "#talentos", label: "Talentos" },
  { href: "#como-funciona", label: "Como funciona" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <Link to="/">
          <motion.span
            className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-lg font-semibold tracking-tight text-white"
            whileHover={{ scale: 1.02 }}
            animate={{
              background: [
                "linear-gradient(90deg, rgba(0, 123, 255, 0.2), rgba(2, 6, 14, 0.45))",
                "linear-gradient(90deg, rgba(0, 123, 255, 0.45), rgba(2, 6, 14, 0.85))",
              ],
            }}
            transition={{ duration: 3.4, repeat: Infinity, repeatType: "mirror" }}
          >
            <span className="h-2 w-2 animate-ping rounded-full bg-brand"></span>
            Talentfy
          </motion.span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-text-light/80 lg:flex">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="transition-all hover:text-white"
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/login">
            <motion.button
              type="button"
              className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-text-light/90 transition-all hover:border-white/30 hover:bg-white/5 lg:block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Entrar
            </motion.button>
          </Link>
          <Link to="/register">
            <motion.button
              type="button"
              className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand/50 lg:block"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Criar conta
            </motion.button>
          </Link>
          <button
            className="rounded-full border border-white/10 p-2 text-white transition lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mx-4 mb-4 overflow-hidden rounded-3xl border border-white/10 bg-surface-soft/95 backdrop-blur"
          >
            <div className="flex flex-col gap-3 px-6 py-6 text-sm font-medium text-text-light/90">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="rounded-xl px-3 py-2 hover:bg-white/5">
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <Link to="/login">
                  <button className="w-full rounded-full border border-white/10 px-4 py-2">Entrar</button>
                </Link>
                <Link to="/register">
                  <button className="w-full rounded-full bg-brand px-4 py-2 font-semibold text-white">Criar conta</button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
