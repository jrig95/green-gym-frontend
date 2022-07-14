FROM node:16.14.2

RUN mkdir /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install
RUN npm run build

EXPOSE 5000
CMD "npm" "run" "start"
