//Template String

let firstname = "Anuj"
let lastName = 'Garg';

let myName = "My name is " + firstname + " " + lastName;
//console.log(myName);

let fullName = `My Name is ${firstname} ${lastName}`;
//console.log(fullName);
//////////////////////////////////////////////////////////////////
//Variable Shadowing

let num1 = 10;

function myFunc() {
    let num2 = 20;
    console.log(num1);
    console.log(num2);
    //I cant use Outer Scope num1 Variable - Variable Shadowing
    //It should not be there in your code
    //Create inner Scope variable with differnt name
}

[40, 50, 60].forEach((num1) => {
    //Cant use num1 outer scope variable inside this block
})

for(let num1 = 0; num1 < 2; num1++) {
    //Cant use num1 outer scope variable inside this loop
}

console.log("Outer - " , num1);
myFunc();