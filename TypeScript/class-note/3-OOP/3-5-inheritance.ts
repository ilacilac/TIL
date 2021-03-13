{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker  {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('Cleaning the machine... 🚿');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    protected extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // Latte
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, public serialNumber: string) {
      // 전달받은 부모 클래스의 인수를 super 안에 전달해준다.
      super(coffeeBeans);
    }
    steamingMilk(): void {
      console.log('Steaming some milk... 🥛');
      
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.extract(shots);
      this.steamingMilk();
      return {...coffee, hasMilk: true}
    }
  }

  const machine = new CoffeeMachine(22);
  const latteMachine = new CaffeLatteMachine(22, 'test');
  const coffee = latteMachine.makeCoffee(3);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
  
  
}
