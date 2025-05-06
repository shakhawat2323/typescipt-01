type user1 = {
  name: string;
  age: number;
};

interface user {
  name: string;
  age: number;
}
type userRool = user1 & { roll: string };

interface userwithroll extends user {
  roll: string;
}

// ai khane & ar extends ar vitor parthokko hocce je   type = & hobe ar interface = extends

const users: userwithroll = {
  name: "shakhawat",
  age: 23,
  roll: "isAdmin",
};
console.log(users);

type Adds = (num1: number, num2: number) => number;
const adds: Adds = (num1, num2) => num1 + num2;
console.log(adds(2, 4));

interface Addss {
  (num1: number, num2: number): number;
}
const sumss: Addss = (num1, num2) => num1 + num2;
console.log(sumss(2, 5));

type userdata = {
  name: string;
  ages: number;
  soniya: string;
};

interface usersdatast {
  name: string;
  ages: number;
  soniya: string;
}

const datast: usersdatast = {
  name: "shakhawat",
  ages: 23,
  soniya: "dos",
};
console.log(datast);

type database = userdata & { rol: string };

const dataias: database = {
  name: "alina",
  ages: 2323,
  soniya: "dos is my one site love",
  rol: "shakhawat",
};
