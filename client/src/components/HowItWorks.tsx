import { UserPlus, Search, CreditCard, Star } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Crie seu perfil",
    description: "Cadastre-se gratuitamente em segundos e personalize seu perfil"
  },
  {
    icon: Search,
    title: "Encontre o serviço",
    description: "Navegue por centenas de categorias e prestadores verificados"
  },
  {
    icon: CreditCard,
    title: "Pague pelo uso",
    description: "Sem mensalidades. Pague apenas quando contratar um serviço"
  },
  {
    icon: Star,
    title: "Avalie e conecte",
    description: "Deixe sua avaliação e participe da comunidade Talentfy"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contratar ou oferecer serviços nunca foi tão simples
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-card p-6 rounded-2xl shadow-[var(--shadow-card)] border border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center mb-4">
                <step.icon className="text-primary" size={32} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
