{
  // function generic

  const crateArry = (param: string): string[] => {
    return [param];
  };

  console.log(crateArry("bangladesh is ok"));

  const NewUsers = <T>(param: T): T[] => {
    return [param];
  };
  const Data = NewUsers<string>("bangladesh");
  console.log(Data);

  type User = {
    id: number;
    name: string;
  };
  interface USer {
    id: number;
    name: string;
    rol?: string;
  }

  const UserData = NewUsers<USer>({
    id: 232,
    name: "shikha sorkar",
  });

  console.log(UserData);

  const CrateArrywithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const data = CrateArrywithTuple<string, number>("banglaesh", 2323);
  console.log(data);

  const CreateLoginuser = <T, Q>(param: T, params: Q): [T, Q] => {
    return [param, params];
  };

  const Loginuser = CreateLoginuser<string, string>("Shakhawat", "Password");
  console.log(Loginuser);

  interface USerData {
    name: string;
    Id: number;
  }

  const Register = CreateLoginuser<string, USerData>("Rohitsorma", {
    name: "JOsna",
    Id: 2343,
  });
  console.log(Register);

  const StudentUser = <T>(student: T) => {
    const Cours = "Next Level Developer";
    return {
      ...student,
      Cours,
    };
  };

  const Student1 = StudentUser({
    name: "Mr Sorma",
    age: 234,
    email: "shakhawat@gmail.com",
    devloper: "MERN",
  });
  console.log(Student1);
  // end program
}
