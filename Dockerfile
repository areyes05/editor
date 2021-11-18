FROM nginx:latest
COPY ./frontend/dist/fb /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d
