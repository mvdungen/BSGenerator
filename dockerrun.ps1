
# -it       = interactive with console
# --rm      = remove container when bash exists
# -v        = volume mapping /c/testapp = local folder on c:\testapp, ':/usr/src/testapp' = working folder in container  
# -w        = working folder in container
# -p        = port mapping from container to windows host
# -e        = needed to make sure that 'npm start' is polling on port 3000
# teracy/create-react-app   = image name from docker
# /bin/bash                 = first command to execute when running

docker run                                                  `
    -it --rm                                                `
    -v "/c/Projecten/BSGenerator:/usr/src/bsgenerator" --name ReactBSGeneratorDev    `
    -w /usr/src/bsgenerator                                 `
    -p 3000:3000                                            `
    -e CHOKIDAR_USEPOLLING=true                             `
    teracy/create-react-app                                 `
    /bin/bash