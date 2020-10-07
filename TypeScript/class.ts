// 상속, 인터페이스와의 관계

// 하나의 타입으로 interface를 정의했다.
interface Person {
  name: string;
  say(message: string): void;
}

interface Programmer {
  writeCode(requirment: string): string;
}

// Korean는 Person을 보장한다.

// 추상클래스 :: 완성이 되지 않는 클래스, 바로 인스턴스를 만들 수 없지만
//이 클래스를 통해서 다른 상속을 받은 클래스를 통해서 인스턴스를 만들 수 있다.

// Person이라는 인터페이스를 부여한 Korean클래스 앞에 abstract를 붙이면
// abstract jumin이라는 항목이 더 필요하고,  loveKimchi를 정의를 하게되면
// Korean이라는 추상클래스는 주민번호를 가져야하고 loveKimchi를 해야하는데
// 이 클래스에서 정의하는것이 아닌 하위 클래스에서 사용한다. (하위타입에서 꼭 가지게끔 해준다.)

// 특정 클래스 앞에 붙여서, 클래스 하위타입에서 필수로 구현할 때 사용한다.
abstract class Korean implements Person {
  public abstract jumin: number;
  constructor(public name: string) {}

  say(msg: string) {
    console.log(msg);
  }

  abstract loveKimchi(): void;
}

// 다중 인터페이스 구현
// KoreanProgrammer는 두개의 인터페이스 Person과 Programmer
// 인터페이스가 구현된 새로운타입이 만들어진것이다.
class KoreanProgrammer extends Korean implements Programmer {
  constructor(public name: string, public jumin: number) {
    super(name);
  }

  say(message: string): void {
    console.log(message);
  }

  writeCode(requirment: string): string {
    console.log(requirment);
    return requirment + "....";
  }

  loveKimchi() {
    console.log("love Kimchi!");
  }
}

// const jay1 = new Korean("jay"); // 추상 클래스의 인스턴스는 만들 수 없다.
const jay2 = new KoreanProgrammer("jay", 2222);

// 클래스에서 인터페이스 구현하는 방법
// 추상클래스 정의하는 방법
// 추상클래스를 인스턴스 시키기위해 새로운 타입을 만들어서 abstract를 구현하는 방법
