{
  // type : 종류에 관계 없이 어떠한 타입을 만들 때든 사용할 수 있다. = interface에 비해서 더 많은걸 할 수 있다. = 유연함
  // interface : 한가지 용도 : 오브젝트의 모양을 특정한다. 그 외에는 사용할 수 없다. 클래스와 비슷하게 사용 -> TS에서 Object사용 시 작성하기 더 편한느낌 -> 객체지향 프로그래밍 개념을 활용해 디자인됨

  // interface User {
  //   name: string;
  // }

  // interface Player extends User {}

  // const minji: Player = {
  //   name: "minji",
  // };

  type User = {
    name: string;
  };
  // type 확장
  type Player = User & {};
  const minji: Player = {
    name: "minji",
  };

  // 같은 인터페이스에 다른이름을 가진 property들을 쌓을 수 있다
  interface Member {
    name: string;
  }

  interface Member {
    lastName: string;
  }

  interface Member {
    firstName: string;
  }

  const member: Member = {
    name: "Minji Park",
    firstName: "Minji",
    lastName: "Park",
  };

  // TS community : Class & Object -> interface 그 외의경우 -> Type
  // 두개의 사용법의 큰 차이점 : Type - property를 추가하기위해 다시 선언할 수 없다. / Interface : 항상 상속이 가능하다
  // interface로 상속시키는 방법이 직관적이다.

  interface Animal {
    name: string;
  }

  interface Bear extends Animal {
    honey: boolean;
  }

  type Animal2 = {
    name: string;
  };

  type Bear2 = Animal2 & {
    honey: boolean;
  };
}
