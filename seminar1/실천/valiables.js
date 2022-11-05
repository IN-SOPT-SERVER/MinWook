// var myName = "민욱";

// console.log(myName);

// myName = "김민욱"
// console.log(myName);

// let myName = '김민욱';
// console.log(myName);

// myName = "김민욱";
// console.log(myName);

// let myName = 'ㅇㅁㅇ';
//let 재할당은 가능하지만 재선언 x

// const myName = '민욱';
// console.log(myName);

// myName = '미눅'; // =>error
const arr1 = ["김민욱", "짱", 26, true];
const arr2 = Array();

arr1.map((item) => console.log(`${item} 야호`));

//함수 선언식
function hello(a, b) {
  return a + b;
}
console.log(hello(1, 2));

//함수 표현식
const sum = (a, b) => {
  const result = a + b;
  console.log(result);
};

sum(1, 2);
