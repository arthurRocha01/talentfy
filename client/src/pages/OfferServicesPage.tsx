import { useState } from "react";
import { motion } from "framer-motion";
import { User, MapPin, Briefcase, Tag, FileText, Star, Camera, Save, ArrowLeft } from "lucide-react";
import { popularCategories } from "../data/home";
import { Link, useNavigate } from "react-router-dom";
import { useToastStore } from "../store/useToastStore";

const OfferServicesPage = () => {
  const navigate = useNavigate();
  const addToast = useToastStore((state) => state.addToast);
  
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    city: "",
    bio: "",
    category: "",
    tags: "",
    hourlyRate: "",
    portfolio: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de criação de perfil
    setTimeout(() => {
      addToast("Perfil criado com sucesso! Você já está visível para clientes.", "success");
      setIsSubmitting(false);
      setTimeout(() => navigate("/"), 1500);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-bg py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="mb-4 inline-flex items-center gap-2 text-sm text-text-light/70 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para início
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Ofereça seus serviços</h1>
          <p className="text-text-light/70 text-lg">
            Crie seu perfil profissional e comece a receber propostas de clientes
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          {/* Profile Photo */}
          <div className="rounded-2xl border border-white/10 bg-surface-soft/50 p-6">
            <label className="mb-4 flex items-center gap-2 text-sm font-medium text-white">
              <Camera className="h-4 w-4" />
              Foto de perfil
            </label>
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand/20 text-brand">
                <User className="h-10 w-10" />
              </div>
              <button
                type="button"
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-text-light/80 hover:border-white/30 hover:bg-white/5 transition"
              >
                Alterar foto
              </button>
            </div>
          </div>

          {/* Personal Info */}
          <div className="rounded-2xl border border-white/10 bg-surface-soft/50 p-6 space-y-4">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
              <User className="h-5 w-5" />
              Informações pessoais
            </h2>

            <div>
              <label className="mb-2 block text-sm font-medium text-text-light/90">Nome completo *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
                className="w-full rounded-xl border border-white/10 bg-surface-soft/50 px-4 py-3 text-white placeholder:text-text-light/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-text-light/90">Profissão *</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Ex: Designer UI/UX, Desenvolvedor Full Stack..."
                required
                className="w-full rounded-xl border border-white/10 bg-surface-soft/50 px-4 py-3 text-white placeholder:text-text-light/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-text-light/90">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Localização *
                </span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Cidade, Estado"
                required
                className="w-full rounded-xl border border-white/10 bg-surface-soft/50 px-4 py-3 text-white placeholder:text-text-light/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
            </div>
          </div>

          {/* Professional Info */}
          <div className="rounded-2xl border border-white/10 bg-surface-soft/50 p-6 space-y-4">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
              <Briefcase className="h-5 w-5" />
              Informações profissionais
            </h2>

            <div>
              <label className="mb-2 block text-sm font-medium text-text-light/90">Categoria principal *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-surface-soft/50 px-4 py-3 text-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/50"
              >
                <option value="">Selecione uma categoria</option>
                {popularCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-text-light/90">
                <span className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Sobre você *
                </span>
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Descreva sua experiência, especialidades e o que o diferencia..."
                rows={4}
                required
                className="w-full rounded-xl border border-white/10 bg-surface-soft/50 px-4 py-3 text-white placeholder:text-text-light/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/50 resize-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-text-light/90">
                <span className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Habilidades
                </span>
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Ex: React, TypeScript, Figma, Adobe XD (separados por vírgula)"
                className="w-full rounded-xl border border-white/10 bg-surface-soft/50 px-4 py-3 text-white placeholder:text-text-light/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
              <p className="mt-2 text-xs text-text-light/60">Adicione até 5 habilidades principais</p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-text-light/90">
                <span className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Valor por hora (R$)
                </span>
              </label>
              <input
                type="number"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleChange}
                placeholder="150"
                className="w-full rounded-xl border border-white/10 bg-surface-soft/50 px-4 py-3 text-white placeholder:text-text-light/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-text-light/90">Link do portfólio</label>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="https://seuportfolio.com"
                className="w-full rounded-xl border border-white/10 bg-surface-soft/50 px-4 py-3 text-white placeholder:text-text-light/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
            </div>
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-base font-semibold text-white shadow-glow transition hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand/50 disabled:opacity-50"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Save className="h-5 w-5" />
            {isSubmitting ? "Criando perfil..." : "Criar perfil profissional"}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default OfferServicesPage;
 