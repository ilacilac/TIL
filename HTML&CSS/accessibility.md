# 정보접근성 오픈 아카데미(2021.06.18)

접근성 : 
키보드는 tab키만 이용하는게 아니다. / 방향키를 더 많이 사용한다.

wai-aria 1.0버전 => 1.2 조만간 업데이트예정

> 웹 페이지, 특히 [동적 콘텐츠](https://ko.wikipedia.org/w/index.php?title=동적_콘텐츠&action=edit&redlink=1), 그리고 [Ajax](https://ko.wikipedia.org/wiki/Ajax), [HTML](https://ko.wikipedia.org/wiki/HTML), [자바스크립트](https://ko.wikipedia.org/wiki/자바스크립트) 및 관련 기술로 개발된 사용자 인터페이스 구성 요소의 [접근성](https://ko.wikipedia.org/wiki/접근성)을 증가시키는 방법에 대해 규정한 [W3C](https://ko.wikipedia.org/wiki/W3C)가 출판한 기술 사양이다.

웹에서도 눈으로는 볼 수 있는데 시각적으로 안보이는사람한테도 볼 수 있게 하자 : 접근가능하다

ex) 컴퓨터선 예시, 컴퓨터랑 연결된선을 연결된 부분을 따라가지 않고도 끌 수 있나? => no => 라벨링을 먼저해놓으면 접근가능하기 쉽게!

퍼블리셔 : 네이밍
퍼블리셔에게만 접근성을 강요할게 아니라,
기획부터 개발까지 하나부터 끝까지 관심을 가져야한다.

기획자분들이 기획을 기술을 모르고 
넓게 관심을 가지고 어떤의도를가지고 컨셉을 알고가야할 문제이다.

## 접근성에대한 이야기, 아티클 

=> 숨겨놓지 말아라 
=> 사실 우리나라에서는 잘 숨기는 편이다. (권하는 수준, 지켜야할것x)
=> wai-aria 규칙 1. aria보다(native) html태그를 사용해라

## fallback(대체자)을 사용하지마라. (ex : title, placeholder)
label대신 title을 사용해라? => 2015년 개정판에 나온건데 내용개정이 없는.. 실제가 2018년
실버라이트??  => 개발자한텐 필요할 수 있지 않냐.
=> 그건 좀 다르다. => 개발자입장이랑 퍼블리셔입장이랑 다름
=> 지금은 10년이 지났고 기술이 많이 발전했다!! 
=> 현재 쓸 수 있는 기술을 사용해라!! (품질이 안좋아지는 대체자를 사용하지 말아라.)



## 접근성원칙

1. 간격하고 명확하게 
   텍스트를 계속 들으면 장황하고, 반복해서 듣기 힘들다.
   빠른속도로 읽는데 skip하면서 들으실때, 장황하게 설명되어있다면
   skip할 확률이 높다.

2. native

3. fallback no

4. 화면에 보이는 이름을 사용하기. (접근가능한 이름 부여하기)

   ```html
   <button>확인</button>
   ```

   확인이라 읽어주니 label, title을 달아줄 필요가 없다.





**li, td, caption** 
: 자식콘텐츠로부터 이름을 얻어내는 element (focusable한 element)

**select, input => label** 
: 접근가능한 이름을 만들어준다.

title보다 label숨기는것보다 낫다
label을 placeholder처럼? => placeholder은 크롬기준 포커스를 받으면 사라진다. focus받으면 display:none;을 시키게 될경우 읽어주지않는다.
focus받으면 위로 위치를 옮기는게 낫다.
대한항공 : 탑승 => label : 탑승일, yy-mm-dd => 미국접근성수정권고
=> yy mm dd 는 중요입력포맷이니 => 항상보이게 수정해라
=> 탑승일(yy mm dd)

나라마다 입력양식이 다르고, 이런표준화가 아닌것은
항상 label로 넣어주는게 도움이 된다.

placeholder은 흰트, 부가정보 => 명시적으로 어떻게 가이드를 해라
aria-label의 대체로 사용하지 말자

전화번호 => dash를 넣는경우 / 않넣는경우 => 우리나라랑 미국은 다르게 사용되기때문에 예시를 넣어라

국내사례 / 해외사례

디자인 label숨긴다 안숨긴다 => aria-label을 사용
label을 사용하기 애매한 케이스? => ex: 컴포넌트 기반 개발하시는 분 => react, vue ... => 당장 label을 만들 수 없다면 aria-label을 사용
강제로 aria-label에 지정된 명칭을 이것으로 접근한다.

자식컨텐츠가 있을경우, 자식컨텐츠의 name이 무효화 된다.



## labelledby

1. 눈에 보이는것이어야한다. 
   (숨긴콘텐츠랑 연결할 수 있으나, 숨겨놓을 이유가 없다.)
2. label : 소스로만 확인가능하다
   labelledby : 화면으로도 보인다.


??인터랙티브 앨리먼트(role속성이 지정된 엘리먼트) => label지정가능
landmark(header, footer...) : aria-label 사용가능

img/button : 해당명칭 그대로 대체택스트로 넣지않는다.
ex) "회사 로고"

사이트 : 마이크로소프트, BBC, 루이비통

디자인관점보다 컨텐츠관점에서 접근하자

region : 영역에대한 역할 => 접근가능한이름을 반드시 요구한다.
aria-labelledby

section tag에 role, labelledby를 제공하지 않고
section의 heading tag를 사용하는것도 충분히 정보제공이 된다.
section tag를 제공해주지 못한 브라우저들을 대비해
aria-labelledby를 제공해주는 경우도 있다.