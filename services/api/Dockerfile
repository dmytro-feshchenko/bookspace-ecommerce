FROM node:17.0-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --only=development

COPY . .

RUN npm run build

FROM node:17.0-alpine As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]