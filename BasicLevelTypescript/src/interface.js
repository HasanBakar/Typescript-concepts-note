// interface Person {
//     firstName:string,
//     lastName:string,
//     age:number,
// };
function greet(person) {
    console.log("Hello, ".concat(person.firstName, " ").concat(person.lastName, "!"));
}
var user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
greet(user);
