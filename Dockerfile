FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Run
#ENV NODE_ENV production
#EXPOSE 3000
#CMD [ "npx", "serve", "build" ]
