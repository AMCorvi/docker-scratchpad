FROM node:10-alpine
COPY . /src
WORKDIR /src
RUN ls -a
# RUN npm install
# RUN NODE_ENV=production npm run prod:setup
EXPOSE 80
CMD NODE_ENV=production npm run prod:start
