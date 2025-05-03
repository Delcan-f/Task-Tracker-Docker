# Step 1: Use official Node.js image as the base image
FROM node:16-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Expose the port the app will run on (default for Express is 3000)
EXPOSE 3000

# Step 7: Define the command to run the app inside the container
CMD ["npm", "start"]
