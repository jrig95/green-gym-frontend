FROM node:16.14.2

RUN mkdir /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm install
RUN npm install dateformat


CMD ["npm", "serve"]
