const mona: string[] = ["shakhawat", "jaman", "alinao"];
const sona: string[] = ["akash", "batash", "mudi"];
mona.push(...sona);
// console.log(mona);
// console.log(sona);

const Youtbe = {
  seo: "mona is  seo master",
  contan: "mossaddek video crato",
};

const fecbook = {
  like: "shikhaa",
  folwer: "rajukhan",
};
const sosalink = {
  ...Youtbe,
  ...fecbook,
};
console.log(sosalink);

const Frindlist = (...firnds: string[]) => {
  firnds.forEach((friend: string) => console.log(`hi dos kmon Cish ${friend}`));
};
Frindlist("aksh", "babu", "riya");

const prem = {
  fasts: "bristi",
  secendw: "soniya",
  therdr: "tasmin",
};

const timepas = {
  fastr: "bristi",
  secendrg: "Tasmin",
  therdb: "mona",
};

const bas = {
  fasts: "Tasmin",
  secendg: "mona",
};
const myFunnylove = {
  ...timepas,
  ...prem,
  ...bas,
};
console.log({ myFunnylove });

const FunnlyLove = (...Gf: string[]) => {
  Gf.forEach((p) => console.log(`my best and funny love ${p}`));
};

FunnlyLove("mona", "tasmin", "soniya", "bristi");

type FrontendDeveloper = {
  skills: string[];
  designation1: "Frontend Developer";
};

type BackendDeveloper = {
  skills: string[];
  designation2: "Backend Developer";
};

type FullstackDeveloper = FrontendDeveloper | BackendDeveloper;

const fullstackDeveloper: FullstackDeveloper = {
  skills: ["HTML", "CSS", "EXPRESS"],
  designation1: "Frontend Developer",
  designation2: "Backend Developer",
};

// console.log({ fullstackDeveloper });

const isresult = undefined;
const data = isresult ?? "ami nullish operator";
console.log({ data });
