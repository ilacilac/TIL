{
  // Array
  const fruits: string[] = ['🍑', '🍓'];
  const scores: Array<number> = [1, 2, 3];
  // 주어진 데이터를 출력할 때 변경하거나 업데이트할 수 없게하려면 전달된 인자를 변경되지 않도록 타입을 보장하는 방법 : readonly
  // readonly를 작성할 때 string[] 와 같은 문법을 이용해야한다.
  function printArray(fruits: readonly string[]) {
    // code
  }

  // Tuple => interface, type aliad, class
  // 배열이긴 배열인데 서로 다른 타입을 가질 수 있는 배열
  let student:[string, number];
  student = ['ming', 123];
  student[0]; // 'ming'
  student[1]; // 123
  // Tuple은 데이터 접근할 때 index로 접근하는데, 이는 가독성이 떨어진다.
  // 이 대신에 object나 class형태로 사용하면 명시해서 접근할 수 있다. (ex: student.name)  
  
  const [name, age] = student;
 }