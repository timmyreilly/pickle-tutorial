// This async and promise stuff is hard and requires lots of practice. 
// Don't give up now!

const https = require('https');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 
let breadLocation = "https://pngimg.com/uploads/bread/bread_PNG2322.png"



const xGetPromies = new Promise(
    function(resolve, reject){
        let result =''; 
        https.get(breadLocation, (res) => {
            res.on('data', (d) => {
                result += d
            }); 
            resolve(result); 
        }).on('error', (e) => {
            reject(e); 
        })
    }
)

xGetPromies
.then(function(x){
    console.log(x); 
})
.catch(function(err){
    console.log(err); 
})

// maybe mr. walsh can help us: https://davidwalsh.name/promises 

// setTimeout can be used as your async task! Yes I had a hunch! 

var p = new Promise(function(resolve, reject) {
    if(/*good condition */true){
        resolve('Success!'); 
    } else {
        reject("Failure.."); 
    }
});

p.then(function() {
    /* do something with the result */
}).catch(function() {
    /* error :( */ 
});

// let's convert XMLHttpRequest to a promise based task: 

function get(url) {
    // Return a new promise 
    return new Promise(function(resolve, reject){
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url); 

        req.onload = function() {
            // This called even on 404 etc. 
            // so check the status
            if(req.status == 200){
                // Resolve the promise with the response text 
                resolve(req.response); 
            }
            else {
                reject(error(req.statusText)); 
            }
        };

        req.onerror = function() {
            reject(Error('Network error')); 
        };

        // Make the request 
        req.send(); 
    });
}

// USE IT 

get(breadLocation).then(function(response){
    console.log("Succes!", response);
}, function(error){
    console.error("Failed", error); 
}); 

// Everyone is pooping on http and you're not supposed to use XMLHttpRequest from node. You're supposed to use requests... which is fine. Or if you want to be a bit more future forward 
// use fetch...

// let's try request

// hmmm now there's a thing called request promise: https://github.com/request/request-promise 

// let's stick with vanilla requests for meow: 


const request = require('request'); 

function getUsingRequest(url){
    return new Promise(function(resolve, reject){
        var req = request(url, function(error, response, body){
            if(error){
                reject(error); 
            } else {
                resolve(body); 
            }
        })
    })
}

getUsingRequest(breadLocation)
.then(function(response){
    console.log('heres your bread: ', response.slice(0, 100), ' ', typeof(response)); 
})
.catch(function(error){
    console.log('nice try'); 

}); 

// cool that sort of worked! 

// it also feel like we described how we want to do this... 

// okay how about this request-promises thing... it uses Bluebird - '... a full featured promise library with unmatched performance.' 