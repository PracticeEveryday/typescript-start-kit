# typescript-start-kit

## 소개

-   TypeScript Express 프레임워크를 사용하여 서버를 바로 실행시키는 Startkit입니다.

### npx로 한 번에 실행하기

-   `npx typescript-startkit [repoName]`
    -   링크: https://www.npmjs.com/package/typescript-startkit

### git clone 후 실행하기

-   dev

1. `git clone https://github.com/PracticeEveryday/typescript-start-kit.git`
2. `cd typescript-start-kit`
3. `yarn install`
4. `yarn start:dev`

-   prod

1. `git clone https://github.com/PracticeEveryday/typescript-start-kit.git`
2. `cd typescript-start-kit`
3. `yarn install`
4. `yarn start:prod`

---

### Test API

-   `GET /`

```js
// response
{
  "message": "Hello, this is Node.js, Express.js and TypeScript."
}
```

**Error Test**

-   `GET /error`

```js
{
  "errorCode": 500,
  "errorMessage": "에러 테스트"
}
```

-   `GET /error/Custom`

```js
{
  "errorCode": 400,
  "errorMessage": "커스텀 에러 테스트"
}
```

-   `GET /a`

```js
{
  "errorCode": 404,
  "errorMessage": "커스텀 에러 테스트 not found"
}
```
