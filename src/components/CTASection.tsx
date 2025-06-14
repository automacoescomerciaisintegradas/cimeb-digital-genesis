
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const whatsappNumber = "5511999999999"; // Replace with actual WhatsApp number
  const whatsappMessage = "Olá! Gostaria de saber mais sobre como me associar à CIMEB.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const pixInfo = "CNPJ: 12.345.678/0001-90"; // Replace with actual CIMEB CNPJ

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Pronto para se unir à nossa família?
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-800 mb-12 leading-relaxed">
            Entre em contato conosco pelo WhatsApp para esclarecer dúvidas ou iniciar sua associação. 
            Estamos aqui para ajudar você a crescer no ministério!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              💬 Falar no WhatsApp
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 text-lg rounded-full shadow-lg"
            >
              📞 Ligar Agora
            </Button>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Pagamento via PIX
            </h3>
            <p className="text-blue-800 mb-4">
              Para agilizar sua associação, você pode fazer o pagamento via PIX:
            </p>
            <div className="bg-white rounded-lg p-4 inline-block">
              <code className="text-blue-900 font-mono text-lg">{pixInfo}</code>
            </div>
            <p className="text-blue-800 text-sm mt-4">
              Após o pagamento, envie o comprovante pelo WhatsApp para confirmarmos sua associação
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl animate-pulse"
          onClick={() => window.open(whatsappLink, '_blank')}
        >
          <span className="text-2xl">💬</span>
        </Button>
      </div>
    </section>
  );
};
