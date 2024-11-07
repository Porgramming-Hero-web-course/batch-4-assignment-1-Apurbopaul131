{
  //problem-1
  // Problem Tilte: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

  // Create a type to crate input argument array of sumArray function
  type Array = number[];
  const sumArray = (numArr: number[]): number => {
    const totalVaule: number = numArr.reduce((sum, num) => {
      return (sum += num);
    }, 0);
    return totalVaule;
  };
  //Takes two array to check the function
  const numbers1: Array = [1, 2, 3, 4, 5];

  //call the function and display output
  console.log(sumArray(numbers1)); //Output: 15

  //
}
