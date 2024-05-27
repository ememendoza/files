# Seleccionar la imagen base de Node.js
FROM node:22.2.0

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto 3000 para la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
