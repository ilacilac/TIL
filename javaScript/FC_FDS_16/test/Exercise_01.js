console.log('문제 1');
/* eslint-disable block-scoped-var */
// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라
var x = 15;
if (x > 10 && x < 20) {
  console.log(x);
}


console.log('문제 2');
// 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
// eslint-disable-next-line no-unused-vars
for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


console.log('문제 3');
// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
var str = '';
var result = '';
// eslint-disable-next-line no-redeclare
for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    result += i + str;
  }
}
console.log(result); // 02468


console.log('문제 4');
// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
// eslint-disable-next-line no-redeclare
for (var i = 10; i > 0; i--) {
  if (i % 2) {
    console.log(i);
  }
}


console.log('문제 5');
// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
// eslint-disable-next-line no-redeclare
var i = 0;
while (i < 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}


console.log('문제 6');
// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
var i = 10;
while (i > 0) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i--;
}


console.log('문제 7');
// 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
var sum = 0;
for (var i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);


console.log('문제 8');
// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
var notTwoThreeMultiple = 0;
for (var i = 0; i < 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    notTwoThreeMultiple += i;
  }
}
console.log(notTwoThreeMultiple);


console.log('문제 9');
// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
var twoThreeMultiple = 0;
for (var i = 0; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    twoThreeMultiple += i;
  }
}
console.log(twoThreeMultiple);


console.log('문제 10');
// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++) {
    if (i + j === 6) {
      console.log(i, j);
    }
  }
}


console.log('문제 11');
// 11. 삼각형 출력하기 - pattern 1
/*
  다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라.
  개행문자(‘\n’)를 사용하여 개행한다.
  완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.
*/
var line = 5;
var star = '';
for (var i = 0; i < line + 1; i++) {
  for (var j = 0; j < i; j++) {
    star += '*';
  }
  star += '\n';
}
console.log(star);


console.log('문제12');
// 12. 삼각형 출력하기 - pattern 2
var line = 5;
var star = '';
for (var i = line; i > 0; i--) {
  for (var j = 0; j < 6 - i; j++) {
    star += ' ';
  }
  for (var k = 0; k < i; k++) {
    star += '*';
  }
  star += '\n';
}
console.log(star);


console.log('문제13');
// 13. 삼각형 출력하기 - pattern 3
var line = 5;
var star = '';
for (var i = line; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    star += '*';
  }
  star += '\n';
}
console.log(star);


console.log('문제14');
// 14. 삼각형 출력하기 - pattern 4
var line = 5;
var star = '';
for (var i = 0; i < line + 1; i++) {
  for (var j = 0; j < 6 - i; j++) {
    star += ' ';
  }
  for (var k = 0; k < i; k++) {
    star += '*';
  }
  star += '\n';
}
console.log(star);


console.log('문제15');
// 15. 정삼각형 출력하기
var line = 5;
var starTriangle = '';

for (var i = 1; i < line * 2; i += 2) {
  for (var j = 1; j < (((line * 2) - 1) - i) / 2; j++) {
    starTriangle += ' ';
  }
  for (var l = 1; l <= i; l++) {
    starTriangle += '*';
  }
  for (var k = 1; k < (((line * 2) - 1) - i) / 2; k++) {
    starTriangle += ' ';
  }
  starTriangle += '\n';
}
console.log(starTriangle);

console.log('문제16');
// 16. 역정삼각형 출력하기
var line = 5;
var starTriangle = '';

for (var i = (line * 2) - 1; i >= 1; i -= 2) {
  for (var j = 1; j <= (((line * 2) - 1) - i) / 2; j++) {
    starTriangle += ' ';
  }
  for (var l = i; l >= 1; l--) {
    starTriangle += '*';
  }
  for (var k = 1; k <= (((line * 2) - 1) - i) / 2; k++) {
    starTriangle += ' ';
  }
  starTriangle += '\n';
}
console.log(starTriangle);
