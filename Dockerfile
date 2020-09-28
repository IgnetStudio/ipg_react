# pull official base image
FROM node:slim

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ./ /app/
RUN yarn && yarn build
RUN yarn global add serve

# start app
CMD ["yarn global add serve", "-s", '/app/build']