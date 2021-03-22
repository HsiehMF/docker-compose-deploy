FROM node
WORKDIR /src
COPY package.json .
RUN npm install --save -g core-js@^3
RUN npm install
COPY . .
EXPOSE 3000
RUN chmod +x entrypoint.sh
ENTRYPOINT ["sh", "/src/entrypoint.sh"]