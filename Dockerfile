FROM nginx:alpine

ARG VERSION=1.0.0
LABEL version=$VERSION

COPY nginx.conf /etc/nginx/conf.d/default.conf

ADD src /app