FROM node:alpine

ADD . /app

WORKDIR /app
RUN ["npm", "install"]
RUN ["npm", "run", "build"]

FROM nginx:alpine

ARG VERSION=1.0.0
LABEL version=$VERSION

COPY nginx.conf /etc/nginx/conf.d/default.conf

ADD src /app

# Add the compiled bundle
COPY --from=0 /app/src/bundle.js /app