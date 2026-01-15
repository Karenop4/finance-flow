# 1. Usamos una imagen ligera de Node
FROM node:18-alpine

# 2. Creamos el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# 3. Copiamos los archivos de dependencias primero (para aprovechar el caché de Docker)
COPY package*.json ./

# 4. Instalamos las dependencias
RUN npm install

# 5. Copiamos el resto del código fuente
COPY . .

# 6. Compilamos el proyecto (NestJS necesita build)
RUN npm run build

# 7. Exponemos el puerto que usa NestJS
EXPOSE 3001

# 8. El comando para iniciar en modo producción
CMD ["npm", "run", "start:prod"]