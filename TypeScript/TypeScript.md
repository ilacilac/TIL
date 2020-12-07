# TypeScript

자바스크립트에 타입을 부여한 언어이다.
자바스크립트의 확장된 언어.
자바스크립트와 다르게 브라우저에서 실행할 때, 컴파일을 해줘야 한다.

에러를 사전 방지할 수 있다.

```bash
$ npm i typescript -g
```

> 권한 오류일 때 [참고](https://stackoverflow.com/questions/48910876/error-eacces-permission-denied-access-usr-local-lib-node-modules)



타입스크립트를 자바스크립트 파일로 컴파일

```bash
$ tsc index.ts
```



## 설정파일

매번 돌려주는 것 보다, 모듈 번들러 같은 태스크매니저를 활용하여
반복적인 명령어를 자동화 해서 사용한다.

Root 경로에 `tsconfig.json` 만들어준다.

```json
{
  // compilerOptions : 컴파일 할 때 부가적인 옵션
  "compilerOptions": {
    "allowJs": true, // 이 프로젝트에 자바스크립트를 넣을것인가
    "checkJs": true, // @ts-check => 자바스크립트에서 타입검사기능
    "noImplicitAny": true // 모든 타입에 대해서 기본적인 any 타입이라도 넣어야한다.
  }
}
```



