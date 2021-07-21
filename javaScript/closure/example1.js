// example 1
// function f(n) {
//   return function () {
//     return n;
//   };
// }

// for (var i = 0; i < 10; i++) {
//   var a = f(i);
//   console.log(i, a());
// }

// example 2
// var color = "red";
// function foo() {
//   var color = "blue";

//   // closure
//   function bar() {
//     // outer environment : foo
//     console.log(color);
//   }
//   return bar;
// }
// var baz = foo();
// baz();

// example 3
// function count() {
//   var i;
//   for (i = 1; i < 10; i += 1) {
//     // timer => closure
//     setTimeout(function timer() {
//       console.log(i);
//     }, i * 100);
//   }
// }

function count() {
  var i;
  for (i = 0; i < 10; i++) {
    (function (countingNumber) {
      setTimeout(function timer() {
        console.log(countingNumber);
      }, i * 100);
    })(i);
  }
}
count();
