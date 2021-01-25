#!/bin/zsh
trap "kill 0" EXIT
trap "exit" INT TERM ERR

python -m http.server 8080 -d public &

while true; do
    zola build --base-url "http://localhost:8080/"
    sh ./cleanup.sh
    inotifywait -e modify,create,delete -r templates content static sass
done

wait

