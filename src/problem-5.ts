{
  // Problem-5
  // Problem Title: Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
  // Declear object and property type
  type HandleObj = {
    name: string;
    age: number;
  };
  type HandleProperty = keyof HandleObj;

  //constraints the Z using keyof T
  const getProperty = <T, Z extends keyof T>(object: T, property: Z): T[Z] => {
    return object[property];
  };

  //Create objet to check the function
  const person: HandleObj = { name: "Alice", age: 30 };

  //create object property to check function
  const personProperty1: HandleProperty = "name";

  const result1: string = getProperty<HandleObj, HandleProperty>(
    person,
    personProperty1
  ) as string;
  console.log(result1); //Output:Alice

  //
}
