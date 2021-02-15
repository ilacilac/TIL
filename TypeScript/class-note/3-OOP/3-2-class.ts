{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // 클래스 안에 멤버변수에 접근 할 때는 this.를 사용한다.
    static BEANS_GRAM_PER_SHOT: number = 7; // class level // object가 만들어질때마다 생성되지않는다.
    coffeeBeans: number = 0; // instance level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffe beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);

  console.log(maker);

  //   coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
  //   const coffee = makeCoffee(2);
  //   console.log(coffee);
}
