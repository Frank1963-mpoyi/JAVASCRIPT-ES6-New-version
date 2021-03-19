
//old method of string concatenation

let name1 = "Mpoyi";
let lastName = "Tshibuyi";

//let fullName = "My name is : " + name1 + " and my lastName is: " +lastName;
//console.log(fullName)


// The ES 6 method we use back tick or tilda to concatenate
let fullname = `My name is ${name1} and my lastName is ${lastName}`;
console.log(fullname)

function dispaly(name){
    return `${name.toUpperCase()}`;
}

console.log(dispaly("mpoyi "))