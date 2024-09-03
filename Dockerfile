FROM node:alpine AS build

WORKDIR /app

RUN npm install

COPY . ./

RUN npm run build

CMD ["npm", "run", "dev"]