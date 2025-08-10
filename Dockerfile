# Dockerfile
# Step 1: Use Node.js as base
FROM node:20-alpine

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and lock files first (for caching)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy rest of the project
COPY . .

# Step 6: Build the Next.js app
RUN npm run build

# Step 7: Expose port 3000 for the container
EXPOSE 3000

# Step 8: Start the app
CMD ["npm", "start"]
