"use strict";
let my_name = "Hasan"; //*string type (1)
let life_is_no_loner = 24; //*number type (2)
let alive = true; //*boolean type (3)
let do_something; // * any type (4)
let postId; //! union type (5)
let isActive; //! union type (6)
let re = /\w+g/; //! Regular Expression type (7)
do_something = "I love my country❤";
console.log(typeof (my_name) + "  " + typeof (life_is_no_loner) + "  " + typeof (alive) + "  " + typeof (do_something));
function sum(a, b) {
    return a + b;
}
console.log("which type is", typeof (re));
console.log(sum(4, 9));
console.log(sum(4, 6));
