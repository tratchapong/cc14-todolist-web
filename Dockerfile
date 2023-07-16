# Stage 1 : copy and build

FROM node:18-alpine as build

ARG REACT_APP_SERVICES_HOST=/services

WORKDIR /webapp

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

RUN npm run build

# Stage 2 : after build

FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /webapp/dist /usr/share/nginx/html



