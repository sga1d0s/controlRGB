# Stage 1: builder
FROM node:18-alpine AS builder
WORKDIR /app

# Solo copiamos lo necesario para instalar deps
COPY package*.json vite.config.js ./

# Instalamos dependencias
RUN npm ci

# 2: copiamos TODO lo demás de la raíz (incluye archivos sueltos)
COPY . .

# Stage 2: server
FROM nginx:alpine
COPY /app/dist /usr/share/nginx/html
