# Webpack

Webpack은 의존관계에 있는 자바스크립트, CSS, 이미지 등의 리소스들을 하나(또는 여러 개)의 파일로 번들링하는 모듈 번들러다.

Webpack을 사용하면 모듈이 하나의 파일로 번들링되므로 별도의 모듈 로더가 필요 없다.

```bash
$ npm install --save-dev webpack webpack-cli
```

## webpack.config.js

Webpack이 실행될 때 참조 설정하는 설정파일이다.
프로젝트 루트폴더에 webpack.config.js 파일을 생성하고
다음과 같이 작성한다.

```js
const path = require('path');

module.exports = {
  // entry file
  // https://webpack.js.org/configuration/entry-context/#entry
  entry: './src/js/main.js',
  // 번들링된 js 파일의 이름(filename)과 저장될 경로(path)를 지정
  // https://webpack.js.org/configuration/output/#outputpath
  // https://webpack.js.org/configuration/output/#outputfilename
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },
  // https://webpack.js.org/configuration/module
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/configuration/mode
  mode: 'development'
};
```



## sourcemap

빌드한 후의 결과물 / 전의 결과물의 연결을 시켜준다.



## 주요 속성

entry

- 웹팩으로 entry파일을 돌려서 output으로 결과물을 뽑아낸다.
- output으로 뽑아낼때 관여하는게 loader이다.

loader

- 자바스크립트가 아닌 css, img같은 파일들을 웹팩 내부적으로 소화할 수 있게 
  인식시켜줄 수 있는 속성

ouput

- entry파일을 변환(번들링, 빌드)한 파일

plugin

- 웹팩으로 변환한 파일에 추가적인 기능을 더하고 싶을 때 사용하는 속성

  ex) css코드를 output의 자바스크립트 안에 있을 경우 플러그인을 사용하여
  추출하여 결과 파일을 변형할 수 있다.



