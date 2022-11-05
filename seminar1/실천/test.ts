const test1: boolean = true;
console.log(`${typeof test1}, ${test1}`);

const test2: number = 3;
console.log(typeof test2, test2);

const test3: boolean = true;
console.log(typeof test3, test3);

let aaa: number[] = [1, 2]; //이걸 선호
const arr3: Array<String> = ["h", "a"];

const foo1 = (a: Object) => {
  console.log(a);
};

const foo2 = (a: object) => {
  console.log(a);
};
foo1("hello");
// foo2('hello') => typescript에서 추가된 객체 타입으로, 원시 타입이 아닌 타입들만 할당할 수 있다.

const hello2 = (name: string): void => {
  console.log(`${name}아 안녕`);
};
const sum2 = (a: number, b: number): number => {
  return a + b;
};

const test11: any = "김민욱";
const nameLength = (test11 as string).length;
console.log(nameLength);

const test12: any = "미눅";
const nameLength2 = (<string>test12).length;
console.log(nameLength2);
