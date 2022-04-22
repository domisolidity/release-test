FROM node:16-alpine

WORKDIR /app

COPY ./package.json ./

RUN sudo npm install -g npm
RUN sudo npm cache clear
RUN npm cache clear
RUN sudo npm install

COPY ./ ./

CMD ["npm", "run", "start"]