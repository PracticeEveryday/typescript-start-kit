# 첫 번째 단계: "builder"라는 이름의 중간 이미지를 생성합니다.
FROM node:latest AS builder

# 작업 디렉토리를 설정합니다.
WORKDIR /node/src/app

# yarn.lock 및 package.json 파일을 현재 작업 디렉토리로 복사합니다.
COPY yarn.lock package.json ./
COPY tsconfig.json ./

# 패키지 의존성 설치를 실행합니다. --frozen-lockfile 옵션은 락 파일의 불변성을 보장합니다.
RUN yarn install --frozen-lockfile

# 빌드하는 데 필요한 파일을 복사합니다.
COPY . .

# 애플리케이션을 빌드합니다.
RUN yarn run build

# 두 번째 단계: 작은 크기의 "node:18-alpine" 이미지를 사용합니다.
FROM node:18-alpine

# /app 디렉토리를 생성합니다.
RUN mkdir /app

# 빌더 단계에서 생성된 애플리케이션의 빌드 결과물을 /app/dist로 복사합니다.
COPY --from=builder /node/src/app/dist /app/dist

# 빌더 단계에서 생성된 패키지 의존성(node_modules)을 /app/node_modules로 복사합니다.
COPY --from=builder /node/src/app/node_modules /app/node_modules

# env 파일을 복사합니다.
COPY --from=builder /node/src/app/.env /

# 컨테이너가 3000 포트에서 수신 대기할 것을 설정합니다.
EXPOSE 8080

# 컨테이너가 시작될 때 실행할 명령을 정의합니다.
CMD ["node", "app/dist/src/bin/index.js"]