# Typescript-concepts-note
## Myself learning notes of Typescript. 

#### 1. Type Annotations: Understanding how to specify types for variables, function parameters, and return values. *
```
/*
Type Annotations 
First time revision date and time: Sun Oct 29 2023 01:19:46 GMT+0600 (Bangladesh Standard Time)

*/

//! 1. Type Annotations for Variables:

let age:number; // Declaring a variable 'age' with type annotation 'number'
const Name:string = 'Abu Bakar';
let isOpen:boolean;

isOpen = false;
age = 23;

console.log(`number type variable age: ${age}, string type variable name: ${Name}, and boolean type variable isOpen: ${isOpen}`);

//! 2. Type Annotations for Function Parameters and Return Values:

function sum(a:number, b:number):number {
    return a + b;
}

console.log(sum(5,9));

//! 3. Type Annotations for Arrays:

const fruits: string[] = ['Banana', 'Apple', 'Cherry', 'Mango', 'Orange']
console.log(fruits);
fruits.push('Jackal');
console.log(fruits);
fruits.unshift('Breadfruit');
console.log(fruits);

//! 4. Type Annotations for Objects:

const student:{name:string, id:number, class_name: string, present_or_not:boolean} = {
name:'Abu Bakar', id:1, class_name:'Eight', present_or_not:true};
console.log(student.name);
console.log(student.class_name);

//! 5. Type Annotations for Function Signatures:
const greet: (name:string) => void = (name) => {
  console.log(`Hello, welcome ${name}`);
};

console.log(greet("Hasan"));

//! 6. Custom Type Annotations (Type Aliases or Interfaces):

type Book = {
title:string,
author:string,
pages:number
}

function displayBook(book:Book):void {
 console.log(`Book Name: ${book.title}\n Author Name: ${book.author}\n Number of pages: ${book.pages}`)   
}

const myBook: Book ={
title:'My turing point',
author: 'Abu Bakar',
pages:585,
}

displayBook(myBook);
```
#### 2. Basic Types: Learning about fundamental types such as number, string, boolean, null, undefined, and any. *
```
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

```
