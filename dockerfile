FROM node:alpine

WORKDIR /app/

COPY /package.json

RUN npm install

COPY . /app

EXPOSE 2000

CMD ["npm", "run", "start"]