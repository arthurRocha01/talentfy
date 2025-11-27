import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import type { Category } from "../../types";
import SectionHeading from "../common/SectionHeading";
import { cn } from "../../utils/cn";

type CategoriesCarouselProps = {
  items: Category[];
};

const CategoriesCarousel = ({ items }: CategoriesCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollBy = (offset: number) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section id="categorias" className="space-y-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Categorias"
          title="Descubra serviços populares na sua região"
          description="Filtros inteligentes simulados por proximidade geográfica e reputação."
          className="max-w-2xl"
        />
        <div className="flex items-center gap-3 self-end">
          <button
            type="button"
            onClick={() => scrollBy(-280)}
            className="rounded-full border border-white/10 p-2 text-white transition hover:border-white/20 hover:bg-white/5"
            aria-label="Ver anteriores"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(280)}
            className="rounded-full border border-white/10 p-2 text-white transition hover:border-white/20 hover:bg-white/5"
            aria-label="Ver próximas"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="-mx-4 flex snap-x gap-6 overflow-x-auto px-4 pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10"
      >
        {items.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.article
              key={category.id}
              className="group relative h-44 min-w-[240px] flex-1 snap-start overflow-hidden rounded-3xl border border-white/10 bg-surface-soft/70 p-6 backdrop-blur transition-all hover:-translate-y-2 hover:border-white/25"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-80",
                  `bg-gradient-to-br ${category.gradient}`,
                )}
              />
              <div className="flex h-full flex-col justify-between">
                <Icon className="h-8 w-8 text-brand" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                  <p className="mt-1 text-sm text-text-light/70">{category.description}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default CategoriesCarousel;
