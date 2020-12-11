function Person(name, age) {
  this.name = name;
  this.age = age;
}
var layla = new Person('layla', 100);

// 인스턴스를 만들어주는 역할
class Person {
  // 클래스 로직
  // constructor :: 초기화 매서드
  constructor(name, age) {
    console.log('생성 되었습니다.');
    // 파라미터로 받은걸 객체 기본 속성, 기본 API를 설정해주는게 기본적이다.
    this.name = name;
    this.age = age;
  }
}

var ming = new Person('ming', 100); 
console.log(ming); // '생성 되었습니다.' Person {name: "ming", age: 100}

// class는 왜 사용하는가, prototype과 관계는??
// prototype
/*
  자바스크립트는 프로토타입 기반의 언어이다.
  프로토타입 상속으로 중복을 줄인다.
  var user = { name: 'ming', age: 100};
  var admin = { name: 'ming', age: 100, role: 'admin' }
  
  var admin = {};
  admin.__proto__ = user; // { name: "ming", age: 100 }
  console.log(admin); // {} => __proto__ : age: 100 name: "ming"
  admin.role = 'admin';
  console.log(admin); // {role: "admin"} => __proto__ : age: 100 name: "ming"
*/

/* 
  var obj = { a: 10 };
  obj.toString();
  Object.keys(obj);
  console.log(obj); // {a: 10} => __proto__: Object

  var user = { name: 'ming', age: 100};
  var arr = [];
  arr.length; 
  
  bulitin javaScript API
*/