// OLD METHOD

const names = ["Frank", "Mpoyi", "Tshibuyi", "Paul"];

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }


// new method

for (let name of names){
    console.log(name)
}


for (let name of names.entries()){
    console.log(name)
}