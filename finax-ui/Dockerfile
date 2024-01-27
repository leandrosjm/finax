# Usando a imagem do Node.js como base
FROM node:14

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar o package.json e o package-lock.json para o contêiner
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Porta que a aplicação React escuta
# EXPOSE 3000

# Comando para iniciar a aplicação React
CMD ["npm", "start"]