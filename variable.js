

//var is used for global scope

/*  

ES 6: 2 features variable declaration come let and const
let and const there are block scop 
Example : 

let num = 5;
if (num < num.length){
    let greeting = "Hello world"
    console.log(greeting)// only access inside of the scope
}
//console.log(greeting) you can not access outside of the scope

//============== let ================
// you can not assign again a variable with let ex:
let greeting = "Hello World"
let greeting = "world"

// but you can update the declared variable ex:
let greeting ="Hello world";
greeting = "world"

//============== const ========
//2. you can not assign again a variable with const ex:
const greeting = "Hello World"
const greeting = "world"

// you can not also update the declared variable ex:
const greeting ="Hello world";
greeting = "world" // error




*/


















var a; // this is assign the variable
console.log(a)// equal to = null bcz there is no value assigned to it 
// ; mean the end of the line
a= 9 // here I assign 9 to a I dont need to declare it again bcz it already declare 
console.log(a)


var b =2; // here we declare and assign the variable, 2 is assign to b 


// ========INITIALIZING VARIABLES W/ ASSIGNEMENT OPERATOR

var a = 5;
var b = 10;
var c = "I am a ";

a = a + 1; // 6
b = b + 5; // 15
c= c+ "String ! "; // I am a String 



// =======CASE SENSITIVITY IN VARIABLES ======

// Declarations
var StUdLyCapVaR;

// Assignments
STUDLYCAPVAR = 10; 

// declaration and assignment is no the same the case sensitive matter 

// CAMEL CASE
var studentCapVar;

studentCapVar = 10; // assign the variable with came case is a;lways a good practice in javascript 

