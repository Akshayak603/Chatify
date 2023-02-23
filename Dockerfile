#selecting base of image like versions
FROM node:16

#providing work directory
WORKDIR ./

#copying all packages
COPY package*.json ./

#installing those packages
RUN npm install


#coopying and setting port and Cmd
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]