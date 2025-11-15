
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, MoreHorizontal, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/talentfy/Header';
import Footer from '@/components/talentfy/Footer';
import { feedPosts, providers } from '@/data/mock-data';
import { toast } from 'sonner';

export default function FeedPage() {
  const [posts, setPosts] = useState(feedPosts);

  const handleLike = (postId: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleComment = () => {
    toast.info('Funcionalidade de comentários em breve!');
  };

  const handleShare = () => {
    toast.success('Link copiado para a área de transferência!');
  };

  const suggestedProfiles = providers.slice(0, 5);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl font-bold mb-2">Feed</h1>
                <p className="text-muted-foreground">
                  Acompanhe as novidades dos profissionais que você segue
                </p>
              </motion.div>

              <div className="space-y-6">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={post.authorAvatar} alt={post.author} />
                            <AvatarFallback>{post.author[0]}</AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-semibold">{post.author}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {post.authorProfession}
                                </p>
                              </div>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-5 w-5" />
                              </Button>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {new Date(post.timestamp).toLocaleDateString('pt-BR', {
                                day: 'numeric',
                                month: 'long',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </p>
                          </div>
                        </div>

                        <p className="mb-4 leading-relaxed">{post.content}</p>

                        {post.image && (
                          <div className="mb-4 rounded-lg overflow-hidden">
                            <img
                              src={post.image}
                              alt="Post"
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        )}

                        <Separator className="my-4" />

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleLike(post.id)}
                              className={post.isLiked ? 'text-red-500' : ''}
                            >
                              <Heart
                                className={`h-5 w-5 mr-2 ${
                                  post.isLiked ? 'fill-red-500' : ''
                                }`}
                              />
                              {post.likes}
                            </Button>

                            <Button variant="ghost" size="sm" onClick={handleComment}>
                              <MessageCircle className="h-5 w-5 mr-2" />
                              {post.comments}
                            </Button>

                            <Button variant="ghost" size="sm" onClick={handleShare}>
                              <Share2 className="h-5 w-5 mr-2" />
                              {post.shares}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Posts em Destaque</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">
                          Como aumentar sua produtividade em 300%
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Por Felipe Rodrigues • 1.2k visualizações
                        </p>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium">
                          Tendências de design para 2024
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Por Ana Silva • 890 visualizações
                        </p>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium">
                          Guia completo de marketing digital
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Por Daniel Santos • 756 visualizações
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Sugestões para Seguir</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {suggestedProfiles.map((profile) => (
                        <div key={profile.id} className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={profile.avatar} alt={profile.name} />
                            <AvatarFallback>{profile.name[0]}</AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{profile.name}</p>
                            <p className="text-xs text-muted-foreground truncate">
                              {profile.profession}
                            </p>
                          </div>
                          
                          <Button size="sm" variant="outline">
                            Seguir
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
