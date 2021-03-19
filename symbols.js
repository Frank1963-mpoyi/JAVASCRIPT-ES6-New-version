const sumbol1 = Symbol();

let name1 = Symbol("name1") //has it own identity
let lastName = Symbol("lastName");// it has it own identity

console.log(name1);
console.log(lastName);

console.log(typeof name1);

console.log(name1 === lastName)