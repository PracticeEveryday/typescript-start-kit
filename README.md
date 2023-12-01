# typescript-start-kit

## Description

-   TypeScript Express 프레임워크를 사용하여 서버를 바로 실행시키는 Startkit입니다.

### npx로

-   `npx typescript-startkit [repoName]`
    -   링크: https://www.npmjs.com/package/typescript-startkit

### git clone

-   dev

1. git clone https://github.com/PracticeEveryday/typescript-start-kit.git
2. cd typescript-start-kit
3. yarn install
4. yarn start:dev

### docker 
1. build: docker build . -t test-app
2. run: docker run -d -p 8080:8080 --name test-app
---

### Test API

-   `GET /`

```json
{
  "message": "Hello, this is Node.js, Express.js and TypeScript."
}
```

**Error Test**

-   `GET /error`

```json
{
  "errorCode": 500,
  "errorMessage": "Error!"
}
```

-   `GET /a`

```json
{
  "errorCode": 404,
  "errorMessage": "Not Found Endpoint"
}
```
