// DAY 2: Variables, var/let/const, Scope, Hoisting, TDZ //

/* Q.1) Write a program to demonstrate how var, let, and const behave differently when declared inside a loop. */


/* Q.2) Create a program that shows the difference between function scope of var and block scope of let. */
 /*var a = () => {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }

    console.log("Loop:", i);
}

a();

var a = () => {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }

    console.log("Value of i after loop:", i);
}

a();*/

/* Q.3) Write a program to prove that re-declaring a variable with var works, but not with let or const.  */
/*var a=20
var a=30
console.log(a);

let a=80
let a=90
console.log(a);

const a=90
const a=90
console.log(a);*/

/* Q.4) Demonstrate a case where a const object can have its properties changed, even though reassignment is not allowed.  */

/*const details={
    name:"Somali",
    age:14,
    address:"Kolkata"
    
}
details.age=40
console.log(details);*/



/* Q.5) Write a program showing how hoisting works differently for var vs let.  */

/*console.log(a);
var a=10*/

/*console.log(b);
let b=10*/

/* Q.6) Create a program where accessing a let variable before declaration throws a TDZ (Temporal Dead Zone error. */
/*console.log(a);
let a=10 */


/* Q.7) Demonstrate shadowing by declaring a variable inside a block that has the same name as an outer variable (with var and let). */
/*var a=20
{
    var a=30
}
console.log(a);*/


/*let a=70
{
    let a=40
}
console.log(a);*/

/* Q.8) Write a program showing the effect of hoisting in function declarations vs function expressions. */

//  Function Declarations //
/*console.log(a());

function a(){
    return 20
}*/

// Function Expressions //
/*console.log(a());
let a=()=>{
    return 60

}*/












 