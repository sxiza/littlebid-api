FROM node:carbon-slim

ARG env
ARG app_dir

#RUN useradd --user-group --create-home --shell /bin/false app

COPY package.json $app_dir/package.json

# Create app directory
RUN echo $app_dir 
WORKDIR $app_dir

# Install dependencies
RUN npm i -g @adonisjs/cli
RUN npm install

EXPOSE 3333

# Start the server
CMD sh -c 'adonis serve --dev'
