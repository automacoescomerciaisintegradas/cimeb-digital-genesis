
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Pastor João Silva",
      church: "Igreja Batista Central - São Paulo",
      content: "A CIMEB transformou minha visão ministerial. Os cursos da Academy me capacitaram de forma extraordinária e a comunhão com outros ministros fortaleceu minha fé.",
      rating: 5
    },
    {
      name: "Pastora Maria Santos",
      church: "Ministério Águas Vivas - Rio de Janeiro",
      content: "Ser associada à CIMEB foi uma das melhores decisões que tomei. O suporte, os recursos e principalmente a união entre os ministros é algo único.",
      rating: 5
    },
    {
      name: "Pastor Carlos Oliveira",
      church: "Igreja Assembleia de Deus - Belo Horizonte",
      content: "A qualidade dos materiais da livraria digital e os cursos oferecidos superaram minhas expectativas. Recomendo a todos os ministros sérios.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Depoimentos
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Veja o que nossos associados dizem sobre a CIMEB
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                
                <p className="text-blue-100 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-blue-200 text-sm">{testimonial.church}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
