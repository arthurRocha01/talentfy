import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary-glow/10 to-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Junte-se à comunidade Talentfy e transforme seu{" "}
            <span className="text-gradient">talento em renda</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Seja parte de uma plataforma que conecta milhares de profissionais
            com clientes que valorizam seu trabalho
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              Criar Conta Gratuitamente
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <p className="text-sm text-muted-foreground">
              Sem mensalidades • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
