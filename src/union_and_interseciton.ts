{
  //define two interfaces

  interface FrontendDeveloper {
    name: string;
    age: number;
    computerModel: string;
    forntendSkills: string[];
  }
  interface BackendDeveloper {
    name: string;
    age: number;
    computerModel: string;
    backendSkills: string[];
  }
  //create new type by using FrontendDeveloper and BackendDeveloper interfaces
  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  //create varibale using FullstackDeveloper type
  const ApurboFullStack: FullstackDeveloper = {
    name: "Apubo",
    age: 24,
    computerModel: "Hp",
    forntendSkills: ["Html", "Css", "Js", "React"],
    backendSkills: ["node", "express", "mongoDb"],
  };
}
