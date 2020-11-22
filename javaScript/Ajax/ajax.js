// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();
// console.log(xhr);

// HTTP 요청 초기화
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

// HTTP 요청 헤더 설정
// 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정 : JSON
xhr.setRequestHeader('content-type', 'application/json')

// HTTP 요청 전송
xhr.send();

/**
 * 응답이 클라이언트에 도달할 지는 알 수 없다. 
 * 따라서 readystatechange 이벤트를 통해 
 * HTTP 요청의 현재 상태를 확인해야 한다. 
 * readystatechange 이벤트는 HTTP 요청의 현재 상태를 나타내는
 * readyState 프로퍼티가 변경될 때마다 발생한다.
 * 
 * readystatechange 이벤트 대신 load 이벤트를 캐치해도 좋다
 * load 이벤트는 HTTP 요청이 성공적으로 완료한 경우 발생한다.
 * 따라서 load 이벤트를 캐치하는 경우 xhr.readyState가 XMLHttpRequest.DONE인지 확인할 필요가 없다.
 */

 // onreadystatechange
xhr.onreadystatechange = () => {
  if (xhr.readyState !== XMLHttpRequest.DONE) return;
  if (xhr.status === 200) {
    // console.log('xhr.readyState', xhr.readyState); // 4 (HTTP 요청의 현재 상태를 나타내는 정수, 4는 DONE)
    // console.log('XMLHttpRequest.DONE', XMLHttpRequest.DONE); // 4
    console.log(JSON.parse(xhr.response));
    console.log('xhr.status', xhr.status); // 200
    console.log('xhr.statusText', xhr.statusText);
  } else {
    console.error('Error', xhr.status, xhr.statusText);
  }
}

// onload
xhr.onload = () => {
  if (xhr.status === 200) { 
    console.log(JSON.parse(xhr.response));
  } else {
    // status :: HTTP 요청에 대한 응답 상태(HTTP 상태 코드)를 나타내는 정수 ex) 200
    // statusText :: 	HTTP 요청에 대한 응답 메시지를 나타내는 문자열 ex) “OK”
    console.error('Error', xhr.status, xhr.statusText);
  }
}