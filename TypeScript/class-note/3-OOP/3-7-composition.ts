{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
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

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }
  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamingMilk(): void {
      console.log('Steaming some milk... 🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamingMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  // Fancy 우유 거품기
  class FancyMilkSteamer implements MilkFrother {
    private steamingMilk(): void {
      console.log('Steaming some milk... 🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamingMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  // Cold 우유 거품기
  class ColdMilkSteamer implements MilkFrother {
    private steamingMilk(): void {
      console.log('Steaming some milk... 🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamingMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSuger() {
      console.log('Getting some sugar from candy 🍭');
      return true;
    }

    addSugar(cup: CoffeeCup):CoffeeCup {
      const sugar = this.getSuger();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  class SugarMixer implements SugarProvider {
    private getSuger() {
      console.log('Getting some sugar from jar');
      return true;
    }

    addSugar(cup: CoffeeCup):CoffeeCup {
      const sugar = this.getSuger();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }
  // Latte
  class CaffeLatteMachine extends CoffeeMachine {
    constructor( //
        coffeeBeans: number,
        public readonly serialNumber: string, 
        private milkFrother: MilkFrother
      ) {
        super(coffeeBeans);
    }
    
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      
      return this.milkFrother.makeMilk(coffee);
    }
  }
  // Sweet coffee
  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(
      coffeeBeans: number, 
      private sugar: CandySugarMixer
    ) {
      super(coffeeBeans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      coffeeBeans: number, 
      private sugar: CandySugarMixer, 
      private milk: CheapMilkSteamer
      ) {
      super(coffeeBeans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarCoffee = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarCoffee)
      // return this.milk.makeMilk(this.sugar.addSugar(coffee));
    }
  }

  const sugar = new CandySugarMixer();
  const milk = new CheapMilkSteamer();

  // console.log(sugar.addSugar({
  //   shots: 2,
  //   hasMilk: false,
  //   hasSugar: false,
  // }));
  // console.log(milk.makeMilk({
  //   shots: 2,
  //   hasMilk: false,
  //   hasSugar: false,
  // }));
  
  // const sugarMilkCoffee = new SweetCaffeLatteMachine(22, sugar, milk);
  const sugarMilkCoffee = new SweetCaffeLatteMachine(22, sugar, milk);
  // console.log(sugarMilkCoffee.makeCoffee(2));
  

  // 
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const candySugar = new CandySugarMixer();
  const sweetMachine = new SweetCoffeeMaker(12, candySugar);
  const latteMachine = new CaffeLatteMachine(12, 'SS', cheapMilkMaker);
  const sweetLatteMachine = new SweetCaffeLatteMachine(12,candySugar, cheapMilkMaker)

  
}
