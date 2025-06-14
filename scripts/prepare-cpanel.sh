
#!/bin/bash

echo "🚀 Preparando projeto CIMEB para cPanel..."

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ Execute este script no diretório raiz do projeto"
    exit 1
fi

# Instalar dependências se necessário
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
fi

# Limpar build anterior
if [ -d "dist" ]; then
    echo "🧹 Limpando build anterior..."
    rm -rf dist
fi

# Executar build
echo "⚡ Gerando build de produção..."
npm run build

# Verificar se build foi bem-sucedido
if [ ! -d "dist" ]; then
    echo "❌ Falha no build de produção"
    exit 1
fi

# Copiar .htaccess se existe
if [ -f "public/.htaccess" ]; then
    echo "📋 Copiando .htaccess..."
    cp public/.htaccess dist/.htaccess
fi

# Criar arquivo ZIP para upload
echo "📦 Criando arquivo ZIP para upload..."
cd dist
zip -r ../cimeb-production.zip ./*
cd ..

echo "✅ Preparação concluída!"
echo "📁 Arquivos prontos em: dist/"
echo "📦 Arquivo ZIP criado: cimeb-production.zip"
echo "📖 Leia as instruções em: INSTRUCOES_UPLOAD_CPANEL.md"
echo ""
echo "🎯 Próximos passos:"
echo "1. Faça upload do conteúdo da pasta 'dist/' para public_html/"
echo "2. Ou use o arquivo cimeb-production.zip e extraia no cPanel"
echo "3. Siga as instruções detalhadas no arquivo INSTRUCOES_UPLOAD_CPANEL.md"
