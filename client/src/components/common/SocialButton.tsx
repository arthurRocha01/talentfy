import { motion } from "framer-motion";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type SocialButtonProps = {
  icon: React.ReactNode;
  label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const SocialButton = ({ icon, label, className, ...props }: SocialButtonProps) => {
  return (
    <motion.button
      type="button"
      className={cn(
        "flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-text-light/90",
        "transition-all duration-300 hover:border-white/20 hover:bg-white/10",
        "focus:outline-none focus:ring-2 focus:ring-brand/30",
        className,
      )}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      {...props}
    >
      {icon}
      {label}
    </motion.button>
  );
};

export default SocialButton;
