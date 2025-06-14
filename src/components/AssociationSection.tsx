
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";

export const AssociationSection = () => {
  const plans = [
    {
      name: "Básico",
      price: "R$ 29,90",
      period: "/mês",
      features: [
        "Carteira de ministro",
        "Acesso básico à Academy",
        "Desconto na livraria",
        "Newsletter mensal"
      ]
    },
    {
      name: "Premium",
      price: "R$ 49,90",
      period: "/mês",
      features: [
        "Todos os benefícios do Básico",
        "Acesso completo à Academy",
        "Certificações incluídas",
        "Mentoria online",
        "Desconto de 20% na loja"
      ],
      popular: true
    },
    {
      name: "Institucional",
      price: "R$ 99,90",
      period: "/mês",
      features: [
        "Todos os benefícios do Premium",
        "Para igrejas e instituições",
        "Múltiplos acessos",
        "Assessoria personalizada",
        "Eventos exclusivos"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Como se Associar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para seu ministério e faça parte da nossa família
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-2 border-yellow-500 transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-blue-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular 
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-blue-900' 
                    : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900 text-center">
                Formulário de Pré-Cadastro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input id="nome" placeholder="Seu nome completo" />
                </div>
                
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                
                <div>
                  <Label htmlFor="telefone">Telefone/WhatsApp</Label>
                  <Input id="telefone" placeholder="(11) 99999-9999" />
                </div>
                
                <div>
                  <Label htmlFor="cidade">Cidade/Estado</Label>
                  <Input id="cidade" placeholder="São Paulo/SP" />
                </div>
                
                <div className="md:col-span-2">
                  <Label htmlFor="igreja">Nome da Igreja/Ministério</Label>
                  <Input id="igreja" placeholder="Nome da sua igreja ou ministério" />
                </div>
                
                <div className="md:col-span-2 text-center">
                  <Button size="lg" className="bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 px-12">
                    Solicitar Associação
                  </Button>
                  <p className="text-sm text-gray-600 mt-4">
                    Após o envio, entraremos em contato em até 24 horas para finalizar sua associação
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
