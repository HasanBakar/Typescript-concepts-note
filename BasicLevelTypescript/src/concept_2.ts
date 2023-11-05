/*
Basic Types in Typescript
*/

//! ** 1 ** Boolean Type:

let isDone:Boolean = false;
console.log(isDone);

//! ** 2 ** Number Type
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal, hex, octal, binary);

//! ** 3 ** String Type:
/*
Represents textual data.
*/
let name:string = 'blue';
let greeting:string = `Hello, Welcome ${name}`;
console.log(greeting);

//! ** 4 ** Array Type:
/*
Represents a list of values with the same data type.
*/

let numbers:number[] = [1, 2, 3, 4, 5, 6];
let fruits:string[] = ['Apple', 'Orange', 'Cherry'];
console.log(numbers,fruits);

//! ** 5 ** Tuple Type:
/*
Allows you to express an array with a fixed number of elements where each element may have a different data type.
*/
let tuple:[number, string, boolean] = [4, 'Abu Bakar', true];
console.log(tuple);

//! ** 6 ** Enum Type:
/*
A way to give more friendly names to sets of numeric values.
*/
enum Color {
    Red,
    Green,
    Blue,
    White,
    Orange
}

let color = Color.Green;

console.log(color);

//! ** 7 ** Any Type: 
/*
Represents a variable that can have any data type.
*/
let dynamicValue:any = 'Hello, welcome'
console.log(dynamicValue);

dynamicValue = 45;
console.log(dynamicValue)

//! ** 8 ** Void Type:
/*
Used for functions that do not return a value.
*/
function sayHi():void {
    console.log('Hi');
}
sayHi();

//! ** 9 & 10 ** Null and Undefined Type:
/*
Represent values that may be absent or uninitialized.
*/

let data: null = null;
let value: undefined = undefined;
console.log(data, value)

//! ** 11 ** Object Type:
let user: object = {
  name: "Abu Bakar",
  age: 23,
};

console.log(user);

//! ** 12 ** Never Type:
/*
Represents the type of values that never occur.
*/
function throwError(message: string): never {
  throw new Error(message);
}

