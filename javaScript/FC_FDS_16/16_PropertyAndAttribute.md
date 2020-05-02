# 프로퍼티 어트리뷰트

## 내부 슬롯과 내부 메소드

ECMAScript 사양에 등장하는 이중 대괄호로([...])로 감싼 이름들이 내부 슬롯과 내부 메소드이다.

ECMAScript 사양에 정의된 대로 구현되어 자바슼크립트 엔진에서 실제로 동작하지만 외부로 공개된 객체 프로퍼티는 아니다.
단, 일부 내부 슬롯과 내부 메소드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 한다.



## 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체

자바스크립트 엔진은 프로퍼티를 생성할 때, 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.

프로퍼티 상태란

- 프로퍼티의 값(value)
- 값의 갱신 가능여부(writable)
- 열거 가능 여부(enumerable)
- 재정의 가능 여부(confiburable)



프로퍼티 어트리뷰트는 자바스크립트 엔진이 관리하는 내부 상태값(meta-property)인 내부 슬롯([Value]), ([Writable]), ([Enumerable]), ([Configuralbe])이다.

따라서 프로퍼티 어트리뷰트에 직접 접근할 수 없지만,
Object.getOwnPropertyDescriptor 메소드를 사용하여 간접적으로 확인할 수 있다.

```javascript
const person = {
    name: 'Lee'
};
// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// {value: "Lee", writable: true, enumerable: true, configurable: true}
```

