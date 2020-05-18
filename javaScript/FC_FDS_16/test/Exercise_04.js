// 2진수 문자열을 10진수로 변경
// for : 몇번돌지 확실
// while : 몇번돌지 불확실

function myParseInt(binary) {
  const RADIX = 2;
  let res = 0;
  for (let i = 0; i < binary.length; i++) {
    // 표현식 만들어야되
    res += binary[i] *  RADIX ** (binary.length - ( i + 1 ));
  }
  return res;
}

console.log(myParseInt('1010'));