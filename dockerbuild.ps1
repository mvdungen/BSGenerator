
# aanpassingen > eventueel kun je de naamgeving nog aanpassen...

# build nieuwe image 

docker build -t mvdungen/testprdtennis .

# run image > dus niet met -rm of -it, dan runt de container door en kun je de container
# altijd bereiken als je laptop open staat
# docker run -p 8080:80 --name PRDTennis mvdungen/testprdtennis