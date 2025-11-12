import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Empresário",
    content: "Encontrei um desenvolvedor excepcional em menos de 24 horas. A plataforma é intuitiva e os profissionais são de alta qualidade.",
    rating: 5
  },
  {
    name: "Beatriz Oliveira",
    role: "Designer Freelancer",
    content: "Consegui triplicar minha renda trabalhando pela Talentfy. A comunidade é muito acolhedora e o sistema de pagamento é confiável.",
    rating: 5
  },
  {
    name: "Pedro Lima",
    role: "Dono de Restaurante",
    content: "Contratei serviços de entrega e limpeza. Tudo funcionou perfeitamente. Recomendo para qualquer negócio!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que dizem nossos usuários
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milhares de histórias de sucesso
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] border border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={20} />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
