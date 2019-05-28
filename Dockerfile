FROM node:12

WORKDIR /app

COPY package*.json /app/package.json

RUN npm install && npm install -g @angular/cli

COPY . /app

CMD ng serve --host 0.0.0.0

