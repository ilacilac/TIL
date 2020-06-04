# 타이머

## 호출 스케줄링

함수를 명시적으로 호출하지 않고 일정시간이 경과된 이후에 호출되도록 함수 호출을 예약하려면 타이머 함수를 사용한다. 이를 호출 스케줄링이라 한다.

타이머를 생성할 수 있는 타이머 함수

- setTimeOut

  일정 시간이 경과하여 타이머가 만료되면 콜백 함수를 단 한번 호출한다.

- setInterval

  일정 시간이 경과되어 타이머가 만료될 때마다 콜백 함수를 계속 반복호출 한다.

타이머를 제거할 수 이는 타이머 함수

- clearTimeOut
- clearInterval



타이머 함수는 ECMAScript 사양에 정의된 빌트인 함수가 아니다.
하지만 브라우저 환경과 Node.js 환경에서 모두 전역 객체의 메서드로서 타이머 함수를 제공하고 있다.

타이머 함수 setTimeOut과 setInterval은 모두 일정 시간이 경과된 이후 콜백 함수를 호출하는 타이머를 생성한다.

자바스크립트 엔진은 단 하나의 실행 컨텍스트 스택을 갖기 때문에 동시에 두가지 태스크를 동시에 진행할 수 없다. 즉, 자바스크립트 엔진은 싱글 스레드로 동작한다.

이런 이유로 타이머 함수 setTimeOut과 setInterval는 비동기적으로 동작한다.



## 타이머 함수

### setTimeout / clearTimeout

setTimeout 함수는 두번째 인수로 전달한 시간(ms, 1/1000초)이 경과한 이후 첫번째 인수로 전달한 콜백 함수를 단 한번 호출한다.

```js
const timeoutId = setTimeout(func|code[, delay, param1, param2, ...]);
```

func : 타이머가 만료된 이후 호출할 콜백 함수를 전달한다.

delay : 함수를 호출하기까지 지연할 시간을 밀리초 단위로 전달한다.(생략시 0)

param1, param2 : 호출 스케줄링된 콜백 함수에 전달하여할 인수가 존재할 경우, 새번째 이후 인수로 전달할 수 있다.



```js
// 1초 이후 첫 번째 인수로 전달할 함수 호출
setTimeout(() => console.log('Hi!'), 1000);

// 1초 이후 첫 번째 인수로 전달할 함수에 인수를 전달하면서 호출
setTImeout(name => console.log(`Hi! ${name}.`), 1000, 'Lee');

// 지연 시간을 생략하면 기본값이 0이다.
setTimeout(() => console.log('Hello!'));
```



setTimeout 함수는 일정시간이 경과한 이후 전달받은 콜백 함수를 호출하는 타이머를 생성하고, 생성된 타이머를 식별할 수 있는 고유한 타이머 id값을 반환한다.

setTimeout 함수가 반환하는 타이머 id값은 브라우저 환경인 경우 숫자이며
Node.js 환경인 경우 객체다.

setTimeout 함수가 반환한 타이머 id를 clearTimeout 함수의 인수로 전달하여 타이머를 취소 할 수 있다.

즉, clearTimeout 함수는 호출 스케줄링을 취소한다.

```js
// 1초 이후 첫 번째 인수로 전달한 함수 호출
const timeoutId = setTimeout(() =>  console.log('Hi'), 1000);

// setTimeout 함수가 반환한 타이머 id를 인수로 전달하여 타이머를 취소
clearTimeout(timeoutId);

/*
timoutId변수에 등록되어있는 setTimeout 함수가 반환한 타이머 id값(숫자)를
clearTimeout 함수의 인수로 전달하여 타이머를 취소한다.
*/
```



### setInterval / clearInterval

setInterval 함수는 두번째 인수로 전달한 시간이 경과할 때 마다 첫번째 인수로 전달한 콜백 함수를 타이머가 취소될 때 까지 호출한다.

setTimeout 함수는 일정 시간이 경과한 이후 콜백 함수를 단 한번 호출하지만
setInterval 함수는 일정 시간 간격으로 콜백 함수를 무한히 반복 호출한다.

setInterval 함수에 저날한 인수는 setTImeout 함수와 동일하다.

```js
const timeId = setInterval(func|code[, delay, param1, param2, ...]);
```



setInterval 함수는 일정 시간이 경과할 때 마다 전달받은 콜백 함수를 호출하는 타이머를 생성하고, 생성된 타이머를 식별할 수 있는 고유한 타이머 id값을 반환한다.

setInterval 함수가 반환하는 타이머 id값은 브라우저 환경인 경우 숫자이며 Node.js 환경인 경우 객체다. 

setInterval 함수가 반환한 타이머 id를 clearInterval 함수의 인수로 전달하여 타이머를 취소 할 수 있다.

즉, setInterval 함수는 호출 스케줄링을 취소한다.

```js
let count = 1;

// 1초 마다 첫 번째 인수로 전달한 콜백 함수를 호출
const timeoutId = setInterval(() => {
    console.log(count); // 1 2 3 4 5
    // count가 5이면 타이머 취소
    if (count++ === 5) clearInterval(timeoutId);
}, 1000);
```

```js
let count = 1;

// 1초 마다 첫 번째 인수로 전달한 콜백 함수를 호출
const timeoutId = setInterval(() => {
    console.log(count); // 1 2 3 4
    if (++count === 5) clearInterval(timeoutId);
}, 1000);
```

---

- 호출스케쥴링 : 타이머 함수를 사용하여 일정시간 이후에 함수를 호출하는것

- 타이머 함수는 비동기적으로 동작한다.

- 첫번째 인수로 콜백 함수(필수) / 두번째 인수로 지연할 시간(기본값 : 0) / 세번째 인수로 콜백 함수에 전달하여야 할 인수

- setTimeout / setInterval 함수는 일정 시간이 경과한 이후 전달받은 콜백함수를 호출하는 타이머를 생성하고, 생성된 타이머를 식별할 수 있는 고유 타이머 id값을 반환한다.(브라우저환경 : 숫자 / Node.js환경 : 객체)

- clearTimeout / clearInterval로 타이머를 취소할 수 있다 (= 호출 스케줄링을 취소한다.)