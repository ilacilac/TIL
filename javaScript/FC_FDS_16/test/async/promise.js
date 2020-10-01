// 성공시, resolve 콜백함수
// 실패시 reject 콜백함수

// 1. Producer
// 네트워크 요청을 사용자가 요구했을때만 한다면 promise를 만드는 순간 콜백함수가 실행되기 때문에 유의해야한다.
const promise = new Promise((resolve, reject) => {
  // 데이터를 받아오거나 파일을 읽어오는것은 동기적으로 처리할경우
  // 다음 작업을 수행하지 못하므로 비동기적으로 처리한다(network, read file)
  console.log("doing something...");
  setTimeout(() => {
    // resolve("ming");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers : then, catch, finally
// value : resolve에서 전달 된 값 = 'ming'
// then으로 성공적인 케이스만 다뤘기때문에 위에서 reject호출하면 Uncaugth error가 발생한다. => catch사용
// then은 똑같은 promise가 리턴되고 리턴된 promise에 catch를 등록한다.
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

let test = "";
getHen()
  // .then((hen) => getEgg(hen)) // 한가지만 받아와서 그대로 전달하는 경우 생략이 가능하다.
  .then(getEgg)
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal)); // 🐔 => 🥚 => 🍳
