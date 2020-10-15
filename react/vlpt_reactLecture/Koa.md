# Koa

- Node.js 웹 프레임워크
- Node.js로 서버를 개발 할 때 사용

```js
const Koa = require('koa');
const app = new Koa();

// app.use => 이 함수는 미들웨어 함수를 애플리케이션에 등록한다.
// ctx => Context :: 웹 요청과 응답에 관한 정보
// next =>  현재 처리중인 미들웨어의 다음 미들웨어를 호출
app.use(async (ctx, next) => {
  console.log(ctx.url);
  console.log(1);
  // next();
  if (ctx.query.authorized !== '1') {
    ctx.status = 401; // Unauthorized
    return;
  }
  await next();
  console.log('END');
});

app.use((ctx, next) => {
  console.log(2);
  next();
});

app.use((ctx) => {
  ctx.body = 'hello world';
});

app.listen(4000, () => {
  console.log('Listening to port 4000');
});

```



## nodemon

서버 코드를 변경할 때마다 서버를 재시작을 자동으로 해준다.

```bash
$ yarn add --dev nodemon
```

```js
// package.json

{
    "scripts": {
		"start": "node src",
         "start:dev": "nodemon --watch src/ src/index.js"
    }
}
```



## koa-router

```js
/* eslint-disable no-undef */
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// 라우터 설정
router.get('/', (ctx) => {
  ctx.body = '홈';
});
router.get('/about/:name?', (ctx) => {
  const { name } = ctx.params;
  // name의 존재 유무에 따라 다른 결과 출력
  ctx.body = name ? `${name}의 소개` : '소개';
});
router.get('/posts', (ctx) => {
  const { id } = ctx.query;
  // id의 존재 유무에 따라 다른 결과 출력
  ctx.body = id ? `포스트 #${id}` : '포스트 아이디가 없습니다.';
});

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});

```

파라미터 / 쿼리 : 특정 값을 받아 올 때 사용

**파라미터** : 
처리할 작업의 카테고리를 받아오거나, 고유 ID 혹은 이름으로 특정 데이터를 조호할 때 사용한다.

**쿼리** :
옵션에 관련된 정보를 받아온다.
ex) 여러 항목을 리스팅하는 API라면, 어떤 조건을 만족하는 항목을 보여줄지 또는 어떤 기준으로 정렬할지를 정해야 할 때