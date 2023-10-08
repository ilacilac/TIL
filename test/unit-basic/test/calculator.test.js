const calculator = require("../calculator.js");

const calculatorInst = new calculator();
test("add", () => {
  calculatorInst.add(3);
  expect(calculatorInst.value).toBe(3);
});
test("add error", () => {
  expect(() => {
    calculatorInst.add(200);
  }).toThrow("Value can not be greater than 100");
});
test("subtract", () => {
  calculatorInst.subtract(1);
  expect(calculatorInst.value).toBe(2);
});
test("multiply", () => {
  calculatorInst.multiply(2);
  expect(calculatorInst.value).toBe(4);
});
test("divide", () => {
  calculatorInst.divide(2);
  expect(calculatorInst.value).toBe(2);
});
test("clear", () => {
  calculatorInst.clear();
  expect(calculatorInst.value).toBe(0);
});
test("set", () => {
  calculatorInst.set(10);
  expect(calculatorInst.value).toBe(10);
});
