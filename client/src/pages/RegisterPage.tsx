import { motion } from "framer-motion";
import { Mail, Lock, User, Github } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../services/userServices";
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

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("cliente");
  const [isLoading, setIsLoading] = useState(false);
  const addToast = useToastStore((state) => state.addToast);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validações simples
    if (password !== confirmPassword) {
      addToast("As senhas não coincidem", "error");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      addToast("A senha deve ter pelo menos 6 caracteres", "error");
      setIsLoading(false);
      return;
    }

    try {
      const response = await createUser({ name, email, password, userType });
      addToast('Conta criada com sucesso!', 'success');
      // setTimeout(() => navigate("/"), 1000);
      console.log(`Usuário criado: ${response.data}`);
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Erro ao criar conta.";

      addToast(message, "error");
      setIsLoading(false);
    }
  }

  return (
    <motion.div
      className="w-full max-w-md"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="rounded-3xl border border-white/10 bg-surface-soft/80 p-8 shadow-card backdrop-blur">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-white">Crie sua conta</h1>
          <p className="mt-2 text-sm text-text-light/70">Comece sua jornada profissional hoje</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <InputField
            label="Nome completo"
            type="text"
            placeholder="Seu nome"
            icon={<User className="h-4 w-4" />}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            placeholder="Mínimo 6 caracteres"
            icon={<Lock className="h-4 w-4" />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <InputField
            label="Confirmar senha"
            type="password"
            placeholder="Digite a senha novamente"
            icon={<Lock className="h-4 w-4" />}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmPassword && password !== confirmPassword ? "As senhas não coincidem" : undefined}
            required
          />

          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-white/10 bg-white/5 text-brand focus:ring-brand focus:ring-offset-0"
              required
            />
            <span className="text-text-light/80">
              Aceito os{" "}
              <Link to="/terms" className="text-brand hover:text-brand-dark transition-colors">
                Termos de Uso
              </Link>{" "}
              e{" "}
              <Link to="/privacy" className="text-brand hover:text-brand-dark transition-colors">
                Política de Privacidade
              </Link>
            </span>
          </label>

          <motion.button
            type="submit"
            className="w-full rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-glow transition-all hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand/50 disabled:opacity-50"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            disabled={isLoading}
          >
            {isLoading ? "Criando conta..." : "Criar conta"}
          </motion.button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10"></div>
          <span className="text-xs text-text-light/60">OU CADASTRE-SE COM</span>
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
          Já tem uma conta?{" "}
          <Link to="/login" className="font-semibold text-brand hover:text-brand-dark transition-colors">
            Fazer login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default RegisterPage;
