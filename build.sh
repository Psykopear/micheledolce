#!/bin/zsh
trap "kill 0" EXIT
trap "exit" INT TERM ERR

python -m http.server 8080 -d public &

while true; do
    zola build \
        && rm -rf public/bio public/contacts public/research/content public/404.html public/robots.txt public/sitemap.xml \
        && mv public/teaching/index.html public/teaching.html \
        && mv public/seminars/index.html public/seminars.html \
        && mv public/research/index.html public/research.html \
        && rm -rf public/teaching public/research public/seminars
    inotifywait -e modify,create,delete -r templates content static sass
done

wait
