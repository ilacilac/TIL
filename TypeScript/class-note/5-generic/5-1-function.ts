{
  // any로 넣을경우 : 타입이 보장되지 않는다.
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  // const result = checkNotNullBad(123);
  // console.log(result);
  // checkNotNullBad(null);

  // generic : 코딩을 할 때, 사용할 때 타입이 결정되어 보장된다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
