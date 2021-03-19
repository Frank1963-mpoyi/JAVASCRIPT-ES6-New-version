let map = new Map();
console.log(map)

//  in __proto__: there is a lot function you can use one of them is set, get, key etc...
map.set('name','Frank');
map.set('lastname','Tshibuyi');
map.set('email','mpoyitshibuyi63@gmail.com');

console.log(map.get('name'))
console.log(map.get('lastname'))

//check if there is item or items in the map we use the method has 
console.log(map.has('name'));

// we can check the size of the map 
console.log(map.size); // 3


// we can also iterate over the map 
for (let element of map){
    console.log(`${element[0]} : ${element[1]}`)
}


const btn = document.querySelector('#btn')
btn.addEventListener('click' , displayContent)


function displayContent (){
    console.log('I Clicked');
    for (let element of map){
        data = `${element[0]} : ${element[1]}`
    }
    document.querySelector('.display').innerHTML = `<p>  ${data}  </p>`
}