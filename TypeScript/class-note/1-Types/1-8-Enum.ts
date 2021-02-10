{
  /**
   * Enum
   * 상수를 정의 할 때
   * 관련된 여러가지 상수 값을 한곳에 모아서 타입을 보장받을 수 있음
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });

  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
  }
  console.log(Days.Tuesday);
  const day = Days.Saturday;
  console.log(day);
}
