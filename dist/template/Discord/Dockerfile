# ! Build the image as : didockerize
# We start with the latest node's image
FROM node:latest
# Set our directory 
WORKDIR /app
# Copy our directory
COPY . /app
# Install dependencies
RUN npm i discord.js@12.5.3
# Run our code
CMD ["node", "index.js"]