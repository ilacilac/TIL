논리적인순서
시맨틱 마크업
네이밍
위의 순서로 마크업
레이아웃 / 디자인

**VISUAL영역 작업**

img : 의미가 없는 장식요소 - 배경으로 처리

배경 애니메이션
텍스트 애니메이션

**엔티티 넘버(네임)**

```html
<!--
&amp; = &
&lt; = <
&gt; = >
&nbsp = 띄어쓰기
-->
```

렌더링 해석을할때 특수기호를 자동으로 만들어서 파싱해주는걸 엔티티넘버로 
명확하게 해줘라 (권장)

공백다섯칸 : &nbsp

에디터들은 멀티스페이스를 제공하지 않는다(대부분) / 웹 특성



높이값은 안주는게 좋지만 필요에 따라 높이값을 주어질때?

- 광고 배너처럼 고정된 크기가 정해져있을 때



serif : 삐침있는 글꼴

Animation : at-sign 규칙
textAni {

}
식별자를 주어야 함

**Animation 위치 이동 방법**

- margin

  현재 위치에서 마진 영역이 추가되면서 비쥬얼 영역이 추가되서 적절하지 않음

- padding

  가능은 한데.. 

- position: absolute;

  absolute를 두고 제자리에만 둘꺼면 relative를 안줘도되지만
  오프셋을 줄거기때문에 비주얼 영역에 relative 주기!

- transform: translate()

  애니메이션 관련속성 : transition / transform / animation

  2d함수

  - skew(), scale(),rotate(),matrix() 


  translate(x), translate(y)

  transform: translate(0,0);

  Argument (값,값) : ()내장함수


  **하단에 스크롤이 생기는 문제!**

  transform을 그냥 쓰면 노멀플로우
  블록상자 크기를 유지
  노멀플로우를 유지하면서 컨텐츠 크기를 유지하기때문에 넘침

  성능상 이게 좋음

+++

작은단위로 여러개로 프로젝트 만드는것도 좋음

- 카드뒤집기 게임

- 뮤직플레이어 안에 유아이 컨트롤 다양하게 믹스해서 개발하신분

  라이브러리를 사용하지 않고 규모는 작지만 충실한 사람의 평이 좋음



?reflow / repaint
Gecko 

리플로우, 리페인트가 많이 발생하면 성능이 떨어진다
성능하고 연관성이 있음

국방부..wow

레이아웃에 영향을 주는 스타일

- width, Height, margin, padding
  = margin, padding은 성능에 문제를 줄 수 있다는 얘기
- position도 애니메이션시키지 않을땐 괜찮지만
  화면을 띄어진 상태에서 바꾸면 리플로우,리페인트가 일어나기 때문에
  좋은 성능을 보여주진 않는다
  jQuery vs Css(animation) = css가 월등히 빠른 이유가
  제이쿼리에서 위치값을 바꾸는데 포지션값이 사용됬기 때문이다

60FPS?

GPU가속?

position > transform

scale > transform

rotation > transform

Opacity > opacity



[https://falsy.me/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EC%9D%B4%ED%95%B4-1-reflow-repaint%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC-%EC%95%8C%EC%95%84%EB%B4%85%EB%8B%88%EB%8B%A4/](https://falsy.me/브라우저의-이해-1-reflow-repaint에-대하여-알아봅니다/)



블로그 글을 확인할때
크로스체크 (영문, 커뮤니티글 등등) 해야함

순차적인 애니메이션 : 시퀀스애니메이셔

animation-play-state: paused; /* 스크립트랑 연결할 때 많이 사용한다*/



animation: textAni 3s forwards 2s infinite alternate ease-in-out;

​    /* name duration fill-mode delay 무한반복(이터레이션카운트) : 딜레이부터는 옵션 */



백그라운드 이미지는 다중처리가능

x 300,600,800

4개이미지를 두개의 상자로 각각깔기



content: ""; 비어있는 span태그

height를 안먹는데

포지션으로 띄우면 height를 먹어서 100% 넣으면 작용함

비포는 괜찮아 원래 요소가 0 0

애프터는 비쥬얼 텍스트 다음이라

그 다음이 왼쪽좌표가 된다.

레이어로 떠있어야되니 월래 마크업되어있었던 영역플로우 영역은차지하지않고 차지한다

배경은 제트인덱스개념이없어서 선언순서로 정해야함



```css
background-color: yellow;
    background: url(./images/ani_flower_01.png) no-repeat 0 -10px,
    url(./images/ani_flower_02.png) no-repeat 670px 0;

1. 속기법 사용시 위에 컬러값 주면 오류(맨 밑에 주면 오류아님)
2. 단일속성을 단축속성 위에 컬러값주면 안보임
(아래의 속기법의 투명값으로 덮어씀)
```

+++



프래임워크에선 접근성을 주기 어렵다? (angular, react)
이전, 다음버튼(버튼모양) 컴포넌트만들때 이런부분도 고려해주어야함
**저는 똑같아보여도 똑같지않은 코드, 접근성을 고려하여 작성했다를 어필**


<p style="background: pink; display: inline-block;">브라우저 렌더링 과정</p>


**Opacity: 0; vs rgba(0,0,0,0)**

- Opacity 는 박스 자체를 투명(속성 : value)
- rgba는 컬러만 투명해지는거(값 : property)



background-gradient는 **background-image** 개별속성으로 줌

+++



**로그인 레이아웃 진행**

```html
<!--
새로운 콘텐츠가 나오면 제목을 주는게 좋음 
- section과 heading tag
-->
<form action="" method="">
  <div>
    <label for=""></label>
  </div>
</form>

```



- 입력서식은 꼭 아이디로 지정해줘야한다.(카멜케이스, 유니크한값)
- Label for에 입력서식 아이디에 설정 
  = 명시적 레이블, 암묵적인 레이블링 (암묵적인 짝꿍)
  웹접근성과 웹사용성 둘다 좋음
  - 주민등록번호 6-7 : 탭키를 눌렀는데 (6자리 다입력하면 7자리 바로넘어가는걸 설정해줬는데 앞으로 키보드로 이동했는데 다시 넘어감)
    혼란을 유발하는경우
- label과 input을 배치를 위한 용도로 div로 묶어준다
- filedset : 성격이 같은 form을 묶어줌
  - 회원가입의 [필수], [선택]



HTML6 

- native modals support



https://formspree.io/ 
폼서버 



**label이 없을때 title속성**

title대신 aria-label=""로 줄 수 있음

레이블과 인풋을 쓰는게 제일 베스트지만

안될경우 타이틀 레이블 둘다

기기에서 타이틀을 읽지 못하는 경우도 있기때문에 두가지를 같이 제공할 때도 있음

?중복될 수 도있잖아 > 중복되도 없는것보다 나을 수도 있음

누군가는 이중 하나만 쓰는사람도 있을듯(2번씩 들리는게 불편해서)



논리속성 *required*

필수입력값 html5에 등장한속성임



**정규표현식**

- 폼에서 필터링 값 추가하기 쉬움(4자리~8자리 영어만..)



서버에 저장할때 필드에 어떤값을 넣어주는지 정해야하는데

name속성을 이용한다



id는 label과 연결
name은 서버에 전송할 명칭



```
git remote add origin https://github.com/angdoong/TIL.git
git push -u origin master
```

```
git remote add origin https://github.com/angdoong/TIL.git
```

초반 : git push -u origin master

그 이후엔 git push 만 입력하면 됨

+++



<p style="color: red; font-weight:bold;">[CSS / 실습환경]</p>

**reset.css**

- reset.css는 우리가 만든 css보다 먼저 호출되어야함
- 모든 브라우저의 기본스타일을 없애고 내가 만든 새로운 스타일을 적용할때 사용

**emmet**

- 태그를 만들 때, 복잡한 문법을 손 쉽게 작성 할 수 있음
- 많은 에디터에서 내장되어있는 문법이다.



<p style="color: red; font-weight:bold;">[CSS / 단위]</p>

**em**

- 자기 자신의 폰트크기에 영향을 받는다

```html
<div class="container">
  Container
  <div class="parent">
    Parent
    <div class="child">child</div>
    <div class="child">child</div>
  </div>
</div>
```



```css
.container {
  font-size: 10px;
  width: 60em; /* 600px */
}
.parent {
  width: 30em;
  font-size: 2em;
}
.child {
  width: 15em;
}
```





