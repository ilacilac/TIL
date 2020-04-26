# 타입 변환과 단축평가

## 타입 변환 

- 자바스크립트의 모든 값은 타입이 있다.
- 값의 타입은 개발자의 의도에 의해 다른 타입으로 변환할 수 있다.
- 의도적으로 값의 타입을 변환하는것 
  **= 명시적 타입 변환 / 타입 캐스팅**

```javascript
var x = 10;

// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다.

var str = x.toStirng();
console.log(typeof str, str); // string 10
```



개발자의 의도와는 상관없이 표현식을 평가하는 도중,
자바스크립트 엔진에 의해 암묵적으로 타입이 자동변환되기도한다
**= 암묵적 타입 변환 / 타입 강제 변환**

```javascript
var x = 10;

// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.
var str = x + '';
console.log(typeof str, str); // string 10
```



명시적 타입 변환과 다르게 암묵적 타입 강제 변환은 개발자의 의도가 드러나지 않기 때문에, 자신이 작성한 코드에서 암묵적 타입 변환이 발생하는지, 발생한다면 어떤 타입의 어떤 값으로 변환되는지, 타입변환된 값으로 표현식은 어떻게 평가될 것인지 예측 가능해야 오류를 생산할 가능성이 적어진다.



## 암묵적 타입 변환

- 자바스크립트 엔진은 표현식을 평가할 때 개발자의 의도와는 상관없이 **코드의 문맥을 고려하여** 암묵적으로 데이터 타입을 강제 변환 할 때가 있다.

```javascript
// 피연산자가 모두 문자열 타입이어야 한는 문맥
/* 
	피연산자 중 하나 이상이 문자열이므로
	문자열 연결 연산자로 동작
*/
'10' + 2 // '102'

// 피연산자가 모두 숫자 타입이어야 하는 문맥
/*
	산술 연산자의 역할은 숫자 값을 만드는 것
	만약 피연산자를 숫자 타입으로 변환할 수 없는 경우, 표현식의 결과는 NaN이 된다.
*/
5 * '10' // 50
+'' // 0
+null // 0
+undefined //NaN
[] // 0
+[10, 20] // NaN
{} // NaN

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
/*
	자바스크립트 엔진은 불리언 타입이 아닌 값을
	Truthy 값(참으로 평가되는 값)
	Falsy 값 (거짓으로 평가되는 값) 으로 구분한다.
	불리언 값으로 평가되어야 할 문맥에서는
	아래와 같이 암묵적 타입 변환 된다.
	Trythy 값 -> true
	Falsy 값 -> false
*/
!0 // true
if (1) { }

// falsy값
/*
	false
	undefined
	null
	0, -0
	NaN
	'' (빈문자열)
*/
```



## 명시적 타입 변환

### 문자열 타입으로 변환

1. String 생성자 함수를 new 연산자 없이 호출하는 방법
2. Object.prototype.toString 메소드를 사용하는 방법
3. 문자열 연결 연산자를 이용하는 방법

```javascript
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
console.log(String(1));        // "1"
console.log(String(NaN));      // "NaN"
console.log(String(Infinity)); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log(String(true));     // "true"
console.log(String(false));    // "false"

// 2. Object.prototype.toString 메소드를 사용하는 방법
// 숫자 타입 => 문자열 타입
console.log((1).toString());        // "1"
console.log((NaN).toString());      // "NaN"
console.log((Infinity).toString()); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log((true).toString());     // "true"
console.log((false).toString());    // "false"

// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자열 타입
console.log(1 + '');        // "1"
console.log(NaN + '');      // "NaN"
console.log(Infinity + ''); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log(true + '');     // "true"
console.log(false + '');    // "false"
```



## 숫자 타입으로 변환

1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
2. parseInt, parseFloat 함수를 사용하는 방법
   (문자열만 숫자 타입으로 변환 가능)
3. 단항 산술 연산자 + 를 이용하는 방법
4. 산술 연산자 * 를 이용하는 방법

```javascript
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
console.log(Number('0'));     // 0
console.log(Number('-1'));    // -1
console.log(Number('10.53')); // 10.53
// 불리언 타입 => 숫자 타입
console.log(Number(true));    // 1
console.log(Number(false));   // 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// 문자열 타입 => 숫자 타입
console.log(parseInt('0'));       // 0
console.log(parseInt('-1'));      // -1
console.log(parseFloat('10.53')); // 10.53

// 3. + 단항 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log(+'0');     // 0
console.log(+'-1');    // -1
console.log(+'10.53'); // 10.53
// 불리언 타입 => 숫자 타입
console.log(+true);    // 1
console.log(+false);   // 0

// 4. * 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log('0' * 1);     // 0
console.log('-1' * 1);    // -1
console.log('10.53' * 1); // 10.53
// 불리언 타입 => 숫자 타입
console.log(true * 1);    // 1
console.log(false * 1);   // 0
```



### 불리언 타입으로 변환

1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
2. ! 부정 논리 연산자를 두번 사용하는 방법

```javascript
/ 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 불리언 타입
console.log(Boolean('x'));       // true
console.log(Boolean(''));        // false
console.log(Boolean('false'));   // true
// 숫자 타입 => 불리언 타입
console.log(Boolean(0));         // false
console.log(Boolean(1));         // true
console.log(Boolean(NaN));       // false
console.log(Boolean(Infinity));  // true
// null 타입 => 불리언 타입
console.log(Boolean(null));      // false
// undefined 타입 => 불리언 타 입
console.log(Boolean(undefined)); // false
// 객체 타입 => 불리언 타입
console.log(Boolean({}));        // true
console.log(Boolean([]));        // true

// 2. ! 부정 논리 연산자를 두번 사용하는 방법
// 문자열 타입 => 불리언 타입
console.log(!!'x');       // true
console.log(!!'');        // false
console.log(!!'false');   // true
// 숫자 타입 => 불리언 타입
console.log(!!0);         // false
console.log(!!1);         // true
console.log(!!NaN);       // false
console.log(!!Infinity);  // true
// null 타입 => 불리언 타입
console.log(!!null);      // false
// undefined 타입 => 불리언 타입
console.log(!!undefined); // false
// 객체 타입 => 불리언 타입
console.log(!!{});        // true
console.log(!![]);        // true
```



## 단축 평가

논리합 `||` 연산자

논리곱 `&&` 연산자

> 표현식의 평가 결과는 불리언 값이 아닐 수도 있다.
>
> 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.
>
> 논리 연산의 결과를 결정한 피연산자를 타입변환하지 않고 그대로 반환한다 = 단축 평가



**논리합 `||` 연산자**

- 두개의 피연산자가 모두 true로 평가될 때, true를 반환한다.
- 왼쪽에서 오른쪽으로 평가가 진행된다.
- 논리곱 연산자는 논리 연산의 결과를 결정한 두번째 피연산자를 그대로 반환한다.



단축 평가는 표현식을 평가하는 도중에 평가 결과가 확정된 경우, 나머지 평가 과정을 중단하는 것이다.



단축 평가를 사용하면 if문을 대체할 수 있다. 주어진 조건이 **Truthy 값**(참으로 평가되는 값)일 때 무언가를 해야 한다면 논리곱(`&&`) 연산자 표현식으로 if문을 대체할 수 있다.

```javascript
var done = true;
var message = '';

// 주어진 조건이 true일 때
if (done) message = '완료';

// if문은 단축 평가로 대체 가능하다.
message = done && '완료';
console.log(message); // 완료
```



주어진 조건이 **Falsy 값**(거짓으로 평가되는 값)일 때 무언가를 해야 한다면 논리합(`||`) 연산자 표현식으로 if문을 대체할 수 있다.

```javascript
var done = false;
var message = '';

// 주어진 조건이 false일 때
if (!done) message = '미완료';

// if문은 단축 평가로 대체 가능하다.
message = done || '미완료';
console.log(message); // 미완료
```

