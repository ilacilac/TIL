# Babel

ES6+ / ES.NEXT로 구현된 최신 사양의 소스코드를 IE같은 구형 브라우저에서도 동작하는
ES5 사양의 소스코드로 변환(트랜스파일링) 할 수 있다.

## 설치

```bash
$ npm install --save-dev @babel/core @babel/cli
```

babel/cli 는 command line을 통해 코드를 transpile 할 수 있는 도구이다.

### babel/preset-env

plugin과 preset을 추가 하지 않으면
babel 자체는 아무것도 하지 않는다.

`.babelrc` 

```bash
npm install --save-dev @babel/plugin-transform-arrow-functions
```

```
{
  "plugins": ["@babel/plugin-transform-arrow-functions"]
}
```

babel plugin들을 모아놓고 사용할 설정 파일
하지만 **만약 es6의 기능을 더 쓰고싶다면 매번 npm 패키지를 설치하고 `.babelrc`에 플러그인을 매번 더해야 할 것이다.**

그래서 나온 솔루션이 바로 **preset**이다.

babel foundation에서는 plugin들을 포함한 번들파일을 포함한preset을 만들었다.

공식 preset:

- @babel/preset-env
- @babel/preset-flow
- @babel/preset-react
- @babel/preset-typescript

```bash
npm install --save-dev @babel/preset-env
```

.babelrc 파일에서 preset 섹션을 설정하자

```
{
  presets: ['@babel/preset-env']
}
```

이제 모든 es6기능을 컴파일할 모든 plugin을 얻은것이다.
또한 원하는 브라우저만 지원가능하도록 plugin을 선택할 수 있다.

Babel 플러그인 중에서 public/private 클래스 필드를 지원하는 @babel/plugin-proposal-class-properties를 설치해보자

```bash
npm install --save-dev @babel/plugin-proposal-class-properties
```

```
{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```



트랜스파일링을 할때마다 매번 Babel CLI 명령어를 입력하는것은 번거로우므로 npm scripts에 Babel CLI 명령어를 등록하여 사용하자

```json
{
  "name": "esnext-project",
  "version": "1.0.0",
  "scripts": {
    "build": "babel src/js -w -d dist/js"
  },
  "devDependencies": {
    "@babel/cli": "^7.10.3",
    "@babel/core": "^7.10.3",
    "@babel/preset-env": "^7.10.3"
  }
}
```

위 npm scripts의 build는 src/js 폴더(타깃 폴더)에 있는 모든 자바스크립트 파일들을 트랜스파일링한 후, 그 결과물을 dist/js 폴더에 저장한다. 사용한 옵션의 의미는 다음과 같다.

- -w : 타깃 폴더에 있는 모든 자바스크립트 파일들의 변경을 감지하여 자동으로 트랜스파일한다. (--watch 옵션의 축약형)
- -d : 트랜스파일링된 결과물이 저장될 폴더를 지정한다. 만약 지정된 폴더가 존재하지 않으면 자동 생성한다. (--out-dir 옵션의 축약형)

### babel-loader

Webpack이 모듈을 번들링할 때 Babel을 사용하여 ES6+ / ES.NEXT 사양의 소스코드를 ES5 사양의 소스코드로 트랜스파일링 하도록 babel-loader를 설치한다.

```
npm install --save-dev babel-loader
```



## Reference

> https://velog.io/@pop8682/%EB%B2%88%EC%97%AD-%EC%99%9C-babel-preset%EC%9D%B4-%ED%95%84%EC%9A%94%ED%95%98%EA%B3%A0-%EC%99%9C-%ED%95%84%EC%9A%94%ED%95%9C%EA%B0%80-yhk03drm7q
>
> https://poiemaweb.com/fastcampus/es6-environment