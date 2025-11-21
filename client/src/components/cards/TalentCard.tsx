import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Profile } from "../../types";
import { cn } from "../../utils/cn";

type TalentCardProps = {
  profile: Profile;
  index: number;
};

const TalentCard = ({ profile, index }: TalentCardProps) => {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface-soft/80 p-6 transition-all hover:-translate-y-2 hover:border-white/20 hover:bg-white/5"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-60",
          `bg-gradient-to-br ${profile.accent}`,
        )}
      />
      <div className="relative flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/15 to-white/0" />
          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-brand/20 text-lg font-semibold">
            {profile.name
              .split(" ")
              .slice(0, 2)
              .map((part) => part[0])
              .join("")}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-white">{profile.name}</span>
          <span className="text-sm text-brand-muted">{profile.role}</span>
          <span className="text-xs text-text-light/50">
            {profile.city} • {profile.distanceKm.toFixed(1)} km
          </span>
        </div>
        <div className="ml-auto flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
          <Star className="h-3.5 w-3.5 fill-current text-brand" />
          {profile.rating.toFixed(1)}
          <span className="text-text-light/60">({profile.reviews})</span>
        </div>
      </div>

      <p className="mt-4 text-sm text-text-light/80">{profile.bio}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {profile.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-text-light/70"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between text-xs text-text-light/60">
        <button className="rounded-full border border-white/10 px-4 py-1.5 font-semibold text-white transition-all hover:border-white/20 hover:bg-white/10">
          Seguir
        </button>
        <button className="rounded-full bg-brand px-4 py-1.5 font-semibold text-white shadow-glow transition hover:bg-brand-dark">
          Mensagem
        </button>
      </div>
    </motion.article>
  );
};

export default TalentCard;
 