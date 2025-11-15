
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Search, Users, Star, MapPin, Zap, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/talentfy/Header';
import Footer from '@/components/talentfy/Footer';
import ProviderCard from '@/components/talentfy/ProviderCard';
import Link from 'next/link';
import { providers, categories } from '@/data/mock-data';

export default function Home() {
  const featuredProviders = providers.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 dark:gradient-bg gradient-bg-light -z-10" />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Encontre{' '}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Talentos Incríveis
              </span>
              <br />
              Perto de Você
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Conecte-se com os melhores profissionais da sua região. Rápido, seguro e eficiente.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto pt-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Que tipo de serviço você precisa?"
                  className="pl-10 h-12 text-base"
                />
              </div>
              <Link href="/providers">
                <Button size="lg" className="w-full sm:w-auto h-12 px-8">
                  Buscar Talentos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span><strong>10.000+</strong> Profissionais</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span><strong>4.8</strong> Avaliação Média</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Categorias Populares
            </h2>
            <p className="text-muted-foreground">
              Explore as áreas mais procuradas na plataforma
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link href="/providers">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <CardContent className="p-6 text-center space-y-3">
                      <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <div className="text-primary text-2xl">
                          {category.icon === 'Palette' && '🎨'}
                          {category.icon === 'Code' && '💻'}
                          {category.icon === 'TrendingUp' && '📈'}
                          {category.icon === 'Camera' && '📷'}
                          {category.icon === 'PenTool' && '✍️'}
                          {category.icon === 'Briefcase' && '💼'}
                          {category.icon === 'Languages' && '🌐'}
                          {category.icon === 'Video' && '🎬'}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.count} profissionais
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Profissionais em Destaque
            </h2>
            <p className="text-muted-foreground">
              Conheça alguns dos talentos mais bem avaliados da plataforma
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProviders.map((provider, index) => (
              <ProviderCard key={provider.id} provider={provider} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/providers">
              <Button size="lg" variant="outline">
                Ver Todos os Talentos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como Funciona
            </h2>
            <p className="text-muted-foreground">
              Conecte-se com profissionais em 3 passos simples
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="text-center p-6 h-full">
                <CardContent className="space-y-4 pt-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">1. Busque</h3>
                  <p className="text-muted-foreground">
                    Encontre profissionais qualificados perto de você usando nossa busca inteligente
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="text-center p-6 h-full">
                <CardContent className="space-y-4 pt-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">2. Conecte</h3>
                  <p className="text-muted-foreground">
                    Veja perfis detalhados, avaliações e portfólios antes de escolher
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="text-center p-6 h-full">
                <CardContent className="space-y-4 pt-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">3. Contrate</h3>
                  <p className="text-muted-foreground">
                    Entre em contato diretamente e comece seu projeto com segurança
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-3"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Seguro e Confiável</h3>
              <p className="text-sm text-muted-foreground">
                Todos os profissionais são verificados e avaliados pela comunidade
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center space-y-3"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Baseado em Localização</h3>
              <p className="text-sm text-muted-foreground">
                Encontre talentos próximos para atendimento rápido e eficiente
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center space-y-3"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Crescimento Profissional</h3>
              <p className="text-sm text-muted-foreground">
                Rede social integrada para networking e oportunidades
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
