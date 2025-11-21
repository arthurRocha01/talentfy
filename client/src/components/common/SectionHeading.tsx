import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import type { HTMLAttributes } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const SectionHeading = ({ eyebrow, title, description, className, ...rest }: SectionHeadingProps) => {
  return (
    <motion.div
      className={cn("flex flex-col gap-3 text-center md:text-left", className)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...rest}
    >
      {eyebrow && <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">{eyebrow}</span>}
      <h2 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">{title}</h2>
      {description && <p className="text-base text-text-light/70 sm:text-lg">{description}</p>}
    </motion.div>
  );
};

export default SectionHeading;
 