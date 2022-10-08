const condition: boolean = true;

const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("우와 promise다");
  } else {
    reject(new Error("비동기 처리 도중 실패!"));
  }
});

//비동기 처리 성공(then), 비동기 처리 실패(catch)
promise
  .then((resolveData): void => console.log(resolveData))
  .catch((error): void => console.log(error));
