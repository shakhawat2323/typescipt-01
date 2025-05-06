interface Developer<T, X = null> {
  name: string;
  coumputer: {
    Model: string;
    cpu: string;
    ram: string;
    new: boolean;
  };
  Laptop: T;
  bike?: X;
}
interface LAPTOP {
  models: string;
  conditionnew: boolean;
}

interface Mybike {
  bikename: string;
  new: boolean;
}
const Datesoiq: Developer<LAPTOP, Mybike> = {
  name: "Shakhawat",
  coumputer: {
    Model: "I5 Gen 10",
    cpu: "intel",
    ram: "16GB",
    new: true,
  },
  Laptop: {
    models: "MCK Book",
    conditionnew: true,
  },
  bike: {
    bikename: "boolet",
    new: true,
  },
};
console.log(Datesoiq);
