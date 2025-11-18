import { motion } from "framer-motion";
import { Mail, Lock, Github } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/common/InputField";
import SocialButton from "../components/common/SocialButton";
import { useToastStore } from "../store/useToastStore";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const addToast = useToastStore((state) => state.addToast);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular autenticação
    setTimeout(() => {
      if (email && password) {
        localStorage.setItem("talentfy_user", JSON.stringify({ email, name: email.split("@")[0] }));
        addToast("Login realizado com sucesso!", "success");
        setTimeout(() => navigate("/"), 1000);
      } else {
        addToast("Por favor, preencha todos os campos", "error");
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <motion.div
      className="w-full max-w-md"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="rounded-3xl border border-white/10 bg-surface-soft/80 p-8 shadow-card backdrop-blur">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-white">Bem-vindo de volta</h1>
          <p className="mt-2 text-sm text-text-light/70">Entre para continuar sua jornada</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <InputField
            label="E-mail"
            type="email"
            placeholder="seu@email.com"
            icon={<Mail className="h-4 w-4" />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <InputField
            label="Senha"
            type="password"
            placeholder="••••••••"
            icon={<Lock className="h-4 w-4" />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-white/10 bg-white/5 text-brand focus:ring-brand focus:ring-offset-0"
              />
              <span className="text-text-light/80">Lembrar-me</span>
            </label>
            <Link to="/forgot-password" className="text-brand hover:text-brand-dark transition-colors">
              Esqueceu a senha?
            </Link>
          </div>

          <motion.button
            type="submit"
            className="w-full rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-glow transition-all hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand/50 disabled:opacity-50"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            disabled={isLoading}
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </motion.button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10"></div>
          <span className="text-xs text-text-light/60">OU CONTINUE COM</span>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        <div className="space-y-3">
          <SocialButton
            icon={
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            }
            label="Google"
          />
          <SocialButton icon={<Github className="h-5 w-5" />} label="GitHub" />
        </div>

        <p className="mt-6 text-center text-sm text-text-light/70">
          Não tem uma conta?{" "}
          <Link to="/register" className="font-semibold text-brand hover:text-brand-dark transition-colors">
            Criar conta
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default LoginPage;
