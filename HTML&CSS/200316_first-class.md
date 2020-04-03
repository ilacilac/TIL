### Internet

Usenet : ex) 다음카페, 관심분야

IRC : ex) 채팅서비스

Archie : ex) 검색서비스 

예전엔 인터넷서비스가 따로따로 존재했음
기존에있던 서비스를 하나로 통일

World Wide Web [웹서비스]

- 팀 버너스 리 : 웹의 아버지



[Back-End]

- Server
- Database
- Application Layer

[Front-End]

- Client
- Web Browser
- Presentation Layer



<code>html</code> : 구조, 건강한 신체
<code>css</code> : 옷같은 언어, 근사한 스타일링, 재사용을 어떻게 해야하는가의 감각, 패턴
<code>JS</code> : front의 꽃, 스마트한 두뇌

이러한 기술을 웹 표준기술
웹표준은 누가 만드나?  - W3C (consortiums), 웹기술 주도하는 단체
밴더가먼저 기술을 만든담에 > W3C에 등록 요구

제프리 젤드만의 웹표준 가이드 
: 읽어보면 좋을 책

접근가능한 서비스를 지향해야함(웹접근성)
보편성, 장애에 구애받지 않고 접근할 수 있어야함

Web Accessibility

- 마우스가없는 키보드로도 접근 할 수 있는 서비스
- 시각장애(전맹(화면을 전혀 볼 수 없는), 저시력) 를 위한 핸드폰에서 읽어주는 서비스 (ex : 보이스오버)

환경에 대한 이해

- 다양한 platform
- Cross Browsing
- SEO(search engine optimization)
- 저사양 또는 저속회선(ex:뉴질랜드 ..)

접근성을 중시하면 성능도 좋아짐



표준기술 : Html4.0, xhtml1.0, html5

Html4.01는 문법이 느슨함

- 대소문자 구별 안해도됨

- 종료태그가 없어도됨
- value를 "",'', 생략가능
  - html속성 : attr, css속성 : prop (차이점?)

너무 코드들이 개성넘친다.
html이 점점 문서가 파워풀해지면서
이런 단순함이 약점으로 잡힘
w3c에서 xml을도입(확장)

- 태그명령어로 이용해서 의미부여

  <패캠><강사>김데레사</강사></패캠>

- 왜 확장하느냐? (지금은 xml보다 json을 많이 사용)

  데이터 전달할때 많이 사용했음

  데이터를 주고받기위한 표준이였음

  무조건 명령태그는 

  - 소문자

  - 종료태그 필수

  - 논리속성(값을갖지 않은속성) 허용 안함

    <input checked /> no

    <input checked="checked" /> yes

  - xhtml은 이런까다로움때문에 시장에서 실패했지만 이러한 엄격한 문법때문에 사용하는 업체도 종종있음

  - ie,ms / chrome google / safari apple / firefox mozila / opera opera software (major band) 

  - 애플, 모질라, 오페라 소프트웨어가 공동으로 설립한 공개그룹 WHATWG가 W3C와 별개로 web application 1.0과 web forms 2.0을 만들어 냄

  - 표준은 권고하는거임

  - W3C가 공개적으로 2007년에 xhtml 2.0의 실패 인정

  - html5에(마크업 / api포함) 

  - 기존 html과 html5는 엄청난 큰 차이이다.

  - 기술이 왜 바꼈으며 어떤 환경인지 기반적인 지식 알고가자



## HTML5

flow

명령어 마다 2~3개 포함

Button, a : click가능한 모델 / 두개를 포함할 수 없다.

마크업 하고 유효성 검사하면서 컨텐츠의 유기적인 관계를 경험적으로 깨닳아야함

```html
<ul>
  <li></li>
  <div></div> <!-- 컨텐츠 모델상 허용하지 않음 -->
</ul>
```



#### 아웃라인 알고리즘

- 정보 구조를 명확히 알 수 있음
- 검색최적화에서 이점도 많음
- 계층구조



HTML5의 API

- Web Storage
- Web SQL
- Application Cache
  - 구글맵! 미리 검색해놓으면 사용가능함
- Web Workers
  - 내가 다 짜지않아도 가져와서 응용할 수 있다
- Web Socket
- Notification



#### HTML5 서식

- HTML4.01, XHTML 둘다 허용
  - react사용시 empty태그도 closing태그 사용해서 사용하는게 편함
  - 소문자 사용
  - 논리속성(기존방식, 조금이라도 줄이는 방식)
  - html, css "" / js는 ''
    - 왜? - html, css가 js안에 들어오는 경우가 생길 수 있으므로
  - Parent node / child node
  - 속성을 중복하여 선언할 수 없음



3단구조 : 헤더(네비게이션) / 콘텐츠 / 푸터 (고정형)
4단구조 : 헤더 / 네비 / 콘텐츠 / 푸터 (반응형)



<code>header</code> : body, article, section의 머릿말로 사용할 수 있음

새로운 기술스펙 wai-aria 

- 쉴버라이트플러그인(?), 플래쉬 등등 기술 = 리아기술

- aria : 리아기술을 접근가능하게 한다

  - role이라는 attr을 줌으로서 의미부여

    wai-area의 기술을 빌어 시멘틱한 코드로 만들어준다(html5 이전)

    ```html
    <div class="header" role="banner"></div>
    ```

  - 위의코드보단 native 코드인 <code>header</code>사용 권장

  - 둘다사용하는건 권장하지 않는다

- div는 tab접근 안됨 

  그래서 아래와 같은 태그로 같은 디자인이라 해도 아래와같이 작업해줘야함

  ```html
  <button></button>
  <div role="button" tabindex="0"></div> 
  <!-- + click, keyup을 추가해줘야함 -->
  ```

- 주요콘텐츠 <code>main</code>

  가장 중요한 콘텐츠이므로 한번만 사용할 수 있다

- 부가콘텐츠 <code>aside</code>

  주로 주식, 날씨정보를 담음

  따로 빼더라도(레이아웃상) 문제가 없어야함

- <code>footer</code> 

- 전체를 그룹핑 : <div class="container">

이러한 정보는 공식래퍼런스를 보고 공부해야함

md파일은 내 생각을 담아 책처럼 만들면 좋음

협업할 때는 네이밍 컨벤션, 규칙성을 가지고 가는것이 필요함



Strict dtd : 엄격모드
frameset dtd : 
Transitional did :



360x640 px : 검정색 화면의 너비 밀도가

1440 x 2558

css pixel radio 4 : 밀도가 점 하나당 4

브라우저가 1440으로 인식되는거임

그 뷰를 실제 디바이스크기로 고쳐달라고 요청

초기비율은 확대하지않고 1.0 



gutther

레이아웃 : 가로세로크기 여백정보



modern layout 기법 : flex, grid(ie11(부분지원), 안드로이드 4.0버전 호환안됨)

Css3, html5는 마케팅적용어

css3사용한다 = css의 최신버전을 사용한다

margin: 0 auto; : auto - 전체너비 - 컨텐츠크기 / 2 자동으로 계산

이런문제를 발견했고 이런걸 개선했다 (ex : 이미지최적화 15mb > 웹용으로 저장)



#### 스터디방향

- 배치에 관련된것 : position, float, flex, grid는 직접 코드까지 구현, 응용해보야함
- 벤치마킹하여 비슷하게 만들어보는 연습
- 한번이상 나머지는 영상강좌 듣기
- MDN 래퍼런스가 가장 정확함


+++



### [FLEX 개념 정리]

#### Flex Container

+++

| 속성      | 의미                                   |
| --------- | -------------------------------------- |
| Display   | Flex container를 정의                  |
| flex-flow | flex-direction와 flex-wrap 의 단축속성 |

