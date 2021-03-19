//Promises
// introduce ES6 to handle asynchrounous programming
// if promise is called we handle by callback in javascript
//.then is use for process data
// catch to catch the error


/*
let completed = true

let mypromise = new Promise(function(resolve, reject){
    if (completed) {
        resolve("The promise has been completed");
    }
    else {
        reject ("The promise has not been completed");
    }
});

console.log(mypromise)
*/

let completed = true;
let mypromise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        if (completed) {
            resolve("The promise has been completed");
        }
        else{
            reject ("The promise has not been completed");
        }
    }, 3 *1000)
});

//console.log(mypromise)

function promiseReport(promise){
    promise
    .then(result=> console.log(`Result : ${result}`))
    .catch(error => console.log(`Result : ${error}`))
}

console.log(promiseReport(mypromise))