#!/bin/sh
zola build --base-url "https://docler/me/micheledolce"
sh cleanup.sh
rm -rf docs
mv public docs
