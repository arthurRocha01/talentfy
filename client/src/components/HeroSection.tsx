import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Encontre o talento certo para cada{" "}
              <span className="text-gradient">necessidade</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              A Talentfy conecta você aos melhores prestadores de serviço, sob demanda.
              Pague apenas pelo que usar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Contratar Agora
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Oferecer Serviço
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img
                src={heroImage}
                alt="Prestadores de serviço da Talentfy"
                className="w-full h-auto"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-[var(--shadow-card)] border border-border hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow" />
                <div>
                  <p className="font-semibold">+10.000 Talentos</p>
                  <p className="text-sm text-muted-foreground">Prontos para ajudar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
