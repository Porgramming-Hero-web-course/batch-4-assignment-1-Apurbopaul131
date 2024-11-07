## Title: The significance of union and intersection types in typescript.

**Date:** 2024-11-08  
**Author:** Apubo paul

**Introduction** Union and intersection types are crutial features in typesctipt that
help to ensure code safety,felxibility and control in your project.

**Union Types:** Union types allows a variable to be one of several possible types.
Union types are denoted by "|" symbol.A variable with a uniion types just use these
methods and properties that are exist in constituent types.If you can access property
that does not exixt in constituent property then you get a compile-time error. You can use type narrowing concept to determine which union types currently hold by varriable.
The type nrarrowing concept are inplemented by typof operator,in or any custom logic.
Type narrowing is most important when you used union types.Because, if you want to use
any methods on variable that does not exist in all union types you can get a error.

**Example:**

```javascript
// ES5 syntax
var multiply = function (x, y) {
  return x * y;
};

// ES6 arrow function
var multiply = (x, y) => {
  return x * y;
};

// Or even simpler
var multiply = (x, y) => x * y;
```
