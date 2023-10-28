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
