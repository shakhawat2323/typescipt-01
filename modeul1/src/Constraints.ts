// {
//   // Constraints

//   const Stuentdata = <T extends { id: number; name: string; email: string }>(
//     stuend: T
//   ) => {
//     const Course = "my Course is the best";
//     return {
//       ...stuend,
//       Course,
//     };
//   };
//   interface USerdataseo {
//     name: string;
//     id: number;
//     emails: string;
//     rol: string;
//   }

//   const UserDatas = Stuentdata({
//     name: "shakhawat",
//     id: 23223,
//     email: "shakhawat@gmail.com",
//     rol: "isAdmin",
//   });
//   console.log(UserDatas);
// }

// {
//   type Vehicle = {
//     bike: string;
//     car: string;
//     ship: string;
//   };
//   type Owner = "bike" | "car" | "ship";
//   type Owners = keyof Vehicle;
//   const getPorety = <X, Y extends keyof X>(obj: X, key: Y) => {
//     return obj[key];
//   };
//   const use = {
//     name: "Mr Kingo raju",
//     age: 23,
//     addres: "ctg",
//   };
//   const car = {
//     model: "toyto 100",
//     yer: 2323,
//   };
//   const result1 = getPorety(car);
// }
