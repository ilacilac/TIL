# 제어문

일반적으로 코드는 위에서 아래방향으로 순차적 실행되는데
제어문을 사용하면 **코드의 실행 흐름을 인위적으로 제어**할 수 있다.

> 실행 순서가 변경 되는것은 가독성을 해치는 단점이 있음.
>
> forEach, map, filter, reduce와 같은 고차 함수를 사용한 함수형 프로그래밍 기법에서는 제어문의 사용을 억제하여 복잡성을 해결하도록 노력한다.

- 조건문

  주어진 조건에 따라 코드 블록을 실행

- 반복문

  반복 실행



## 블록문

- 0개 이상의 문을 중괄호로 묶은것 
  **= 코드블록 / 블록**
- 자바스크립트는 블록문을 하나의 실행 단위로 취급한다.
- 일반적으로 제어문이나 함수를 정의할 때 사용하는 것이 일반적 이다.
- 블록문의 끝에는 세미콜론을 붙이지 않는다.

```javascript
// 블록문
{
  var foo = 10;
  console.log(foo);
}

// 제어문
var x = 0;
while (x < 10) {
  x++;
}
console.log(x);

// 함수 선언문
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2)); // 3
```



## 조건문

- 주어진 조건식의 평과 결과에 따라 코드블록의 실행을 결정
- 조건식은 불리언 값으로 평가될 수 있는 표현식이다.
- **If...else, switch**



### if...else 문

- 주어진 조건식(불리언 값으로 평가 될 수 있는 표현식)의 평가 결과

  > 논리적 참 또는 거짓에 따라 실행할 코드 블록을 결정
  >
  > 조건식의 평과결과가 true일 경우, if문 다음의 코드 블록이 실행되고 false일 경우, else문 다음의 코드 블록이 실행된다.

```javascript
if (조건식) {
  // 조건식의 평과결과가 true이면 이 코드 블록이 실행된다.
} else {
  // 조건식의 평과결과가 false이면 이 코드 블록이 실행된다.
}
```



if문의 조건식은 불리언값으로 평가되어야 한다.

> 조건식이 불리언값이 아닌값으로 평가되면 
>
> 자바스크립트 엔진에 의해 암묵적으로 데이터 타입이 불리언 값으로 강제변환되어 실행할 코드 블록을 결정한다

조건식을 추가하여 조건에 따라 실행될 코드 블록을 늘리고 싶으면
else if 문을 사용한다.

> else if 문과 else문은 옵션
>
> ​	else if : 2번 이상 사용가능
>
> ​	else : 1번만 사용가능

```javascript
if (조건식1) {
  // 조건식1이 참이면 이 코드 블록이 실행된다.
} else if (조건식2) {
  // 조건식2이 참이면 이 코드 블록이 실행된다.
} else {
  // 조건식1과 조건식2 모두 거짓이면 이 코드 블록이 실행된다.
}

var num = 2;
var kind;

// if문
if (num > 0) { // true
  kind = '양수'; // 실행
}
console.log(kind); // 양수

// if...else 문
if (num > 0) {
  kind = '양수';
} else {
  kind = '음수'; 
}
console.log(kind); // 양수

// if...else if 문 
if (num > 0) {
  kind = '양수';
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '영';
}
console.log(kind); // 양수

```



코드 블록 내에 문이 하나뿐이라면 중괄호 생략가능

```javascript
var num = 2;
var kind;

if (num > 0) 			kind = '양수';
else if (num < 0) kind = '음수';
else 							kind = '영';

console.log(kind); // 양수
```



대부분의 if...else 문은 삼항조건 연산자로 바꿔 쓸 수 있다.

```javascript
var x = 2;
var result;

if (x % 2) { // 2 % 2 = 0 이고 0은 false로 암묵적 강제 변환된다.
  result = '홀수';
} else {
  result = '짝수';
}

console.log(result); // 짝수

// 위의 예제를 아래와 같이 삼항 조건 연산자로 바꿔 쓸 수 있다.
// 두가지 경우의 수
var x = 2;

var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수
```

```javascript
// 세가지 경우의 수
// 양수, 음수, 영

var num = 2;
var kind = num ? (num > 0 ? '양수' : '음수') : '영';

console.log(kind); // 양수
```



**삼항 조건 연산자** `num > 0 ? '양수' : '음수'` 는 표현식이다.
= 값처럼 사용 할 수 있다.
= 변수에 할당할 수 있다.

**if ... else 문**은 값처럼 사용할 수 없기때문에 변수에 할당할 수 없다.

단순히 값을 결정하여 변수에 할당하는 경우 : **삼항 조건 연산자**
실행하여야 할 내용이 복잡한 여러줄의 문이 필요할 경우 : **if ... else**



### switch 문

- 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 실행순서를 이동시킨다.
- case 문은 상황(case)을 의미하는 표현식을 지정하고 콜론으로 마친다. 그 뒤에 실행할 문들을 위치시킨다.
- switch 문의 표현식과 일치하는 표현식을 갖는 case 문이 없다면 실행순서는 default 문으로 이동한다.(옵션사항)

```javascript
switch (표현식) {
  case 표현식1 : 
    switch 문의 표현식과 표현식1이 일치하면 실행될 문;
  break;
  case 표현식2 : 
    switch 문의 표현식과 표현식2이 일치하면 실행될 문;
  break;
  default:
  	switch  문의 표현식과 일치하는 표현식을 갖는 case 문이 없을 때 실행될 문;    	
}

```



if...else 문의 조건식 : 불리언 값으로 평가되어야 함
switch 문의 표현식 : 문자열, 숫자 값인경우가 많다
= 논리적 참, 거짓보다는 다양한 상황(case)에 따라 실행할 코드 블록을 결정할 때 사용한다.

```javascript
var month = 11;
var monthName;

switch (month) {
	case 1: monthName = 'January';
  case 2: monthName = 'February';
  case 3: monthName = 'March';
  case 4: monthName = 'April';
  case 5: monthName = 'May';
  case 6: monthName = 'June';
  case 7: monthName = 'July';
  case 8: monthName = 'August';
  case 9: monthName = 'September';
  case 10: monthName = 'October';
  case 11: monthName = 'November';
  case 12: monthName = 'December';
  default: monthName = 'Invalid month';
}
console.log(monthName); // 'Invalid month'
```

> *왜 Invalid month가 나왔지?*

switch 문의 표현식의 평과 결과로 일치한 11인 case문을 실행은 하였으나, switch 문을 탈출 하지 않고 switch 문이 끝날 때까지 이후의 모든 case문과 default 문을 실행했기 때문이다.
이를 **폴스루(fall through)** 라 한다.

> 'November' 할당 -> 'December' 재할당 -> 'Invalid month' 재할당

**그러므로 이런 경우엔 case 문에 break문으로 탈출시켜주자**

```javascript
var month = 11;
var monthName;

switch (month) {
  case 1: monthName = 'January';
    break;
  case 2: monthName = 'February';
    break;
  case 3: monthName = 'March';
    break;
  case 4: monthName = 'April';
    break;
  case 5: monthName = 'May';
    break;
  case 6: monthName = 'June';
    break;
  case 7: monthName = 'July';
    break;
  case 8: monthName = 'August';
    break;
  case 9: monthName = 'September';
    break;
  case 10: monthName = 'October';
    break;
  case 11: monthName = 'November';
    break;
  case 12: monthName = 'December';
    break;
  default: monthName = 'Invalid month';
}

console.log(monthName); // November
```

default 문에는 break 문을 생략하는것이 일반적이다.

> default 문은 switch 문의 가장 마지막에 위치 하므로
> default 문의 실행이 종료하면 switch 문을 빠져나간다.



**상황에 때라 가독성이 좋은쪽으로 switch, if...else를 사용하도록 하자.**



## 반복문

- 주어진 조건식의 평가 결과가 참인 경우 코드 블록을 실행한다.
- 조건식을 다시 검사하여 여전히 참인경우 코드 블록을  다시 실행한다(조건식이 거짓일때까지 반복)
- for, while, do...while



### for

- 조건식이 거짓으로 판변될 때까지 코드 블록을 반복 실행한다.
- 변수 선언문의 변수 이름은 반복을 의미하는 iteration의 i를 사용하는것이 일반적

```javascript
for (변수 선언문 또는 할당문; 조건식; 증감식) {
  조건식이 참인 경우 반복 실행될 문;
}
```



### while

- 주어진 조건시그이 평가 결과가 참이면 코드 블록을 계속해서 반복 실행한다.
- 조건문의 평가 결과가 거짓이 되면 실행을 종료한다.
- 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 강제 변환되어 논리적 참, 거짓을 구별한다.



### do...while 

- 코드 블록을 먼저 실행하고 조건식을 평가한다.
  따라서 코드 블록은 무조건 한번 이상 실행된다.



## break 문

- 레이블 문, 반복문, switch 문의 코드 블록을 탈출 한다.

  > 레이블 문 : 식별자가 붙은 문
  > 프로그램의 실행 순서를 제어하기 위해 사용한다
  > ex) switch문의 case문과 default문
  >
  > for문 외부로 탈출할 때 유용하지만, 그 외의경우엔 사용을 권장하지않는다 > 가독성이 나빠짐 = 오류 발생률 높음



## continue 문

- 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 이동한다.
- break 문처럼 반복문을 탈출하지는 않는다.