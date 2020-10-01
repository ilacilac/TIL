// Callback Hell example
// class UserStorage {
//   loginUser(id, password, onSuccess, onError) {
//     setTimeout(() => {
//       if (
//         (id === "ming" && password === "ji") ||
//         (id === "ang" && password === "doong")
//       ) {
//         onSuccess(id);
//       } else {
//         onError(new Error("not found"));
//       }
//     }, 2000);
//   }

//   getRoles(user, onSuccess, onError) {
//     setTimeout(() => {
//       if (user === "ming") {
//         onSuccess({ name: "ming", role: "admin" });
//       } else {
//         onError(new Error("no access"));
//       }
//     }, 1000);
//   }
// }

// const userStorage = new UserStorage();
// const id = prompt("enter your id");
// const password = prompt("enter your password");
// userStorage.loginUser(
//   id,
//   password,
//   (user) => {
//     userStorage.getRoles(
//       user,
//       (userWithRole) => {
//         alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}`);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// Use promise
// Callback Hell example

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ming" && password === "ji") ||
          (id === "ang" && password === "doong")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ming") {
          resolve({ name: "ming", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

// userStorage에서 로그인한다.
userStorage
  .loginUser(id, password)
  // 로그인성공하면 getRoles를 호출한다.
  .then(userStorage.getRoles)
  // 모든것이 호출에 성공되면 alert를 띄워준다.
  .then((user) => alert(`hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
