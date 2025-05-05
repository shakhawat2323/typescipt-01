const Odd = (value: string | null | undefined | number | boolean) => {
  if (value) {
    console.log("ok Done");
  } else {
    console.log("is not done ");
  }
};
// Odd(null);
// Odd(undefined);
// Odd("shakhawat");
// Odd(23);
// Odd(true);

const Conveter = (value: unknown) => {
  if (typeof value === "number") {
    const conveters = (value * 1000) / 3600;
    console.log(`this is a number value ${conveters}`);
  } else if (typeof value === "string") {
    const [result, unit] = value.split(" ");
    const reulsts = (parseFloat(result) * 1000) / 3600;
    console.log(reulsts);
  } else {
    console.log("Rong value");
  }
};
Conveter("23  shakhawat");
