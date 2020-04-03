# 2020-04-03

## 반응형디자인 콘텐츠 영역 실습

**실습01 : h2헤딩태그 공통 클래스값을 주어 스타일 적용하기**

- 선택자 고민

  h2 : classNaming / 공통적(배경 : sprite, 글꼴크기 : ) 이부분튜닝

```css
/* 민지 코드 */
/* booktitle에 줬던 크기를 아래와 같이 공통클래스로뺌 */
.common__contentsTitle {
  font-size: 2rem;
  padding-top: 0.5rem;
}
.common__enTitle {
  display: block;
}

/* 공통 섹션 제목 */
.sprite {
  height: 60px;
  background-image: url(./images/sprite_main.png);
  background-repeat: no-repeat;
  padding-left: 65px;
}
.spriteBook {
  background-position: 0 0;
}
.spriteNews {
  background-position: 0 -230px;
}
.spriteBoard {
  background-position: 0 -115px;
}
.spriteTwitter {
  background-position: 0 -460px;
}
.spriteFavorite {
  background-position: 0 -345px;
}
.themeGreen {
  color: #abd375;
}
.themeYellow {
  color: #e8ca58;
}
.themeBrown {
  color: #c7b39a;
}
.themeSkyblue {
  color: #6aaee6;
}
.themeOrange {
  color: #eeab0a;
}
.responsive {
    max-width: 100%;
    height: auto;
}
```

**의문점** : 실습한것처럼 클래스 하나하나에 Background-position 주는건 노가다 아니야?

- 그래서 아에 이미지 자체를 머지할 때 배경위치를 도출해주는
  [걸프(Gulp.js - 작업을 일일히 쉽게해주는 절차)](https://ko.wikipedia.org/wiki/Gulp.js) / [그런트(Grunt)]([https://ko.wikipedia.org/wiki/%EA%B7%B8%EB%9F%B0%ED%8A%B8](https://ko.wikipedia.org/wiki/그런트)) 같은환경에서
  [태스크러너](https://gruntjs.com/)(이와같은 확장프로그램 그런것을 이용하면
  디자이너가 아까 스프라이트 이미지 6개에 맡개로 준비해서
  하나의 폴더 / 명령어 / 한장짜리 이미지를 하나로 머지해줌 > 똑똑하게 / 
  공백조절도가능 / 합쳐준다음에 css파일이 만들어져있는데 좌표값이 다 나와있음 그 좌표를 카피해서 붙여도 됨

  우리가 실습에서 안쓴이유는 가장 기본적인 베이스를 이해하고나서 생산성을위해 이러한걸 쓸 수 있게 일일히 하드코딩 해보는거임 

- 속성선택자로 공통으로 잡아보자

  $선택자는 한개일때만 작동
  *는 전체를 잡음

  ```css
  .appMain [class*="__title"] {
    font-size: 1.8rem;
    padding-top: 0.5rem;
  }
  .appMain [class*="__enTitle"] {
    display: block;
  }
  ```



### 새소식 콘텐츠 영역

**figure > video + figcaption.a11yhidden + p + time**

- `<video>`

  플러그인 사용안해도됨

  보통 youtube / vimeo 많이사용함 `iframe`

  `source`를 여러개 포함할 수 있다 
  (크로스브라우징 이슈(로열티문제) / 맥 : mov, 윈도우 : avi, 웹 : mp4 ... ogv,ogg,webm)
  과거엔 5개씩 요즘은 모던브라우저가 mp4를 지원하여 mp4사용

  멀티미디어 개체는 반드시 자막이 올라가야함
  비디오는 하나이지만 track은 여러개 있을 수 있음
  `track` 웹 자막 포맷 : vtt

- `time`에 들어가는 아이콘은 `span`으로 묶어주면 스타일링 하기 편함



1. 비디오의 유연한 크기조절을 위해 class명 `video.news__video.responsive`

   ```html
   /* 민지 코드 */
   <div class="videoWrap">
   	<iframe class="responsive" src="https://www.youtube.com/embed/h_sh7qjFYSY?		start=7" frameborder="0" allowfullscreen></iframe>
   </div>
   ```

   

   `iframe`은 인라인이라 높이를 고정을 못한다

   - 밖에 `div`로 그루핑해주기 / 그 안에 `iframe`

   - **padding tric**

     `div.iframeContaienr > iframe.iframe4to3 (4:3비율, 16:9 .. 다양한 비율)`
     4:3 = 가로가 100%일때 세로는 75%

     padding : 백분율을 정해줬을때의 기능

     padding top을 줄거임(container자체에), 가로크기 반응해서 

     높이기준이 아닌 너비기준으로 %임 그래서 4:3비율을 맞출 수 있는거임

     그럼 `iframe`콘텐츠가 밀려날거임 그래서 `position: absolute`를 줌 > 
     아이프래임이 레이어가 되고 높이는 인식할 수 없을거고 
     컨테이너만 4:3 될거임 
     !!그래서 부모크기를 인식할 수 있으니 `iframe`에 width,height를 100%를 준다

     .iframe4To3 : 클래스명 / 4:3 비율일때 불러올 수 있게 쪼개놈

     

   **padding example**

   height를 유연하게 주고싶어

   50% 주면 안되? > 동작 안하는 느낌 : 부모요소를 인식해! 나는 내가 가진 박스의 위드크기에 비례해서 동작했으면
   좋겠어! > 패딩은 그렇게 동작하는것 같은데? height를 0 줌 (더해지지 않게) 



### board

```css
/* 민지 게시판 */
.board {
  position: relative;
}
.board__list a{
  vertical-align: middle;
  display: inline-block;
  width: 60%;
  padding: 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.board__list time {
  vertical-align: middle;
}
.board__list .icon-star::before {
  vertical-align: middle;
}
.board__more {
  position: absolute;
  right: 0.5rem;
  top: 18px;
}
```

고정형예제와 다르게 flex로 해결해보기

```css
.board__list a {
  overflow: hidden;
  white-space: nowrap;
  flex-grow: 1; 
  text-overflow: ellipsis;
  padding: 0.5em 0;
}
/* time태그 빼고 남은여백을 다 a가 차지하게 됨 */
```

 

**Favorite Site**

data- : 표준(사용자정의속성)

::after content에 attr 로가져와서 뿌려주기

```css
.favorite__list li {
    margin: 20px 0;
    list-style: none;
    counter-increment: olNum;
    line-height: 40px;
  }
  .favorite__list li::before {
    content: counter(olNum);
    background-color: #eeab0a;
    display: inline-block;
    text-align: center;
    color: #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  .favorite__list a {
    position: relative;
    display: inline-block;
  }
  .favorite__list a:hover {
    color: red;
  }
  .favorite__list a:hover::after {
    content:attr(data-tooltip);
    position: absolute;
    top: 100%;
    right: -70%;
    z-index: 1;
    width: 100%;
    padding: 0px 10px;
    text-align: center;
    color: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #eeab0a;
    box-shadow: 3px 3px 0 0 #000;
  }
```

Li agent-style로 들어간 리스트스타일은 직접 꾸밀 수 없음



[CSS](https://developer.mozilla.org/ko/docs/Web/CSS) **`var()`** 함수는 [사용자 지정 속성](https://developer.mozilla.org/ko/docs/Web/CSS/--*), 또는 "CSS 변수"의 값을 다른 속성의 값으로 지정할 때 사용합니다.

모바일 한정이면 사용할 수 있다 

(or SASS를 사용하거나)



**위의 예제를 참고하여 이미지 alt속성을 가져와서 툴팁으로도 활용할 수 있음**

```css
img:hover::after {
  
}
```

**그렇다고 위와같이 처리하면 문제가 됨**
`img` 는 자식요소를 가질 수 없음 그래서 가상요소 선택자를 사용해서 콘텐츠를 만들어도 브라우저에서 작동을안한다.

(스크립트 영역이지 않을까라고 생각함)



**트위터 영역**

<code>dl > dt.a11yHidden + dd + dt.a11yHidden + dd figure > img(content로써의 가치 x, alt="") + figcaption.a11yHidden</code>

```css
/* 공통 트위터 */
.twitter__container {
  overflow: hidden;
}
.circlePhoto {
  border-radius: 50%;
  border: 1px solid #000;
}
.twitter__userInfo {
  float: left;
}
.twitter__userInfo dd{
  margin-left: 0;
  display: inline-block;
  font-size: 1.4rem;
}
.twitter__userProfile {
  float: right;
  width: 20%; 
}
.twitter__userProfile img {
  max-width: 100%;
  height: auto;
}
.twitter__summary {
  clear: both;
  display: inline-block;
  width: 60%;
  margin: 0;
  font-size: 1.2rem;
}
.twitter__date {
  display: block;
  width: 60%;
  text-align: right;
  font-size: 1.4rem;
  margin-top: 10px;
}

```



**아래와 같은 방법으로 배치 할 수 있음**

1. float : fl, fr, fl, fr (width 필요)

2. **position: padding-right20% / img : 20%**

3. grid

+++



