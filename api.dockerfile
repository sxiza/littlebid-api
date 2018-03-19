FROM node:carbon-slim

# Get build arguments
# ARG env
# ARG app_dir

#RUN useradd --user-group --create-home --shell /bin/false app

# Create app directory
WORKDIR /usr/src/freecar-api

# Copy and install files
# COPY package.json /usr/src/freecar-api/package.json

# Install dependencies
RUN npm i -g @adonisjs/cli
# RUN npm install

# Expose port
EXPOSE 3333

# Start the server
CMD sh -c 'adonis serve --dev --polling'
