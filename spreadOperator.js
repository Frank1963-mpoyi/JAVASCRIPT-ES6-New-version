
let a = [1,2,3,4,5];
let b = [6,7,8,9,10,12];

//let c = a+b
let c =[...a, ...b]
console.log(c)

let hello = ['Hello', 'World'];
console.log(hello)
console.log(...hello); // split is not looking like an array

let name1 = "Mpoyi"
console.log(name1);
console.log(...name1) // will separate words

// Copy one object to another object
let obj1 = {
    name1: "Mpoyi",
    lastname: "Tshibuyi"
};

let obj2 = {
    email: 'frankmpoyifr@yahoo.fr',
    phone: 781114041,
    ...obj1
}

console.log(obj2)