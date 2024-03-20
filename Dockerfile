FROM node:20.11-alpine

WORKDIR /app

COPY package.json .
RUN npm install

ENV NEXT_PUBLIC_BASE_URL="localhost:3000"

# Copy the application code
COPY . .

# Build the Next.js application
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]


