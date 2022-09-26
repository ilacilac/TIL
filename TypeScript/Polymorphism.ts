// typescript placeholder
// concrete type : number, string, array ...
// generic : type의 placeholder -> call signature을 작성할 때, concrete type이지만 확실한 타입을 모를때 사용한다.

// <Generic>
// <T> <V>

type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);

//

interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {}
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();

stringsStorage.get("lala");
stringsStorage.set("hello", "how are you");

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get("ddd");
booleansStorage.set("ddd", true);
