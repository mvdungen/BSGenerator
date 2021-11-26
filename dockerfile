# use nginx as web service
FROM nginx

# copy build folder to nginx html folder for static service
COPY build /usr/share/nginx/html

# expose normal http port
EXPOSE 80

# start nginc web server
RUN service nginx start
