#### attribute / property

| attribute | property |
| --------- | -------- |
| html      | Css      |

```html
<div class="note">
  
</div>
<!-- 
	class의 속성은 추가정보
-->

<style> 
/* css의 속성은 처음부터 갖고 있는 성질 */
</style>
```

reset.css : 기본베이스를 설정하고 시작



#### float

- 주변의 콘텐츠를 밀어내는 역할
- float은 레이아웃 조절하는것으로 태어난게 아니기때문에 다양한 버그가 발생됨 
  그래서 이후 flex가 나오게 되고, flex는 단일행,열만 배치할수있어서 grid가 나오게 됨

- 부모크기만큼 linebox를 생성하고 그 위치에서 왼/오른쪽 배치되는게 float
  Linebox 부모크기
  = Float g1(w250)에 주면 (950 - 250)만큼의 라인박스가 생김
  = float 왼/오른쪽을 주면 해당방향으로 배치
  = 공간이 없으면 부모크기만큼 다시 배치
  = 부모의 높이를 잃어버림

- float을 주면 콘텐츠 크기만큼의 크기를 줌(w,h를 안주면)
  그러면 group2의컨텐츠는 group1의 컨텐츠 이후로 밀려남
  = 상자는 겹칠 수 있으나 텍스트는 겹칠 수 없다.

- Normal flow까지 침범

- 침범된 요소에 <code>clear: both;</code> 를 주면 float 영향에서 벗어난다.
  (display: block 에서만)
  가상요소는 인라인상자, 무시된다 그래서 가상요소에 block을 준 후 <code>clear: both;</code> 를 준다

- 마진병합현상
  clear에 값을 주었다 가장 높은 float개체의 높이 크기만큼 
  마진을 줘서 밀어냄
  (예제에선 g1 높이만큼 강제로 추가되서 강제로 마진이 추가됨(group lh크기만큼 그래서 slogan이 위쪽에 마진을 추가될 때 g1높이크기만큼 주게 되어 밀어냄)

- **clear가 마진을 이용하는 트릭이구나!**

- main의 높이가 갖지 않았기때문에 slogan이 clear-both를 주기전에 
  group3 옆에 배치가 되었던거 
  **결국 main에 높이값이 있으면 해결되는 문제!**
  그렇다고 main에 높이를 주기엔
  콘텐츠가 주기적으로 바뀌게 되는 경우라면??
  자바스크립트? setTimeout? - 트래픽문제는 어쩔껀데

  - .clearfix : (Best Solution)

    clearfix는 콘텐츠가 없어서 존재는하지만 높이가없음
    float과 겹침
    float개체중 가장 높은것만큼 높이가 늘어남
    저걸위에 마크업에서 해결해야하는게 못마땅 > .main::after	
    ::after 은 Cmd + a 해서 영역이 안잡히는것과 같이 돔에서 잡히지않음
    clear은 block일때만 잡히므로 db를 준다

  - overflow (BFC) : Block Formatting Context (Easy Solution)
    float되는 부모요소에 ova, ovh()
    독립적으로 부모가 잃어버렸던 자식요소를 불러드림
    Ex6 *zoom:1 / 이렇게 해결도 했었음(확대축소, 원본크기를 읽어드리는 과정에서 잃어버렸던 높이인식)
    **그래픽스시스템**을 알아야함 (reflow, repaint)(그 안에 포함되는 개념)
    clearfix보단 좋은것같은데? 약점이있음!

    - Position: relative, left: -20px;(이동되었는데 넘치는 부분은 짤림 / 탈그리드제약 > 디자인적 제한이 있음)
      좋은 해결책일 수 있지만
      상황에 따라 제약이 있을 수 있으므로 사용여부 선택해서 쓰면됨
      ?? 왜 visible만 아니고 auto , hidden이기만 하면 되지?

  - float 
    부모에 float을 주면 자식요소를 가지고 같이 float이 됨
    언제? - 2중플로팅처리 될 때 사용함

    ```html
    <div class="wrapper">
      <div class="a"></div>
      <div class="b"></div>
    </div>
    <div class="c"></div>
    ```

    

    지금사용하는 웹카페 예제에서는 auto margin을 쓸 수 없으므로 적합하지 않음
    
  - 높이값을 직접 지정해준다.

https://www.slideshare.net/search/slideshow?searchfrom=header&q=wsconf

- 웹폰트 파헤치기, 성능이론...(네이버 주니어 개발자의 게시물)
- 웹표준 컨퍼런스
- 어센트코리아 (seo관련된 게시물)

module.css
style.css
typo.css

... 위와같이 여러개 관리



- 개발버전과 배포버전 구분해서 쓰기

- html말고 pug, css -> sass, less, script -> typescript를 이용해 개발 후(브라우저해석못함) 이후 변환해서 배포함
  Src(수정,빌드) / dist(배포)
  가볍게 쓰려면 파셀? 웹팩? 바벨? 
  Html,css,js merge하면서

  배포할땐 {

  } -> { }불필요한 여백 없애고, 필요없는 주석삭제 

- 최소한의 수정으로 바꿀수있는 코드

Clearboth설명에 마진이라 얘기하는게
알고리즘이 마진을 이용한거임 실제 마진이 아님
border-radius: 0 0 15px 15px;
(시계방향 왼쪽부터)



#### position

- absolute 
  - static이 아닌 가까운 상위요소 기준으로 배치
  - 레이어 개념
- relative
  - 상대위치 (내가 있었던 위치를 고수함 offset값을 줘도 원래위치 기준으로 움직임)



**inline-box**

- inline은 크기를 줄 수 없다
- text-align은 블록요소에 줌 그래서 부모요소가 블록, 안에 inline-block을 주었을때 부모에 text-align을 지정하면 안에 요소가 정렬됨
- Inline 요소는 엔터키(눈에보이지않은 공백문자 - 블록에선 무시되지만)가 반영됨 
  - font-size: 0;

**CSS에서 가장 중요하게 생각할 것**
상속
겹침
우선순위

상속안되는거 : position, display, m,p,b ...
상속되는거 : color, fz



**Font** 

16 * 0.85em = 12px (본문 최소폰트크기)

rem, em 

```css
html {
  fz:10px;
}

rem : 글자 확대하기에 적합(ie9이상)
```



color - inherit

무조건 display:none으로 숨기는것보다 접근할 수 있으면서 보이지않게하는게 좋음

- Position: absolute; / top: -9999px;
  - 접근성 이슈가 있을 수 있음 (aoa의 항공사 적용사례)
    스크롤링이 최상단으로 감
  - w:0, h:0, ovh : x - 최소한의 크기가있어야함
  - w:1px, h:1px, ovh, clip-path(잘라내는 속성)



배경이미지가 안보일때의 환경이었을때도 생각

- Img 뒤에 white bg 인데 글자색도 white 인 경우



중첩목록은 margin을 가지지 않는다

+++



#### git

- git : 개발자들이 소스코드를 관리하기 위해 로컬에 설치하는 오픈소스 툴
- Github : git을 사용하는 개발자들이 자원을 업로드 혹은 다운로드 할 수 있게 해주는 온라인 서비스

**[vim모드]**

--global core.editor "vim"

로컬

- git commit 시 i를 누르면 insert 할 수 있음(vim모드 설정했어서 들어가진거임)
- 그담 esc누르기(나오기)
- :wq 

한 커밋 당 한가지 버전추가

repo : 저장소

작업을 시작하기 전과 커밋을 한 이후에 이 두가지 경로에 항상 로컬에서는 
Git pull origin master :: 로컬에 있는 저장소를 원격에 있는상태로 최신화 시킨다.

