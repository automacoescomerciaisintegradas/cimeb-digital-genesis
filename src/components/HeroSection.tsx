
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const backgroundPattern = {
    backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
  };

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={backgroundPattern}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            CIMEB
            <span className="block text-3xl md:text-4xl font-normal mt-2 text-yellow-300">
              Unidos pela Palavra de Deus
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            Seja associado ao CIMEB. Ser filiado ao CIMEB é implantar, através da Palavra de Deus, 
            a união dos ministros, para juntos, defendermos os nossos ideais a favor do Reino de Deus.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-blue-900 font-bold px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all"
            >
              QUERO ME ASSOCIAR
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg rounded-full"
            >
              SAIBA MAIS
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-300">500+</div>
              <div className="text-sm">Ministros Associados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-300">15+</div>
              <div className="text-sm">Anos de História</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-300">100+</div>
              <div className="text-sm">Cursos Disponíveis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
