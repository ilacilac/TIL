# Tabnabbing 

Tabnabbing

HTML 문서 내에서 링크를 클릭 했을 때(target이 _blank인 Anchor tag) 새 탭에서 기존의 문서의 location을 피싱 사이트로 변경해 정보를 탈취하는 공격 기술을 뜻한다.

`window.opener` 객체에서 이전 페이지를 제어 할 수 있는 권한이 있으므로 악의적인 동작을 일으킬 수 있다.

ex) 메일 / 오픈 커뮤니티에서 쉽게 사용될 수 있다.



## rel="noopener"

이러한 공격의 취약점을 극복하고자 `noopener` 속성이 추가 됐다.
`rel=noopener`적용 시, `window.opener` 반환값이 null이 된다.
이 부여도니 링크를 통해 열린 페이지는 location 변경과 같은 자바스크립트 요청을 거부한다. 

=> `Uncaught TypeError` 에러를 발생시킨다.



## rel="noreferrer"

새로 열린 사이트가 `window.opener` 객체를 조작하지 못하게 한다.
다른페이지를 탐색 할 때, 브라우저가 참조 웹페이지의 주소를 보내지 못하게 한다.

Google Analytics에서 유입 트래픽의 소스를 쉽게 파악할 수 있다.
한 사이트에서 다른 사이트로의 링크를 클릭하는 것을 추천트래픽이라고한다. `noreferrer`을 설정하면 모든 추천트래픽이 직접트래픽으로 표시된다.

- rel =”noreferrer”를 사용하면 추천 된 플랫폼의 소유자에게만 트래픽 데이터가 숨겨지고 링크에 대한 액세스는 검색 엔진에 유지됩니다. 

- rel =”nofollow”는 반대로 작동합니다. 검색 엔진에 대한 링크를 비활성화하지만 추천 된 웹 사이트에서 추천 트래픽 데이터를 계속 사용할 수 있습니다. 

  

## Reference

> https://blog.coderifleman.com/2017/05/30/tabnabbing_attack_and_noopener/
>
> https://webruden.tistory.com/262
>
> https://clever-solution.com/blog/everything-you-need-to-know-about-rel-noopener-noreferrer-tags-purpose-benefits-and-seo-impact