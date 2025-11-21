import { motion } from "framer-motion";
import Hero from "../components/hero/Hero";
import CategoriesCarousel from "../components/sections/CategoriesCarousel";
import FeaturedProfiles from "../components/sections/FeaturedProfiles";
import HowItWorks from "../components/sections/HowItWorks";
import { heroCopy, popularCategories, featuredProfiles, howItWorksSteps } from "../data/home";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HomePage = () => {
  return (
    <motion.div
      className="relative flex flex-col gap-20 py-24 lg:py-28"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Hero copy={heroCopy} />

      <CategoriesCarousel items={popularCategories} />

      <FeaturedProfiles profiles={featuredProfiles} />

      <HowItWorks steps={howItWorksSteps} />
    </motion.div>
  );
};

export default HomePage;
 