"use strict";
/*
Basic Types in Typescript
*/
//! ** 1 ** Boolean Type:
let isDone = false;
console.log(isDone);
//! ** 2 ** Number Type
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
console.log(decimal, hex, octal, binary);
//! ** 3 ** String Type:
/*
Represents textual data.
*/
let name = 'blue';
let greeting = `Hello, Welcome ${name}`;
console.log(greeting);
//! ** 4 ** Array Type:
/*
Represents a list of values with the same data type.
*/
let numbers = [1, 2, 3, 4, 5, 6];
let fruits = ['Apple', 'Orange', 'Cherry'];
console.log(numbers, fruits);
//! ** 5 ** Tuple Type:
/*
Allows you to express an array with a fixed number of elements where each element may have a different data type.
*/
let tuple = [4, 'Abu Bakar', true];
console.log(tuple);
//! ** 6 ** Enum Type:
/*
A way to give more friendly names to sets of numeric values.
*/
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["White"] = 3] = "White";
    Color[Color["Orange"] = 4] = "Orange";
})(Color || (Color = {}));
let color = Color.Green;
console.log(color);
//! ** 7 ** Any Type: 
/*
Represents a variable that can have any data type.
*/
let dynamicValue = 'Hello, welcome';
console.log(dynamicValue);
dynamicValue = 45;
console.log(dynamicValue);
//! ** 8 ** Void Type:
/*
Used for functions that do not return a value.
*/
function sayHi() {
    console.log('Hi');
}
sayHi();
//! ** 9 & 10 ** Null and Undefined Type:
/*
Represent values that may be absent or uninitialized.
*/
let data = null;
let value = undefined;
console.log(data, value);
//! ** 11 ** Object Type:
let user = {
    name: "Abu Bakar",
    age: 23,
};
console.log(user);
//! ** 12 ** Never Type:
/*
Represents the type of values that never occur.
*/
function throwError(message) {
    throw new Error(message);
}
