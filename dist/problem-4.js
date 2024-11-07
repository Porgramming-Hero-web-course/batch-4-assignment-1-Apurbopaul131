"use strict";
{
    const calculateShapeArea = (dataObj) => {
        if ("redius" in dataObj) {
            return parseFloat((Math.PI * Math.pow(dataObj.redius, 2)).toFixed(2));
        }
        else {
            return dataObj.height * dataObj.width;
        }
    };
    const circleInput = {
        shape: "Circle",
        redius: 5,
    };
    const rectangleInput = {
        shape: "Rectangle",
        height: 4,
        width: 6,
    };
    console.log(calculateShapeArea(circleInput)); //Output:
    console.log(calculateShapeArea(rectangleInput)); //Output:
    //
}
