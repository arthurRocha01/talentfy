import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, AlertCircle, X } from "lucide-react";
import { useEffect } from "react";
import { cn } from "../../utils/cn";

type ToastType = "success" | "error" | "info";

type ToastProps = {
  message: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
};

const toastIcons = {
  success: CheckCircle,
  error: XCircle,
  info: AlertCircle,
};

const toastColors = {
  success: "from-green-500/20 to-green-600/20 border-green-500/30",
  error: "from-red-500/20 to-red-600/20 border-red-500/30",
  info: "from-brand/20 to-brand-dark/20 border-brand/30",
};

const Toast = ({ message, type, onClose, duration = 3000 }: ToastProps) => {
  const Icon = toastIcons[type];

  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <motion.div
      className={cn(
        "pointer-events-auto flex items-center gap-3 rounded-2xl border bg-gradient-to-br px-4 py-3 shadow-card backdrop-blur",
        toastColors[type],
      )}
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="h-5 w-5 flex-shrink-0 text-white" />
      <p className="flex-1 text-sm font-medium text-white">{message}</p>
      <button
        onClick={onClose}
        className="flex-shrink-0 text-text-light/60 transition-colors hover:text-white"
        aria-label="Fechar"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
};

type ToastContainerProps = {
  toasts: Array<{ id: string; message: string; type: ToastType }>;
  onRemove: (id: string) => void;
};

export const ToastContainer = ({ toasts, onRemove }: ToastContainerProps) => {
  return (
    <div className="pointer-events-none fixed right-4 top-4 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} message={toast.message} type={toast.type} onClose={() => onRemove(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
