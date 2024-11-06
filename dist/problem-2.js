"use strict";
{
    const removeDuplicates = (numsArr) => {
        const uniqueNumsArr = numsArr.filter((num, index) => numsArr.indexOf(num) === index);
        return uniqueNumsArr;
    };
    const inputNum1 = [500, 200, 100, 500, 100, 400, 400];
    const inputNum2 = [1, 2, 2, 3, 4, 4, 5];
    const result1 = removeDuplicates(inputNum1);
    const result2 = removeDuplicates(inputNum2);
    console.log(result2);
    console.log(result1);
}
