Keycloak auth example:
https://blog.stackademic.com/how-to-secure-dotnet-vue-application-with-keycloak-50af55c21236

Docker instructions:
https://blog.openreplay.com/deploying-vue-apps-to-the-cloud-with-kubernetes/

Frontend dockerize:
docker build -t frederikkrogh/webapp-frontend .   
docker push frederikkrogh/webapp-frontend:latest    
docker run -d -p 8080:80 frederikkrogh/webapp-frontend


# AKS
docker buildx build --platform linux/amd64 -t frederikkrogh/webapp-backend:amd64 .

docker buildx build --platform linux/amd64 -t frederikkrogh/webapp-frontend:amd64 .


docker push frederikkrogh/webapp-frontend:amd64 
docker push frederikkrogh/webapp-backend:amd64 

# Deployment
Connect to VM: ssh -i ~/Gemmekassen/fk-deployment_key.pem azureuser@20.240.236.19