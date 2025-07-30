# Use node version 24 as our base image
FROM node:24

# Goes to  the app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of our app into the container
COPY . .

# Run the app
CMD [ "npm", "start" ]