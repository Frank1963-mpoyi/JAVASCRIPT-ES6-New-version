
function getUrl(url){
    return new Promise (function(resolve, reject){
        //create a request 
        let req = new XMLHttpRequest()
        // we have to open our url
        req.open("GET", url) //get request and url link

        //the function we must call when the page is loaded
        req.onload =function(){
            // when the page loaded we must check if the request was success request
            if (req.status == 200){
                resolve(req.response);
            }
            else{
                reject(Error(req.statusText))
            }
        };
        //handle network errors
        req.onerror = function(){
            reject(Error('network error'));
        };
        //make the response
        req.send();
    });
}

// 1:34 modern javascript