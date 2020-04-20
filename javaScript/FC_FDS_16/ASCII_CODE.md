# ASCII CODE란?

## ASCII CODE를 알아보기전에

- 컴퓨터의 기본 저장 단위는 byte 이다.

- 1byte는 8bit이다.

- 1byte에는 2의 8승에 해당하는 256개의 고유한 값을 저장할 수 있다



## ASCII CODE

- ASCII(American Standard Code for Information Interchange = 미국 정보 교환 표준 부호)

- 라틴 알파벳, 숫자, 특수 문자 등을 정수와 그에 대응되는 7비트 이진수로 표현하는 대표적인 **[문자 인코딩](https://ko.wikipedia.org/wiki/문자_인코딩)**이다. 

- 아스키는 컴퓨터와 통신 장비를 비롯한 문자를 사용하는 많은 장치에서 사용되며, 대부분의 문자 인코딩이 아스키에 기초를 두고 있다.



*왜 컴퓨터의 기본 저장 단위는 8bit 이라 앞서 살펴보았는데 ASCII CODE는 왜 7비트를 활용하는가?*

> 1비트는 통신에러검출을 위해 사용하기 때문이다.



*ANSI CODE??*

> 아스키코드로 다른언어를 표현하기에 7비트로 부족했다.
>
> 그래서 8비트로 확장한 ASCII코드가 나왔다. (0 ~ 256개의 값 저장가능)
>
> 확장하였음에도 불구하고 문자가 많은 국가에게서는 여전히 제한적이었음
> (우리나라같은경우) -> 그래서 유니코드가 등장하였다.(하단 참고)



## 문자집합

문자를 표현하기 위해서는 가장 먼저 글자, 숫자, 특수문자 들의 집합인 **'문자 집합'**을 정의해야 한다.
(인쇄와 통신을 제어하기 위한 제어 문자도 
문자 집합에 포함되어야 한다.)

> ex) 영어 : a - z. 
> 	  한글 : 가 ~ 힣 

이러한 문자 집합을 코드형태로 표기한 것을 코드화된 
**문자 집합** 이라 한다.

> ex) '가'에는 10001, '각'에는 10002와 같이 
> 코드를 할당하는 방식



## 문자 인코딩

문자집합을 컴퓨터에서 저장하거나 통신에 사용할 목적으로 
옥텟(octet, 8비트 단위) 형태로 표현 하는 것을 
**문자 인코딩**이라 한다.



## 유니코드

한글뿐 아니라 일본어와 중국어에도 컴퓨터에서 해당 언어를 
표현할 수 있는 독자적인 문자 집합이 있다. 
하지만 하나의 문자 집합을 사용하는 문서에서는 
이를 동시에 표현할 수 없다. 

이 문제를 해결하기 위해 전 세계적으로 사용되는 모든 문자 집합을 하나로 모아 탄생시킨 것이 **유니코드**이다.

유니코드의 인코딩 방식으로는 ASCII와 호환이 가능하면서 유니코드를 표현할 수 있는 **UTF-8 인코딩**이 가장 많이 사용된다.



## CODE PAGE

특정한 [문자 인코딩](https://ko.wikipedia.org/wiki/문자_인코딩) 테이블을 위해 쓰이는 전통적인 [IBM](https://ko.wikipedia.org/wiki/IBM) 용어이다. 
문자 인코딩 테이블은 0부터 255까지의 정수를 표현하는 단일 [옥텟](https://ko.wikipedia.org/wiki/옥텟)(octet, 바이트)이라고 불리는 
일련의 비트들이 특정한 [문자](https://ko.wikipedia.org/wiki/문자)와 결합하여 도표화(mapping)한 것이다. 
[IBM](https://ko.wikipedia.org/wiki/IBM)과 [마이크로소프트](https://ko.wikipedia.org/wiki/마이크로소프트)는 코드 페이지를 [문자열 집합](https://ko.wikipedia.org/wiki/문자열_집합)(*charset*)에 자주 할당한다.



참고 : https://ko.wikipedia.org/wiki/ASCII
[https://ko.wikipedia.org/wiki/%EB%AC%B8%EC%9E%90_%EC%9D%B8%EC%BD%94%EB%94%A9](https://ko.wikipedia.org/wiki/문자_인코딩)
https://nuli.navercorp.com/sharing/blog/post/1079940
https://d2.naver.com/helloworld/19187
https://whatisthenext.tistory.com/103
[https://ko.wikipedia.org/wiki/%EC%BD%94%EB%93%9C_%ED%8E%98%EC%9D%B4%EC%A7%80](https://ko.wikipedia.org/wiki/코드_페이지)