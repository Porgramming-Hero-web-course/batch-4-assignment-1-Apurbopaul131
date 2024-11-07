"use strict";
{
    const sumArray = (numArr) => {
        const totalVaule = numArr.reduce((sum, num) => {
            return (sum += num);
        }, 0);
        return totalVaule;
    };
    //Takes two array to check the function
    const numbers1 = [1, 2, 3, 4, 5];
    //call the function and display output
    console.log(sumArray(numbers1)); //Output: 15
    //
}
