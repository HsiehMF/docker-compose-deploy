FROM node
WORKDIR /src
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3001
RUN chmod +x entrypoint.sh
ENTRYPOINT ["sh", "/src/entrypoint.sh"]