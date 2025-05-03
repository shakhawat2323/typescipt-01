// ternary  operator
// const age: number = 23;

// if (age >= 24) {
//   console.log("adult");
// } else {
//   console.log("not adult");
// }

// const Isadult = age >= 20 ? "adult" : "not adult";
// console.log(Isadult);

// Nullish coalescing operatior

// const isUser = null;
// const isUsers = "";

// const result1 = isUser ?? "guest";
// const result2 = isUser ?? "guest";
// console.log({ result1, isUsers });

type Userss = {
  name: string;
  phone: number;
  addres: {
    city: string;
    thana: string;
    home: {
      bari?: string;
      room?: string;
    };
  };
};

const usersss: Userss = {
  name: " ",
  phone: 203,
  addres: {
    city: "dinajpur",
    thana: "chirirbandar",
    home: {
      bari: "indropar",
    },
  },
};

const resultsc = usersss?.addres?.home?.bari ?? "no data";
const homes = usersss?.addres?.home?.room ?? "no data";

// console.log(usersss?.phone);
// console.log(usersss?.addres?.city);
// console.log(usersss?.addres?.home?.bari);
console.log({ resultsc });
console.log({ homes });
