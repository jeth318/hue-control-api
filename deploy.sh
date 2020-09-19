#!/usr/bin/env bash
cd /home/pi/Apps/hue-control-api
echo "Stashing lock files"
git stash

echo "Dropping stash"
git stash drop

echo "Pulling from Master"
git pull origin master
echo "Pulled successfully from master"

echo "Installing dependencies..."
npm ci
echo "Dependencies were installed"

echo "Rebuilding application"
npm run build

echo "Rebuild OK"
echo "Deployment complete, and it was a success!"
exit 0
