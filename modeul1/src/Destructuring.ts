// Object Desturcuring

const user = {
  id: 23234234,
  name: {
    fast: "shakhawat",
    mid: "Islam",
    last: "Raju",
  },
  addres: "boideshir hat",
  santinogor: "indropara",
};

const {
  addres,
  name: { fast: hello },
} = user;
console.log(hello);

const Desturcurings = (...friends: string[]) => {
  friends.forEach((hi) => console.log(`kmon aco dos ${hi}`));
};

Desturcurings("shakhawat ", "alina", "akash");
