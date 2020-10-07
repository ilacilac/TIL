// generic
// 타입을 파라미터로
// 다양한 타입을 지원하게끔

// generic을 이용해서 타입을 파라미터화 한다.
// 타입변수라고도 불림
// x를 T라는 타입으로 정의한다.
function createPromise<T>(x: T, timeout: number) {
  return new Promise((resolve: (v: T) => void, reject) => {
    setTimeout(() => {
      resolve(x);
    }, timeout);
  });
}
// <string> : T가 string이 된다.
createPromise<string>("1", 100).then((v) => console.log(v));
