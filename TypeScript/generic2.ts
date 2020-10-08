// interface에서도 generic 사용 가능
interface DB<T> {
  add(v: T): void;
  get(): T;
}

// 특정한 값을 담고있는채로 인터페이스로 지정할 수 있다.
class D<T> implements DB<T> {
  add(v: T): void {
    throw new Error("Method not implemented.");
  }
  get(): T {
    throw new Error("Method not implemented.");
  }
}

interface JSONSerialier {
  serialize(): string;
}

// LocalDB : 생성자로 로컬스토리지키를 전달받고 실제 브라우저에서 제공받은
// 로컬스토리지의 아이템을 집어넣거나 빼오는작업
// T를 JSONSErialier을 extends한 T이다. => 특정 타입으로 고정함
class LocalDB<T extends JSONSerialier> implements DB<T> {
  constructor(private localStorageKey: string) {}
  // 여러타입에대한 처리 => 파라미터를 generic으로 정의한다.
  add(v: T) {
    // localStorage.setItem(this.localStorageKey, JSON.stringify(v));

    // 범위를 고정시켜서 특정기능을 사용하게 작성할 수 있다.
    localStorage.setItem(this.localStorageKey, v.serialize());
  }
  get(): T {
    const v = localStorage.getItem(this.localStorageKey);
    return v ? JSON.parse(v) : null;
  }
}

// 타입 고정
interface User {
  name: string;
}

// userDb에는 오직 User type의 값만 올 수 있다.
// const userDb = new LocalDB<User>("user");

// userDb.add({ name: "ming" });
// const userA = userDb.get();

/*
  조건부타입을 이용해서 특정한 행위, 메소드에서 반환되어지는 타입을
  타입 파라미터에 전달되어지는 파라미터에 따라서 다르게 동작하게 하는
  코드를 작성할 수 있다.
*/
interface Vegitable {
  v: string;
}
interface Meat {
  m: string;
}
interface Cart2<T> {
  getItem(): T extends Vegitable ? Vegitable : Meat;
}
const cart1: Cart2<Vegitable> = {
  getItem() {
    return {
      v: "",
    };
  },
};
cart1.getItem();
