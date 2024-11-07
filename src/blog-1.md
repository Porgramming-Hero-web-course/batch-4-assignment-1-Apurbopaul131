## Title: The significance of union and intersection types in typescript.

**Date:** 2024-11-08  
**Author:** Apubo paul

**Introduction** Union and intersection types are crutial features in typesctipt that
help to ensure code safety,flexibility and control in your project.

**Union Types:** Union types allows a variable to be one of several possible types.
Union types are denoted by "|" symbol.A variable with a uniion types just use these
methods and properties that are exist in constituent types.If you can access property
that does not exixt in constituent property then you get a compile-time error. You can use type narrowing concept to determine which union types currently hold by varriable.
The type nrarrowing concept are inplemented by typof operator,in or any custom logic.
Type narrowing is most important when you used union types.Because, if you want to use
any methods on variable that does not exist in all union types you can get a compiler-error.

**Example:**

```javascript
//Define an type person
    type Person = {
        name:string,
        age:number,
        email:string;
    }
    //Create a union type that hods several types of constituent Person type.
    type PersonProperty = keyof Person; // "name" | "age" | "email"

    //create a variable using Peson type
    const Apurbo:Person = {
        name:"Apurbo Paul",
        age:24,
        email:"apurbopaul131@gmail.com"
    }


    //Create a varibale using a uninion types Person property that just use "name" | "age" | "email"
    const ApurboName:PersonProperty = "name";

    //if you want to use any property thet does not exist in constituent types Person you get an compile-time error.
    const ApurboAddress:PersonProperty = "address";
```

**Significane of Union types:**

- **Flexibility:** Union types provide flextbility by allowing varialbe to holds multuple types.Union types are most helpful for function that handle mulpile types as parameters.

- **Simplifies error handling:** Union types define types explicitly that ensure easy error handling.

- **Enhance code readability:** Union type define possible values clearly that helpful for developers to understand the code.

**Example with function:**

```javascript
//define an union types
  type UnionType = string | number;

  //
  const addOrConcatenation = (
    value1: UnionType,
    value2: UnionType
  ): UnionType => {
    //Narrow the union types using typeof operator
    if (typeof value1 === "number" && typeof value2 === "number") {
      return value1 + value2; // retrun number
    } else {
      return value1.toString() + value2.toString(); //return string
    }
  };
  //Create variable of UnionType
  const numberOne: UnionType = 30;
  const numberTwo: UnionType = 50;
  const numberThree: UnionType = "Apurbo";
  const nuberFour: UnionType = 131;

  //call the funciton with different parameters
  const resultOne: number = addOrConcatenation(numberOne, numberTwo) as number; //tye assertion
  const resultTwo: string = addOrConcatenation(
    numberThree,
    nuberFour
  ) as string; //type assertion

  //display the output
  console.log(resultOne); // 80
  console.log(resultTwo); // Apurbo131
```

**Insertion Type:** Insertion types are combine multiple types into single one,where the new types contains all properties of each component type.It denoted by "&" symbol.This types usally used when we need to create an object that extends multiple types or interfaces.In insertion type, You can combine interface and type alias to create a new complex type or interface.

**Example**

```javascript
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
```
