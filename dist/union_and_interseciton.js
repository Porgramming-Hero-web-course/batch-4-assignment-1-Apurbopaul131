"use strict";
{
    //
    const addOrConcatenation = (value1, value2) => {
        //Narrow the union types using typeof operator
        if (typeof value1 === "number" && typeof value2 === "number") {
            return value1 + value2; // retrun number
        }
        else {
            return value1.toString() + value2.toString(); //return string
        }
    };
    //Create variable of UnionType
    const numberOne = 30;
    const numberTwo = 50;
    const numberThree = "Apurbo";
    const nuberFour = 131;
    //call the funciton with different parameters
    const resultOne = addOrConcatenation(numberOne, numberTwo); //tye assertion
    const resultTwo = addOrConcatenation(numberThree, nuberFour); //type assertion
    //display the output
    console.log(resultOne);
    console.log(resultTwo);
}
