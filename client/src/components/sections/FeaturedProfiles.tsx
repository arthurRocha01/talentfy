import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import TalentCard from "../cards/TalentCard";
import type { Profile } from "../../types";

type FeaturedProfilesProps = {
  profiles: Profile[];
};

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const FeaturedProfiles = ({ profiles }: FeaturedProfilesProps) => {
  return (
    <section id="talentos" className="space-y-12">
      <SectionHeading
        eyebrow="Talentos em destaque"
        title="Os profissionais com a melhor reputação e proximidade"
        description="Dados simulados com foco em proximidade e qualidade de avaliação para inspirar a navegação."
        className="max-w-2xl"
      />

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {profiles.map((profile, index) => (
          <TalentCard key={profile.id} profile={profile} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedProfiles;
 