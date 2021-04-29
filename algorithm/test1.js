function solution(total, letter) {
  let totalArr = total.split("");
  let letterArr = letter.split("");

  let number = 0;
  let result = 0;

  for (let i = 0; i < totalArr.length; i++) {
    // 1 1 1 0 0 0 1 1 1 1 0 1

    // 1 0 1
    if (totalArr[i] === letter[number]) {
      number++;
    } else {
      totalArr.splice(i, 1);
      i--;
      continue;
    }

    if (number === letter.length) {
      number = 0;
      result++;
    }
  }
  result === 0 ? (result = -1) : result;
  console.log(result);
  return result;
}

solution("101011010", "101"); // 2
solution("00000", "11"); // -1
solution("11111111", "11"); // 4
solution("00110011", "01"); // 2
solution("0000011111", "011"); // 1
