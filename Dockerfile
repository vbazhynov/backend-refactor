FROM node:14.21.1-buster-slim AS base

WORKDIR /app

COPY ./package.json ./
RUN npm install

COPY . .

CMD npm run dev
