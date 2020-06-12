# Promise

자바스크립트는 비동기 처리를 위한 하나의 패턴으로 콜백 함수를 사용한다.

- 가독성이 나쁨
- 비동기 처리 중 발생하는 에러의 예외 처리가 곤란
- 여러개의 비동기 처리를 한번에 처리하는것의 한계



ES6에서는 비동기 처리를 위한 또 다른 패턴으로 프로미스를 도입하였다.

- 전통적인 콜백 패턴이 가진 단점을 보완
- 비동기 처리시점을 명확하게 표현 할 수 있는 장점



## 비동기 처리를 위한 콜백 패턴의 단점

### 콜백 헬

```js
let todos;

// GET 요청을 위한 비동기 함수
const get = url => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      // ① 서버의 응답을 상위 스코프의 변수에 할당한다.
      todos = JSON.parse(xhr.response);
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

// id가 1인 post를 취득
get('https://jsonplaceholder.typicode.com/posts/1');
console.log(todos); // ② undefined
```

- 비동기 함수인 get이 반환한 서버로부터의 응답이 변수에 할당되기 이전에 console.log가 먼저 호출되어 undefined가 출력

- load 이벤트 발생 => 이벤트 핸들러가 태스크 큐에 저장 => 콜스택이 비면 이벤트 루프에 의해 콜스택으로 푸쉬

- 이처럼 비동기 함수인 get이 취득한 서버의 응답 결과는 반환할 수 없고, 상위 스코프의 변수에 할당할 수도 없다.

- 비동기 함수의 처리결과(서버의 응답 등)에 대한 후속 처리는 비동기 함수에게 콜백 함수를 전달해서 수행해야 한다.

```javascript
const get = (url, seccessCallback, failCallback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  
  xhr.onload = () => {
    if (xhr.status === 200) {
      successCallback(JSON.parse(xhr.response));
    } else {
      failCallback(xhr.status);
    }
  };
};
get('https://jsonplaceholder.typicode.com/posts/1', console.log, console.error);
```

비동기 함수의 처리 결과를 가지고 또 다른 비동기 함수를 호출해야 한다면
함수 호출이 중첩되어 복잡도가 높아지는 현상이 발생한다.

**= 콜백 헬(callback hell)**

```javascript
// GET 요청을 위한 비동기 함수
const get = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      // 서버의 응답을 콜백 함수에 전달하면서 호출하여 응답에 대한 후속 처리를 한다.
      callback(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

const url = 'https://jsonplaceholder.typicode.com';

// id가 1인 post의 userId를 취득
get(`${url}/posts/1`, ({ userId }) => {
  console.log(userId); // 1
  // post의 userId를 사용하여 user 정보를 취득
  get(`${url}/users/${userId}`, userInfo => {
    console.log(userInfo); // {id: 1, name: "Leanne Graham", username: "Bret",...}
  });
});
```



### 에러 처리의 한계

비동기 처리를 위한 콜백 패턴의 문제점 중에서 가장 심각한 것은 에러처리가 곤란하다는 것이다.

```javascript
try {
  setTimeout(() => { throw new Error('Error!'); }, 1000);
} catch (e) {
  console.error('캐치한 에러', e);
}
```

비동기 함수인 setTimeout이 호출되면 setTimeout 함수의 실행 컨텍스트가 생성되어 콜스택에 푸시되어 실행된다. 

setTimeout 함수의 실행 컨텍스트가 생성되어 콜스택에 푸시되어 실행된다.
setTimeout은 비동기 함수이므로 콜백 함수가 호출되는 것을 기다리지 않고 즉시 종료되어 콜스택에 제거된다. 이후 타이머가 만료되면 setTimeout함수의 콜백 함수는 태스크 큐로 푸시되고 콜스택이 비어졌을 때 이벤트 루프에 의해 콜스택으로 푸시되어 실행된다.

이때 setTimeout 함수는 이미 호출 스택에서 제거된 상태이다.
이것은 setTimeout 함수의 콜백 함수를 호출한 것은 setTimeout 함수가 아나다라는 것을 의미한다.

setTimeout 함수의 콜백 함수의 호출자(caller)가 setTimeout 함수라면 콜 스택의 현재 실행중인 실행 컨텍스트가 콜백 함수의 실행 컨텍스트 일때, 현재 실행중인 실행 컨텍스트의 하위 실행 컨텍스트가 setTimeout 함수이어야 한다.

에러는 호출자방향으로 전파된다. 즉, 콜 스택의 아래 방향(실행 중인 실행 컨텍스트에서 직전에 푸시된 실행 컨텍스트 방향)으로 전파된다. 하지만 위에서 살펴본 바와 같이 setTimeout 함수의 콜백 함수를 호출한것은 setTimeout 함수가 아니다.
따라서 setTImeout 함수의 콜백 함수가 발생시킨 에러는 catch 블록에서 캐치 되지 않는다.

**비동기 처리를 위한 콜백 패턴의 콜백 헬, 에러처리의 한계를 극복하기위해**
**ES6에서 프로미스가 도입되었다.**



## 프로미스 생성

- Promise 생성자 함수를 new 연산자와 함께 호출하면 프로미스(Promise 객체)를 생성한다.
- Promise 생성자 함수는 비동기 처리를 수행할 콜백 함수를 인자로 전달 받는데 이 콜백 함수는 resolve와 reject 함수를 인수로 전달 받는다.



## fetch

fetch 함수는 XMLHttpRequest 객체와 마찬가지로 HTTP 요청 전송 기능을 제고앟는 클라이언트 사이드 Web API이다.

fetch 함수에는 HTTP 요청을 전송할 URL과
HTTP 요청 메소드, HTTP 요청 헤더, 페이로드 등을 설정한 객체를 전달한다.

```javascript
const promise = fetch(url, [, options])
```



fetch 함수는 HTTP 응답을 나타내는 Response 객체를 래핑한 Promise 객체를 반환한다. 

= 후속처리 메서드 then을 통해 프로미스가 resolve한 Response 객체를 전달 받을 수 있다.

Response 객체는 HTTP 응답을 나타내는 다양한 프로퍼티를 제공한다.



Response.prototype 에는 Response 객체에 포함되어 있는 HTTP응답몸체를 위한 다양한 메서드를 제공한다.

ex) fetch 함수가 반환한 프로미스가 래핑하고 있는 HTTP응답 몸체를 취득하려면 
Response.prototype.json 메서드를 사용한다.

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
// response는 http 응답을 나타내는 response객체이다.
// json메서드를 사용하여 reponse객체에서 http 응답 몸체를 취득하여 역직렬화한다.
	.then(response => response.json());
	.then(json => console.log(json));
```



fetch 함수를 통해 HTTP 요청 전송

fetch 함수에 첫번째 인수 : HTTP 요청을 전송할 URL
두번째 인수 : HTTP 요청 메서드, HTTP 요청 헤더, 페이로드 등을 설정한 객체