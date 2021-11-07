#!/bin/bash

echo "Building api..."
docker-compose -f ./server/api/docker-compose.yml up -d --build

echo "Building client: storefront..."
docker-compose -f ./client/storefront/docker-compose.yml up -d --build 

echo "Building client: admin..."
docker-compose -f ./client/admin/docker-compose.yml up -d --build 