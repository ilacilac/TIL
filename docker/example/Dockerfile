# Dockerfile
# Docker 이미지가 어떤 단계를 거쳐 빌드되야 하는지를 담고 있는 텍스트 파일

# FROM : base이미지 지정, Dockerfile에 최상단에 위치, 
# 일반적으로 Docker Hub와 같은 Docker repository에 올려 놓은 잘 알려진 공개이미지
FROM node:12-alpine

# WORKDIR : 컨테이너 상에서 작업 디렉토리로 전환을 위해서 사용
# RUN, CMD, ENTRYPOINT, COPY, ADD 명령문은 해당 디렉터리를 기준으로 실행
WORKDIR /example
COPY package*.json ./

# RUN : 이미지 빌드과정에서 필요한 커맨드를 실행하기 위해 사용
RUN npm install --silent
COPY . .

# CMD : 해당 이미지를 컨테이너로 띄울 때 디폴트로 실행할 커맨드 지정
CMD ["npm", "start"]
EXPOSE 3000