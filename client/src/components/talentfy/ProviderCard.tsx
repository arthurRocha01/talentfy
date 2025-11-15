
'use client';

import { Star, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Provider } from '@/data/mock-data';

interface ProviderCardProps {
  provider: Provider;
  index?: number;
}

export default function ProviderCard({ provider, index = 0 }: ProviderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link href={`/providers/${provider.id}`}>
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
          <div className="relative h-32 bg-gradient-to-br from-primary/20 to-blue-600/20 overflow-hidden">
            <img
              src={provider.coverImage}
              alt={provider.name}
              className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
            />
            <div className="absolute -bottom-12 left-4">
              <div className="w-24 h-24 rounded-full border-4 border-background overflow-hidden bg-background">
                <img
                  src={provider.avatar}
                  alt={provider.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <CardContent className="pt-14 pb-4">
            <div className="space-y-2">
              <div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {provider.name}
                </h3>
                <p className="text-sm text-muted-foreground">{provider.profession}</p>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{provider.city}, {provider.state}</span>
                <span className="text-primary font-medium">• {provider.distance} km</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{provider.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({provider.reviewCount} avaliações)
                </span>
              </div>

              <div className="flex flex-wrap gap-1 pt-2">
                {provider.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="pt-2 border-t">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">A partir de</span>
                  <span className="font-semibold text-lg text-primary">
                    R$ {provider.hourlyRate}/h
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
