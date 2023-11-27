# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy all files from the current directory to the working directory in the container
COPY . .

# Command to run the application
CMD ["node", "index.js"]  # Replace "index.js" with your main Node.js file
