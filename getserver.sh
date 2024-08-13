#!/bin/bash
mkdir -p ./server
cd ./server
echo "Updating server files"
java -jar ../prism/.minecraft/packwiz-installer-bootstrap.jar -g -s server https://swimmau5.github.io/tragically_falling/pack.toml
