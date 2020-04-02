# 2020-04-02

## table

### 접근성 관점

- th가 아래쪽의 제목셀이라고 알려주기 : scope="col" 열제목 /  scope="row" 행제목 (단순한 표에서 권장)

- id / headers : 제목에다가 고유아이디 주기 , 내용셀에다가 headers연결(좀더 복잡, 마치 grid-area 느낌 복잡한 표에서 권장)

테이블 콘텐츠 마크업이 아닌 배치용도로 사용하게되면
부모를 꼭 있어야되고 셀이 들어가고 복잡한구조로 되는 불필요한 태그도 생성되서 사용하지 않았음



**nomalize css legend tag issue**

a11y-hidden 에 클립속성 주석하고 보았을때, `width: 1px; height: 1px; overflow: hidden;` 으로 했음에도 불구하고 검색어 글자가 세로로 나오는 이유

- `display`가 `table`로 되어있고, `table-layout` 속성 값이 `auto`로 설정되어있음
- `table-layout` 속성 값을 `fixed` 로 수정하면 글씨는 안보임 하지만 width만 적용되고 height값은 적용이 
  안되는것처럼 보임

**`table-layout`** CSS 속성은 테이블 셀, 행, 컬럼등의 레이아웃을 구성하기 위해 사용되는 알고리즘을 정의합니다. 
(출처 : mdn)



**왜 normalize.css에 legend속성이 table인가?**

- legend요소는 warpping하지못함(ie / edge) 
  : 스타일링 하기 까다로움(위와같은 이슈도있고 다들 많은 스타일링하려 시도는 했으나 실패 그래서 숨김으로 처리 하는 편임) 
  ex : 레전드를 내리고 선을 위로 처리하기
- 브라우저 이슈때문에 특정 태그는 스타일링하지않음 
  ex. : fieldeset - legend / table - caption



에릭마이어 reset css는  line-height 1과 outline을 없애는 접근성이슈가 있음

+++



## Navigation html

```html
nav.menu.isAct > ul.menu__list > li.menu__item.menuAct 
> a.menu__link role="button" || role="presentation"

a.menu__link는 role로 스크립트 제어
a.menu__link클릭시 부모 li.menu__item에 .menuAct 클래스 추가

fontello 스크립트처리
.icon-star
.icon-plus
.icon-minus


```



**실습 01 : 데스크탑 에서 navigation table로 배치해보기**

```css
/* 민지 코드 */
.menu__list {
    display: table;
    margin: 0 auto;
    padding: 20px 0;
    width: 1000px;
  }
  .menu__item {
    display: table-cell;
    width: 20%;
  }
```



**실습 02 : 모바일에서 navigation 배치**

```css
/* 민지 코드 */
  .menu__list,
  .menu__subMenu {
    display: none;
  }
  .isAct .menu__list {
    display: block;
  }
  .menu__list {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 60%;
    height: 100%;
    padding: 10px;
    color: #fff;
    background-color: rgba(32, 27, 26, 0.8);
    backdrop-filter: blur(2px);
    /* filter: blur(1px); */
  }
  .menu__item::before {
    content: "\e815";
    font-family: "fontello";
    margin-right: 15px;
  }
  .menu__item {
    margin: 30px 0;
  }
  .menu__item.menuAct::before {
    content: "\e816";
  }
  .menu__link {
    font-weight: 700;
  }
  .menuAct .menu__subMenu {
    display: block;
    margin: 10px 0;
  }
  .menuAct .menu__subMenu li {
    margin: 20px 0;
  }
```



**강사님 전체설명**

- 메뉴는 슬라이드 처리되어야되니 display:none;으로 제어하긴 한계가있다
  position-absolute는 리플로우가 많이 발생할거니 transform; translateX를 이용하는것이 좋다
- Transform:none; 값을 주면 초기값 0을 만드는데 transform:none으로 하는게 좋음(애니메이션 로직짤때 쉽게 처리 가능) (.isAct 있을때 transform: none; 없으면 transform: translateX(-105%);)



**ul.menu__list**

- 메뉴 전체배치 : position: fixed; / sticky

  widht: 70% / 70vh

  Height: 100%하기엔 부모크기 다따져야되므로 / 100vh

- background

  투명도를 위해 rgba 사용

  fillter:blur사용하면 콘텐츠 객체에 블러처리됨

  backdrop-fillter: blur(); : 배경만 블러처리됨



**실습 03 : 모바일에서 추천서적영역 배치**

```html
/* 민지 */
<section class="book">
                <h2>
                    추천서적
                    <span lang="en">Recommend Book</span>
                </h2>
                <figure>
                    <img src="./images/book_rwd.jpg" alt="반응형웹 핵심 가이드북 도서">
                    <figcaption>반응형웹 핵심 가이드북 도서</figcaption>
                </figure>
                <dl>
                    <dt>
                        저자 김데레사 
                        <span class="bookScore" aria-label="반응형웹 핵심 가이드북 도서 평점 5점만점 중 4점" title="반응형웹 핵심 가이드북 도서 평점 5점만점 중 4점"></span>
                    </dt>
                    <dd>
                        반응형웹 디자인을 위한 핵심 내용을 다루고 있으며 미디어쿼리, 유연한 레이아웃, 반응형 이미지 기법을 학습할 수 있다. 모바일 및 다양한 해상도에 대응이 가능한 웹디자인을 이 책으로 시작해 보자!
                    </dd>
                </dl>
            </section>
```



```html
section.book > 
h2.book__title.sprite.book (추천서적) + span.book__enTitle..themeGreen(Recommend Book)
- sprite에는 몽땅 이미지 불러오기 .book : position
- 재사용가능한 패턴(색상)을 테마로 만들자 .themeGreen

figure.book__cover(caption을 가진 이미지 객체) > img + 
figcaption#book__coverCaption
이 아이디를 img label로 사용할거임(이러면 Img alt 공란으로 주면됨)
flexable한 이미지로 하기 위해 .responsive라는 클래스명을 줘서 
미리 만들어놓고 반응형 이미지로 적용할 거임(로고는 고정형)
- img를 span으로 처리해도 되고 안할경우 figure영역만큼 확장될거임

저자 부분은 p로 해도 되나
정의형 리스트인 dl로 해도됨
dl.book__info 
dt(저자)
dd (김데레사)
dt.a11yHidden (별점)
dd span에 별을놓고 aria-hidden 하고 숨겨놓고
label을 이용하여

p.book__summary
```



**별점영역**

score / strike price / date : 8/2는 가상요소선택자로 월 일을 추가해주는게 읽기 괜찮음 / 4.5점만으로 몇점만점인지 모룸.. / 

+++



## ARIA landmark

ARIA 랜드마크

명세 : 

- 역할(role) / 특정 마크업이 랜드마크로써의 역할을 해주는것

- 속성이 아니라 역할을 통해 정의

- 웹페이지 구성과 구조를 식별하는 강력한 방법



웹페이지에 어디에 무엇이있었다를 식별할 수 있게하는 간단한 방법

특정위치로 건너가거나 탐색이 가능함



**적용방법**

1. html sectioning element를 통해 적용

   - 시멘틱태그 / 의미론을 기반으로 몇몇 html요소는 랜드마크생성

     ex : aside, footer, header, main, section

   - html 섹션화 요소사용의 영향을 이해하는것이 중요

     잘못한 ARIA보다는 안쓰는게 좋다 즉, 각 요소의 의미를 명확하게 이해하지 못하고 사용하는것과 aria를 잘못사용하는것과 같음

   - ARIA 사용 첫번째 규칙 : native html요소를 사용 할 수 있으면 사용

2. aria를 사용하여 정의 

   - 논리적 구조 식별

   - 각 영역에 랜드마크 역할 할당

     role attr로 할당

     banner / main / complementary / contentinfo

     위의 랜드마크는 최상위 랜드마크여야함

     main > banner (x)

   - 특정 랜드마크가 오직 하나만 사용된다면 레이블은 필요하지 않을 수 있다.

     특정 랜드마크 역할이 두번이상 사용될 경우 고유한 레이블이 제공되어야함

     (or heading tag 가 사용된다면 atia-labelledby)

     레이블을 줄때 role을 레이블의 일부로 사용하지않기

     ex : navigation 랜드마크에 label을 site navigation으로주면
     사이트 네비게이션 네비게이션 이라고 읽음



**랜드마크 영역**



**Banner**

: 페이지 시작부분에 있는 로고 / 검색영역이 포함된 site-oriented(사이트 지향적)
한페이지에만 유효한 콘텐츠가 아니고 전반에 걸쳐서 유효한 콘텐츠

- 페이지의 하나의 banner 랜드마크를 가질 수 있음 (페이지 두 개 이상의 banner, iframe같은경우 고유한 label을 가져야 함)

- 최상위 랜드마크이어야 한다

- HTML Native Semantic을 사용하여 작성하면 `<header>` 에 해당

  (body요소 컨텍스트에서 사용되는  `<header>` 만. 해당)

  

**Complementary**

: 메인 콘텐츠를 보완하도록 설계되었으며 주 콘텐츠로부터 분리되는 경우에도 여전에 유의미함

- 최상위 랜드마크이어야 한다
- 사용개수제한은 없으나 여러개 사용시 고유한 레이블 지정해야함
- HTML Native Semantic을 사용하여 작성하면 `<aside>` 에 해당



**Contentinfo**

: 웹사이트 내에 각 페이지 하단에 일반적인 정보를 식별하는 방법 (저작권, 개인정보보호 ...)

- 페이지에 하나만 사용가능
- 최상위 랜드마크이어야 한다 (페이지 두 개 이상의 contentinfo, iframe같은경우 고유한 label을 가져야 함)
- HTML Native Semantic을 사용하여 작성하면 `<footer>` 에 해당
  (body요소 컨텍스트에서 사용되는  `<footer>` 만. 해당)



**form**

: form영역 중에 search가 아닌 영역

- ex : login

- 검색기능이면 랜드마크 form대신 랜드마크 search사용

- 레이블 제공(form heading / legend 권장)

- 네이티브 사용권장 

  ex : button기능을 span으로 코딩

  ```html
  <div role="search">
    
  </div>
  ```

  



**main**

: 메인이 되는 주요 콘텐츠에 사용

- 페이지에 단 하나 랜드마크 존재
- 최상의 레벨의 랜드마크여야함
- HTML Native Semantic을 사용하여 작성하면 `<main>` 에 해당



**navigation**

: 웹사이트나 페이지 콘텐츠를 탐색하는 데 사용되는 링크 그룹영역

- 페이지에 필요한 만큼 여러개 있을 수 있음 (각각 label)
- 동일한 링크를 가진 네비게이션이면 label을 같게줌
- HTML Native Semantic을 사용하여 작성하면 `<nav>` 에 해당



**region**

: 사용자가 섹션으로 이동 할 수 있어야 할 정도로 충분히 중요한 콘텐츠를 포함하는 페이지의 인식 가능한 섹션

- label 필수(영역 이라고 읽어줌 그래서 무슨영역인지 알려주는게 필수)

  (예제엔 title을 주었는데 title은 보조정보, 툴팁 그래서 적절하지않다고 생각)

- HTML Native Semantic을 사용하여 작성하면 `<section>` 에 해당



**search**

: 검색 기능을 만들기 위해 결합 된 항목과 객체들의 전체집합

- HTML Native Semantic는 존재하지 않음