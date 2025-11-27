import { motion } from "framer-motion";
import type { HowItWorksStep } from "../../types";
import SectionHeading from "../common/SectionHeading";

const HowItWorks = ({ steps }: { steps: HowItWorksStep[] }) => {
  return (
    <section id="como-funciona" className="space-y-10">
      <SectionHeading
        eyebrow="Como funciona"
        title="Uma experiência pensada para aproximar pessoas"
        description="Passo a passo ilustrativo que simula a jornada no ecossistema Talentfy."
        className="max-w-2xl"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.article
              key={step.id}
              className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-surface-soft/70 p-6 backdrop-blur transition hover:-translate-y-2 hover:border-white/20"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/20 text-brand">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-text-light/70">{step.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
