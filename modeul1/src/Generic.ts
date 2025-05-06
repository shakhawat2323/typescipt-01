type GenaricArray<T> = Array<T>;

const Roll: GenaricArray<string> = ["alina", "soma", "rahat"];

const NumberArry: GenaricArray<number> = [3, 4, 5, 6, 23, 43, 45];
console.log(NumberArry);
const Booleans: GenaricArray<boolean> = [true, false, true];
console.log(Booleans);

interface Usersi {
  name: string;
  age: number;
  roll?: string;
}

const Usersdatas: GenaricArray<Usersi> = [
  {
    name: "shakhawat",
    age: 23,
  },
  {
    name: "sohana",
    age: 23,
    roll: "not",
  },
];
console.log(Usersdatas);

type Addesr = (num: number, num1: number) => number;
const Datases: Addesr = (num, num1) => num + num1;
console.log(Datases(2, 3));

type GenericTuple<X, Y> = [X, Y];
const Munish: GenericTuple<string, string> = ["Mr", "Ali"];
console.log(Munish);

const UserIdeso: GenericTuple<number, { name: string; email: string }> = [
  2334,
  { name: "shakhawat", email: "shakhawathossain@gmail.com" },
];

console.log(UserIdeso);
