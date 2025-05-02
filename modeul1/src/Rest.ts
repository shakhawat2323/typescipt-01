const mona: string[] = ["shakhawat", "jaman", "alinao"];
const sona: string[] = ["akash", "batash", "mudi"];
mona.push(...sona);
console.log(mona);
console.log(sona);

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
