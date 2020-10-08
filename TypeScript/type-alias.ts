interface User {
  name: string;
}
interface Action {
  do(): void;
}

// 타입별칭
// type키워드로 타입별칭을 정한다.
type UserAction = User & Action;
function createUserAction(): UserAction {
  return {
    do() {},
    name: "",
  };
}
type StringOrNumber = string | number;
type Arr<T> = T[];
type P<T> = Promise<T>;

type User2 = {
  name: string;
  login(): boolean;
};

class UserImpl implements User2 {
  login(): boolean {
    throw new Error("Method not implemented.");
  }
  name: string;
}

type UserState = "PENDING" | "APPROVED" | "REJECTED";

function checkUser(user: User2): UserState {
  if (user.login()) {
    return "APPROVED";
  } else {
    return "REJECTED";
  }
}

/*
  타입별칭
  1. 우리가 정의한 타입을 조합해서 새로운 타입을 만들때 사용하거나
  2. 이름을 바꾼다던가
  3. 문자 리터럴타입을 조합하여 타입을 정의
  위의 형태로 많이 사용된다.
*/
