"use strict";
{
    const sumArray = (numArr) => {
        const totalVaule = numArr.reduce((sum, num) => {
            return (sum += num);
        }, 0);
        return totalVaule;
    };
    //Takes two array to check the function
    const numbers1 = [50, 70, 90, 100, 200];
    const numbers2 = [700, 200, 500, 400];
    //call the function and display output
    console.log(sumArray(numbers1));
    console.log(sumArray(numbers2));
    //
}
