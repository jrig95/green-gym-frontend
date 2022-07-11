FROM node:16.14.2 as build

RUN mkdir /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install dateformat

COPY . ./
RUN npm run build


# CMD ["npm", "start"]
