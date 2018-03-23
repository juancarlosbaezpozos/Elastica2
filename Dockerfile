FROM node:carbon

# crea el directorio de la app
WORKDIR /usr/src/app

# instala las dependencias
COPY package*.json ./

RUN npm install

# copia los archivos
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
