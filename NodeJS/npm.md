# npm(Node Package Manager)

npm은 JavaScript용 패키지 관리자이다.
Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할과 패키지 설치 및 관리를 위한 CLI를 제공한다.

npm을 사용하면 자신이 작성한 패키지를 공개할 수도 있고 
다른 개발자가 패키지로 만들어 놓은 모듈들을
설치하여 사용이 가능하다.

> 모듈이란
>
> 애플리케이션을 구성하는 개별적 요소를 말한다.
> 일반적으로 파일 단위로 분리되어 있으며 필요에 따라 애플리케이션은 명시적으로 모듈을 로드한다.
>
> 모듈을 애플리케이션에 분리되어 개별적으로 존재하다가 애플리케이션의 로드에 의해 비로소 애플리케이션의 일원이 된다.



## package.json과 의존성

Node.js 프로젝트에서 많은 패키지를 사용하게 되고, 패키지의 버전도 빈번하게 업데이트되므로 프로젝트가 의존하고 있는 패키지를 일괄관리할 필요가 있다.

npm은 `package.json` 파일을 통해서 프로젝트 정보와 패키지의 의존성을 관리한다.
이미 작성된 package.json이 있다면 팀 내 배포하여 동일한 개발환경을 빠르게 구축할 수 있는 장점이 있다.

package.json을 생성하려면 프로젝트 루트에서 npm init 명령어를 실행한다.
npm init 명령어에 `--yes` 또는 `-y` 옵션을 추가하면 기본설정값으로 package.json 파일을 생성한다.



npm install [package_name]

- 지정된 패키지를 기본적으로 의존성에 저장한다.
  `./node_modules` 디렉토리에 패키지를 설치하고 끝낸다.

npm install [package_name] --save

- `./node_modules` 디렉토리에 패키지 설치는 물론, `/package.json`의 dependencies에 추가된다. (npm install을 할 때 항상 설치가 된다.)

  > [npm@5](http://blog.npmjs.org/post/161081169345/v500)부터 `--save`는 기본 옵션이 되었다. `--save` 옵션을 사용하지 않더라도 모든 install 명령은 package.json의 dependencies에 설치된 패키지와 버전을 기록한다. 기존의 `--save-dev`은 변경되지 않았다.

npm install [package_name] --save-dev

- 위와같이 --save-dev 옵션을 넣게 되어 `./node_modules` 디렉토리에 패키지 설치는 물론
  `/pakage.json`의 devDependencies에 추가된다.
  npm install 할 때 --producetion 옵션을 붙이면 빠지고 설치된다.

  > `devDependencies` 에는 개발 시에만 사용하는 개발용 의존 패키지를 명시한다. 예를들어 TypeScript와 같은 트랜스파일러는 개발단계에서만 필요하고 배포할 필요는 없으므로 `devDependencies` 에 포함 시킨다.
  >
  > npm install 명령어에 --save-dev (축약형 -D) 옵션을 사용하면
  > 패키지 설치와 함께 package.json의 devDependencies에 설치된 패키지와 버전이 기록된다.

npm install 명령어를 사용하면 package.json에 명시된 모든 의존 패키지를 한번에 설치할 수 있다.

## Reference

> https://jaddong.tistory.com/entry/npm-install-save-save-dev-%EC%B0%A8%EC%9D%B4
>
> https://poiemaweb.com/nodejs-npm