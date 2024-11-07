{
  //Problem-8
  // Problem Title: Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.
  const validateKeys = <T>(obj: T, keys: (keyof T)[]) => {
    let isAppear: boolean = false;
    for (let key of keys) {
      for (let objProperty in obj) {
        if (key === objProperty) {
          isAppear = true;
          break;
        } else {
          isAppear = false;
        }
      }
    }
    return isAppear;
  };
  const person: {
    name: string;
    age: number;
    email: string;
  } = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };
  console.log(validateKeys(person, ["age", "age"]));
}
