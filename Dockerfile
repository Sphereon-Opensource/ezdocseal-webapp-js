# build stage
FROM node:14
WORKDIR /build
COPY ./ /build
COPY package*.json ./
RUN yarn policies set-version 1.21.1
RUN yarn install
RUN yarn cache clean
RUN export $(cat .env | xargs) && yarn build

# runtime stage
FROM nginx:stable
RUN apt-get update && apt-get install -y gettext-base
COPY --from=0 /build/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf

RUN mkdir /bootstrap
COPY --from=0 /build/nginx/nginx.conf.template /bootstrap
COPY --from=0 /build/nginx/start-nginx.sh /bootstrap
RUN chmod +x /bootstrap/start-nginx.sh

EXPOSE 80
ENTRYPOINT ["/bootstrap/start-nginx.sh"]

