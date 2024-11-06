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
  const numbers1: Array = [50, 70, 90, 100, 200];
  const numbers2: Array = [700, 200, 500, 400];

  //call the function and display output
  console.log(sumArray(numbers1));
  console.log(sumArray(numbers2));
  //
}
