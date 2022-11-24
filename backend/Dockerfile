FROM node:18
ENV CONN_STRING="mongodb://127.0.0.1:27017/laupqq"
ENV PORT=3000
WORKDIR /usr/src/backend
COPY . .
RUN npm ci
EXPOSE ${PORT}
RUN echo ${CONN_STRING}
ENTRYPOINT node index.js