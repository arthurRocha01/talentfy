'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/talentfy/Header';
import Footer from '@/components/talentfy/Footer';
import ProviderCard from '@/components/talentfy/ProviderCard';
import { providers, categories } from '@/data/mock-data';

export default function ProvidersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [sortBy, setSortBy] = useState('distance');

  const filteredProviders = useMemo(() => {
    let filtered = [...providers];

    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) =>
        p.profession.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    if (selectedRating !== 'all') {
      const minRating = parseFloat(selectedRating);
      filtered = filtered.filter((p) => p.rating >= minRating);
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'distance':
          return a.distance - b.distance;
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.hourlyRate - b.hourlyRate;
        case 'price-high':
          return b.hourlyRate - a.hourlyRate;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedRating, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        <div className="border-b bg-muted/30">
          <div className="container mx-auto px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Encontre Talentos
              </h1>
              <p className="text-muted-foreground">
                {filteredProviders.length} profissionais disponíveis
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <SlidersHorizontal className="h-5 w-5 text-primary" />
                <h2 className="font-semibold">Filtros</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <Input
                  placeholder="Buscar por nome ou habilidade..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="lg:col-span-2"
                />

                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as categorias</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.name}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedRating} onValueChange={setSelectedRating}>
                  <SelectTrigger>
                    <SelectValue placeholder="Avaliação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as avaliações</SelectItem>
                    <SelectItem value="4.5">4.5+ estrelas</SelectItem>
                    <SelectItem value="4.0">4.0+ estrelas</SelectItem>
                    <SelectItem value="3.5">3.5+ estrelas</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="distance">Mais próximos</SelectItem>
                    <SelectItem value="rating">Melhor avaliados</SelectItem>
                    <SelectItem value="price-low">Menor preço</SelectItem>
                    <SelectItem value="price-high">Maior preço</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {filteredProviders.length === 0 ? (
            <Card className="p-12">
              <div className="text-center space-y-4">
                <div className="text-6xl">🔍</div>
                <h3 className="text-xl font-semibold">Nenhum resultado encontrado</h3>
                <p className="text-muted-foreground">
                  Tente ajustar os filtros ou buscar por outros termos
                </p>
                <Button onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedRating('all');
                }}>
                  Limpar Filtros
                </Button>
              </div>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider, index) => (
                <ProviderCard key={provider.id} provider={provider} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
