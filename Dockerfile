# Stage 1: builder
FROM node:18-alpine AS builder
WORKDIR /app

# Solo copiamos lo necesario para instalar deps
COPY package*.json vite.config.js ./

# Instalamos dependencias
RUN npm ci

# Copiamos el resto del código
COPY . .

# Fase builder → usa src/ para generar dist/
RUN npm run build

# Fase servidor → sirve SOLO lo de dist/
RUN rm -rf /usr/share/nginx/html/*  
COPY --from=builder /app/dist/. /usr/share/nginx/html