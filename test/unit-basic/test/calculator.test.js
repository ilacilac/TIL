const Calculator = require("../calculator.js");

// describe -> 관련 테스트들을 묶음
// it -> Calculator을 나타내는 3인칭
// 테스트는 각각 독립적으로 수행할 수 있게 하는게 중요
// 테스트 수행하기 전에 수행해야할것 -> beforeEach
describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });
  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });
  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });
  it("clear", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });
  it("subtracts", () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });
  it("multiplies", () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20);
  });

  describe("devides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("4 / 4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
