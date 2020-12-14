interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' };
}
var tony = introduce();
// console.log(tony.skill);

// 타입 단언만 사용 시, 가독성이 떨어지므로 아래와같이 쓰지말자 => 타입가드를 사용하자
// if ((tony as Developer).skill) {
//   var skill = (tony as Developer).skill;
//   console.log(skill);
// } else if ((tony as Person).age) {
//   var age = (tony as Person).age;
//   console.log(age);
// }

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}
if (isDeveloper(tony)) {
  tony.skill;
  tony.name
} else {
  tony.age;
  tony.name;
}