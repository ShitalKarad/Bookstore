#  Use the official Node.js image as the base image
FROM mhart/alpine-node

# Set the working directory within the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Define the command to run your application
CMD ["npm", "run", "dev"]

