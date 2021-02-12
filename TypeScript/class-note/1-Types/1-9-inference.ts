{
  /**
   *  Type Inference
   * 타입이 명확하게 명시하는것 보다
   * 알아서 자동으로 타입이 결정
   */
  let text = 'hello';
  text = 'hi';
  // text = 1; // error

  function print(message = 'hello') {
    console.log(message);
  }

  function add(x: number, y: number) {
    return x + y; // number로 추론
  }

  const result = add(1, 2); // number로 추론
}
