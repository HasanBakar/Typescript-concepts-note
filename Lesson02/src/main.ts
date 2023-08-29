let my_name:string = "Hasan"; //*string type (1)
let life_is_no_loner:number = 24; //*number type (2)
let alive:boolean = true;//*boolean type (3)
let do_something:any; // * any type (4)
let postId: number | string; //! union type (5)
let isActive: boolean | number; //! union type (6)
let re:RegExp = /\w+g/; //! Regular Expression type (7)

do_something= "I love my country❤";

console.log(typeof(my_name)+  "  " + typeof(life_is_no_loner)+"  "+ typeof(alive)+ "  "+ typeof(do_something));

function sum(a:number, b:number) {
    return a + b;
}
console.log("which type is",typeof(re))

console.log(sum(4, 9))

console.log(sum(4, 6))

