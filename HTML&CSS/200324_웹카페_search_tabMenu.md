**??이미지 아래 여백**

- vertical-align  : inline
- text-algin : block



이미지 높이가 다른게 있을 경우

화면에 배치될 적에 (div > img*3 구조)

Vertical-align를 이미지에게 주어 따로따로 제어가능

: top으로 맞추면 갭이 안보이는 trick

- Line-height(인라인박스랑 연관이 많음)를 잘 찾아봐야함
- 그래서 vertival-align을 주어 여백을 없앨 수 있음

Position / float되면 block속성을 가짐

float을 다 띄워서 부모높이를 잃어버림

-  높이값을준다. : 유지보수가 어려움
- float 부모되는 요소에 overflow: hidden;
- margin의경계를 늘어나게 하는 트릭 - clear: both;

원랜 허용하지않았지만 html5에서 dl 안에 dt,dd(한쌍)을 div를 묶는걸 허용함

https://mulder21c.github.io/

: 좋은개발자가 어떻게 코드를 잘 정리하는지 참고하기 좋음 (?핵소)

html5의 hidden 속성은 dom tree object에도 보이지 않는다

div는 높이를 잃어서 mt를 못준다 : div에 플롯헤제

aria-role

- h2 role="button" : 원래속성을 이와같이 바꾸는건 안됨. a는 예외적인경우

- 중복된정보!(검색, 검색폼, 자료검색)

  순차적으로 봤을땐 중복되 보일 수 있지만 용도로 구별해보면 (openwax) 필요성이 느껴짐

- *aria-label* : span 아이콘 속성에 추가

- placeholder : Value에 값을주고 , js에서 포커스가면 사라지게함(예전에)

Input type으로 좀더 명확해짐(agent-style 다름 운영체제에따라)

form의 유효성 검사 : required(입력되지않은값까지 서버에 올라가는거 방지)

- 논리속성(boolean)

  xhtml에는 속성에 속성이 들어와야함 : required="required", checked="checked"

- button

  submit(default값, 전송할때사용, 명시적으로 타입넣어주기)

- form

  action / method 넣어주기

- 데이터베이스에 저장될때 필드에 저장될 이름 : input name



**검색창 영역 실습**

```css
.search-form fieldset {
    display: flex;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: yellow;
}
/*
크롬 : 문제(버전업때문에)
파이어폭스 : 정상작동

ie, netscape : 
비표준태그 ie <marguee> : 글자가움직임
netscape <blink>
너무 자사들의 태그들이 남발되서 개발자들이 힘들어져서
w3c에서 권고해도 무시해고 나오다보니
와스프라는 단체에서 표준을 지키지않는 나쁜사례들 언급
넷스케이프 사라짐
ie독점시대
firefox : 오픈소스, 
chrome : 표준권고안을 지켜 문제 안됨
ie : ie6~8 자바스크립트 기능이 안좋아짐 / 
ie9
display: block
_display: inline
ie6은 위와같이 두번언급
ie7은 *display
.
.
.
css hack, 코드가 더러워짐
조건부 주석!
<!--[if lt ie9] <link --> (less than, 6,7,8)
(lte : 6,7,8,9 =<)
크롬 : 안정화되지않는데 서비스 하고 드래프트 하다 드랍하는 현상이 많음

*/
```

**fieldset** 어떻게하면 flex를 동작하게 할 수 있을까?

1. 트릭찾기
2. **문제가 발생하지 않게 만들기**
   - **div로 그룹핑하기**



**탭 메뉴**

- 탭메뉴가 많은경우는 탭메뉴제목을 따로 그룹핑 하는게 좋음
- 간단한거라면 컨텐츠 섹션 자체를 탭으로 접근할 수 도 있다.
- Wai-aria : js
- Section > h2 > a[role="button"] + ul>li>a
  - 버튼은 디자인하기 까다로워서
  - 키보드에서 초점으로 접근 할 수 있게 하려고
  - 서식요소들은 기본적으로 포커스를 받을 수 있음
  - a는 href속성을 가졌을때만 받을 수 있음
  - area[href] : 이미지맵 사용시도 받을 수 있음
  - 가상키보드(스크린리더 지원안함) : 시각디자인에게 불편한 요소, 가능하면 접근성지침에서 운용가능하게 해달라는 부분중 하나가 초점접근 가능하게하라임
  - tabindex="0" : 마크업 순서상 (click은 가능, 키보드 불가능)
  - html이 안되면 css가 문제고 더 나아가 js에서 문제가됨
  - 시간을 나타내는 태그 : <time>
  - ?hgroup
  - division : 암묵적, 아웃라인이없어
  - (headintg + p) + (heading + p) (아웃라인생김)



모던기법 

말줄임표 : overflow 하는순간 여백생김(하단에)??,



**flex** 

- a요소에 flex-grow: 1; 확대할거야 하고 알려주는거
- 높낮이 : align-items

*.board-act* [*class*$="-list"], 

*.board-act* *.more*{ /* list로 끝나는 */

오늘 나간 탭메뉴가 합리적인 방법이아니다.

Hint : ul은 벗어나지않게 normal-flow 유지하고 노출 