// document object is in window , window is upper that why we dont use it 
// and DOM is a part of the document object

const btn = document.querySelector('#btn')
btn.addEventListener('click' , displayContent)


function displayContent (){
    console.log('I Clicked');
    document.querySelector('.display').innerHTML = data
}

// function displayData (){
//     console.log("Yes data is displayed")
// }




const displayInfo  =  function(){

    return ['Frank', 'Mpoyi', 'frankmpoyi63@gmail.com'];
    
}

let [firstname, lastname, email] = displayInfo();
let data = `Name is : ${firstname} <br> last Name is: ${lastname} and email: ${email}`
console.log(data);

