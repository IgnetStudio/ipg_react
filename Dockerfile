# pull official base image
FROM node:slim

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ./ /app/
RUN yarn --silent && yarn build
RUN rm .env
RUN yarn add serve

# start app
CMD "serve -s /app/build "