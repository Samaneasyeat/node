//what is hoisting give a example 
console.log("the value of x before initialization of x", x);
getName();
var x = 5;
console.log("the value of x after initialization of x", x);
function getName() {
    console.log("get name")
}
getName();

