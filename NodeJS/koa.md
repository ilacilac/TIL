# Koa
- Node.js 웹 프레임워크
- Node.js로 서버를 개발 할 때 사용
- 미들웨어의 배열로 구성되어있다.

```jsx
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

## koa-router

```jsx
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
