# Stage 1: builder
FROM node:18-alpine AS builder
WORKDIR /app

# Solo copiamos lo necesario para instalar deps
COPY package*.json vite.config.js ./

# Instalamos dependencias
RUN npm ci

# Copiamos el resto del código
COPY public/ ./public
COPY src/    ./src

# Generamos el build estático (dist/)
RUN npm run build

# Stage 2: server
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# (Opcional) puedes añadir un healthcheck
HEALTHCHECK --interval=30s --timeout=5s \
  CMD wget --spider --quiet http://localhost/ || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]