
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Bell, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
            >
              Talentfy
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Início
            </Link>
            <Link href="/providers" className="text-sm font-medium hover:text-primary transition-colors">
              Talentos
            </Link>
            <Link href="/feed" className="text-sm font-medium hover:text-primary transition-colors">
              Feed
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar talentos, serviços..."
              className="pl-10 w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>
          
          <ThemeToggle />

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
          </Button>

          <Link href="/auth" className="hidden md:block">
            <Button>Entrar</Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar talentos, serviços..."
                  className="pl-10 w-full"
                />
              </div>
              
              <nav className="flex flex-col gap-2">
                <Link href="/" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md transition-colors">
                  Início
                </Link>
                <Link href="/providers" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md transition-colors">
                  Talentos
                </Link>
                <Link href="/feed" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md transition-colors">
                  Feed
                </Link>
                <Link href="/auth" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md transition-colors">
                  Entrar
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
