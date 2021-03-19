
function add1(a,b){
    return a +b;
}
console.log(add1(7)) // error NaN(not a number)


function add2(a,b=6){
    return a +b;
}
console.log(add2(7)) // =6 will solve the problem 

function add3(a, b=3, c=7){
    return a+b*c
}

console.log(add3(3))
console.log(add3(3,2,1))// this override the default


const entry = function(name, entryDate = new Date()){
    console.log(`Date of the entry ${entryDate.getFullYear()}`)
}

entry('Frank', new Date('1982-02-20'))