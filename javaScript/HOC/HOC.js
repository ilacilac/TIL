const hof = (a) => (b) => (c) => {
  return a + b * c;
};

const first = hof(3);
const second = first(4);
const third = second(5);
console.log(third); // ?

/*
const hof = (a) => (b) => (c) => {
  return a + (b * c);
}

const first =  (3) => (b) => (c) => {
  return 3 + (b * c);
}
const second = (4) => (c) => {
  return 3 + (4 * c);
}
const third = (5) => {
  return 3 + (4 * 5);
}
console.log(third); // 23
 */
