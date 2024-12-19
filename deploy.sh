

docker-compose down

git restore .
git pull origin main


docker build . -t node23

docker-compose up -d
