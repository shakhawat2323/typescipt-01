// function Add(num: number, num2: number): number {
//   return num + num2;
// }

// const returl = Add(2, 4);

// const Data = (num: number, num2: number): number => num + num2;
// Data(2, 3);

// const collection = {
//   name: "shakhawat",
//   lastName: "Islam",
//   age: 2,
//   Addtoogo(age: number): string {
//     return `the number is sefta${this.age + age}`;
//   },
// };

// console.log(collection);

// const addsts: number[] = [232, 23, 23, 4, 345, 345, 343];

// const newdatas = addsts.map((hi: number) => (hi = hi + hi));
// console.log(newdatas);

function Add(num: number, num2: number): number {
  return num + num2;
}

const result = Add(3, 4);
console.log(result);

const Data = (num: number, num2: number): number => num + num2;
console.log(Data(2, 523));

const Collection = {
  chika: "mossaddek",
  name: "shakhawat",
  age: 23,
  Oldmane(age: number): string {
    return `shakhawat is a good Boy : ${this.age + age}`;
  },
};

const arr: number[] = [2, 3, 4, 5, 6, 7];
const returls = arr.map((p) => p * p);
console.log(returls);
