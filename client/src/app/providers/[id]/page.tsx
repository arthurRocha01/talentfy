'use client';

import { useState, use } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Briefcase, MessageCircle, UserPlus, UserCheck, Share2, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/talentfy/Header';
import Footer from '@/components/talentfy/Footer';
import { providers } from '@/data/mock-data';
import { toast } from 'sonner';

export default function ProviderProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const provider = providers.find((p) => p.id === resolvedParams.id);
  const [isFollowing, setIsFollowing] = useState(false);

  if (!provider) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-6xl">😕</div>
            <h2 className="text-2xl font-bold">Profissional não encontrado</h2>
            <p className="text-muted-foreground">O perfil que você procura não existe.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    toast.success(isFollowing ? 'Deixou de seguir' : 'Agora você está seguindo este profissional');
  };

  const handleMessage = () => {
    toast.info('Funcionalidade de mensagens em breve!');
  };

  const handleShare = () => {
    toast.success('Link copiado para a área de transferência!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={provider.coverImage}
            alt={provider.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 -mt-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <Avatar className="w-32 h-32 border-4 border-background">
                      <AvatarImage src={provider.avatar} alt={provider.name} />
                      <AvatarFallback>{provider.name[0]}</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{provider.name}</h1>
                      <p className="text-xl text-muted-foreground mb-3">{provider.profession}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{provider.city}, {provider.state}</span>
                          <span className="text-primary font-medium">• {provider.distance} km</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{provider.rating}</span>
                          <span className="text-muted-foreground">({provider.reviewCount} avaliações)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {provider.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button onClick={handleMessage} size="lg">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Enviar Mensagem
                      </Button>
                      
                      <Button onClick={handleFollow} variant={isFollowing ? 'outline' : 'secondary'} size="lg">
                        {isFollowing ? (
                          <>
                            <UserCheck className="mr-2 h-5 w-5" />
                            Seguindo
                          </>
                        ) : (
                          <>
                            <UserPlus className="mr-2 h-5 w-5" />
                            Seguir
                          </>
                        )}
                      </Button>

                      <Button onClick={handleShare} variant="outline" size="lg">
                        <Share2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-6 text-center space-y-2">
                        <div className="text-3xl font-bold text-primary">
                          R$ {provider.hourlyRate}
                        </div>
                        <div className="text-sm text-muted-foreground">por hora</div>
                        <Separator className="my-4" />
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>Responde em {provider.responseTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                            <span>{provider.completedJobs} trabalhos</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="about" className="mb-8">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="about">Sobre</TabsTrigger>
                <TabsTrigger value="portfolio">Portfólio</TabsTrigger>
                <TabsTrigger value="reviews">Avaliações</TabsTrigger>
                <TabsTrigger value="posts">Publicações</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-6">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Sobre mim</h3>
                      <p className="text-muted-foreground leading-relaxed">{provider.bio}</p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Habilidades</h3>
                      <div className="flex flex-wrap gap-2">
                        {provider.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Informações de Contato</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span>contato@{provider.name.toLowerCase().replace(' ', '')}.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>(11) 9 9999-9999</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="portfolio" className="mt-6">
                {provider.portfolio.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {provider.portfolio.map((item) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                        <CardContent className="p-4">
                          <Badge variant="secondary" className="mb-2">
                            {item.category}
                          </Badge>
                          <h4 className="font-semibold mb-2">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="p-12">
                    <div className="text-center space-y-4">
                      <div className="text-6xl">📁</div>
                      <h3 className="text-xl font-semibold">Nenhum item no portfólio</h3>
                      <p className="text-muted-foreground">
                        Este profissional ainda não adicionou trabalhos ao portfólio.
                      </p>
                    </div>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                {provider.reviews.length > 0 ? (
                  <div className="space-y-4">
                    {provider.reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <Avatar>
                              <AvatarImage src={review.avatar} alt={review.author} />
                              <AvatarFallback>{review.author[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-semibold">{review.author}</h4>
                                  <div className="flex items-center gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${
                                          i < review.rating
                                            ? 'fill-yellow-400 text-yellow-400'
                                            : 'text-muted-foreground'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <span className="text-sm text-muted-foreground">
                                  {new Date(review.date).toLocaleDateString('pt-BR')}
                                </span>
                              </div>
                              <p className="text-muted-foreground">{review.comment}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="p-12">
                    <div className="text-center space-y-4">
                      <div className="text-6xl">⭐</div>
                      <h3 className="text-xl font-semibold">Nenhuma avaliação ainda</h3>
                      <p className="text-muted-foreground">
                        Seja o primeiro a avaliar este profissional!
                      </p>
                    </div>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="posts" className="mt-6">
                <Card className="p-12">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">📝</div>
                    <h3 className="text-xl font-semibold">Nenhuma publicação</h3>
                    <p className="text-muted-foreground">
                      Este profissional ainda não fez publicações.
                    </p>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
