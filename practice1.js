//what is hoisting give a example 
getName();
console.log("x is ", x);
 var getName=()=> {
    console.log("get name")
}
getName();
console.log("x is ", x);

