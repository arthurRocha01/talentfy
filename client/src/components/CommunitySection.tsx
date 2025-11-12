import { Button } from "@/components/ui/button";
import { MessageCircle, ThumbsUp, Users } from "lucide-react";
import styles from './CommunitySection.module.css'

const posts = [
  {
    author: "Maria Silva",
    role: "Designer",
    content: "Acabei de fechar meu primeiro projeto pela Talentfy! A experiência foi incrível. 🎨",
    likes: 42,
    comments: 8
  },
  {
    author: "João Santos",
    role: "Desenvolvedor",
    content: "Dica: sempre comunique bem com o cliente antes de começar o trabalho. Isso evita retrabalho!",
    likes: 67,
    comments: 15
  },
  {
    author: "Ana Costa",
    role: "Fotógrafa",
    content: "Qual equipamento vocês recomendam para iniciantes na fotografia de eventos?",
    likes: 23,
    comments: 12
  }
];

const CommunitySection = () => {
  return (
    <section id="comunidade" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comunidade <span className="text-gradient">Talentfy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conecte-se com outros profissionais, compartilhe experiências e aprenda
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
          <div className="bg-card p-6 rounded-2xl text-center shadow-[var(--shadow-card)] border border-border">
            <Users className="mx-auto mb-2 " size={32} />
            <p className="text-2xl font-bold">15k+</p>
            <p className="text-sm text-muted-foreground">Membros</p>
          </div>
          <div className="bg-card p-6 rounded-2xl text-center shadow-[var(--shadow-card)] border border-border">
            <MessageCircle className="mx-auto mb-2 text-primary" size={32} />
            <p className="text-2xl font-bold">5k+</p>
            <p className="text-sm text-muted-foreground">Discussões</p>
          </div>
          <div className="bg-card p-6 rounded-2xl text-center shadow-[var(--shadow-card)] border border-border">
            <ThumbsUp className="mx-auto mb-2 text-primary" size={32} />
            <p className="text-2xl font-bold">50k+</p>
            <p className="text-sm text-muted-foreground">Interações</p>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="max-w-4xl mx-auto space-y-6 mb-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-[var(--shadow-card)] border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow" />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <p className="font-semibold">{post.author}</p>
                    <span className="text-sm text-muted-foreground">• {post.role}</span>
                  </div>
                  <p className="mb-4">{post.content}</p>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <button className="flex items-center space-x-2 hover:text-primary transition-colors">
                      <ThumbsUp size={16} />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-primary transition-colors">
                      <MessageCircle size={16} />
                      <span>{post.comments}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Acessar Comunidade
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
