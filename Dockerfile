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
COPY --from=0 /build/nginx/nginx.conf.template /tmp
RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf
RUN envsubst < "/tmp/nginx.conf.template" > "/etc/nginx/nginx.conf"
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
