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

const rp = require('request-promise'); 

rp(breadLocation)
    .then(function(rawData){
        console.log(rawData.slice(0, 100)); 

    })
    .catch(function(err){
        // crawling failed
        console.log('woooooops'); 
    })

// whoa that was easy... 
// that just worked. 

// this is kinda crazy: https://github.com/request/request-promise 
// it makes sense, using Requests with promises would get really repetative. 

// Let's keep practicing with the ten and such. 
/*
if (Math.floor(Math.random() * 20) >= 18) {
                    console.log(d);
                }
*/

// Math.floor(Math.random() * 20) 

new Promise(function(resolve, reject){
    // a mock async action using setTimeout
    setTimeout(function() {
        const rnd = Math.floor(Math.random() * 10); 
        if(rnd > 5)
        resolve(`Good luck: ${rnd}`)
        else
        reject(`Bad luck: ${rnd}`); 
    }, 3000); 
})
.then(function(result){
    console.log(result); 
})
.catch(function(result){
    console.log(result)}
);

// ooooh yeah I like how simple that is. 

// How about chaining our thens...

new Promise(function(resolve, reject){
    setTimeout(function() { resolve(10); }, 2000)
})
.then(function(num) { console.log('first then: ', num); return num *2; })
.then(function(num) { console.log('second then: ', num); return num * 2; })
.then(function(num) { console.log('third then: ', num); return num;})
.catch(function(num) { console.log('not so good'); }); 


// Whoa... Promise.all take an array of promises and fires callback when they're all resolved. 

// const promise1 = getUsingRequest; 
// const promise2 = getUsingRequest; 

// Promise.all([promise1, promise2]).then(function(results){
//     // both promises resolved 
// })
// .catch(function(error){
//     // one ore more promises was rejected 
// })

/*

rp(breadLocation)
    .then(function(rawData){
        console.log(rawData.slice(0, 100)); 

    })
    .catch(function(err){
        // crawling failed
        console.log('woooooops'); 
    })

*/ 


var request1 = rp(breadLocation)
var request2 = rp(breadLocation); 

// Promise.all([request1, request2]).then(function(results){
//     console.log('Then: ', results); 
// }).catch(function(err){
//     console.log("Catch: ", err); 
// });


// hmm ended up with much more data than I expected... Let's try another one


var req1 = new Promise(function(resolve, reject){
    // A mock async action using setTimeout 
    setTimeout(function() { resolve('FIRST!'); }, 4000)
});

var req2 = new Promise(function(resolve, reject) {
    setTimeout(function() { resolve('SECOND'); }, 3000); 
});

var req3 = new Promise(function(resolve, reject){
    setTimeout(function() { reject('DUMB Third one'); }, 4500); 
})

var req4 = new Promise(function(resolve, reject){
    setTimeout(function() { reject('DUMB Fourth one'); }, 4500); 
})

Promise.all([req1, req2])
.then(function(results) {
    console.log('Then: ', results); 
}).catch(function(err){
    console.log('Catch: ', err); 
}); 

// Uh - oh it's a race. 
// A promise.race

Promise.race([req3, req4]).then(function(one){
    console.log('then: ', one); 
}).catch(function(one, two) {
    console.log('catch: ', one ,' catch2?: ', two); 
})

// This stuff is crazy!
// Promisify all the things... am I right? 

// Ahh screw it let's go to Tagged Template Literals! 
const say = console.log; 
const name = "THE NAMEs BOND"; 

say(`Hello ${name}, funny seeing you here. `); 

// Funny it's tagged template literally amazing. 
/* 

The best part is. Functions can be prefixed to a template literal! When a function called this way, the first parameter is an array of the strings that appear between the template's interpolated variables, and the subsequent parameters are the interpolated values. Use a spread opertor ... to capture all of them. 

I feel like this spread operator is a big deal. 
You can spread your data out... 
Over anything?

What can't you spread your data on? 

Can I spread it on onto a notification? 
*/ 

// var notifiction = `${...newObject()}`;  ... not so good. We need a toppings array. 

var notification = PieceOfToast([toppings]); 



// sourceOfData = (pay attention to this data source); 
// It's a value in a database. It's a rest endpoint. It's a socket to a database? 


const dataJam = {['yo pay attention to me' , "you're losing money.", "sector b is flooding"]};

// imagine you'r application is just like a piece of bread. 
// What do you want on that bread? Something sweet? Something sour? 
// Well you're going to need to spread it on. 
// Or maybe sprinkle it on - cinnamon sugar fans out ther anyone? 


