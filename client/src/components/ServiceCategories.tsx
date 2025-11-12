import { Palette, Code, Truck, Sparkles, Briefcase, Camera, Music, BookOpen } from "lucide-react";

const categories = [
  { icon: Palette, name: "Design", count: "2.5k+" },
  { icon: Code, name: "Programação", count: "3.2k+" },
  { icon: Truck, name: "Entregas", count: "1.8k+" },
  { icon: Sparkles, name: "Limpeza", count: "1.2k+" },
  { icon: Briefcase, name: "Consultoria", count: "980+" },
  { icon: Camera, name: "Fotografia", count: "750+" },
  { icon: Music, name: "Música", count: "620+" },
  { icon: BookOpen, name: "Educação", count: "1.5k+" }
];

const ServiceCategories = () => {
  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Categorias de Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore milhares de talentos em diversas áreas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-2xl shadow-[var(--shadow-card)] border border-border hover:shadow-[var(--shadow-elegant)] cursor-pointer card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <category.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} talentos</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
