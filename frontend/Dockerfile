# Stage 1: Build the React application
FROM node:16 as build

WORKDIR /app

COPY package*.json ./
RUN npm install
CMD ["npm", "run", "start"]
COPY . .
RUN npm run build


# # Stage 2: Serve the React application with Nginx
FROM nginx:latest

# # Remove the default Nginx configurations
RUN rm -rf /etc/nginx/conf.d/*

# # Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Copy the build files from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 3000 for the Nginx server
EXPOSE 80

# # Start Nginx and serve your built React application
CMD ["nginx", "-g", "daemon off;"]