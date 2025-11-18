import type { LucideIcon } from "lucide-react";

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
};

export type Profile = {
  id: string;
  name: string;
  role: string;
  city: string;
  distanceKm: number;
  rating: number;
  reviews: number;
  bio: string;
  tags: string[];
  accent: string;
};

export type HowItWorksStep = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};
