FROM node:14-alpine

WORKDIR /app

COPY . .

RUN npm install 

RUN npm run sequelize:start

EXPOSE $PORT

CMD ["npm", "start"] 