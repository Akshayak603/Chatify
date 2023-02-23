FROM node:16



WORKDIR ./


COPY package*.json ./


RUN npm install


COPY . .
EXPOSE 8000
CMD [ "node", "index.js" ]
