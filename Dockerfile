# Dockerfile for full-stack app
FROM node:20-alpine as build
WORKDIR /app
COPY backend ./backend
WORKDIR /app/backend
RUN npm install
CMD ["npm", "run", "dev"]