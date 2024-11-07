{
  //define an union types
  type UnionType = string | number;

  //
  const addOrConcatenation = (
    value1: UnionType,
    value2: UnionType
  ): UnionType => {
    //Narrow the union types using typeof operator
    if (typeof value1 === "number" && typeof value2 === "number") {
      return value1 + value2; // retrun number
    } else {
      return value1.toString() + value2.toString(); //return string
    }
  };
  //Create variable of UnionType
  const numberOne: UnionType = 30;
  const numberTwo: UnionType = 50;
  const numberThree: UnionType = "Apurbo";
  const nuberFour: UnionType = 131;

  //call the funciton with different parameters
  const resultOne: number = addOrConcatenation(numberOne, numberTwo) as number; //tye assertion
  const resultTwo: string = addOrConcatenation(
    numberThree,
    nuberFour
  ) as string; //type assertion

  //display the output
  console.log(resultOne); // 80
  console.log(resultTwo); // Apurbo131
}
