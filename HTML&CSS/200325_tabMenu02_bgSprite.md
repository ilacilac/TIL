### box-sizing

inline-block 특성 : inline 
(가로세로, padding margin 위아래 값 못줌 
text처럼 옆으로 흐름
이 특징을 가지게 됨) 

input : inline-block 속성

+++

**tab menu 합리적인 코드작업 해보기**

- ul : 노멀플로우 벗어나면 안되는 객체)
- Position / grid(모던 기법이기때문에 혼자 실습해보기)

Absolute : offset Parent(상위요소의 기준점)

- offset : 상하좌우 좌표
- Static이 아닌 상위요소(offset parent)를 찾아 감 



.board를 기준으로 잡는게 합리적

h2는 배치가 되어있고 그 a는 하나

position 여백조절하기 유연하지않음 > 이건 그리드로 개선되고있음

겹쳐있을 때 자료실이 더 위에있음(탭 헤딩) : 마지막 마크업하는게 위로 올라옴 - 활성화되어있을때는? 위로 겹쳐야함 : z-index

js로 제어하는 클래스명엔 important많이 씀

ul a에 nowrap주고 ovh를주니깐 디센더에 여백이 남음
 bfc가 되므로 글자까지만줌
주기전엔 inline이니깐 텍스트높이대로 맞게 흐르는데
(ovh의 까다로운 것중 하나임)
**vertical-bottom** 

현업에선 높이를 고정하고 고치고를 반복
위와같이 노멀플로우를 유지하니깐 콘텐츠가 늘어나도 다음 콘텐츠에 영향을 주지않음

반대로 게시물이 너무 적게 있을때? - min-height

Heading tag를 묶어서 마크업 하는게 더 css작업하기 쉬움

```html
<!-- 탭 인덱스 -->
<ul class="tab-list" role="tablist">
  <li id="tab1" role="tab" aria-controls="section1" aria-selected="true" tabindex="0">HTML</li>
  <li id="tab2" role="tab" aria-controls="section2" aria-selected="false" tabindex="0">CSS</li>
  <li id="tab3" role="tab" aria-controls="section3" aria-selected="false" tabindex="0">Javascrip</li>
</ul>

tabindex="0" : 강제로 포커싱
그러면 js가 복잡해져서(키이벤트를 다 걸어야함) a에 줌

<section id="section1" role="tabpanel" aria-labelledby="tab1">
  <p>
    HTML은 하이퍼텍스트 마크업 언어(HyperText Markup Language)
    라는 의미의 웹 페이지를 위한 마크업 언어이다.
  </p>
  <a href="#">상세 보기</a>
</section>

role : tabpanel로 주었기때문에 하위 헤딩태그를 안씀
aria-labelledby : 이 아이디가 있는 값으로 연결
```

**[새소식]**

Article : 배포가치, 블로그 포스트

figure : caption을 가질 수 있는 정보의 그룹

- 콘텐츠(이미지, 영상, 표, 그래프...) 의 캡션

- Figure > img + figcaption

- ?a가 interactive, transparent요소

  - article을 한번에 a로 연결할 수 있을까? : O

  - focus시 outline 초점의 문제가 생길 수 있음

    어떻게??해결??

- 콘텐츠 관점에서 a.더보기를 내용의 연장선으로 볼 수 있지만 새소식 페이지에 더보기라는걸 명시해주기 위해 article밖으로 뺌

- seo생각하면 aria-labelledby보단 img alt를 가지는게 좋음

문법검사시 콘텐츠모델상 허용하지 않는다라고 뜨면 사용할 수 없음



**css작업**

**1. position**

새소식 - 마크업순서 대로 올꺼고

.more은 position absolute(.news 기준)

article과 새소식간의 여백

- margin, padding둘다 상관없지만 margin 이용(35px) (마진으로 띄운 영역은 이미지와 새소식 사이의 여백임)
- border은 images 속성이 아닌 가상요소를 사용하여 만들꺼
- a요소 안에 블록모드를 포함할 경우 초점이슈가 있음
  a요소에게 배경 : 안보일거임(같은 인라인인 타임태그만 백그라운드 입혀져있음) : a가 inline상자라 block화 시켜서 블록모델을 포함하도록 해야 보임 
- 노멀플로우로 유지하면 되지 않나? ; 3가지 요소 div로 묶기
- 처음부터 여백을주면? H2,time,p에 여백을 주자
  여백크기 : 130px 정도?
  margin을 주면 안됨 padding을 주어야 앵커영역에 포함
- figure을 위의 떨어진 여백 위에 posa를 이용하여 배치
- figure의 p가 한줄일때 그 영역까지만 노멀플로우가 유지되기때문에 최소높이값을 주는게 좋다.

노멀플로우를 유지하는 방법으로 배치하는게 좋음

인라인상자의 라인박스 - 블록속성보다 까다로움

이미지만 잘 안씀 span을 묶어서 쓰는경우가 현업이 많음

- 반응형때 많이씀 (사이즈 늘어나고 줄어들 때)
- 전체영역의 50%의 컨텐츠 아래 img가 부모크기의 50% 로 주는경우
- img영역 기준 아래쪽 여백을주어 텍스트띄울때 margin? paddin?
  - padding을 주면 이미지 상자가 늘어나고, 
    늘어난 영역에 box-shadow가 생김
- time에 마진5px 왜 밑으로 안들어가지?
  - 인라인박스이기 때문임 : display; block; 으로 바꿔주자
- 본문설정부터 

**2.float**

**3.flex(값을 정해줘야해서 적절하지 않다.)**

- a를(전체묶는) df를 주면됨

- figure 높이, order를 줘야함

- direction : column

- ```css
  .news-item {
      margin-top: 50px;
  }
  .news-link {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      height: 150px;
  }
  .news-item-thumnail {
      margin: 0;
      order: -1;
      height: 150px;
  }
  .news-item-thumnail img {
      margin-bottom: 15px;
      box-shadow: 0 15px 15px 0 #aaa;
  }
  
  .news-item-subject {
      /* float: right; */
      width: 240px;
      margin: 0;
      font-size: 1.4rem;
      background-color: pink;
  }
  .news-item-date {
      /* float: right; */
      width: 240px;
      background-color: lime;
  }
  .news-item-brief {
      /* float: right; */
      width: 240px;
      background-color: orange;
  }
  .news-item-thumnail {
      margin: 0;
      /* float: left; */
  }
  ```

- 

**4.grid**

- figure: span 2



**신규이벤트**

Carousel ui : 슬라이드 ui

기능을 동작하게 할때 : button

- button > img : 가능

- button type="image" : 가능

- **button안에 텍스트 노드삽입** : IR기법(보이지않게) 

  button aria-label="이전 이벤트 보기"

  마크업은 정해놓은 상태에서 ui만 바꾸고싶을 때(버튼 모양 다양하게)
  배경의 패턴이 달라 상황에 따라 css로 조율할 수 있다.
  html에서 3개를 요청할빠에 css에서 1개 요청하여 position값만
  주면 되서 성능면에서 좋다. 아이콘이 100개일때, 관리한다치면 유지보수시에도 좋음
  이를 **sprite기법** 이라 함 : 게임산업에서 등장함
  (총알을 비행기가 앞으로 쏘다가 회전 회전하는 장면의 이미리를 
  position으로 주어 ) 웹개발에 응용

- section

- **h2 : 신규이벤트**

  제목으로 느껴지는 콘텐츠가 화면에 안나올 수 있음
  Ex) 스타벅스 홈페이지 매장찾기 

  이벤트 color가 다르다? : 태그가 필요함 : 
  html은 돔트리를 만듬 텍스트 노드를 직접적으로 줄 수 없고
  태그로 감싸져있어야함 <code>span</code> 강조할 목적이있다? 

  | strong               | em                       |
  | -------------------- | ------------------------ |
  | 강한강조(객관적느낌) | em일반적강조(주관적느낌) |
  | **bold**             | italic                   |

  less, sass(변수처리 쉬움 컴파일하여 사용 css에서 변환해서 사용 관리는 이게수월)
  최신브라우저에서 변수설정 가능

- **div#eventDetail > p>img + p**

  #eventDetail : 제어하는 관점에서 갱신할 영역을 묶어놈 

- **button**

  강사님은 2개이상일때 ul로 쓰는 경향이있음
  현업에서는 div > button구조로도 쓰임 
  (제어목적이므로 form(서버와 정보교류하기위해)은 굳이 필요없음)

  





