// 추상클래스
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickname: string
  ) {}
  abstract getNickName(): void;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName() {
    console.log(this.nickname);
  }
}

const ming = new Player("mimji", "park", "밍");

ming.getFullName();
ming.getNickName();

// 제한된 양의 property??
// property에 대해 미리 알지는 못하지만 타입만 알고 있을 때 사용
type Words = {
  [key: string]: string;
};

// let dict: Words = {
//   potato: "food",
// };

// words를 private변수로 사용하고 싶은데
// constructor에서 정의되지 않았고 initializer가 없다
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");
