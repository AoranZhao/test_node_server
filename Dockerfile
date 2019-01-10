FROM aoran/node:11
COPY . /code
WORKDIR /code
RUN npm install
CMD ["node", "index.js"]