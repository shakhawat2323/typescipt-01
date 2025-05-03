type Stuent = {
  name: string;
  age: number;
  phone?: number;
  addres: string;
  GfNaame: string;
};

const stuend: Stuent = {
  name: "shakhawaat",
  age: 23,
  addres: "chirirbandar",
  GfNaame: "mona",
};

console.log(stuend);

type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;

add(2, 3);
