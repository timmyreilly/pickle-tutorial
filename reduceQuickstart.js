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