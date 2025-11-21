import { motion } from "framer-motion";
import type { InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type InputFieldProps = {
  label: string;
  error?: string;
  icon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const InputField = ({ label, error, icon, className, ...props }: InputFieldProps) => {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label className="text-sm font-medium text-text-light/90">{label}</label>
      <div className="relative">
        {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light/50">{icon}</div>}
        <input
          className={cn(
            "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-text-light/40",
            "transition-all duration-300 focus:border-brand focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand/30",
            "hover:border-white/20",
            icon && "pl-10",
            error && "border-red-500/50 focus:border-red-500 focus:ring-red-500/30",
            className,
          )}
          {...props}
        />
      </div>
      {error && (
        <motion.span
          className="text-xs text-red-400"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          {error}
        </motion.span>
      )}
    </motion.div>
  );
};

export default InputField;
 