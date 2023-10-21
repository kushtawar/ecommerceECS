# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app/

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's source code
COPY ./ ./

# Expose port 5000 for the Express server
EXPOSE 5000

# Start the Express server
CMD ["npm", "run", "server"]
