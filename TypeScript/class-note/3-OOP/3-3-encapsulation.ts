{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public => default : 공개적으로 설정
  // private : 외부에서 접근할 수 없고 볼 수 없다.
  // protected : 상속을 할 때, 외부에서 접근할 수 는 없지만 부모를 상속한 자식클래스에서 사용가능

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    // static을 붙여서 object를 만드는 함수는
    // 누군가 생성자를 이용해서 만드는것을 금지하기 위해 이럴경우
    // constructor private로 만들어서 static 메소드로 이용할 수 있게 만든다.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
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

  // const maker = new CoffeeMaker(32);
  const maker = CoffeeMaker.makeMachine(32);
  // maker.coffeeBeans = 3;
  // maker.coffeeBeans = -35; // invalid
  maker.fillCoffeeBeans(32);

  class User {
    // fullName: string;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        this.internalAge = 0;
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      // this.fullName = `${firstName} ${lastName}`;
    }
  }
  const user = new User('Steve', 'Jobs');
  console.log(user.fullName);
  user.age = 6;
  console.log(user.fullName);
}
