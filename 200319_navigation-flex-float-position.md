1. ul agent-style(web browser style) : 웹브라우저가 기본적으로 적용하는 스타일

   (아래는 크롬기준)

   - padding-lelft: 40px; 
   - margin-top,bottom: 1em;
   - list-style-type: disc;

   이런값을 알아야되는게 아니라 기본적으로 브라우저에서 이런값이 있으니 
   이런값은 초기화 해야한다는 그런 기초지식이 있어야 한다.

2. Author style : 제작자가 css style주는거

3. user-style : 유저가 직접 정하는 스타일

우리는 1,2만 신경쓰면됨

+++



### 콘텐츠 모델(Content Model)

ul은 자식으로 포함하는건 콘텐츠모델상 li 밖에 없음 
dl은 자식으로 포함하는건 콘텐츠모델상 dt,dd 밖에 없음(5.2이상부턴 dt,dd를 div 묶는거 가능)

absolute만 이용하는 layout > 유지보수에 어렵! 콘텐츠가 바뀔때마다 좌표값 다시 재설정해야함



**.menu**

- 요기에 relative를 주게되면 submenu의 top,left:0 으로 지정해서 위치를 잡을 수 있으나 submenu의 width를 100%줌에도 불구하고 이 크기만큼 차지한다.
  **하지만 이를 우회하는 방법으로 코딩 진행**

- Inline-block : 공백문자 발생

- 틈새 없이 하기 위해 float사용

  메뉴의 높이가 정해져서 늘어날 가능성이 없다 판단 혹은 ovh사용하면서 해결가능

  가급적 높이는 고정하지않은걸 지향하지만 이번실습에서는 고정해서 사용

**.submenu**

- 하위 li는 inline-block : 레이아웃상 좌우 여백, 
- width가 넘치게 하려고 float안씀
- 만약 넘치게 되면 <code>white-space</code> 를 사용하여 해결할거임



플롯되는방향과 마진방향이 겹치면 더블마진현상이 ie6에서 일어남
(버그환경을 고려했을때 플롯레프트 줄 요소에 마진을주는것 보다 그 부모요소에 패딩을 주는 방향으로 가는게 좋음)

float - w,h를 지정해주지 않으면 content크기만큼 줄어들음



**해깔렸던 부분**

```css
.submenu a {
    display: block; 
  /* 
  Q : 있을때 없을때 차이 : 
  inline일때 여백 상하로 못주는걸로 알고있음
  하지만 블록부분을 주석처리했을때, a에 패딩 상하가 먹힘 단지 
  박스넓이에 적용되지않을뿐 
  부모의 높이값으로 포함되지않은체 패딩으로 적용되는거고 
  블록으러 주면 포함되는것인가 ?
  */
  
  /*
  A : 인라인의 높이영역은 line-height의 영향을 받음
  그래서 패딩이 들어가긴 들어가는데 실질적인건 좌우
  콘텐츠 크기에서 여백을주어 박스영역 상하를 침범할 수 없다
	*/
    padding: 10px 0;
}
```



**Line-height** 

- 어센더/디센더 + 폰트크기
- topline,middleline,baseline,bottom
- 1줄에 20px, fz10, 위 아래 5px을 남기고 텍스트 배치
- 한 줄 일때만 사용하는 트릭
- .menu-item / .menu-link border? > item : 보더에 커서를 댈 때 사용자가 해깔리지 않게 (a영역에서만 클릭커서 보일 수 있게) - 사용성, 접근성

스크립트가 힘들면 Html/css/javascript 까지해서 ui 개발자, 퍼블리싱 디자인 어필해서 퍼블리셔 포지션으로 가도 좋음

글꼴이 다운로드 안될경우 웹폰트가 적용했을 때를 위해 자료실 옆에 여백을 좀 줌

고정된 판형이 아니라 여러 디바이스에서 맞는 디자인



absoulte를 주고 위치를 주지않으면 자기위치에서 오프셋값을 가짐

Li : inline-block를 주고 > white-space: nowrap; (block요소에서만 줄 수 있음)



**구조선택자**

Nth-child



**Icon font = web font**
http://fontello.com/
: 텍스트, 벡터데이터

eot : ex8지원
Content: ' \ ' : 역슬래시를 넣으면 스크린리더기에서 읽지않음
fontawesome 에서는 aria-hidden이 들어있음 



**::after**
annonymance? : 직접 들어내진않지만 익명의 inline box가 만들어짐
가상요소로 크기를 준적이 없는데 블록을 가질 수 있는게  박스크기만큼 (패딩을 제외함) 인라인박스가 침범할 수 없는영역
블록이 되는순간 가상익명박스 패딩을 인식하지 않은 채 컨텐츠크기만큼 가질 수 있음

css는 다양한 경험을 해봐야함



값을 갖지않는속성 : 논리속성 : ex) defer
파싱
DOM : UI를 조작한다 =. DOM을 조작한다. 
트리구조 완성 후 - 이벤트(메뉴 링크 - click) - 부모를 찾아 클래스추가
버블링 캡쳐링 - 이벤트의 흐름파악 필요



color: hsla(110, 30%, 50%, 1); /* 색상 채도 명도 알파 */

전체적인 배치 : flex

세부적 배치 : inline-block, float

+++

[온라인 강의]

#### Grid-template-row

- 명시적 행의 크기를 정의합니다.