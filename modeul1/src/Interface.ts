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
