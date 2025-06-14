
# 📋 Instruções para Upload do Site CIMEB no cPanel

## 🎯 Pré-requisitos
- Acesso ao cPanel da hospedagem
- Node.js instalado no computador local
- Projeto CIMEB baixado

## 🔧 Passo 1: Preparar o Build de Produção

### 1.1 No seu computador, execute:
```bash
# Instalar dependências
npm install

# Gerar build de produção
npm run build
```

### 1.2 Verificar se a pasta `dist` foi criada
- A pasta `dist` conterá todos os arquivos otimizados para produção

## 📁 Passo 2: Preparar Arquivos para Upload

### 2.1 Arquivos necessários:
- Todo o conteúdo da pasta `dist/`
- Arquivo `.htaccess` (já incluído em `public/.htaccess`)

### 2.2 Estrutura final no servidor:
```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...outros assets
├── .htaccess
└── outros arquivos estáticos
```

## 🌐 Passo 3: Upload via cPanel

### 3.1 Acessar o Gerenciador de Arquivos:
1. Login no cPanel
2. Clique em "Gerenciador de Arquivos"
3. Navegue até `public_html/`

### 3.2 Fazer Upload:
1. **LIMPAR** o diretório `public_html/` (fazer backup se necessário)
2. Fazer upload de TODOS os arquivos da pasta `dist/`
3. Certificar-se que o arquivo `.htaccess` foi enviado
4. Verificar permissões dos arquivos (644 para arquivos, 755 para pastas)

### 3.3 Configurar Permissões:
- Arquivos: 644
- Pastas: 755
- .htaccess: 644

## ⚙️ Passo 4: Configurações Específicas

### 4.1 Se usando Subdomínio:
- Alterar `base: "/"` para `base: "/subpasta/"` no vite.config.ts
- Refazer o build

### 4.2 Configurar SSL (HTTPS):
- Ativar SSL/TLS no cPanel
- Forçar redirecionamento HTTPS

### 4.3 Configurar Domínio:
- Apontar DNS do domínio para o servidor
- Aguardar propagação (até 48h)

## 🧪 Passo 5: Testes Pós-Upload

### 5.1 Verificações essenciais:
- [ ] Site carrega na URL principal
- [ ] Navegação entre seções funciona
- [ ] Links do WhatsApp funcionam
- [ ] Responsividade mobile
- [ ] Velocidade de carregamento
- [ ] SEO tags carregando

### 5.2 URLs para testar:
- `https://seudominio.com/`
- `https://seudominio.com/#sobre`
- `https://seudominio.com/#academy`
- `https://seudominio.com/#contato`

## 🔍 Solução de Problemas

### Problema: "404 Not Found" ao navegar
**Solução:** Verificar se o arquivo `.htaccess` foi enviado corretamente

### Problema: Arquivos CSS/JS não carregam
**Solução:** Verificar permissões dos arquivos (644)

### Problema: Site lento
**Solução:** Ativar compressão GZIP no cPanel

### Problema: WhatsApp não abre
**Solução:** Verificar se o número está no formato correto no código

## 📞 Informações de Contato do Site

### Configurações atuais:
- **WhatsApp:** 5511999999999 (precisa ser alterado)
- **CNPJ:** 12.345.678/0001-90 (precisa ser alterado)
- **E-mail:** contato@cimeb.org.br

### Para alterar essas informações:
1. Editar arquivos fonte
2. Refazer build (`npm run build`)
3. Fazer novo upload

## ✅ Checklist Final

- [ ] Build gerado com sucesso
- [ ] Todos os arquivos enviados
- [ ] .htaccess configurado
- [ ] Permissões corretas
- [ ] SSL ativado
- [ ] DNS configurado
- [ ] Site testado e funcionando
- [ ] Informações de contato atualizadas

## 🎉 Pronto!

Seu site CIMEB está agora online e funcionando!

Para futuras atualizações, repita os passos de build e upload.
