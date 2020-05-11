/*
  이진 검색(binary search)은 선형 검색과는 달리 정렬된 배열에서만 동작한다.
  선형 검색은 배열의 모든 요소를 확인해야 하지만 이진 검색은 중간값과 검색 대상 값을 비교하여 검색 범위를 매번 반으로 줄여 나간다.
  검색 대상 값이 중간값보다 작은 경우 중간값보다 작은 쪽(왼쪽)을 검색 범위로 한정한다.
  검색 대상 값이 중간값보다 큰 경우 중간값보다 큰 쪽(오른쪽)을 검색 범위로 한정한다.
  검색 대상 값을 검색할 때까지 이와 같은 처러를 반복한다.
*/

// eslint-disable-next-line consistent-return
function binarySearch(array, target) {
  let start = array[0];
  let end = array[array.length - 1]; // 20
  while (start !== end) {
    let mid = Math.floor((start + end) / 2); // 10
    // target이 mid일 경우
    if (mid === target) {
      return mid - 1; // index
    }
    // target이 mid 보다 클 경우
    if (mid < target) {
      start = mid + 1;
      if (start === end) {
        return (mid);
      }
      if (start >= end || target > end) {
        return -1;
      }
    }
    // target이 mid 보다 작을 경우
    if (mid > target) {
      end = mid - 1;
      if (start === end) {
        return mid;
      }
      if (start >= end || start > target) {
        return -1;
      }
    }
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1
