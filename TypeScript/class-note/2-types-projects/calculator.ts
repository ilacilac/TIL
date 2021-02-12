/**
 * Let's make a calculator 🧮
 */
function calculate(cal: string, ...numbers: number[]): number {
  let result: number = 0;
  if (cal === 'add') {
    numbers.forEach((num) => {
      result += num;
    });
  } else if (cal === 'substract') {
    result = numbers[0];
    numbers.forEach((num, index) => {
      if (index === 0) return false;
      result -= num;
    });
  } else if (cal === 'multiply') {
    result = numbers[0];
    numbers.forEach((num, index) => {
      if (index === 0) return false;
      result *= num;
    });
  } else if (cal === 'divide') {
    result = numbers[0];
    numbers.forEach((num, index) => {
      if (index === 0) return false;
      result /= num;
    });
  } else if (cal === 'remainder') {
    result = numbers[0];
    numbers.forEach((num, index) => {
      if (index === 0) return false;
      result %= num;
    });
  } else {
    throw new Error('Uncaught calculator type');
  }
  return result;
}
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
