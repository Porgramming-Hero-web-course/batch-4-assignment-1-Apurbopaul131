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
  const inputNum1: NumberArr = [500, 200, 100, 500, 100, 400, 400];
  const inputNum2: NumberArr = [1, 2, 2, 3, 4, 4, 5];
  const result1: NumberArr = removeDuplicates(inputNum1);
  const result2: NumberArr = removeDuplicates(inputNum2);
  console.log(result2);
  console.log(result1);
}
