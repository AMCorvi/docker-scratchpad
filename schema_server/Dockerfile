
FROM node:10-alpine
COPY . /src
WORKDIR /src
RUN ls -a
# RUN PORT=80 npm install --production
EXPOSE 80
CMD NODE_ENV=production npm start
