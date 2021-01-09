#!/bin/zsh
zola build \
    && rm -rf public/bio public/contacts public/research/content public/404.html public/robots.txt public/sitemap.xml \
    && mv public/teaching/index.html public/teaching.html \
    && mv public/research/index.html public/research.html \
    && rm -rf public/teaching public/research

