#!/usr/bin/env sh
set -eu
rm -rf dist
mkdir -p dist
cp index.html city.js city.json folders.js city.obj buildings.csv talca-logo.svg dist/
cp public/manus-routes.json dist/manus-routes.json
