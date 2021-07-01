FROM node:12-alpine
RUN mkdir -p /home/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4001
CMD ["npm", "start"]