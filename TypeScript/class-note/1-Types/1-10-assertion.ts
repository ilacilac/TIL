{
  /**
   * Type Assertions
   */

  function jsStrFunc(): any {
    // return 'hello'; // 5
    return 4; // error 이나 경고메세지는 안나옴 // undefined
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // const numbers = findNumbers()!;
  numbers!.push(2); // 😥

  const button = document.querySelector('class');
  // const button = document.querySelector('class')!;
  if (button) {
    button.nodeValue;
  }
}
