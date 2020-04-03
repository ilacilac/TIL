**[신규 이벤트 : button - bg sprite기법]**

- button 배치 시, 공백문자로 인해 간격이 있을거임

  크기 : 삽입할 이미지의 사이즈로 지정 (여유있게 20으로 맞춤)

  inline-block

  agent-style로 보더 패딩 가지고 있어서 초기화시켜주기

  글자를 안보이게 할 수 없을까?

  - position absolute? : 붕뜰꺼야

  - Width? height?  : 20px 줘야되서 안되

  - Overflow hidden : 도입해보자

    넘치는건 잘리는데 영역안에있는 글자는 안잘려

    1. **padding tric**

    padding을 줘볼까? 높이만큼! : border-box니깐
    상자의 크기는 늘어나지 않지만 패딩만큼 밀려서 밖으로 나갈꺼임 밖으로 튀어나온건 overflow주니깐
    근데 배경색깔을 깔아보니 상위 div의 height가 늘어남

    - 사파리 : 동일 / 파이어폭스 : 더 이상하게 높이가 늘어남 엄청엄청 (뭐지?) / ie11 : 버튼크기만큼 높이적용되어있름

    - a로 바꾸니깐 ie11결과처럼 나옴(근데 line-height때문에 하단이 조금 뜸)

    - 브라우저에서 Button 높이와 padding 높이를 알려줌 / 버튼의 overflow된것의 자식요소의 크기를 인식하는게 firefox

    - 어떻게 해결? - 높이값과 ovh를 부모영역에준다

      - 부모밖으로 티어나오니깐 button의 넘치는부분은 보이지 않음

        ```css
        .btn-event {
            overflow: hidden;
            height: 20px;
            background-color: yellow;
        }
        .btn-event button {
            width: 20px;
            padding: 20px 0 0 0;
            border: 0;
            background-color: pink;
        }
        ```

        

  - Clip : 잘라내는거니깐 적합하지 않음

  - a 로 할꺼면 role="button"

    2. **indent tric**

  - IR기법  text-indent를 이용하여 첫줄 들여쓰기가 되므로(줄바꿈되지않게 white-space를 이용 - 옆으로 밀어줌)

    ```css
    .btn-event {
        background-color: yellow;
    }
    .btn-event button {
        overflow: hidden;
        width: 20px;
        height: 20px;
        padding: 0;
        border: 0;
        text-indent: 20px;
        white-space: nowrap;
        background-color: skyblue;
    }
    ```

    위와같이 부모에 주지않고 안전하게 해결할수있다

    만약 자식요소에서 이와같은 문제였으면
    첫번째처럼 해결해도 됨

- **배경 이미지 작업**

  - no-repeat

  - .btn-event-next에 position-x 당겨주자

    (대표속성말고)

  - ```css
    .btn-event button {
        overflow: hidden;
        width: 20px;
        height: 20px;
        padding: 0;
        border: 0;
        text-indent: 20px;
        white-space: nowrap;
        background-color: skyblue;
        background: url(./images/back_forward.png) no-repeat 0 0;
    }
    .btn-event-next {
        background-position: -36px 0;
    }
    /*
    	아래께 선택자 부채성 의해서 적용이 안된다.
    */
    ```

    내장하고 있는 개발도구에서 >
    next를 해당하는 배경이미지 선택 >
    Style 패널에 맨 위에 올라온부분이 적용된 요소 >
    취소선 : 우선순위에 밀렸다

- button 커서 손가락모양

  - cursor: pointer;

    현재 indent를 줘서 안됨.
    1번의 패딩방식에서 적용됨

    로그인창 : label클릭 시 연결된 입력창에 포커싱되는걸
    보여주기위해 줄 수 있음

- h2, p style

  - em 부모에 normal을 주면 상속받는데 

    **내가 직접갖는 agent값** vs 상속받은값(inherit from)

    그래서 직접 클래스 타고 em을 잡아주어야함

- img

  - img태그를 바로잡아서 스타일링(bs, bd)



indent나 padding을 이용하여 밀어내지 않고 할순 없을까?

- position트릭 : 마크업 고쳐야함

- ```html
  <button> /* posa */
    <span class="txt">이전</span> 
    <span class="bg"></span> /* posa 위의 버튼기준으로 움직임 */
  </button>
  ```

- ::before ::after (현업에선 위와같이 태그로 작업, 직관적이라)

  - zIndex 경우때문에 애프터사용해봄

**[관련사이트]**

목록 : 

**normal**

- 선을 포함한 영역 h27px(w100p - a 링크잡힘)
- Bg #fff
- bdra 5px 

**hover**

- h147px
- li 5개 보여져야함
- 위아래 여백 10px

**transition**

- 시작 / 끝 (전위효과)
- 속성!



- text-indent는 블록속성에서만 적용가능

- hover : 가상클래스 속성자 (모든요소에 가능)

  focus는 모든요소에 가능하지 않음(초점을 받을 수 있는 태그에만 가능함)

  - a[href], button, area[href], input, select (form관련요소)

  - 후천적으로 가능하게 하려면? 

    tabindex="0" 을 주면 가능함

- transition

  - transition-property: height; // 필수

  - transition-duration: 0; //필수

  - ```css
    transition-property: height, padding;
    transition-duration: 2s, 0.5s;
    transition-delay: 0s, 2s;
    
    transition: height 2s, padding 0.5s 2s;
    
    위와같이 두가지 속성을 줄 수 있음
    ```

  - 포커스를 받았는데 아웃라인이 안보임

    글자 안보이게 할려고 ovh줌 아웃라인은 상자 바깥쪽으로 튀어나와짐

    ```css
    .related-list a:focus {
        outline: 1px solid #296897;
        outline-offset: -4px;
    }
    ```

    Or outline감안해서 line-height를 줄이고 패딩으로 주는방법이있음

  - *tabindex*="0"을 ul을 주면 ul먼저 포커스 > 그다음 li

  - *:**focus-within* 을 사용하면 li에 초점가도 ul이 열린상태로 유지됨



**[인기 사이트]**

- h2 - ol - a
- Li a 안에 아이콘 : text로 마크업 > bg : sprite
- 상승(기획의도의 강조를하기위해 em사용) / 하락 / 멈춤
- title : 툴팁,  aria-label : 스크린리더기

*data-* : 사용자정의 표준문법

- ```html
  <li><a href="#" data-message="hi">W3C</a><em class="up">상승</em></li>
  ```

- ```css
  .favorite-list a::before {
      content: attr(data-message);
  }
  ```

  Ex) 카카오톡 안읽음메세지 숫자카운팅

- 아이콘배치

  - Float: right;

    - 시그널 : inline-block; > float하면 블록되니깐
    - 중간에 주려면? mt3px 정도 감각으로 얼핏

  - a요소의 width를 늘린다

    - 대략 130px 
    - Inline-block
    - Li::Before. a, em : 인라인상자니깐 vam주기

  - Positioin: absolute

    - li : relative
    - Em : absolute right:0; top: 50%; mt-5px
    - Transform(translate: 0, -50%);

  - 이 유형에선 Flex가 가장 베스트임 사실 크로스브라우징이슈만 없으면 ㅎㅎ..

    - Flex로 배치시 아이콘 어떻게?

      - flex를 이용하는방법

        ```css
        .favorite-list li a {
            flex-grow: 1;
        }
        ```

      - em에 margin-left: auto;를 주는방법



**slogan**

Article.slogan > h2[title="웹카페에서 웹표현을"] + p

q[cite="url"]

- q : 인라인 (기본적으로 ""가 들어가므로(before, after) 뒤에꺼 지우고 앞에꺼 크게)

  quotes: "[" "]"

- block-quote : 블록

footer (한문서당 여러번 가능)

일부 텍스트 복사할 때 붙여넣었을때 출처명시하는 역할 

footer.a11y-hidden

```css
.slogan-heading::after {
    content: "";
    width: 100%;
    height: 100%;
    background: aqua;
}
콘텐츠가 없어서 안보임

.slogan-heading::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: aqua;
}
absolute를 줘서 width/height값을 가질 수 있음
근데 offset값을 안줘서 가로/세로가 100%만큼 잡힘(슬로건의 크기만큼이 아닌)
```



+++

재활용가능한게 모듈

동일한 클래스명의 배치속성은 위험할 수 있음

html을 고칠 수 없는경우 선택자를잡아야하는데 우선순위로 밀릴 때 대표속성말고 개별속성으로 주어서 해결할 수 있음

가상요소 선택자는 ie6에서 지원하지않기에 포털사이트인 네이버는 초창기 해당속성을 잘 쓰지않음

문서 서식 

+++


