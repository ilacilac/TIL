# 배열

- 여러 개의 값을 순차적으로 나열한 자료구조
- 배열이 가지고 있는 값을 요소(element)
- 배열의 요소는 배열에서 자신의 위치를 나타내는 0 이상 정수의 index를 갖는다. (index로 요소에 접근할 수 있다.)
- 요소에 접근할 때는 대괄호 표기법을 사용한다.
- 배열은 요소의 개수, 즉 배열의 길이를 나타내는 length 프로퍼티를 갖는다.
- 배열은 객체이다.
- 배열 리터럴, Array 생성자 함수로 생성할 수 있다.
- 배열의 생성자 함수는 Array이며 배열의 프로토타입 객체는 Array.prototype이다. Array.prototype은 배열을 위한 빌트인 메소드 들을 제공한다.
- 배열은 반복문을 통해 순차적으로 값에 접근하기 적합한 자료구조이다.



배열은 객체이지만 일반 객체와는 다른 독특한 특징이 있다.

| 구분            |           객체            |     배열      |
| :-------------- | :-----------------------: | :-----------: |
| 구조            | 프로퍼티 키와 프로퍼티 값 | 인덱스와 요소 |
| 값의 참조       |        프로퍼티 키        |    인덱스     |
| 값의 순서       |             x             |       ○       |
| length 프로퍼티 |             x             |       ○       |

일반 객체와 배열을 구분하는 가장 명확한차이는
"값의 순서"와 "length 프로퍼티"이다.



## 자바스크립트 배열은 배열이 아니다.

일반적으로 배열이라는 자료 구조의 개념은 동일한 크기의 메모리 공간이 빈틈없이 연속적으로 나열된 자료 구조를 말한다. 즉, 배열의 요소는 하나의 타입으로 통일되어 있으며 서로 연속적으로 인접해 있다. 이러한 배열을 **밀집 배열(dense array)**이라 한다.

이처럼 자료 구조(data structure)에서 말하는 배열의 경우, 각 요소는 동일한 크기를 갖으며 빈틈없이 연속적으로 이어져 있으므로 아래와 같이 인덱스를 통해 단 한번의 연산으로 임의의 요소에 접근(임의 접근(random access), 시간 복잡도 O(1))할 수 있다. 이는 매우 효율적이며 고속으로 동작한다.

> 검색 대상 요소의 메모리 주소 = 배열의 시작 메모리 주소 + 인덱스 * 요소의 바이트 수

예를 들어, 위 그림처럼 메모리 주소 1000에서 시작하고 각 요소의 크기가 8byte인 배열을 생각해 보자.

- 인덱스가 0인 요소의 메모리 주소 : 1000 + 0 * 8 = 1000
- 인덱스가 1인 요소에 메모리 주소 : 1000 + 1 * 8 = 1008
- 인덱스가 2인 요소에 메모리 주소 : 1000 + 2 * 8 = 1016

이처럼 배열은 인덱스를 통해 효율적으로 요소에 접근할 수 있다는 장점이 있다. 하지만 정렬되지 않은 배열에서 특정한 값을 검색하는 경우, 모든 배열 요소를 처음부터 값을 발견할 때까지 차례대로 검색(선형 검색(linear search), 시간 복잡도 O(n))해야 한다.

또한 **배열에 요소를 삽입하거나 삭제하는 경우, 배열 요소를 연속적으로 유지하기 위해 요소를 이동시켜야 하는 단점**도 있다.

자바스크립트의 배열은 지금까지 살펴본 자료 구조에서 말하는 일반적인 의미의 배열과 다르다. 즉, 배열의 요소를 위한 각각의 메모리 공간은 동일한 크기를 갖지 않아도 되며 연속적으로 이어져 있지 않을 수도 있다. 배열의 요소가 연속적으로 이어져 있지 않는 배열을 **희소 배열(sparse array)**이라 한다.

이처럼 자바스크립트의 배열은 엄밀히 말해 일반적 의미의 배열이 아니다. **자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체이다.** 아래 예제를 살펴보자.	

```javascript
// "16.2. 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체" 참고
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
/*
{
  '0': {value: 1, writable: true, enumerable: true, configurable: true}
  '1': {value: 2, writable: true, enumerable: true, configurable: true}
  '2': {value: 3, writable: true, enumerable: true, configurable: true}
  length: {value: 3, writable: true, enumerable: false, configurable: false}
}
*/
```

이처럼 **자바스크립트 배열은 인덱스를 프로퍼티 키로 갖으며 length 프로퍼티를 갖는 특수한 객체이다.** 자바스크립트 배열의 요소는 사실 프로퍼티 값이다. 자바스크립트에서 사용할 수 있는 모든 값은 객체의 프로퍼티 값이 될 수 있으므로 어떤 타입의 값이라도 배열의 요소가 될 수 있다.

```javascript
const arr = [
  'string',
  10,
  true,
  null,
  undefined,
  NaN,
  Infinity,
  [ ],
  { },
  function () {}
];
```

일반적인 배열과 자바스크립트 배열의 장단점

- **일반적인 배열**은 인덱스로 배열 요소에 빠르게 접근할 수 있다. 
  하지만 특정 요소를 검색하거나 요소를 삽입 또는 삭제하는 경우에는 효율적이지 않다.
- **자바스크립트 배열**은 해시 테이블로 구현된 객체이므로 인덱스로 배열 요소에 접근하는 경우, 일반적인 배열보다 성능적인 면에서 느릴 수 밖에 없는 구조적인 단점을 갖는다. 하지만 특정 요소를 검색하거나 요소를 삽입 또는 삭제하는 경우에는 일반적인 배열보다 빠른 성능을 기대할 수 있다.

즉, 자바스크립트 배열은 인덱스로 배열 요소에 접근하는 경우에는 일반적인 배열보다 느리지만 특정 요소를 검색하거나 요소를 삽입 또는 삭제하는 경우에는 일반적인 배열보다 빠르다. 자바스크립트 배열은 인덱스로 접근하는 경우의 성능 대신 특정 요소를 검색하거나 배열 요소를 삽입 또는 삭제하는 경우의 성능을 선택한 것이다.

이처럼 인덱스로 배열 요소에 접근할 때 일반적인 배열보다 느릴 수 밖에 없는 구조적인 단점을 보완하기 위해 대부분의 모던 자바스크립트 엔진은 배열을 일반 객체와 구별하여 보다 배열처럼 동작하도록 최적화하여 구현하였다.



## length 프로퍼티와 희소 배열

length 프로퍼티는 요소의 개수, 즉 배열의 길이를 나타내는 정수를 값으로 갖는다.
length 프로퍼티의 값은 빈 배열일 경우, 0이며 빈 배열이 아닐경우 가장 큰 인덱스에 1을 더한것과 같다.

length 프로퍼티의 값은 배열에 요소를 추가하거나 삭제하면 자동 갱신된다.

```javascript
const arr = [1, 2, 3];

console.log(arr.length); // 3

arr.push(4);
console.log(arr.length); // 4

arr.pop();
console.log(arr.length); // 3
```

length 프로퍼티의 값은 요소의 개수, 즉 배열의 길이를 바탕으로 결정되지만 임의의 숫자 값을 명시적으로 할당할 수도 있다.

현재 length 프로퍼티 값보다 작은 숫자 값을 할당하면 배열의 길이가 줄어든다.

```javascript
const arr = [1, 2, 3, 4, 5];

arr.length = 3;

console.log(arr); // [1, 2, 3]
```

```javascript
const arr = [1];

arr.length = 3;

console.log(arr.length); // 3
console.log(arr); // [1, empty x 2]
```

위 예제의 출력 결과에서 empty × 2는 실제로 추가된 배열의 요소가 아니다. 즉, arr[1]과 arr[2]에는 값이 존재하지 않는다.

이와 같이 length 프로퍼티에 현재 length 프로퍼티 값보다 큰 숫자 값을 할당하는 경우, length 프로퍼티 값은 성공적으로 변경되지만 실제 배열에는 아무런 변함이 없다. 값이 없이 비어있는 요소를 위해 메모리 공간을 확보하지 않으며 빈 요소를 생성하지도 않는다.

```javascript
console.log(Object.getOwnPropertyDescroptors(arr));
/*
{
  '0': {value: 1, writable: true, enumerable: true, configurable: true},
  length: {value: 3, writable: true, enumerable: false, configurable: false}
}
*/
```

이처럼 배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 배열을 **희소 배열**이라 한다. 
**자바스크립트는 희소 배열을 문법적으로 허용한다.** 
위 예제는 배열의 뒷부분만이 비어 있어서 요소가 연속적으로 위치하는 것처럼 보일 수 있으나 
중간이나 앞 부분이 비어 있을 수도 있다.

```javascript
// 희소 배열
const sparse = [, 2, , 4];

// 희소 배열의 length 프로퍼티 값은 요소의 개수와 일치하지 않는다.
console.log(sparse.length); // 4
console.log(sparse); // [empty, 2, empty, 4]

// 배열 arr에는 인덱스가 0, 2인 요소가 존재하지 않는다.
console.log(Object.getOwnPropertyDescriptors(sparse));
/*
{
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '3': { value: 4, writable: true, enumerable: true, configurable: true },
  length: { value: 4, writable: true, enumerable: false, configurable: false }
}
*/
```

일반적인 배열의 length는 배열 요소의 개수, 즉 배열의 길이와 언제나 일치한다. 하지만, 희소 배열은 length와 배열 요소의 개수가 일치하지 않는다. 희소 배열은 length는 배열의 실제 요소 개수보다 언제나 크다.

자바스크립트는 문법적으로 희소 배열을 허용하지만 희소 배열은 사용하지 않는 것이 좋다. 의도적으로 희소 배열을 만들어야 하는 상황은 발생하지 않는다. 희소 배열은 연속적인 값의 집합이라는 배열의 기본적인 개념과 맞지 않으며 성능에도 좋지 않은 영향을 준다. 최적화가 잘되어 있는 모던 자바스크립트 엔진은 요소의 타입이 일치하는 배열을 생성할 때, 일반적인 의미의 배열처럼 연속된 메모리 공간을 확보하는 것으로 알려져 있다.

배열을 생성할 경우에는 희소 배열을 생성하지 않도록 주의하자. 배열에는 같은 타입의 요소를 연속적으로 위치시키는 것이 최선이다.



## 배열 생성

### 배열 리터럴

배열 리터럴은 0개 이상의 요소를 쉼표로 구분하여 대괄호로 묶는다.
배열 리터럴은 객체 리터럴과 달리 프로퍼티 이름이 없고 값만이 존재한다.

```javascript
const arr = [1, 2, 3];
console.log(arr.length); // 3
```

배열 리터럴에 요소를 하나도 추가하지 않으면 배열의 길이, 즉 length 프로퍼티 값이 0인 빈 배열이 된다.

```javascript
const arr = [];
console.log(arr.length); // 0 
```

배열 리터럴에 요소를 생략하면 희소 배열이 생성된다.

```javascript
const arr = [1, , 3]; // 희소배열

console.log(arr.length); // 3
console.log(arr); // [1, empty, 3]
console.log(arr[1]); // undefined
```

위 예제의 배열은 인덱스가 1인 요소를 갖지 않는다. arr[1]이 undefined인 이유는 사실은 객체인 arr에 프로퍼티 키가 ‘1’인 프로퍼티가 존재하지 않기 때문이다.

### Array 생성자 함수

Object 생성자 함수를 통해 객체를 생성할 수 있듯이 Array 생성자 함수를 통해 배열을 생성할 수도 있다. Array 생성자 함수는 전달된 인수의 개수에 따라 다르게 동작한다.

- 전달된 인수가 1개이고 숫자인 경우, 인수를 length 프로퍼티의 값으로 갖는 배열을 생성한다.

```javascript
const arr = new Array(10);

console.log(arr); // [empty x 10]
console.log(arr.length); // 10
```

이때 생성된 배열은 희소 배열이다. length 프로퍼티의 값은 0이 아니지만 실제로 배열의 요소는 존재하지 않는다.

```javascript
console.log(Object.getOwnPropertyDescriptors(arr));
/*
{
  length: {value: 10, writable: true, enumerable: false, configurable: false}
}
*/
```

배열은 요소를 최대 232 – 1(4,294,967,295)개 갖을 수 있다. 따라서 Array 생성자 함수에 전달할 인수는 0 또는 232(4,294,967,296) 미만의 양의 정수이어야 한다. 전달된 인수가 범위를 벗어나면 RangeError가 발생한다.

```javascript
// 전달된 인수가 음수이면 에러가 발생한다.
new Array(-1); // RangeError: Invalid array length

// 배열은 요소를 최대 4,294,967,295개 갖을 수 있다.
new Array(4294967296); // RangeError: Invalid array length
```

전달된 인수가 없는 경우, 빈 배열을 생성한다. 즉, 배열 리터럴 []과 같다.

```javascript
const empty = new Array();
console.log(empty); // []
```

전달된 인수가 2개 이상이거나 숫자가 아닌 경우, 인수를 요소로 갖는 배열을 생성한다.

```javascript
const arr1 = new Array(1, 2, 3);
console.log(arr1); // [1, 2, 3];

const arr2 = new Array({});
console.log(arr2); // [{}]
```

Array 생성자 함수는 new 연산자와 함께 호출하지 않더라도, 즉 함수로 호출하더라도 배열을 생성하는 생성자 함수로 동작한다. 이는 Array 생성자 함수 내부에서 **new.target**을 확인하기 때문이다.

```javascript
const arr = Array(1, 2, 3);
console.log(arr); // [1, 2, 3]
```



### Array.of

ES6에서 새롭게 도입된 메소드
전달된 인수를 요소로 갖는 배열을 생성한다.
Array.of는 Array 생성자 함수와 ㅏ르게 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.

```javascript
const arr1 = Array.of(1);
console.log(arr1); // [1]

const arr2 = Array.of(1, 2, 3);
console.log(arr2); // [1, 2, 3]

const arr3 = Array.of('string');
console.log(arr3); // ['string']
```



### Array.from

ES6에서 새롭게 도입된 Array.from 메소드
유사 배열 객체 또는 이터러블 객체를 변환하여 새로운 배열을 생성한다.

```javascript
// 문자열은 이터러블이다.
const arr1 = Array.from('Hello');
console.log(arr1); // ['H', 'e', 'l', 'l', 'o']

// 유사배열 객체를 변환하여 새로운 배열을 생성
const arr2 = Array.from({ length: 2, 0: 'a', 1: 'b' });
console.log(arr2); // ['a', 'b']

```

Array.from을 사용하면 두번째 인수로 전달한 콜백 함수를 통해 값을 만들면서 요소를 채울 수 있다. 두번째 인수로 전달한 콜백 함수는 첫번째 인수에 의해 생성된 배열의 요소값과 인덱스를 순차적으로 전달받아 새로운 요소를 생성할 수 있다.

```javascript
// Array.from에 length만 존재하는 유사 배열을 전달하면 undefined를 요소로 채운다.
const arr1 = Array.from({ length: 5 });
console.log(arr1); // [undefined, undefined, undefined, undefined, undefined]

// Array.from의 두번째 인수로 배열의 모든 요소에 대해 호출할 콜백 함수를 전달할 수 있다.
// 이 콜백 함수는 첫번째 인수에 의해 생성된 배열의 요소값과 인덱스를 순차적으로 전달받아 호출된다.
const arr2 = Array.from( {length: 5}, (_, i) => i);
console.log(arr2); // [0, 1, 2, 3, 4]
```

> **유사 배열 객체와 이터러블 객체**
>
> 유사 배열 객체(array-like Object)는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체를 말한다. 유사 배열 객체는 마치 배열처럼 인덱스를 통해 프로퍼티에 접근할 수 있으며 length 프로퍼티를 갖기 때문에 for 문으로 순회할 수도 있다.



## 배열 요소의 참조

배열 요소를 참조할 때에는 대괄호 표기법([])을 사용한다. 
대괄호 안에는 인덱스가 와야한다.
정수로 평가되는 표현식이라면 인덱스 대신 사용할 수 있다.
인덱스는 값을 참조할 수 있다는 의미에서 객체의 프로퍼티 키와 같은 역할을 한다.

```javascript
const arr = [1, 2];

// 인덱스가 0인 요소를 참조
console.log(arr[0]); // 1
// 인덱스가 1인 요소를 참조
console.log(arr[1]); // 2
// 존재하지 않는 요소에 접근하면 undefined가 반환된다.
console.log(arr[2]); // undefined
```

배열은 사실 인덱스를 프로퍼티 키로 갖는 객체이다. 따라서 존재하지 않는 프로퍼티 키로 객체의 프로퍼티에 접근했을 때 undefined를 반환하는 것처럼 배열도 존재하지 않는 요소를 참조하면 undefined가 반환한다.

같은 이유로 희소 배열의 존재하지 않는 요소를 참조하여도 undefined가 반환된다

```javascript
// 희소 배열
const arr = [1, , 3];

// 배열 arr에는 인덱스가 1인 요소가 존재하지 않는다.
console.log(Object.getOwnPropertyDescriptors(arr));
/*
{
  '0': {value: 1, writable: true, enumerable: true, configurable: true},
  '2': {value: 3, writable: true, enumerable: true, configurable: true},
  length: {value: 3, writable: true, enumerable: false, configurable: false}
*/

// 존재하지 않는 요소를 참조하면 undefined가 반환된다.
console.log(arr[1]); // undefined
console.log(arr[3]); // undefined
```



## 배열 요소의 추가와 갱신

객체에 프로퍼티를 동적으로 추가할 수 있는 것 처럼
배열에도 요소를 동적으로 추가할 수 있다.
요소가 존재하지 않는 인덱스의 배열에 요소에 값을 할당하면 새로운 요소가 추가된다.
이때 length 프로퍼티 값은 자동 갱신된다.

```javascript
const arr = [0];

// 배열 요소의 추가
arr[1] = 1;

console.log(arr); // [0, 1]
console.log(arr.length); // 2

// 현재 배열의 length 프로퍼티 값보다 큰 인덱스로 새로운 요소를 추가하면 희소 배열이 된다.
arr[100] = 100;

console.log(arr); // [0, 1, empty × 98, 100]
console.log(arr.length); // 101

// 명시적으로 값을 할당하지 않은 요소는 생성되지 않는다.
console.log(Object.getOwnPropertyDescriptors(arr));
/*
{
  '0': {value: 0, writable: true, enumerable: true, configurable: true},
  '1': {value: 1, writable: true, enumerable: true, configurable: true},
  '100': {value: 100, writable: true, enumerable: true, configurable: true},
  length: {value: 101, writable: true, enumerable: false, configurable: false}
*/

// 요소값의 갱신
arr[1] = 10;

console.log(arr); // [0, 10, empty × 98, 100]

```

인덱스는 요소의 위치를 나타내므로 **반드시 0 이상의 정수**(또는 정수 형태의 문자열)를 사용하여야 한다. 만약 정수 이외의 값을 인덱스처럼 사용하면 요소가 생성되는 것이 아니라 프로퍼티가 생성된다. 이때 추가된 프로퍼티는 length 프로퍼티의 값에 영향을 주지 않는다.

```javascript
const arr = [];

// 배열 요소의 추가
arr[0] = 1;
arr['1'] = 2;

// 프로퍼티 추가
arr['foo'] = 3;
arr.bar = 4;
arr[1.1] = 5;
arr[-1] = 6;

console.log(arr); // [1, 2, foo: 3, bar: 4, '1.1': 5, '-1': 6]

// 프로퍼티는 length에 영향을 주지 않는다.
console.log(arr.length); // 2
```



## 배열 요소의 삭제

배열은 사실 객체이기 때문에 배열의 특정 요소를 삭제하기 위해 delete 연산자를 사용할 수 있다.

```javascript
const arr = [1, 2, 3];

delete arr[1];
console.log(arr); // [1, empty, 3]

// length 프로퍼티에 영향을 주지 않는다. 즉, 희소 배열이 된다.
console.log(arr.length); // 3

delete arr[2];
console.log(arr.length); // 3
console.log(arr); // [1, empty x 2]

arr['foo'] = 3;
console.log(arr); // [1, empty × 2, foo: 3]

delete arr['foo'];
console.log(arr); // [1, empty × 2]
```

delete 연산자는 객체의 프로퍼티를 삭제한다.

희소 배열을 만들지 않으면서 배열의 특정 요소를 완전히 삭제하려면 [Array.prototype.splice 메소드](https://poiemaweb.com/fastcampus/array#88-arrayprototypesplice)를 사용한다.

```javascript
const arr = [1, 2, 3];

// Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소수)
// arr[1]부터 1개의 요소를 제거
arr.splice(1, 1);
console.log(arr); // [1, 3]

// length 프로퍼티에 변경이 반영된다.
console.log(arr.length); // 2
```

```javascript
const arr = [1, 2, 3];

// Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소수)

console.log(arr); // [ 1, 2, 3 ]
console.log(arr.length); // 3

const arrCopy = arr.splice(1, 1);
console.log(arrCopy); // [ 2 ]
console.log(arrCopy.length); // 1
```



## 배열 메소드

배열은 배열을 다룰 때 필요한 다양한 메소드를 제공한다.
Array 생성자 함수는 정적 메소드를 제공하며,
배열 객체의 프로토타입인 Array.prototype는 프로토타입 메소드를 제공한다.

배열 메소드는 결과물을 반환하는 패턴이 2가지이므로 주의가 필요하다. 
**배열에는 원본 배열(배열 메소드를 호출한 배열, 즉 배열 메소드의 구현체 내부에서 this가 가리키는 객체)을 직접 변경하는 메소드(mutator method)와 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메소드(accessor method)가 있다.** 예를 들어 아래 예제를 살펴보자.

```javascript
const arr = [1];

// push 메소드는원본 배열(arr)을 직접 변경한다.
arr.push(2);
console.log(arr); // [1, 2]

// concat 메소드는 원본 배열(arr)을 직접 변경하지 않고 새로운 배열을 생성하여 반환한다.
const result = arr.concat(3);
console.log(arr); // [1, 2]
console.log(result); // [1, 2, 3]
```

ES5부터 도입된 배열 메소드는 대부분 원본 배열을 직접 변경하지 않지만 초창기 배열 메소드는 원본 배열을 직접 변경하는 경우가 많다. 원본 배열을 직접 변경하는 메소드는 외부 상태를 직접 변경하는 부수 효과(side effect)가 있으므로 사용에 주의해야 한다. 따라서 가급적 원본 배열을 직접 변경하지 않는 메소드(accessor method)를 사용하는 편이 좋다.

### Array.isArray

Array 생성자 함수의 정적 메소드이다.
Array.isArray는 주어진 인수가 배열이면 true, 배열이 아니면 false를 반환한다.

```javascript
// true
Array.isArray([]);
Array.isArray([1, 2]);
Array.isArray(new Array());

// false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(1);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ 0: 1, length: 1 })
```



### Array.prototype.indexOf

indexOf 메소드는 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환한다.

- 중복되는 요소가 있는 경우, 첫번째 인덱스를 반환
- 해당하는 요소가 없는 경우, -1을 반환한다.

```javascript
const arr = [1, 2, 2, 3];

// 배열 arr에서 요소 2를 검색하여 첫번째 인덱스를 반환
arr.indexOf(2); // 1
// 배열 arr에서 요소 4가 없으므로 -1을 반환
arr.indexOf(4); // -1
// 두번째 인수는 검색을 시작할 인덱스이다. 두번째 인수를 생략하면 처음부터 검색한다.
arr.indexOf(2, 2); // 2
arr.indexOf(1, 1); // -1
```

indexOf 메소드는 배열에 특정 요소가 존재하는지 확인할 때 유용하다.

```javascript
const foods = ['apple', 'banana', 'orange'];

// foods 배열에 'orange' 요소가 존재하는지 확인
if (foods.indexOf('orange') === -1) {
    // foods 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가
    foods.push('orange');
}

console.log(foods); // ["apple", "banana", "orange"]
```

indexOf 메소드 대신 ES7에서 새롭게 도입된 Array.prototype.includes 메소드를 사용하면 보다 가독성이 좋다.

```javascript
const foods = ['apple', 'banana'];

// ES7 : Array.prototype.includes
// foods 배열에 'orange' 요소가 존재하는지 확인
if (!foods.includes('orange')) {
	// foods 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가
	foods.push('orange');
}

console.log(foods); // ["apple", "banana", "orange"]
```



### Array.prototype.push

push 메소드는 인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가하고
변경된 length 프로퍼티 값을 반환한다.
push 메소드는 원본 배열을 직접 변경한다.

```javascript
const arr = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가하고 변경된 length 값을 반환한다.
let result = arr.push(3, 4);
console.log(result); // 4

// push 메소드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 2, 3, 4]
```

push 메소드는 성능면에서 좋지 않다. push 메소드는 배열의 마지막에 요소를 추가하므로 length 프로퍼티를 사용하여 직접 요소를 추가할 수도 있다. 이 방법이 push 메소드보다 빠르다.

```javascript
const arr = [1, 2];

// arr.push(3)과 동일한 처리를 한다. 이 방법이 push 메소드보다 빠르다.
arr[arr.length] = 3;
console.log(arr); // [1, 2, 3]
```

push 메소드는 원본 배열을 직접 변경하는 부수 효과가 있다. 따라서 push 메소드보다는 ES6의 스프레드 문법을 사용하는 편이 좋다.

```javascript
const arr = [1, 2];

// ES6 스프레드 문법
const newArr = [...arr, 3];
console.log(newArr); // [1, 2, 3]
```



### Array.prototype.pop

pop 메소드는 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.
원본 배열이 빈 배열이면 undefined를 반환한다.
pop 메소드는 원본 배열을 직접 변경한다.

```javascript
const arr = [1, 2];

// 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.
let result = arr.pop();
console.log(result); // 2

// pop 메소드는 원본 배열을 직접 변경한다.
console.log(arr); // [1]
```

pop 메소드와 push 메소드를 사용하면 스택을 쉽게 구현할 수 있다.

[스택(stack)](https://ko.wikipedia.org/wiki/스택)은 데이터를 마지막에 밀어 넣고, 마지막에 밀어 넣은 데이터를 먼저 꺼내는 후입 선출(LIFO - Last In First Out) 방식의 자료 구조이다. 스택은 언제나 가장 마지막에 밀어 넣은 최신 데이터를 먼저 취득한다. 스택에 데이터를 밀어 넣는 것을 푸시(push)라 하고 스택에서 데이터를 꺼내는 것을 팝(pop)이라고 한다.

### Array.prototype.unshift

unshift 메소드는 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고
변경된 length 프로퍼티 값을 반환한다. unshift 메소드는 원본 배열을 직접 변경한다.

```javascript
const arr = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 값을 반환한다.
let result = arr.unshift(3, 4);
console.log(result); // 4

// unshift 메소드는 원본 배열을 직접 변경한다.
console.log(arr); // [3, 4, 1, 2]
```

unshift 메소드는 원본 배열을 직접 변경하는 부수 효과가 있다. 따라서 unshift 메소드보다는 ES6의 스프레드 문법을 사용하는 편이 좋다. 

```javascript
const arr = [1, 2];

// ES6 스프레드 문법
const newArr = [3, ...arr];

console.log(newArr); // [3, 1, 2]
```



### Array.prototype.shift

shift 메소드는 원본 배열에서 첫번째 요소를 제거하고 제거한 요소를 반환한다. 
원본 배열이 빈 배열이면 undefined를 반환한다. shift 메소드는 원본 배열을 직접 변경한다.

```javascript
const arr = [1, 2];
let result = arr.shift();
console.log(result); // 1
console.log(arr); // [2]
```



### Array.prototype.concat

concat 메소드는 인수로 전달된 값들(배열 또는 원시값)을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다. 인수로 전달한 값이 배열인 경우 배열을 헤체하여 새로운 배열의 요소로 추가한다.
원본 배열은 변경되지 않는다.

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];

// 배열 arr2를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
// 인수로 전달한 값이 배열인 경우, 배열을 해체하여 새로운 배열의 요소로 추가한다.
let result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4]

// 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
result = arr1.concat(3);
console.log(result); // [1, 2, 3]

// 배열 arr2와 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
result = arr1.concat(arr2, 5);
console.log(result); // [1, 2, 3, 4, 5]

// 원본 배열은 변경되지 않는다.
console.log(arr1); // [1, 2]
```

push와 unshift 메소드는 concat 메소드로 대체할 수 있다. push와 unshift 메소드는 concat 메소드와 유사하게 동작하지만 아래와 같이 미묘한 차이가 있다.

- push와 unshift 메소드는 원본 배열을 직접 변경하지만 concat 메소드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다. 따라서 push와 unshift 메소드를 사용할 경우, 원본 배열을 반드시 변수에 저장해 두어야 하며 concat 메소드를 사용할 경우, 반환값을 반드시 변수에 할당 받아야 한다.

```javascript
const arr1 = [3, 4];

// unshift 메소드는 원본 배열을 직접 변경한다.
// 따라서 원본 배열을 변수에 저장해 두지 않으면 변경된 배열을 사용할 수 없다.
arr1.unshift(1, 2);
// unshift 메소드를 사용할 경우, 원본 배열을 반드시 변수에 저장해 두어야 결과를 확인할 수 있다.
console.log(arr1); // [1, 2, 3, 4]

// push 메소드는 원본 배열을 직접 변경한다.
// 따라서 원본 배열을 변수에 저장해 두지 않으면 변경된 배열을 사용할 수 없다.
arr1.push(5, 6);
// push 메소드를 사용할 경우, 원본 배열을 반드시 변수에 저장해 두어야 결과를 확인할 수 있다.
console.log(arr1); // [1, 2, 3, 4, 5, 6]

// unshift와 push 메소드는 concat 메소드로 대체할 수 있다.
const arr2 = [3, 4];

// concat 메소드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다.
// arr1.unshift(1, 2)를 아래와 같이 대체할 수 있다.
let result = [1, 2].concat(arr2);
console.log(result); // [1, 2, 3, 4]

// arr1.push(5, 6)를 아래와 같이 대체할 수 있다.
result = result.concat(5, 6)
console.log(result); // [1, 2, 3, 4, 5, 6]
```

인수로 전달받은 값이 배열인 경우, push와 unshift 메소드는 배열을 그대로 원본 배열의 마지막/첫번째 요소로 추가하지만 concat 메소드는 인수로 전달받은 배열을 해체하여 새로운 배열의 마지막 요소로 추가한다.

```javascript
const arr = [3, 4];

// unshift와 push 메소드는 인수로 전달받은 배열을 그대로 원본 배열의 요소로 추가한다.
arr.unshift([1, 2]);
arr.push([5, 6]);
console.log(arr); // [[1, 2], 3, 4, [5, 6]]

// concat 메소드는 인수로 전달받은 배열을 해체하여 새로운 배열의 요소로 추가한다
let result = [1, 2].concat([3, 4]);
result = result.concat([5, 6]);

console.log(result); // [1, 2, 3, 4, 5, 6]
```

concat 메소드는 ES6의 스프레드 문법으로 대체할 수 있다.

```javascript
let result = [1, 2].concat([3, 4]);
console.log(result); // [1, 2, 3, 4]

// concat 메소드는 ES6의 스프레드 문법으로 대체할 수 있다.
result = [...[1, 2], ...[3, 4]];
console.log(result); // [1, 2, 3, 4]
```

결론적으로 push/unshif 메소드와 concat 메소드를 사용하는 대신 **ES6의 스프레드 문법을 일관성 있게 사용하는 것을 추천**한다.



### Array.prototype.splice

push, pop, unshift, shift 메소드는 모두 원본 배열을 직접 변경하는 메소드(mutator method)이며 원본 배열의 처음이나 마지막에 요소를 추가하거나 제거한다.

원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우, splice 메소드를 사용한다. splice 메소드는 3개의 매개변수가 있으며 원본 배열을 직접 변경한다.

- start : 원본 배열의 요소를 제거하기 시작할 인덱스이다. start 만을 지정하면 원본 배열의 start부터 모든 요소를 제거한다. start가 음수인 경우, 배열의 끝에서의 인덱스를 나타낸다. 만약 start가 -1이면 마지막 요소를 가리키고 -n이면 마지막에서 n번째 요소를 가리킨다.
- deleteCount : 원본 배열의 요소를 제거하기 시작할 인덱스인 start부터 제거할 요소의 개수이다. deleteCount가 0인 경우, 아무런 요소도 제거되지 않는다. (옵션)
- items : 제거한 위치에 삽입될 요소들의 목록이다. 생략할 경우, 원본 배열에서 지정된 요소들을 제거만 한다. (옵션)

```javascript
const arr = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20, 30을 삽입한다.
const result = arr.splice(1, 2, 20, 30);

// 제거한 요소가 배열로 반환된다.
console.log(result); // [2, 3]
// splice 메소드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 20, 30, 4]
```

splice 메소드에 3개의 인수를 빠짐없이 전달하면 첫번째 인수, 즉 시작 인덱스부터 두번째 인수, 즉 제거할 요소의 개수만큼 원본 배열에서 요소를 제거한다. 그리고 세번째 인수, 즉 제거한 위치에 삽입할 요소들을 삽입한다.

splice 메소드의 두번째 인수, 즉 제거할 요소의 개수를 0으로 지정하면 아무런 요소도 제거하지 않고 새로운 요소들을 삽입한다.

```javascript
const arr = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 0개의 요소를 제거하고 그 자리에 새로운 요소 100을 삽입한다.
const result = arr.splice(1, 0, 100);

// 원본 배열이 변경된다.
console.log(arr); // [1, 100, 2, 3, 4]
// 제거한 요소가 배열로 반환된다.
console.log(result); // []

```

splice 메소드의 세번째 인수, 즉 제거한 위치에 추가할 요소들의 목록을 전달하지 않으면 원본 배열에서 지정된 요소만을 제거한다.

```javascript
const arr = [1, 2, 3, 4]

// 원본 배열의 인덱스 1부터 2개의 요소를 제거한다.
const result = arr.splice(1, 2);

// 원본 배열이 변경된다.
console.log(arr); // [1, 4]
// 제거한 요소가 배열로 반환된다.
console.log(result); // [2, 3]
```

splice 메소드의 두번째 인수, 즉 제거할 요소의 개수를 생략하면 첫번째 인수로 전달된 시작 인덱스부터 모든 요소를 제거한다.

```javascript
const arr = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 모든 요소를 제거한다.
const result = arr.splice(1);

// 원본 배열이 변경된다.
console.log(arr); // [1]
// 제거한 요소가 배열로 반환된다.
console.log(result); // [2, 3, 4]
```

배열에서 특정 요소를 제거하려면 indexOf 메소드를 통해 특정 요소의 위치를 취득한 다음 splice 메소드를 사용할 수 있다.

### Array.prototype.slice

slice 메소드는 인수로 전달된 범위의 요소들을 복사하여 반환한다. 원본 배열은 변경되지 않는다. 이름이 유사한 splice 메소드는 원본 배열을 변경하므로 주의하기 바란다.

slice 메소드는 2개의 매개변수를 갖는다.

- start : 복사를 시작할 인덱스이다. 음수인 경우, 배열의 끝에서의 인덱스를 나타낸다. 예를 들어 slice(-2)는 배열의 마지막 2개의 요소를 반환한다.
- end : 복사를 종료할 인덱스이다. 이 인덱스에 해당하는 요소는 복사되지 않는다. 옵션이며 기본값은 length 값이다.

```javascript
const arr = [1, 2, 3];

// arr[0]부터 arr[1] 이전(arr[1] 미포함)까지 복사하여 반환한다.
let result = arr.slice(0, 1);
console.log(result); // [1]

// arr[1]부터 arr[2] 이전(arr[2] 미포함)까지 복사하여 반환한다.
result = arr.slice(1, 2);
console.log(result); // [2]

// 원본은 변경되지 않는다.
console.log(arr); [1, 2, 3]
```



slice 메소드의 두번째 인수를 생략하면 첫번째 인수에 해당하는 인덱스부터 모든 요소를 복사하여 반환한다.

```javascript
const arr = [1, 2, 3];

//  arr[1]부터 이후의 모든 요소를 복사하여 반환한다.
const result = arr.slice(1);
console.log(result); // [2, 3]

// slice 메소드의 첫번째 인수가 음수인 경우, 배열의 끝부터 요소를 복사하여 반환한다.
const arr = [1, 2, 3];
let result = arr.slice(-1);
console.log(result); // [3]

result = arr.slice(-2);
console.log(result); // [2, 3]
```

slice 메소드의 인수를 모두 생략하면 원본 배열의 새로운 복사본을 생성하여 반환한다.

```javascript
const arr = [1, 2, 3];

// 인수를 생략하면 원본 배열의 복사본을 생성하여 반환한다.
const copy = arr.slice();
console.log(copy); // [1, 2, 3]
console.log(copy === arr); // false

// 이때 생성된 복사본은 얕은 복사(shallow copy)를 통해 생성된다.
const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

// 앝은 복사(shallow copy)
const _todos = todos.slice();
// const _todos = [...todos];

// _todos와 todos는 참조값이 다른 별개의 객체를 가리킨다.
console.log(_todos === todos); // false

// 배열의 요소는 참조값이 같다. 즉, 얕은 복사되었다.
console.log(_todos[0] === todos[0]); // true
```

> **얕은 복사(shallow copy)와 깊은 복사(deep copy)**
>
> 객체를 프로퍼티 값으로 갖는 객체의 경우, 얕은 복사는 한 단계까지만 복사하는 것을 말하고
> 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사하는 것을 말한다.
>
> 얕은 복사와 깊은 복사로 생성된 객체는 원본과는 다른 객체이다.
> 즉, 원본과 복사본은 참조값이 다른 별개의 객체이다.
>
> 하지만 얕은 복사는 객체에 중첩되어 있는 객체의 경우, 참조값을 복사하고 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사하여 원시 값처럼 완전한 복사본을 만든다는 차이가 있다.

 

### Array.prototype.join

join 메소드는 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 값,
즉 구분자로 연결한 문자열을 반환한다. 구분자는 생략 가능하며 기본 구분자는 ,이다

```javascript
const arr = [1, 2, 3, 4];

// 기본 구분자는 ','이다.
// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 기본 구분자 ','로 연결한 문자열을 반환
let result = arr.join();
console.log(result); // '1,2,3,4'

// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 빈문자열로 연결한 문자열을 반환
result = arr.join('');
console.log(result); // '1234'

// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 구분자 ':'로 연결한 문자열을 반환
result = arr.join(':');
console.log(result); // '1:2:3:4'


```



### Array.prototype.reverse

reverse 메소드는 원본 배열의 요소 순서를 반대로 변경한다.
이때 원본 배열이 변경된다. 반환값은 변경된 배열이다.

```javascript
const arr = [1, 2, 3];
const result = arr.reverse();

// reverse 메소드는 원본 배열을 직접 변경한다.
console.log(arr); // [3, 2, 1]
// 반환값은 변경된 배열이다.
console.log(result); // [3, 2, 1]
```



### Array.prototype.fill

ES6에서 새롭게 도입된 fill 메소드는 인수로 전달 받은 값을 요소로 배열의 처음부터 끝까지 채운다. 이때 원본 배열이 변경된다.

```javascript
const arr = [1, 2, 3];

// 인수로 전달 받은 값 0을 요소로 배열의 처음부터 끝까지 채운다.
arr.fill(0);

// fill 메소드는 원본 배열을 직접 변경한다.
console.log(arr); // [0, 0, 0]
```



두번째 인수로 요소 채우기를 시작할 인덱스를 전달할 수 있다.

```javascript
const arr = [1, 2, 3];

// 인수로 전달 받은 값 0를 요소로 배열의 인덱스 1부터 끝까지 채운다.
arr.fill(0, 1);

// fill 메소드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 0, 0]
```



세번째 인수로 요소 채우기를 멈출 인덱스를 전달할 수 있다.

```javascript
const arr = [1, 2, 3, 4, 5];

// 인수로 전달 받은 값 0를 요소로 배열의 인덱스 1부터 3 이전(인덱스 3 미포함)까지 채운다.
arr.fill(0, 1, 3);

// fill 메소드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 0, 0, 4, 5]
```

```javascript
const arr = new Array(3);
console.log(arr); // [empty × 3]

// 인수로 전달 받은 값 1을 요소로 배열의 처음부터 끝까지 채운다.
const result = arr.fill(1);

// fill 메소드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 1, 1]

// fill 메소드는 변경된 원본 배열을 반환한다.
console.log(result); // [1, 1, 1]
```

fill 메소드로 요소를 채울 경우, 모든 요소를 하나의 값만으로 채울 수 밖에 없다는 단점이 있다.
Array.from 정적 메소드를 사용하면 두번째 인수로 전달한 함수를 통해 값을 만들면서 요소를 채울 수 있다. 두번째 인수로 전달한 함수는 첫번째 인수에 의해 생성된 배열의 요소값과 인덱스를 순차적으로 전달받아 새로운 요소를 생성할 수 있다.

```javascript
// 인수로 전달받은 정수만큼 요소를 생성하고 0부터 1씩 증가하면 요소를 채운다.
function generateSequences(length = 0) {
    return Array.from({ length }, (_, i) => i);
}
console.log(generateSequences(3)); // [0, 1, 2]
```



### Array.prototype.includes

ES7에서 새롭게 도입된 includes 메소드는 배열 내에 특정 요소가 포함되어 있는지 확인하여 true 또는 false를 반환한다. 첫번째 인수로 검색할 대상을 지정한다.

```javascript
const arr = [1, 2, 3];

// 배열에 요소 2가 포함되어 있는지 확인한다.
let result = arr.includes(2);
console.log(result); // true

// 배열에 요소 100이 포함되어 있는지 확인한다.
result = arr.includes(100);
console.log(result); // false
```

두번째 인수로 검색을 시작할 인덱스를 전달할 수 있다. 생략할 경우, 기본값 0이 설정된다. 만약 음수를 전달하면 length와 음수 인덱스를 합산하여(length + index) 검색 시작 인덱스를 설정한다

```javascript
const arr = [1, 2, 3];

// 배열에 요소 1가 포함되어 있는지 인덱스 1부터 확인한다.
result = arr.includes(1, 1);
console.log(result); // false

// 배열에 요소 3가 포함되어 있는지 인덱스 2(arr.length - 1)부터 확인한다.
result = arr.includes(3, -1);
console.log(result); // true
```

배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환하는 [indexOf 메소드](https://poiemaweb.com/fastcampus/array#82-arrayprototypeindexof)를 사용하여도 배열 내에 특정 요소가 포함되어 있는지 확인할 수 있다. 하지만 indexOf 메소드는 결과값 -1을 비교해 보아야 하고 배열에 NaN이 포함되어 있는지 확인할 수 없는 문제가 있다

```javascript
console.log([NaN].indexOf(NaN) !== -1); // false
console.log([NaN].includes(NaN)); // true
```



### Array.prototype.flat

ES10(ECMAScript 2019)에서 새롭게 도입된 flat 메소드는 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화한다.

```javascript
console.log([1, [2, 3, 4, 5]].flat()); // [1, 2, 3, 4, 5]
```

```javascript
// 중첩 배열을 평탄화하기 위한 깊이 값의 기본값은 1이다.
console.log([1, [2, [3, [4]]]].flat()); // [1, 2, [3, [4]]]
console.log([1, [2, [3, [4]]]].flat(1)); // [1, 2, [3, [4]]]

// 중첩 배열을 평탄화하기 위한 깊이 값을 2로 지정하여 2단계 깊이까지 평탄화한다.
console.log([1, [2, [3, [4]]]].flat(2)); // [1, 2, 3, [4]]
// 2번 평탄화한 것과 동일하다.
console.log([1, [2, [3, [4]]]].flat().flat()); // [1, 2, 3, [4]]

// 중첩 배열을 평탄화하기 위한 깊이 값을 Infinity로 지정하여 끝까지 평탄화한다.
console.log([1, [2, [3, [4]]]].flat(Infinity)); // [1, 2, 3, 4]
```



## 배열 고차 함수

고차 함수(Higher-Order Function, HOF)는 함수를 인자로 전달받거나 함수를 반환하는 함수를 말한다. 고차 함수는 외부 상태 변경이나 가변(mutable) 데이터를 피하고 **불변성(Immutability)을 지향**하는 함수형 프로그래밍에 기반을 두고 있다.

함수형 프로그래밍은 결국 **순수 함수를 통해 부수 효과(Side effect)를 최대한 억제**하여 오류를 피하고 프로그램의 안정성을 높이려는 노력의 한 방법이라고 할 수 있다.



### Array.prototype.sort

sort 메소드는 배열의 요소를 정렬한다. 원본 배열을 직접 변경하며 정렬된 배열을 반환한다. sort 메소드는 기본적으로 오름차순으로 요소를 정렬한다.

```javascript
const fruits = ['Banana', 'Orange', 'Apple'];

// 오름차순(ascending) 정렬
fruits.sort();

// sort 메소드는 원본 배열을 직접 변경한다.
console.log(fruits); // ['Apple', 'Banana', 'Orange']
```

```javascript
const fruits = ['바나나', '오렌지', '사과'];

// 오름차순(ascending) 정렬
fruits.sort();

// sort 메소드는 원본 배열을 직접 변경한다.
console.log(fruits); // ['바나나', '사과', '오렌지']
```

sort 메소드는 기본적으로 오름차순으로 요소를 정렬한다. 따라서 내림차순으로 요소를 정렬하려면 sort 메소드로 오름차순으로 정렬한 후, reverse 메소드를 사용하여 요소의 순서를 뒤집는다.

```javascript
const fruits = ['Banana', 'Orange', 'Apple'];

// 오름차순(ascending) 정렬
fruits.sort();

// sort 메소드는 원본 배열을 직접 변경한다.
console.log(fruits); // ['Apple', 'Banana', 'Orange']

// 내림차순(descending) 정렬
fruits.reverse();

// reverse 메소드도 원본 배열을 직접 변경한다.
console.log(fruits); // ['Orange', 'Banana', 'Apple']

```

문자열 요소들로 이루어진 배열의 정렬은 아무런 문제가 없다. 하지만 숫자 요소들로 이루어진 배열을 정렬할 때는 주의가 필요하다. 아래 예제를 살펴보자.

```javascript
const points = [40, 100, 1, 5, 2, 25, 10];

points.sort();

// 숫자 요소들로 이루어진 배열은 의도한 대로 정렬되지 않는다.
console.log(points); // [1, 10, 100, 2, 25, 40, 5]

```

sort 메소드의 기본 정렬 순서는 문자열 Unicode 코드 포인트 순서에 따른다. 배열의 요소가 숫자 타입이라 할지라도 배열의 요소를 일시적으로 문자열로 변환한 후, 정렬한다.

따라서 숫자 요소를 정렬하기 위해서는 sort 메소드에 **정렬 순서를 정의하는 비교 함수를 인수로 전달**한다. 비교 함수를 생략하면 배열의 각 요소는 일시적으로 문자열로 변환되어 Unicode 코드 포인트 순서에 따라 정렬된다.



### Array.prototype.forEach

forEach 메소드는 for 문을 대체할 수 있는 메소드이다.
배열을 순회하며 배열의 각 요소에 대하여 인수로 전달된 콜백 함수를 호출한다.

```javascript
const number = [1, 2, 3];
let pows = [];

for (let i = 0; i < number.length; i++) {
  pows.push(number[i] ** 2);
}
console.log(pows); // [1, 4, 9]

pows = [];

number.forEach(items => pows.push(items ** 2);
console.log(pows); // [1, 4, 9]
```

forEach 메소드의 콜백 함수는 요소값, 인덱스, forEach 메소드를 호출한 배열, 즉 this를 전달 받을 수 있다.

```javascript
// forEach 메소드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.
[1, 2, 3].forEach((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${arr}`);
});
/*
요소값: 1, 인덱스: 0, this: 1,2,3
요소값: 2, 인덱스: 1, this: 1,2,3
요소값: 3, 인덱스: 2, this: 1,2,3
*/
```

forEach 메소드는 원본 배열을 변경하지 않는다.
하지만 콜백 함수를 통해 원본 배열을 변경할 수 있다.

```javascript
const numbers = [1, 2, 3];

number.forEach((item, index, arr) => {
  arr[index] = item ** 2;
});
console.log(numbers); // [1, 4, 9]
```



forEach 메소드의 반환값은 언제나 undefined이다.

```javascript
const result = [1, 2, 3].forEach(console.log);
console.log(result); // undefined
```



forEach 메소드에 두번째 인수로 forEach 메소드 내부에서 this로 사용될 객체를 전달할 수 있다.