
export const Footer = () => {
  return (
    <footer id="contato" className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">CIMEB</h3>
                <p className="text-blue-200 text-sm">Convenção de Igrejas e Ministros Evangélicos</p>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed max-w-md">
              Unidos pela Palavra de Deus, fortalecendo ministros e promovendo o Reino de Deus no Brasil 
              através da educação, comunhão e recursos ministeriais de excelência.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#inicio" className="hover:text-yellow-300 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-yellow-300 transition-colors">Sobre</a></li>
              <li><a href="#academy" className="hover:text-yellow-300 transition-colors">Academy</a></li>
              <li><a href="#livraria" className="hover:text-yellow-300 transition-colors">Livraria</a></li>
              <li><a href="#loja" className="hover:text-yellow-300 transition-colors">Loja</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-blue-200">
              <li>📧 contato@cimeb.org.br</li>
              <li>📱 (11) 99999-9999</li>
              <li>📍 São Paulo, SP</li>
              <li>🏛️ CNPJ: 12.345.678/0001-90</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <p className="text-blue-200 text-sm">
                © 2024 CIMEB - Convenção de Igrejas e Ministros Evangélicos no Brasil. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex space-x-4 justify-start md:justify-end">
              <a href="/politica-privacidade" className="text-blue-200 hover:text-yellow-300 text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-uso" className="text-blue-200 hover:text-yellow-300 text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
