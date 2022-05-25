FROM node:lts-slim AS development

WORKDIR /transcendence_app/api/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000