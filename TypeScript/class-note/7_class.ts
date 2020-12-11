class Person02 {
  // private :: 접근범위 제한(클래스 내에서만)
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}