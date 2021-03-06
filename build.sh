#!/bin/bash

npm --prefix src run build && rm -rf functions/nuxt && cp -r src/nuxt/ functions/nuxt/ && cp src/nuxt.config.js functions/
rm -rf public/* && mkdir -p public/_nuxt && cp -r src/nuxt/dist/client/ public/_nuxt && cp -a src/static/. public/
cd src; nuxt generate; cd -; cp src/dist/sitemap.xml public/