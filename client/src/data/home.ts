import {
  BriefcaseBusiness,
  Brush,
  Camera,
  Code2,
  Dumbbell,
  Hammer,
  HeartPulse,
  MapPinCheck,
  Palette,
  Sparkles,
  Stethoscope,
  UsersRound,
  WifiHigh,
} from "lucide-react";
import type { Category, Profile, HowItWorksStep } from "../types";

export const heroCopy = {
  title: "Conecte talentos incríveis com quem precisa deles agora",
  subtitle:
    "Talentfy combina geolocalização e rede profissional para aproximar prestadores de serviço e clientes com precisão e rapidez.",
  primaryCta: "Encontre talentos perto de você",
  secondaryCta: "Ofereça seus serviços",
};

export const popularCategories: Category[] = [
  {
    id: "dev",
    name: "Desenvolvedores",
    description: "Criação de apps, sites e soluções sob medida.",
    icon: Code2,
    gradient: "from-brand to-brand-dark",
  },
  {
    id: "design",
    name: "Designers",
    description: "Identidades visuais e interfaces impecáveis.",
    icon: Palette,
    gradient: "from-brand-dark to-brand-navy",
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Estratégias para elevar sua marca.",
    icon: Sparkles,
    gradient: "from-brand to-brand-muted",
  },
  {
    id: "foto",
    name: "Fotógrafos",
    description: "Ensaio, evento e cobertura criativa.",
    icon: Camera,
    gradient: "from-brand-muted to-brand-dark",
  },
  {
    id: "fitness",
    name: "Personal Trainers",
    description: "Treinos personalizados em qualquer lugar.",
    icon: Dumbbell,
    gradient: "from-brand to-brand-dark",
  },
  {
    id: "saude",
    name: "Saúde",
    description: "Profissionais que cuidam de você.",
    icon: Stethoscope,
    gradient: "from-brand-muted to-brand-navy",
  },
  {
    id: "bem-estar",
    name: "Bem-estar",
    description: "Terapeutas, mentores e muito mais.",
    icon: HeartPulse,
    gradient: "from-brand to-brand-dark",
  },
  {
    id: "servicos",
    name: "Reparos",
    description: "Profissionais de confiança para resolver tudo.",
    icon: Hammer,
    gradient: "from-brand-dark to-black",
  },
  {
    id: "consultoria",
    name: "Consultoria",
    description: "Especialistas para decisões estratégicas.",
    icon: BriefcaseBusiness,
    gradient: "from-brand to-brand-dark",
  },
  {
    id: "arte",
    name: "Arte & Cultura",
    description: "Artistas, músicos e produtores culturais.",
    icon: Brush,
    gradient: "from-brand-muted to-brand-dark",
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: "connect",
    title: "Ative a sua localização",
    description: "Um mapa simulado identifica especialistas próximos e mostra distâncias em tempo real.",
    icon: MapPinCheck,
  },
  {
    id: "explore",
    title: "Descubra talentos",
    description: "Explore perfis completos com portfólios, avaliações e histórico profissional.",
    icon: UsersRound,
  },
  {
    id: "match",
    title: "Converse e feche negócios",
    description: "Mensagens diretas e propostas rápidas para garantir o serviço ideal.",
    icon: WifiHigh,
  },
];

export const featuredProfiles: Profile[] = [
  {
    id: "1",
    name: "Amanda Ribeiro",
    role: "Product Designer",
    city: "São Paulo, SP",
    distanceKm: 1.2,
    rating: 4.9,
    reviews: 128,
    bio: "Experiência em criar produtos digitais com foco em usabilidade e impacto real.",
    tags: ["UI/UX", "Design Systems", "Pesquisa"],
    accent: "from-brand-dark/80 to-surface-soft",
  },
  {
    id: "2",
    name: "Daniel Castro",
    role: "Dev Full Stack",
    city: "Curitiba, PR",
    distanceKm: 3.8,
    rating: 4.8,
    reviews: 96,
    bio: "Ajudo startups a crescer com soluções escaláveis e seguras.",
    tags: ["React", "Node", "DevOps"],
    accent: "from-brand/80 to-surface-soft/80",
  },
  {
    id: "3",
    name: "Lívia Fernandes",
    role: "Produtora de Conteúdo",
    city: "Rio de Janeiro, RJ",
    distanceKm: 2.5,
    rating: 5,
    reviews: 152,
    bio: "Produzo narrativas visuais e textuais que conectam pessoas e marcas.",
    tags: ["Storytelling", "Vídeo", "Social Media"],
    accent: "from-brand-muted/80 to-surface-soft/75",
  },
  {
    id: "4",
    name: "Rafael Lima",
    role: "Consultor Financeiro",
    city: "Belo Horizonte, MG",
    distanceKm: 6.4,
    rating: 4.7,
    reviews: 88,
    bio: "Estratégias inteligentes para empresas e profissionais liberais.",
    tags: ["Planejamento", "Investimentos", "Crescimento"],
    accent: "from-brand-dark/75 to-surface-soft/70",
  },
];
 