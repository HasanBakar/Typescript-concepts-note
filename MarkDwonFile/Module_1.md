# Module 01 : Typescript with programming hero level 2.0
## Basic data types in typescript
- ### There are two types of data type in typescript
    i. Primitive data type
    ii. Non Primitive data type 
1. There are also many types of primitive data as such:
    - number data type
    ```typescript
    //implicitly number type variable declaration
    const roll = 122;
    console.log(roll);
    //explicitly number type variable declaration
    const age:number = 23;
    console.log(age);
    ```
    - string data type 
    ```typescript
    //implicitly string type variable declaration
    const fullName = 'Abu Bakar';
    console.log(fullName);
    //explicitly string type variable declaration
    const firstName:string = 'Abu';
    const lastName:string = 'Bakar'
    console.log(firstName + " " + lastName);
    ```
    - boolean data type 
    ```typescript
    //implicitly boolean type variable declaration
    const married:boolean = false;
    console.log(married);
    //explicitly boolean type variable declaration
    const isDone:boolean = true;
    const isAdmin:boolean = false;
    console.log(isAdmin, isDone);
    ```
    - null data type
    ```typescript
    // null type (that is special type)
    const vacancy:null = null;
    console.log(vacancy);
    ```
    - undefined data type
    ```typescript 
    // undefined type
    const countryData:undefined = undefined;
    console.log(countryData);
    ```
    - symbol data type
    ```typescript
    // Declare a variable with the symbol data type
    const mySymbol: symbol = Symbol('mySymbol');

    // We can also create a symbol without an optional description
    const anotherSymbol: symbol = Symbol();

    // Symbols are unique, so even if you create a symbol with the same description,
    // it will be a different symbol instance
    const symbol1: symbol = Symbol('example');
    const symbol2: symbol = Symbol('example');

    console.log(symbol1 === symbol2); // false, they are not the same symbol

    ```
    - any data type (it is not preferable for use)
    ```typescript
    
    //implicitly any type variable declaration
    let hey;
    hey = 2;
    hey = 'Hello';
    //explicitly any type variable declaration
    let d:any;
    d = 3;
    d = false;
    d = 'Welcome!';
    
    console.log(hey, d)
    ```
2. There are also many types of non primitive data as such:

    - Array
    ```typescript
    // implicitly array declaration 
    const numbers = [1, 2, 4, 5, 8];
    console.log(numbers);
    // explicitly array declaration
    const fruits:string[]=['Orange', 'Apple', 'Charry'];
    console.log(fruits);
    ```
    - Tuple
    ```typescript
    // implicitly array declaration 
    const customData = ['Apple', 4, true];
    console.log(customData);
    // explicitly tuple declaration
    const t:[string, number, boolean]=['Orange', 3434, true];
    console.log(t);
    ```
    - Object
    ```typescript
      //Reference Type or non primitive ---> Object 
    //implicitly type object type variable declaration
    const Player = {
      firstName:'Abu',
      lastName:'Bakar'
    };

    //explicitly type object type variable declaration
    const user:{
      firstName:string;
      lastName:string;
      nickName:string;
      age:number;
      isGraduate:boolean;
      skinColor?:string;//set optional property in object
      company:"Programming Hero";//custom and constant type --> when a value use as a type which is called literal type
    } = {
      firstName:'Abu',
      lastName:'Bakar',
      nickName:'Hasan',
      age:23,
      isGraduate:false,
      company:'Programming Hero',
    };
    ```
- ### Spread Operator use with array example:
Spread Operator is a special and powerful Operator </br><span style="color:orange">Which is used for copy array element one to another array</span>
```typescript
//spread operator with array

const bros1:string[] = ['Siaful','Faruk', 'Zayad', 'Zihad', 'Morshed'];

const bros2:string[] = ['Abu Bakar', 'Abul Kasam', 'Md. Zunaid'];

const brothers:string[] = [...bros1, ...bros2];

console.log(bros1);

console.log(bros2);

console.log(brothers);
```
#### copy object property one object to another object with the help of spread Operator
```typescript
{// this curly brackets use for create block of code 
//Spread Operator example with object
  const name:{
    firstName:string;
    lastName:string;
  } = {
    firstName:'Abu',
    lastName:'Bakar',
  };
 const education:{
  ssc:string;
  hsc:string;
  honurs:string;
  Msc?:string;
 } = {
    ssc:'Madrasha',
    hsc:'MNAC',
    honurs:'UCTC',
  };
const user = {
  id:123123,
  ...name,
  ...education
}

console.log(name);
console.log(education);
console.log(user);
}
```
