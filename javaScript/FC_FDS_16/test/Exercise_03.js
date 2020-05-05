/*
  이진 검색(binary search)은 선형 검색과는 달리 정렬된 배열에서만 동작한다.
  선형 검색은 배열의 모든 요소를 확인해야 하지만 이진 검색은 중간값과 검색 대상 값을 비교하여 검색 범위를 매번 반으로 줄여 나간다.
  검색 대상 값이 중간값보다 작은 경우 중간값보다 작은 쪽(왼쪽)을 검색 범위로 한정한다.
  검색 대상 값이 중간값보다 큰 경우 중간값보다 큰 쪽(오른쪽)을 검색 범위로 한정한다.
  검색 대상 값을 검색할 때까지 이와 같은 처러를 반복한다.
*/

/*
1. target이랑 mid랑 비교한다. 같으면 mid를 return
2. 부등호 방향이 향한 방향으로 array length / 2한것에 다시 /2한다.
3. 만약 부등호 방향이 target 더 크면 array의 마지막 index보단 작고 mid보단 크다
4. target이랑 index가 맞을때 return
array[i]랑 target이랑 일치할때 index = array[i]

while은 어디다쓰지
index = 0일때
이진검색 조건에 안맞으면 ?
나누어질때마다 while을 돌까? -> while 이 어느시점에서 쓰여야하는지 모르겠다 ; ㅅ;
*/

const target = 15; // 임의로 지정한 타겟
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; // 임의로 지정한 배열
let start = 1;
let end = array.length; // 20
let mid = Math.floor((start + end) / 2); // 10
let index = -1; // 타겟이 배열안에 없을경우 return 해줄 값

function binarySearch() {
  if (target > mid) { // 15 > 10
    start = mid;
    console.log(start); // 10
    if (target > start) {
      // start = mid + ()
    }
  }
}
binarySearch();
