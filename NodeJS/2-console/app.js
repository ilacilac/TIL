// 서버 배포 시, 로그 파일을 남기거나 그럴 때 활용할 때 수정 / 파악시 좋다
console.log("log"); // 개발
console.info("info"); // 정보
console.warn("warn"); // 경보
console.error("error"); // 에러, 사용자/시스템 에러

// assert
console.assert(2 === 3, "not same!"); // 특정조건일 때 출력

// print object
const student = { name: "ming", age: "10", company: { name: "angdoong" } };
console.log(student);
console.table(student);
console.dir(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 });
console.dir(student, { showHidden: false, colors: false, depth: 1 });

// measuring time
console.time("for loop");
for (let i = 0; i < 20; i++) {
  i++;
}
console.timeEnd("for loop");

// counting
function a() {
  console.count("a function");
  a();
  console.countReset("a function");
  a();
}

// trace
function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log("f3");
  console.trace();
}
f1();
