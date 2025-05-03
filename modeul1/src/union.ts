type frontandedeveloper = "fakibaji" | "joniar developer";
type fulastakdeveloper = "expart developer" | "fakibaji developer";
type developers = frontandedeveloper | fulastakdeveloper;

type Users = {
  name: string;
  email?: string;
  gender: "mail" | "femail";
};

const user1: Users = {
  name: "shakhawat",
  email: "shakhawathossain@gmail.com",
  gender: "mail",
};
console.log(user1);

type fontent = {
  skill: string[];
  desigation1: "Font Ent Developer";
};
type BeckEnt = {
  skill: string[];
  designaton2: "Backent Developer";
};

type Fullstack = fontent & BeckEnt;

const fullstackdeveloper: Fullstack = {
  skill: ["HTML", "Css", "React"],
  desigation1: "Font Ent Developer",
  designaton2: "Backent Developer",
};
console.log(fullstackdeveloper);
