{
  // Constraints

  const Stuentdata = <T extends { id: number; name: string; email: string }>(
    stuend: T
  ) => {
    const Course = "my Course is the best";
    return {
      ...stuend,
      Course,
    };
  };
  interface USerdataseo {
    name: string;
    id: number;
    emails: string;
    rol: string;
  }

  const UserDatas = Stuentdata({
    name: "shakhawat",
    id: 23223,
    email: "shakhawat@gmail.com",
    rol: "isAdmin",
  });
  console.log(UserDatas);
}
