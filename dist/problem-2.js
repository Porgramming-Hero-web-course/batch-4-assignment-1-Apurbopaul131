"use strict";
{
    const removeDuplicates = (numsArr) => {
        const uniqueNumsArr = numsArr.filter((num, index) => numsArr.indexOf(num) === index);
        return uniqueNumsArr;
    };
    const inputNum1 = [1, 2, 2, 3, 4, 4, 5];
    const result1 = removeDuplicates(inputNum1);
    console.log(result1); //Output:[1,2,3,4,5]
}
