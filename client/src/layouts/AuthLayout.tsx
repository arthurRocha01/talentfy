import { motion } from "framer-motion";
import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-surface-soft text-text-light">
      <div className="absolute inset-0 -z-10 animate-gradient-loop bg-[length:200%_200%] bg-talentfy-radial" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-screen bg-gradient-to-b from-black/60 via-surface-soft/70 to-surface/90" />

      <header className="fixed top-0 z-50 w-full backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <motion.span
              className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-lg font-semibold tracking-tight text-white"
              whileHover={{ scale: 1.02 }}
            >
              <span className="h-2 w-2 animate-ping rounded-full bg-brand"></span>
              Talentfy
            </motion.span>
          </Link>
        </div>
      </header>

      <main className="flex min-h-screen items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
