FROM node:carbon-slim

# Get build arguments
ARG env
ARG app_dir

#RUN useradd --user-group --create-home --shell /bin/false app

# Create app directory
WORKDIR $app_dir

# Copy and install files
COPY package.json $app_dir/package.json

# Install dependencies
RUN npm i -g @adonisjs/cli
RUN npm install

# Expose port
EXPOSE 3333

# Start the server
CMD sh -c 'adonis serve --dev'
