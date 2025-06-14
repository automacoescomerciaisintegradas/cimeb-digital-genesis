
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Home, User } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos recursos completos para o crescimento ministerial e espiritual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card id="academy" className="text-center p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-t-blue-600">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white w-8 h-8" />
              </div>
              <CardTitle className="text-2xl text-blue-900">CIMEB Academy</CardTitle>
              <CardDescription className="text-gray-600">
                Formação teológica de excelência
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-left space-y-2 mb-6 text-gray-700">
                <li>• Cursos de teologia online</li>
                <li>• Formação ministerial completa</li>
                <li>• Certificações reconhecidas</li>
                <li>• Biblioteca digital de estudos</li>
                <li>• Mentoria personalizada</li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Explorar Cursos
              </Button>
            </CardContent>
          </Card>

          <Card id="livraria" className="text-center p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-t-yellow-500">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="text-white w-8 h-8" />
              </div>
              <CardTitle className="text-2xl text-blue-900">Livraria Digital</CardTitle>
              <CardDescription className="text-gray-600">
                Recursos espirituais e teológicos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-left space-y-2 mb-6 text-gray-700">
                <li>• Livros evangélicos digitais</li>
                <li>• Estudos bíblicos aprofundados</li>
                <li>• Comentários teológicos</li>
                <li>• E-books e audiobooks</li>
                <li>• Acervo sempre atualizado</li>
              </ul>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                Ver Biblioteca
              </Button>
            </CardContent>
          </Card>

          <Card id="loja" className="text-center p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-t-green-500">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-white w-8 h-8" />
              </div>
              <CardTitle className="text-2xl text-blue-900">Loja Online</CardTitle>
              <CardDescription className="text-gray-600">
                Materiais e recursos ministeriais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-left space-y-2 mb-6 text-gray-700">
                <li>• Materiais para igreja</li>
                <li>• Recursos ministeriais</li>
                <li>• Produtos evangélicos</li>
                <li>• Presentes cristãos</li>
                <li>• Preços especiais para associados</li>
              </ul>
              <Button className="w-full bg-green-500 hover:bg-green-600">
                Visitar Loja
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
