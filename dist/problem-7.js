"use strict";
{
    // Problem-7
    // Problem Title: Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
    // create class
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const carAge = new Date().getFullYear() - this.year;
            return carAge;
        }
    }
    //crate intance of Car class
    const honda = new Car("Honda", "Civic", 2018);
    //call the method of honda object and display result
    const result1 = honda.getCarAge();
    console.log(result1);
    //
}
