FROM node:20.10.0-alpine3.19 as nest-builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
RUN chmod -R 777 node_modules dist
EXPOSE 3000
VOLUME [ "/usr/src/app", "/usr/src/app/node_modules" ]
CMD ["npm", "run", "start:dev"]