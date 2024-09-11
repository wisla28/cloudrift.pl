# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

#RUN npm run build:css

# Copy the rest of the application code
COPY . .

# Run the application
CMD ["npm", "start"]

