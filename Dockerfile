# Use a imagem do Node.js com a versão correta
FROM node:14.21.3

# Defina a versão correta do npm
RUN npm install -g npm@7.24.0

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do seu aplicativo
COPY . .

# Inicie o aplicativo React
CMD ["npm", "start"]
