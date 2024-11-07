## Title: The significance of union and intersection types in typescript.

**Date:** 2024-11-08  
**Author:** Apubo paul

**Introduction** Union and intersection types are crutial features in typesctipt that
help to ensure code safety,felxibility and control in your project.

**Union Types:** Union types allows a variable to be one of several possible types.
Union types are denoted by "|" symbol.A variable with a uniion types just use these
methods and properties that are exist in constituent types.If you can access property
that does not exixt in constituent property then you get a compile-time error. You can use type narrowing concept to determine which union types currently hold by varriable.
The type nrarrowing concept are inplemented by typof operator,in or any custom logic.
Type narrowing is most important when you used union types.Because, if you want to use
any methods on variable that does not exist in all union types you can get a error.

**Example:**

```javascript
//Define an type person
    type Person = {
        name:string,
        age:number,
        email:string;
    }
    //Create a union type that hods several types of constituent Person type.
    type PersonProperty = keyof Person;

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
