#!/bin/zsh

# Cleanup files so the site can be manually deployed more easily
rm -rf public/bio public/contacts public/research/content public/404.html public/robots.txt public/sitemap.xml
mv public/teaching/index.html public/teaching.html
mv public/seminars/index.html public/seminars.html
mv public/research/index.html public/research.html
rm -rf public/teaching public/research public/seminars
