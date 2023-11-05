# Module 01 : Typescript with programming hero level 2.0
## Basic data types in typescript
- There are two types of data type in typescript
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
    - undefined data type
    - symbol data type
    - any data type (it is not preferable for use)
2. There are also many types of non primitive data as such:
    - Array
    - Tuple
    - Object
