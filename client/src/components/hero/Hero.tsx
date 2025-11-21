import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import type { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

type HeroProps = {
  copy: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
} & HTMLAttributes<HTMLDivElement>;

const Hero = ({ copy, ...rest }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative grid gap-10 pt-12 text-center md:grid-cols-2 md:items-center md:gap-16 md:text-left"
      {...rest}
    >
      <motion.div initial="hidden" animate="visible" variants={heroVariants}>
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-brand"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, repeatType: "loop" }}
        >
          Talentfy
        </motion.span>
        <motion.h1
          className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {copy.title}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-base text-text-light/75 sm:text-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {copy.subtitle}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/search-talents" className="w-full sm:w-auto">
            <motion.button
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-dark"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MapPin className="h-4 w-4" />
              {copy.primaryCta}
            </motion.button>
          </Link>
          <Link to="/offer-services" className="w-full sm:w-auto">
            <motion.button
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {copy.secondaryCta}
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
      >
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-brand/25 via-brand-dark/20 to-black/40 blur-3xl" />
        <motion.div
          className="relative grid w-full max-w-sm gap-4 rounded-[2.5rem] border border-white/10 bg-surface-soft/70 p-8 shadow-card backdrop-blur"
          animate={{ boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 20px 60px rgba(0, 123, 255, 0.35)"] }}
          transition={{ duration: 3.2, repeat: Infinity, repeatType: "mirror" }}
        >
          {["Designer UI", "Consultor Financeiro", "Produtora Audiovisual"].map((role, index) => (
            <motion.div
              key={role}
              className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 + index * 0.1 }}
            >
              <span>{role}</span>
              <span className="rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-brand">{(index + 1) * 0.9} km</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
 