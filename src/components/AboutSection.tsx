
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const AboutSection = () => {
  const benefits = [
    "Reconhecimento ministerial oficial",
    "Acesso à biblioteca digital teológica",
    "Certificações e cursos especializados",
    "Networking com ministros de todo Brasil",
    "Assessoria jurídica e administrativa",
    "Descontos em produtos e eventos"
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Sobre a CIMEB
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A Convenção de Igrejas e Ministros Evangélicos no Brasil é uma instituição 
              que visa unir, fortalecer e capacitar ministros para o Reino de Deus.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6">Nossa Missão</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Promover a união e fortalecimento dos ministros evangélicos através da Palavra de Deus, 
                oferecendo formação, recursos e uma plataforma de comunhão para o crescimento 
                do Reino de Deus no Brasil.
              </p>
              
              <h4 className="text-2xl font-semibold text-blue-800 mb-4">Benefícios da Associação:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Visão</h4>
                  <p className="text-gray-700">
                    Ser reconhecida como a principal convenção evangélica do Brasil, 
                    formando ministros capacitados e unidos pela Palavra de Deus.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Valores</h4>
                  <p className="text-gray-700">
                    Fé, União, Integridade, Excelência no Ensino, Compromisso com a Palavra de Deus 
                    e Serviço ao Reino.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Compromisso</h4>
                  <p className="text-gray-700">
                    Defender os ideais cristãos, promover a educação teológica de qualidade 
                    e fortalecer a comunhão entre os ministros.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
