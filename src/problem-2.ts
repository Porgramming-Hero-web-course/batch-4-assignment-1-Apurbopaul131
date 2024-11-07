{
  //Problem-2
  // Problem Title: Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
  type NumberArr = number[];
  const removeDuplicates = (numsArr: NumberArr): NumberArr => {
    const uniqueNumsArr: NumberArr = numsArr.filter(
      (num, index) => numsArr.indexOf(num) === index
    );
    return uniqueNumsArr;
  };

  const inputNum1: NumberArr = [1, 2, 2, 3, 4, 4, 5];

  const result1: NumberArr = removeDuplicates(inputNum1);
  console.log(result1); //Output:[1,2,3,4,5]
}
