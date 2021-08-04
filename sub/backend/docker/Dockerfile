FROM node

RUN apt-get update -yq \
  && apt-get clean -y

ADD . /app/
WORKDIR /appc
RUN yarn install

EXPOSE 5000

CMD node server.js
