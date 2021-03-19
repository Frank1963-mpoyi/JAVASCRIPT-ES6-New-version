// set is like an array but it store unique value not duplicate value

let set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);

for (let element of set){
    console.log(element);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click',  displayContent);


function displayContent(){
    for (let element of set){
        // console.log(element);
        data = element
    }
    document.querySelector('.display').innerHTML = `
                                                    <ul>
                                                        <li> ${data1} </li>
                                                    </ul>
                                                    `
}

// Other way to use set
let set1 = new Set([1,2,3,4,5,6,7,8,9,])

for(let element of set1){
    console.log(element)


}

// set method 
console.log(set.size);
console.log(set.has(2))