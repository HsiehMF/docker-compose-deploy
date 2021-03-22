FROM node:alpine
WORKDIR /src
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
RUN chmod +x entrypoint.sh
ENTRYPOINT ["sh", "/src/entrypoint.sh"]
