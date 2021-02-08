// Array.prototype.reduce()
/**
 * 주어진 콜백 함수를 가산기와 요소 각각에 대해
 * 왼쪽에서 오른쪽으로 호출하여 하나의 값으로 줄인(reduce)
 * 결과를 반환합니다. - MDN
 * 배열.reduce((accumulator, currentValue, currentIndex , array) => {
      return 결과
    }, initialValue);
  initialValue 있으면 accumulator은 initialValue와 같다.
 */

[0, 1, 2, 3, 4].reduce((accumulator, currentValue) => {
  // accumulator는 콜백의 반환값을 누적하기때문에 아래와같이 작성하면
  // 1 NaN NaN NaN이 나온다.
  // currentValue : 처리할 현재요소
  console.log(accumulator + currentValue);
});

[0, 1, 2, 3, 4].reduce((accumulator, currentValue) => {
  const result = accumulator + currentValue;
  console.log(result);
  return result;
});
