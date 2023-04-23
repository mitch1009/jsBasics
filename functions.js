// functions
// encapsulation - 
//  closure

let a =1200
let b =900
let discount=false;

// given that the sum of a and b should not be above 2000.if it is above 2000 apply discount else no discount

if (a+b >2000) {
    discount= true
}
// anonymous function -> arrow functions
const hasDiscount = (a, b) =>(a+b)>2000;
const nonVHasDiscount = () =>{}

// named function
function isDiscounted(a,b){
    // variadic function - a function that takes inputs
    return a+b>2000;
}

// hoisted
function greetTime(){
    // non variadic
    return "Good morning"
}




