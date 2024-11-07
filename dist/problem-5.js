"use strict";
{
    //constraints the Z using keyof T
    const getProperty = (object, property) => {
        return object[property];
    };
    //Create objet to check the function
    const person = { name: "Alice", age: 30 };
    //create object property to check function
    const personProperty1 = "name";
    const result1 = getProperty(person, personProperty1);
    console.log(result1);
    //
}
