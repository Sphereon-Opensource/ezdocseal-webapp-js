docker build -t ezdocseal-webapp .
docker tag ezdocseal-webapp:latest 718258401100.dkr.ecr.eu-west-1.amazonaws.com/sphereon-sites/ezdocseal-webapp
docker login -u AWS -p $(aws ecr get-login-password --region eu-west-1) 718258401100.dkr.ecr.eu-west-1.amazonaws.com
docker push 718258401100.dkr.ecr.eu-west-1.amazonaws.com/sphereon-sites/ezdocseal-webapp:latest
