FROM node:13-alpine

# Create app dir
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY dist/index.js dist/index.js

EXPOSE 8085

CMD ["node", "dist/index.js"];