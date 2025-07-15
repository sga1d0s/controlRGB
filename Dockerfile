# Stage 1: builder
FROM node:18-alpine AS build-stage
WORKDIR /app
COPY package*.json vite.config.js ./
RUN npm ci
COPY public/ ./public
COPY src/    ./src
RUN npm run build

# Stage 2: server
FROM nginx:alpine AS production-stage

# Limpia el html por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copia solo lo que necesitas del builder
COPY --from=build-stage /app/dist/. /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]