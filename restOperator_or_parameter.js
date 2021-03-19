// Rest Operator is like an array 
//protos object not iterable not  an array


//old fashion 
function mynumbers(nums){
    console.log(arguments); // arguments make the parameter nums to have many arguments 8,9,10,2
}

// mynumbers(8,9,10,2);

// new features for rest operators 
function mynumbers(...nums){
    console.log(nums); // arguments make the parameter nums to have many arguments 8,9,10,2
}

mynumbers(8,9,10,2,10,2,78,89);//here you can add more argument