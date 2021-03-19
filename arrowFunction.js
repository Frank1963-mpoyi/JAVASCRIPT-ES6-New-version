
// name function

function display(name){
    console.log(name);
}

display("Tshibuyi");


// Arrow function is like Anonymous Function

const display1 =() => {
    console.log("Hello World")
}

display1();

// OR 

const display12 = ()=> console.log("Hello World 12");
display12()


const display122 = (name)=> console.log(`Hello World 122 ${name}`)  ;
display122 ("wide")


// after 2 second I will get the result
setTimeout(function(){
    console.log("Hello Function ");
}, 2000)

// same with arrow function
setTimeout (() => console.log("Hello Arrow Function "), 2000);


// MULTILINE ARROW FUNCTIONS

const factorial = function(n){
    let product = 1;

    for(let i=1; i < n.length; i++){
        products *=i;

    }
    return product
}

console.log(factorial(4))

// DEFAULT PARAM IN ARROW FUNCTION

function display3(...n){
    console.log(n)
}

display3(1,2,3,4,5,6,7,8,89)



const display5 = (...n) =>{
    console.log(n)
}

display3(1,2,3,4,5,6,7,8,89,90,100,200)


// 
const displayPower = (n, exp=2) => Math.pow(n, exp);
console.log(displayPower(2,4));
console.log(displayPower(4)); // because there is default 2 
