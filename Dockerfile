FROM node:9.6.1

RUN npm install webpack -g
RUN npm install -g @angular/cli@1.7.1


WORKDIR /tmp
COPY package.json /tmp/
RUN npm install

WORKDIR /usr/src/app
COPY . /usr/src/app/

RUN npm install

RUN ng build
RUN ng run polarityTE-app:server
RUN npm run webpack:server

CMD node dist/server.js

EXPOSE 80
EXPOSE 443