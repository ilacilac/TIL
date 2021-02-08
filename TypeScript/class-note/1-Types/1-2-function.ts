{
  // // JS🙁
  // function jsAdd(num1, num2) {
  //   return num1+num2;
  // }

  // // TS
  // function add(num1:number, num2:number): number {
  //   return num1+num2;
  // }

  // // JS🙁
  // function jsFetchNum(id) {
  //   // code ..
  //   // code ..
  //   return new Promise((resolve,reject) => {
  //     resolve(100);
  //   });
  // }

  // // TS
  // function fetchNum(id: string): Promise<number> {
  //   // code ..
  //   // code ..
  //   return new Promise((resolve,reject) => {
  //     resolve(100);
  //   });
  // }

  // JS => TS
  // Optional parameter
  // 전달하지 않으면 undefined
  function printName(firstName: string, lastName?:string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('ming', 'ang');
  printName('layla');
  printName('lala', undefined);

  // Default parameter
  // 전달하지 않으면 기본값으로 설정된다.
  function printMessage(message:string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  // function addNumbers(...nums: number[]):number{
  //   let result = 0;
  //   nums.map((v) => {
  //     result += v;
  //   })
  //   return result;
  // }

  // rest parameter을 이용해 배열형태로 받아온다.
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a,b)=> a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 6));

  
}