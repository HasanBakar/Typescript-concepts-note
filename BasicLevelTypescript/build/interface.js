"use strict";
// interface Person {
//     firstName:string,
//     lastName:string,
//     age:number,
// };
function Say(person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}!`);
}
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
Say(user);
