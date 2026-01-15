# frontend/Dockerfile

# 1. Imagen base
FROM node:20-alpine

# 2. Directorio de trabajo
WORKDIR /app

# 3. Copiar dependencias
COPY package*.json ./
RUN npm install

# 4. Copiar el código fuente
COPY . .

# 5. Construir la aplicación para producción
RUN npm run build

# 6. Exponer el puerto de Next.js
EXPOSE 3000

# 7. Iniciar la app
CMD ["npm", "start"]