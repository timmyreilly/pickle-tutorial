// I'm so frustrated...

const print = console.log;

const items = [
    { name: 'ball', points: 2 },
    { name: 'coin', points: 3 },
    { name: 'candy', points: 4 },
    { name: 'computer', points: 40 },
    { name: 'paper', points: 43 },
    { name: 'cheeseburger', points: 17 },
    { name: 'fizz', points: 38 }
];

// let resultado = items.reduce(
//     (prev, curr) => {
//         prev.points += curr.points;
//         return prev;
//     }
// ).points;

// print(resultado);

// print(items); 

// const resultado3 = items.reduce((prev, curr) => {
//     prev.points += curr.points;
//     print(prev);
//     return prev;
// }).points;

// print('resultado3: ', resultado3); 

// this helped: http://learnjsdata.com/iterate_data.html 

var summation = items.reduce(function(sum, d){
    return sum + d.points; 
}, 0); 

print(summation); 

print(items); 

// This is demonstration of how things should get done. 
// Not the way it get's done. 
// Very interesting. 

// Here's some more data. Let's practice with filter reduce and more: 

var data = [
    {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
    {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
    {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
    {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
  ]; 


  print(data.length); 

// instead of for each... we focus on immutability to encourage transformations. 

var dataObject = {"name": "Carl", "age": "34", "salary":'12300'};

// I guess this library lodash does this nicely using a clone method. 
// To use a library we have to install it with npm and require it in our project: (npm init -y | npm install -s lodash)

_ = require('lodash'); 

var copyOfData = _.clone(dataObject); 

print(copyOfData); 

copyOfData.age = +copyOfData.age; 
copyOfData.salary = +copyOfData.salary; 

print(copyOfData); 
print(dataObject); 

// damn.. so this clone is a shallow copy. 

var dataObject2 = {"name": "Saul", "stats": {"age":"55"}}; 

var shallowCopy = _.clone(dataObject2); 
shallowCopy.stats.age = +shallowCopy.stats.age; 

print(dataObject2); 

// see how its an int now! Not a string for age??

var dataObject3 = {"name": "Saul", "stats": {"age":"55"}}; 

var deepCopy = _.cloneDeep(dataObject3); 
print('dataOBject3: ', dataObject3, ' Deep copy: ', deepCopy); 
deepCopy.stats.age = 17; 

print(deepCopy); 
print(dataObject3); 

// see how its an string now! Not a string for age??

// That's fine... we use cloneDeep now. 


// Alright let's do a bit more mapping. 

var smallData = data.map(function(d, i){
    return {
        name: d.city.toUpperCase(),
        index: i + 1, 
        rounder_area: Math.round(d.land_area)
    };
});

print(data[0])
print(smallData); 

// the immutability of an array is just in the mind of the developer. While map does not modify the array, it is easy for your callback method to do so. 
// That's why we're going to 

var large_land = data.filter(function(d) { return d.land_area > 200}); // return each piece of the iterable where this value exists. 
print('large land: ', large_land); 

// How about some sorts? 

// Comparator function. 
// 

data.sort(function(a, b){
    return b.population - a.population; 
});

print('sorted: ', data); 

print([3,1,10,20].sort()); 

// hmm that sort is dumb... it defaults to alphabetically. SO... we should probably always use a comparator 

var landSum = data.reduce(function(sum, d){
    return sum + d.land_area; 
}, 0); 
print(landSum); 

// basically always provide a starting value. 

var weirdString = data.reduce(function(str, d, i){
    var ending = (i % 2 ==0) ? " is cool. " : " sucks."; 
    return str + " "  + d.city + ending; 
}, ""); 

print(weirdString); 

// You can add all these awesome things togethe for HUGE effect. 

var bigCities = data.filter(function(d) {return d.population > 500000})
    .sort(function(a, b) { return a.population - b.population; })
    .map(function(d) {return d.city; }); 

print(bigCities); 


// Good stuff let's talk about joining data. 
// hmm maybe not, this seems to be pretty d3 dependent. 

// let's keep working through iterators... moving towards functional programming and away from four loops. 


const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8]; 

const dubedNums = nums.map(n => n * 2); 
const evenNums = nums.filter(n => n %2 === 0);
const sum = nums.reduce((prev, next) => prev + next, 0);  

print ('dubed: ', dubedNums, ' evenNums: ', evenNums, ' sum: ', sum); 

const students = [
    { name: "Nick", grad: 10},
    { name: "John", grad: 12}, 
    { name: "Julia", grad: 19}, 
    { name: "Nathalie", grad: 9}
];

const aboveTenSum = students
    .map(student => student.grad)
    .filter(grad => grad >= 10)
    .reduce((prev, next) => prev + next, 0); 

print(aboveTenSum); 

print(nums); 

const doubleItUp = function(n) { return n * 2}; 
const doubledNumbs = nums.map(doubleItUp); 
print(doubledNumbs); 

const evenNumberss = nums.filter(function(n) { 
    return n % 2 ===0; 
}); 

print(evenNumberss); 

// Oh boy another blog post: https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464 

// This spread operator is dumb and sill like a lot of other things in JavaScript... but there it is describing how things should get done. Not what is getting done. 

const arr1 = ['a', 'b', 'c']; 
const arr2 = [...arr1, 'd', 'e', 'f']; 

print(arr2); // neat! 

// how would we do this otherwise? 

let arr3 = ['d', 'e', 'f'] + arr1; // welp that worked... not. 
print(arr3)
arr3 = ['d', 'e', 'f'] + arr1.values; // not that one either
print(arr3)

arr3 = ['d', 'e', 'f'].concat(arr1); 
print('arr3 concat: ', arr3); 

// let's look a couple more examples: 

function daFunc(x, y, ...params){
    console.log(x); 
    console.log(y);
    console.log(params);  
}

daFunc("a", "b", arr3); 

const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

const n = { x, y, ...z };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }

// oooh getting clever with the spread. 

function createStudent(firstName, lastName, ...grades){
    const avgGrade = grades.reduce((acc, curr) => acc + curr, 0) / grades.length; 

    return {
        firstName: firstName, 
        lastName: lastName, 
        grades: grades, 
        avgGrade: avgGrade 
    }
}

const stu = createStudent("stu", "wert", 12, 12, 12, 23, 23 ,23, 23, 32, 45, 354, 0); 
print(stu); 

// When assigning a variable to an object property. if the variable name is equal to the property name, you can do the following: 
const chex = 10; 
const mObj = { chex }; 
print(mObj.chex); 

// PROPERTY SHORTHAND BABY 

// What did I just learn what promises are in one sentence???

/// "A promise is an object which can be returned synchronously from an asynchronous function" sheeeeit 

// Promises are used to avoid callback hell, and they are more and more frequently encountered in modern JavaScript projects. 

// Lets jeck the jape

const https = require('https'); 

let breadLocation = "https://pngimg.com/uploads/bread/bread_PNG2322.png"

const fetchingPosts = new Promise((res, rej) => {
    https.get(breadLocation)
        .on('data', posts => res(posts))
        .end(err => rej(err)); 
}); 

fetchingPosts
    .then(posts => console.log(posts))
    .catch(err => console.log(err)); 

// hmm not so sure about this... let's try another example. https://scotch.io/tutorials/javascript-promises-for-dummies 

// Three states: pending, resolved, rejected 

let isMomHappy = true; 

var willGetNewPhone = new Promise(
    function (resolve, reject){
        if(isMomHappy){
            var phone = {
                brand: "NuAns",
                color: 'black'
            };
            resolve(phone); // fulfilled 
        } else {
            var reason = new Error('mom is not happy'); 
            reject(reason); 
        }
    }
); 

new Promise (/* executor */ function(resolve, reject) {null});

var askMom = function() {
    willGetNewPhone
        .then(function(fulfilled){
            console.log(fulfilled); 
        })
        .catch(function(error){
            console.log(error.message); 
        });
};

askMom(); 

// This promises stuff is important... Do not give up! 

var showOff = function(phone){
    return new Promise(
        function (resolve, reject){
            var message = "Hey I have a new " + phone.color + ' ' + phone.brand + ' phone'; 
            resolve(message); 
        }
    );
};

// we didn't call reject It's acutally optional. 

// hmm we can tighten this up a bit with a call to promise originally. 

var yaBigShowoff = function(phone){
    var message = "check this out: " + phone.color + " " + phone.brand; 

    return Promise.resolve(message); 
};

isMomHappy = true; 

var mommmm = function() { 
    willGetNewPhone
        .then(showOff)
        .then(function(fulfilled) {
            console.log(fulfilled); 
        }) 
        .catch(function (error) {
            console.log(error.message); 
        }); 
}; 

mommmm(); 

// Promises are Asynchronous 

var yaMa = function() {
    console.log('before asking mom'); 
    willGetNewPhone
    .then(showOff)
    .then(function (fulfilled){
        console.log(fulfilled); 
    })
    .catch(function(error){
        console.log(error.message); 
    });
    console.log('afterasking mom'); 
}

yaMa(); 

// screw promises they were soooo es6. ..

// welcome to the future... es7 

const isGMAHappy = true; 

const willIGetBrownie = new Promise(
    (resolve, reject) => {
        print(isGMAHappy); 
        if(isGMAHappy) {

            const brownie = {
                flavor: 'chocolate', 
                town: 'portland'
            };
            resolve(brownie); 
        } else { 
            const reason = new Error('Something is wrong with GMA'); 
            reject(reason); 
        }
    }
); 

async function stuffYoFace(brownie) { 
    return new Promise(
        (resolve, reject) => {
            var message = 'put whole f-ing ' + brownie.flavor + ' in your f-ing face'

            resolve(message); 
        }
    );
};

// call our promise
async function brownieTime(){
    try { 
        console.log('before stuffing face'); 

        let brownie = await willIGetBrownie; 
        let message = await stuffYoFace(brownie); 

        console.log(message); 
        console.log('after trying to stuff face'); 
    } catch(error){
        console.log(error.message); 
    }
}

(async () => {
    print('wait'); 
    await brownieTime(); 
})(); 