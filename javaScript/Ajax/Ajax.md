# Ajax

자바스크립트를 사용하여 브라우저가 서버에게 비동기방식으로 데이터를 요청하고,
서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식을 말한다.

Ajax는 브라우저에서 제공하는 Web API인 XMLHttpRequest 객체를 기반으로 동작한다.

> XMLHttpRequest는 HTTP 비동기 통신을 위한 메서드와 프로퍼티를 제공한다.



## XMLHttpRequest

브라우저는 주소창이나 HTML의 form 태그 또는 a태그를 통해 HTTP 요청 전송기능을 기본으로 제공한다.
자바스크립트를 사용하여 HTTP 요청을 전송하려면 XMLHttpRequest를 객체를 사용한다.
Web API인 XMLHttpRequest 객체는 HTTP 요청 전송과 HTTP 응답 수신을 위한 다양한 메서드와 프로퍼티를 제공한다.



## HTTP 요청 전송

HTTP 요청을 전송하는 경우 다음 순서를 따른다.

1. XMLHttpRequest.prototype.open 메서드로 HTTP 요청을 초기화한다.
2. 필요에 따라 XMLHttpRequest.prototype.setRequestHeader 메서드로 특정 HTTP 요청의 헤더값을 설정한다.
3. XMLHttpRequest.prototype.send 메서드로 HTTP 요청을 전송한다.

```js
// === XMLHttpRequest 객체 생성 === //
const xhr = new XMLHttpRequest();
console.log(xhr);

// === HTTP 요청 초기화 === //
xhr.open('GET', '/users');

// === HTTP 요청 헤더 설정 === //
// 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정 : JSON
xhr.setRequestHeader('content-type', 'application/json')

// === HTTP 요청 전송 === //
xhr.send();

```

