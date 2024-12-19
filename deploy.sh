
git restore .
git pull origin main

docker build . -t node23

docker-compose down

docker-compose up -d
