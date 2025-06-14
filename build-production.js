
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Iniciando build de produção para CIMEB...');

try {
  // Verificar se node_modules existe
  if (!fs.existsSync('node_modules')) {
    console.log('📦 Instalando dependências...');
    execSync('npm install', { stdio: 'inherit' });
  }

  // Limpar pasta dist se existir
  if (fs.existsSync('dist')) {
    console.log('🧹 Limpando build anterior...');
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // Executar build
  console.log('⚡ Gerando build de produção...');
  execSync('npm run build', { stdio: 'inherit' });

  // Verificar se .htaccess foi copiado
  const htaccessSource = path.join('public', '.htaccess');
  const htaccessDest = path.join('dist', '.htaccess');
  
  if (fs.existsSync(htaccessSource) && !fs.existsSync(htaccessDest)) {
    console.log('📋 Copiando .htaccess...');
    fs.copyFileSync(htaccessSource, htaccessDest);
  }

  console.log('✅ Build concluído com sucesso!');
  console.log('📁 Arquivos prontos na pasta "dist/"');
  console.log('📖 Leia as instruções em INSTRUCOES_UPLOAD_CPANEL.md');
  
} catch (error) {
  console.error('❌ Erro durante o build:', error.message);
  process.exit(1);
}
