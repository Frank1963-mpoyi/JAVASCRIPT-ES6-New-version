// unpack value from an array or object 

//Object

const personalInfo = {

    name:"Mpoyi",
    lastname:"Tshibuyi",
    email:"frankmpoyi63@gmail.com",
    phone: 781114041

}

//long way 
const firstname = personalInfo.name;
const lastname = personalInfo.lastname;

console.log(`Mys Full Name is : ${firstname} ${lastname} `)

//shortcut they call it object destructing
const {name, lastname} = personalInfo
console.log(`My First Name is ${name} and Surname is ${lastname}`)

