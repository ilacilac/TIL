{
  type Video = {
    title: string;
    author: string;
  };
  
  // [1, 2].map(item => item * item); // [1, 4]
  // map타입을 사용하면 재사용성이 높아진다.
  type Optional<T> = {
    // T타입안에있는 모든 KEY를 P에 할당한다.
    [P in keyof T]?: T[P];  // for...in(object 안에 key를 순회)
  };
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  }
  
  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: 'hi',
  };
  
  type Animal = {
    name: string;
    age: number;
  };
  
  const animal: Optional<Animal> = {
    name: 'dog',
  };
  
  
  animal.name = 'ming';
  
  const video: ReadOnly<Video> = {
    title: 'title text',
    author: 'author text'
  }
  
  // video.title = 'change';
  
  
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // }
  
  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // }
  
  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: 'hi',
    author: null
  }
}