{
  // Problem-4
  // Problem Title: Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
  type Circle = {
    shape: "Circle";
    redius: number;
  };
  type Rectangle = {
    shape: "Rectangle";
    height: number;
    width: number;
  };

  type DefineUnion = Circle | Rectangle;

  const calculateShapeArea = (dataObj: DefineUnion): number => {
    if ("redius" in dataObj) {
      return parseFloat((Math.PI * Math.pow(dataObj.redius, 2)).toFixed(2));
    } else {
      return dataObj.height * dataObj.width;
    }
  };

  const circleInput: Circle = {
    shape: "Circle",
    redius: 5,
  };
  const rectangleInput: Rectangle = {
    shape: "Rectangle",
    height: 4,
    width: 6,
  };

  console.log(calculateShapeArea(circleInput)); //Output:
  console.log(calculateShapeArea(rectangleInput)); //Output:
  //
}
