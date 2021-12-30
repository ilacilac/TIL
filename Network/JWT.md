## 내 궁금증

토큰을 발급받아도 **검증하는 단계에서 DB와 비교해야하는게 아닌가?**
유저의 정보를 서버에 보내고, 서버의 비밀키를 이용해 hash화 해서 토큰을 발급하고,
그 토큰을 유저에게전달 (쿠키로?), 이후 요청은 서버에서 이 토큰이 유효한지 검증만하면됨.
(검증하고나면? 그뒤엔 서버에의해 유저정보를 보내줘야하잖아?
**토큰자체가 유저정보라서 서버에 안가도되는건가?**)

## 정리해보자!

토큰 기반 인증시스템

- 토큰 : 로그인 이후, 서버에서 만들어주는 문자열
- 토큰안에는 사용자의 로그인정보와 서버에서 발급되었음을 증명하는 서명이 들어있다.
- 서명데이터는 해싱 알고리즘을 통해 만들어진다. → 무결성 보장
  무결성이란, 정보가 변경되거나 위조되지 않았음을 의미

**JWT** : 클라이언트와 서버 사이 통신 시, 인가를 위해(Authorization) 사용하는 토큰

**구성** : Header.Payload.Signature

- Header : typ, alg 두 정보로 구성
  alg는 헤더를 암호화 하는 것이 아니고, Signature를 해싱하기 위한 알고리즘을 지정하는 것
      ```jsx
      {
      	"alg": "HS256",
      	"typ": JWT
      }
      ```
- Payload
  토큰에서 사용할 정보의 조각들인 클레임(Claim)이 담겨 있다. - 등록된 클레임(Registered Claim) - 공개 클레임(Public Claim) - 비공개 클레임(Private Claim)

### 동작원리

- 서버에서 secret키를 통해 Access Token 발급, 응답 헤더에 담아서 보낸다.
- 클라이언트는 API 요청 시, 요청 헤더의 Authorization 필드에 Access Token을 담아서 보냅니다.
  일반적으로 value앞에 Bearer이 앞에 붙여진다.
      ```jsx
      {
      	"Authorization": "Bearer {생성된 토큰 값}"
      }
      ```

---

client : JWT
Server : Access Token(T) / RT갱신

취약점 : 보안 -> Refresth
위를 개선하기 위해서 두가지를 들고 다님
-> RT이 만료가 되면

1. 클라이언트 요청
2. 서버에서 토큰과 RT를 준다
3. 그 이후는 T로만 요청을 한다.
   (T는 RT보다 수시로 갱신되어야 함)
   만료는 클라이언트에서도 확인 할 수 있다.
   header - Authorization (bearer token) : 일반적으로

T가 인증시간이 적어서 매번갱신해야되는데 갱신될 때는 RT를 실어서 보냄
token 만료시간 실려있음 (쿠키랑 해깔리지말자)

세션은 메모리상에 물고있음
토큰은 클라이언트에 저장을 한다

세션은 세션아이디만 보내고 서버는 새션아이디를 매핑해서 판별해서 보낸다
jwt 토큰자체에 정보를 담아서 보낸다

**결국 서버가 저장을 하냐 안하냐가 중요하다**

### Reference

[https://nyeongnyeong.tistory.com/194](https://nyeongnyeong.tistory.com/194)

[https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#login](https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#login)
