import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Filter, Star, ArrowRight } from "lucide-react";
import { popularCategories, featuredProfiles } from "../data/home";
import type { Profile } from "../types";
import { Link } from "react-router-dom";

const SearchTalentsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [maxDistance, setMaxDistance] = useState(10);

  // Simular localização do usuário
  const [userLocation] = useState({ city: "São Paulo, SP" });

  // Filtrar perfis
  const filteredProfiles = featuredProfiles.filter((profile) => {
    const matchesSearch =
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesDistance = profile.distanceKm <= maxDistance;

    return matchesSearch && matchesDistance;
  });

  return (
    <div className="min-h-screen bg-bg py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-brand mb-2">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">{userLocation.city}</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Encontre talentos próximos</h1>
          <p className="text-text-light/70 text-lg">Descubra profissionais qualificados na sua região</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por nome, profissão ou habilidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-surface-soft/50 px-4 py-3 text-white placeholder:text-text-light/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/50"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedCategory === "all"
                  ? "bg-brand text-white"
                  : "border border-white/10 text-text-light/80 hover:border-white/30 hover:bg-white/5"
              }`}
            >
              <Filter className="h-4 w-4" />
              Todos
            </button>
            {popularCategories.slice(0, 6).map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                  selectedCategory === category.id
                    ? "bg-brand text-white"
                    : "border border-white/10 text-text-light/80 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Distance Filter */}
          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-surface-soft/50 p-4">
            <label className="text-sm font-medium text-white">Distância máxima:</label>
            <input
              type="range"
              min="1"
              max="50"
              value={maxDistance}
              onChange={(e) => setMaxDistance(Number(e.target.value))}
              className="flex-1"
            />
            <span className="text-sm font-semibold text-brand">{maxDistance} km</span>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-4 text-sm text-text-light/70">
            {filteredProfiles.length} {filteredProfiles.length === 1 ? "talento encontrado" : "talentos encontrados"}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProfiles.map((profile, index) => (
              <ProfileCard key={profile.id} profile={profile} index={index} />
            ))}
          </div>

          {filteredProfiles.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-text-light/70 text-lg mb-4">Nenhum talento encontrado com esses filtros.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setMaxDistance(10);
                }}
                className="rounded-full bg-brand px-6 py-2 text-sm font-semibold text-white hover:bg-brand-dark transition"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

// Profile Card Component
const ProfileCard = ({ profile, index }: { profile: Profile; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-soft/70 p-6 backdrop-blur transition hover:border-white/30"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${profile.accent} opacity-0 transition duration-500 group-hover:opacity-10`} />

      <div className="relative">
        {/* Profile Header */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-1">{profile.name}</h3>
            <p className="text-sm text-brand font-medium">{profile.role}</p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-1">
            <Star className="h-3 w-3 fill-brand text-brand" />
            <span className="text-xs font-semibold text-white">{profile.rating}</span>
          </div>
        </div>

        {/* Location */}
        <div className="mb-3 flex items-center gap-2 text-sm text-text-light/70">
          <MapPin className="h-4 w-4" />
          <span>{profile.city}</span>
          <span className="ml-auto rounded-full bg-brand/20 px-2 py-0.5 text-xs font-semibold text-brand">
            {profile.distanceKm} km
          </span>
        </div>

        {/* Bio */}
        <p className="mb-4 text-sm text-text-light/80 line-clamp-2">{profile.bio}</p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {profile.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-text-light/80">
              {tag}
            </span>
          ))}
        </div>

        {/* Reviews */}
        <div className="mb-4 text-xs text-text-light/60">
          {profile.reviews} {profile.reviews === 1 ? "avaliação" : "avaliações"}
        </div>

        {/* CTA */}
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark">
          Ver perfil completo
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default SearchTalentsPage;
