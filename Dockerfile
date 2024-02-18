FROM node:20.11-alpine

WORKDIR /app

COPY package.json .
RUN npm install

# Copy the application code
COPY . .

# Build the Next.js application
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]


