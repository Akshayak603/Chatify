FROM node:16
# selecting base of image like versions


WORKDIR ./
# providing work directory


COPY package*.json ./
# copying all packages


RUN npm install
# installing those packages



COPY . .
EXPOSE 7000
CMD [ "node", "index.js" ]
# copying and setting port and Cmd