//function help to write the reusable code
function ourReusableFunction(){
    console.log("Hi Frank it good")
    
}

ourReusableFunction()

/*
const btn = document.querySelector('#btn')
btn.addEventListener('click', display)

function display(){
    data = ourReusableFunction();
    document.querySelector('.display').innerHTML = `This is my function ${data}`
}
*/

//Parameter acting like a variable or place holher to put the value when the functgion is called
function ourFunctionWithArgs(a, b){
    return a-b 
}

output = ourFunctionWithArgs(30, 10)
console.log(output)

// function addition(){
//     a  = 5;
//     b = 8
//     console.log(a+b);
// }

// addition()

function condition(){
    const a = 10;
    if(a < 20){
        console.log("its well done")
    }
}

condition()

// ============================================================
//Global vs Local scope

var myGlobal = 10;

function fun1(){
    oopsGlobal = 5; // 5 inside the function will be global bcz doest have var assign to it

}

function fun2(){
    var output =" ";
    if (typeof myGlobal != "undefined"){// yes is not undefine value of myGlobal is 10
        output = output + "myGlobal: " + myGlobal
        //output+= "myGlobal: " + myGlobal
        //console.log(output)

    }

    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal
    }

    console.log(output)
}


fun1()
fun2()

//====================================================

var outerWear = "T-Shirt";

function myOutfit(){
    var outerWear = "sweater" // if the have the same name local scope override the global scope

    return outerWear;
}

console.log(myOutfit())

//========================================================
// Return 

function change(num){
    return (num+5) / 3
}

changed = change(10)// the value returned is going to be stored in variable changed
console.log(changed)
//=========================================================================

function nextInLine(arr, item ){

    arr.push(item)
    return arr.shift(); // shift return the first item 
}
var testArr = [1,2,3,4,5]

console.log("Before: " + JSON.stringify(testArr));// it printing testarr
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
