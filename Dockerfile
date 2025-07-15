# Stage 1: builder
FROM node:18-alpine AS builder

# Stage 2: server
FROM nginx:alpine
