const numArr = [1, 2, 2, 5, 5, 3, 4, 1, 5, 6];
const newNumArr = [...new Set(numArr)];
console.log(newNumArr);

const str = "abzcdeabc";
const newStr = [...new Set(str)].join("");
console.log(newStr);
