**반응형**

- 그 안에 들어가는 콘텐츠 설계가 중요함 
  (width 가 auto로 유동적으로)
- media query 
  - break point (기기사이즈)
  - 시간관계상 실습시 brakpoint기준 : ~999px  
- 반응형은 각각 디바이스별 뷰포트에서 레이아웃이 깨지지 않으면 됨 (줄이는 개념이 아님 / 이 기준으로 가면 콘텐츠가 심플해질 수 밖에없음)



**체크방법**

- troy에서 크로스 체크 or chrome에서 체크
- 실 디바이스에서 잘리지 않은지 체크

**모바일 퍼스트 관점으로 진행**

+++



**header html**

- 멤버 / 로고 / 검색

  모바일 퍼스트라도 로고를 첫번째주는 관점으로 갈 수 있음
  (로고 / 멤버 / 검색)

- appHeader 

  - {h1 > a > img}

    ​	Img src="" alt=""

    ​	Srcset :1x 2x 3x 4x : 성능부분에서 퍼포먼스가 좋아짐

    ​		사용 안할 시, 프론트/백 에서 스크립트를 이용하여 처리함

    ​		ex: retina.js / 프리픽스를 주어야하고 이미지는 같은경로

    ​	구형브라우저 안전하게 노출	

    ​	반응형 시 이미지 최소하하고 srcset써볼것

    ```
    <a href="./index.html"><img src="./images/image-1x.png"  alt="Web Cafe"
                                                srcset="./images/image-2x.png 2x, ./images/image-3x.png 3x" /></a>
    ```

    

    ​	**Retina display media query**

    ​	css를 위해 92dpi로 작업해야함

    ```css
    @media 
    (-webkit-min-device-pixel-ratio: 2), 
    (min-resolution: 192dpi) { 
        /* Retina-specific stuff here */
    }
    ```

    

    ​	

- {ul > li > a + span}

  구분선 : 삽입을 하되 읽어주지 않았으면 화면엔 보이지만 읽을수 없게
  aria-hidden
  : span으로 삽입 (가상요소선택자는 읽어주니깐)

- form[role="search"]

  검색폼은 1개 권장 / 여러개일경운 label로 꼭 명시해줘야함

  - fielset 

    모든기기가 아리아스팩을 다 이해할 수 없으므로 사용함

    - legend
    - label / input[type="search]
    - button[type="submit"]

    

    입력서식하나당 lable

    1. **Label 삽입**
    2. Area-label / title을 준다 (둘다 같이주는거 권장)

  

**header css**

- **실습01** : 마크업순은 
  h1.brand + ul.memberOnly + form 인데
  ul.memberOnly + h1.brand + form 로 수정
  *flex는 사용하지 않고(flex를 사용하면 쉬움)

  ```css
  /* 모바일 헤더 */
  /* 민지 코드 */
  .appHeader {
    position: relative;
    overflow: hidden;
  }
  .brand {
    margin-top: 30px;
    width: 100%;
    background: rgb(255, 110, 110);
  }
  .memberOnly {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: right;
    background: rgb(160, 88, 255);
  }    
  .memberOnly li {
    display: inline-block;
  }
  .searchForm {
    background: rgb(255, 95, 183);
  }
  
  /*
  flex를 안쓰고 내가 한 방법
  
  - memberOnly를 위치값을 고정해주려고 position:absolute를 줌  
  	기준점되는 appHeader에 position relative 주기
  - memberOnly에 absolute를 주었더니 콘텐츠 크기만큼 width를 가져서	100%를 주고, position absoulte를 주었더니 h1.brand가 빈 
  	여백만큼 올라가서 맨 위로 붙으므로 memberOnly에게 임의의 height를
  	주었다
  - 수직정렬을 하기위에 height만큼의 line-height를 주고
  	그 height만큼 .brand에 margin-top값으로 주었다.
  - memberOnly 하위의 메뉴들을 일열로 배치하려고 하위 li에게	
  	display: inline-block을주고
  	우측정렬을 위해 memberOnly에게 text-align: right를 주었다.
  */
  ```

  **위와같은 부분을 지정한 height를 자바스크립트로 하면 리플로우가 많이생김**



```html
<span class="divider">ㅣ</span>
```

위와같이 주면 스크린리더기에서 "이" 라고 읽음 그래서

```html
<span class="divider" aria-hidden="true">ㅣ</span>
```

디자인은 존재하나 스크린리더기에서 읽히지 않도록 `aria-hidden` 속성을 준다.



**header에 패딩을 줘서 .memberOnly 탑메뉴 bg 어색한 현상**

.memberOnly에 음수마진 적용안됨(margin: 0 -20px;)

```
flex-item이나 flex속성엔 음수 margin값 줄 수 없음
flex에선 동작안하지만 아닌속성에선 가능
```



img 태그는 인라인이지만 블록성격 (widht/height/padding/margin 지정가능)



**실습02**

**searchForm**

Legend, feildset - ally-hidden

icon - 60px 큰 이미지 / 실제는 30px / indent 트릭말고 글씨보이게 /

Input은 아이콘 크기빼고 늘어나게 

```css
.searchForm {
        
    }
    input[name="search"] {
        width: calc(100% - 30px);
        height: 30px;
    }
    .button {
        border: 0;
        padding: 0;
    }
    .button.buttonSearch {
        width: 30px;
        height: 30px;
        background-image: url(./images/btn_search.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
```

유연한 값을 주어야됨

- clac(값 - 값) / 한칸 꼭 띄워줘야됨
- input과 button / html 상 공백문자가 들어가서
  처음이 calc(100% - 30px)이 안먹었던거임



**[responsivelogos 문제](http://responsivelogos.co.uk/)**

- CSS보단 콘텐츠관점에서 항상고민할것

  Ex) 면접 시 : 접근성 문제 어필 > 생필품구독은 장애보다 유용한것 같다 그러면 구독료를 내더라도 받을텐데 상세정보를 접근할 수 없었는데 본인이 입사한다면 해당부분을 해결할 수 있을거다

  

  area-label / title 
  검색봇이 읽어들일 정보를 줘야함



**실습03**

모바일헤더에서 웹헤더랑 공통인 부분은 상단으로 빼고
개별로 주어야할것은 따로 속성주어 웹헤더완성하기

```css
/* 민지 코드 */

/* 공통헤더 */
.memberOnly {
    text-align: right;  
}
.memberOnly li {
    display: inline-block;
    line-height: 30px;
}
.buttonSearch {
    color: #fff;
}

/* 모바일 헤더 */
    .appHeader {
        position: relative;
        display: flex;
        flex-flow: row wrap;
        padding-bottom: 20px;
        background: rgb(56, 48, 46);
    }
    
    .brand, .memberOnly, .searchForm {
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
    }

    /* 모바일 브랜드 */
    .brand img{
        padding: 10px 0;
    }

    /* 모바일 멤버링크 */
    .memberOnly {
        order: -1;
        /* text-align: right; */
        background-color: rgb(152, 133, 116);
    }

    .memberOnly li {
        /* display: inline-block; */
        line-height: 30px;
        color: #fff;
    }

    /* 모바일 검색폼 */
    [type="search"],
    .buttonSearch {
        vertical-align: middle;
    }
    .buttonSearch {
        position: relative;
        width: 30px;
        height: 30px;
        margin-right: 5px;
        color: #fff;
        font-size: 1.2rem;
    }
    .buttonSearch::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(./images/btn_search.png);
        background-repeat: no-repeat;
        background-size: 100%;
    }
    [type="search"] {
        width: calc(100% - 40px);
        height: 30px;
        padding: 2px 5px;
        border: 1px solid #aaa;
        border-radius: 3px;

    }


/* 웹 헤더 */
    .appHeader {
        overflow: hidden;
        position: relative;
        padding: 5px 0 10px;
        background: orange;
    }
    .brand {
        float: left;
    }
    .memberOnly {
        float: right;
        
    }
    .searchForm {
        text-align: right;
        position: absolute;
        float: right;
        width: 45%;
        right: 0;
        bottom: 10px;
    }
    [type="search"] {
        width: 85%;
        padding: 8px 15px;
        border: 1px solid #000;
        border-radius: 5px;
    }
    .buttonSearch {
        padding: 8px 15px;
        border: 1px solid #000;
        border-radius: 5px;
        background: rgb(152, 133, 116);
    }
```



**Navigation**

nav.navigation

- h2.a11yHidden#menu / aria-label / aria-labelledby="menu"

- button.buttonNone.buttonBurger

  aria-label : 메뉴열기, title="메뉴열기"

  span.burgerBar.round * 3 (round 들으면 동그랗게)

  positionTop / positionMiddle / positionBottom

  



**aria-label / aria-labelledby**

aria-pressed="true" : 눌러진상태

aria-haspopup : 팝업을 가졌다 / 이버튼을 누르면 팝업이 나올거야 // 속성



**모바일 버튼 애니메이션**

Q : 햄버거 버튼에서 X모양으로 변할 때, transform: translateX값으로
움직였는데 width: 100% -> 0 로도 가능하지 않나?? 

A : 가능은 하지만, 리플로우가 많이발생



