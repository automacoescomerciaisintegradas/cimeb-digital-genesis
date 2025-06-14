
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-800">CIMEB</h1>
              <p className="text-xs text-gray-600">Convenção de Igrejas e Ministros Evangélicos</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-800 transition-colors">Início</a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-800 transition-colors">Sobre</a>
            <a href="#academy" className="text-gray-700 hover:text-blue-800 transition-colors">Academy</a>
            <a href="#livraria" className="text-gray-700 hover:text-blue-800 transition-colors">Livraria</a>
            <a href="#loja" className="text-gray-700 hover:text-blue-800 transition-colors">Loja</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-800 transition-colors">Contato</a>
          </nav>

          {/* CTA Button */}
          <Button className="hidden md:block bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white px-6 py-2 rounded-full font-semibold">
            ASSOCIE-SE AGORA
          </Button>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-blue-800">Início</a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-800">Sobre</a>
              <a href="#academy" className="text-gray-700 hover:text-blue-800">Academy</a>
              <a href="#livraria" className="text-gray-700 hover:text-blue-800">Livraria</a>
              <a href="#loja" className="text-gray-700 hover:text-blue-800">Loja</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-800">Contato</a>
              <Button className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
                ASSOCIE-SE AGORA
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
