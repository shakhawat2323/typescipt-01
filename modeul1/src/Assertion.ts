// let anything: any;
// anything = "shakhawat";
// console.log(anything);

// anything = 2332;
// anything as number;

// const KGtoGRam = (value: string | number): string | number | undefined => {
//   if (typeof value === "string") {
//     const converting = parseFloat(value) * 1000;
//     return `the valueis ${converting}`;
//   } else if (typeof value === "number") {
//     return value * 1000;
//   } else {
//     return "Valte Data Count";
//   }
// };

// const retult = KGtoGRam(2323) as number;
// console.log(retult);

const KGtoGRams = (value: string | number): string | number | undefined => {
  if (typeof value === "string") {
    const converting = parseFloat(value) * 1000;
    return ` value is the big number ${value}`;
  } else if (typeof value === "number") {
    return value * 1000;
  } else {
    return " value is Wrong";
  }
};
const datas = KGtoGRams(223) as number;
console.log(datas);
