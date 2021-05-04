{
  // 조건이 맞으면 어떤타입을 선택한다.
  type Check<T> = T extends string? boolean : number;
  type Type = Check<string>; // boolean
}