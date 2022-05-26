FROM node:lts-slim AS development

WORKDIR /transcendence_app/api/src/app

COPY package*.json ./

RUN apt-get update && apt-get install -y procps && rm -rf /var/lib/apt/lists/*

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000