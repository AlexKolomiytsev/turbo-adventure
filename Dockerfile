#Define from what image we want to build from. Here we will use the latest LTS (long term support) version boron of node available from the Docker Hub:
FROM node:boron

#Define variables
ENV APP_DIR /var/www/turbo-adventure

#Directory to hold the application code inside the image, this will be the working directory for your application:
RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR/build

#This image comes with Node.js and NPM already installed so the next thing we need to do is to install your app dependencies using the npm binary:
COPY package.json $APP_DIR
RUN npm install
RUN tsc

# Bundle app source
COPY . $APP_DIR

#App binds to port 8080 so you'll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 8080
CMD ["node", "index"]