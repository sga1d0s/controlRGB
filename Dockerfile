# Stage 1: builder
FROM node:18-alpine AS builder
WORKDIR /app

# Solo copiamos lo necesario para instalar deps
COPY package*.json vite.config.js ./

# Instalamos dependencias
RUN npm ci

# 2) Copia index.html (entry-point) y el resto de archivos de config
COPY index.html ./
COPY public/    ./public
COPY src/       ./src

# Generamos el build estático (dist/)
RUN npm run build

# Stage 2: server
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*  
COPY --from=builder /app/dist/. /usr/share/nginx/html