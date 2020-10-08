// 상수들의 열거형
enum StarbuksGrade {
  WELCOME = 0, // 0
  DDD = 3,
  GREEN = 1, // 1
  GOLD = 2, // 2
}

function getDiscount(v: StarbuksGrade): number {
  switch (v) {
    case StarbuksGrade.WELCOME:
      return 0;
    case StarbuksGrade.GREEN:
      return 5;
    case StarbuksGrade.GOLD:
      return 10;
  }
}
console.log(getDiscount(StarbuksGrade.GREEN)); // 5
console.log(StarbuksGrade.GREEN); // 1
console.log(StarbuksGrade);
/* 
{
  '0': 'WELCOME',
  '1': 'GREEN',
  '2': 'GOLD',
  WELCOME: 0,
  GREEN: 1,
  GOLD: 2
}
*/
