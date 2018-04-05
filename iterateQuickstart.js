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