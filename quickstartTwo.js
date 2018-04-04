// alright we're slowing down... let's get back to scope. 

// variables have different scope. variables can exist in a function scope. 

// let's start small. 

const print = console.log;

let bob = 'bob';

print(bob);

function printBob() {
    print('bob is...', bob);
}

printBob();
// oooh bob is still there. 

function assignSteve() {
    let steve = 'steve holt';
}

assignSteve();

try {
    print(steve);
}
catch (err) {
    print(err);
}


function assignBob() {
    bob = "robert";
    print(bob);
}

assignBob();
print(bob);

// welp we ended up with robert. 
// that's cool. so we can talk to bob from within our function. But if we create steve in a function he doesn't come out. 

// Okay now hoisting! hoisting not foisting. 

try {
    print(pump);
} catch (err) {
    print(err);
} finally {
    print('This throws an error');
}

try {
    print(dirtPump);
} catch (err) {
    print(err);
} finally {
    print('no error but still not defined.')
}

let pump = 'water pump';

var dirtPump = 'dirt pump';

print('how about meow: ', pump, ' & ', dirtPump);

// Cool. that's neat I can declare a var anywhere and not run into an error. What if I do it inside a function context. 

function pumps() {
    print('Are you there: ', oilPump);
    var oilPump = "INSTAGRAM";
}

try {
    print(oilPump);

} catch (err) {
    print('hmm no pump here');
}

pumps();

try {
    print(oilPump);

} catch (err) {
    print('hmm STILL no pump here');
}

// hmm I'm sitting here wondering how many javascript undefine's of code I've written has stemmed from this hoisting... good reason to use const and let... just to confirm does const have the same 
// behavior as let...

try {
    print(steel);
} catch (err) {
    print("no steel ding dongd");
}

const steel = 'a good material for building pumps'

print('we got steel now: ', steel);

// Okay assignment of these guys get's complicated as well.. 

let d = 'the value d';
const c = 'the calue c';

print(d)
print(c);

try {
    d = 'a new d';
    c = 'a new c';
} catch (err) {
    print('nice try');
}

print('should be a new d: ', d);
print('should still be the calue c: ', c);

// also interesting that the assignment still happens even with the catch clause. 

// I keep hearing that const variables are not immutable... what the heck. 
// if I can't change it why isn't it immutable???

// I think what they mean is it can't be reassigned, but you can change it. 
// if this is just a single value like a string or integer or fload it will stay that way.
// But what if you create an object as a constant 

const person = {
    'name': 'Anderson .Paak',
    'age': 88
}

print(person['name']);
print(person.name);

person.name = 'Mr. Anderson';

print(person.name);

try {
    person = {
        name: 'Mr. Blue',
        'age': 8,
        type: 'subhuman'
    }
} catch (err) {
    print('nice try...', typeof (err));
}

// didn't like that 
// okay that's alright I can still add things to person...

person.type = 'subhuman';
person['class'] = 'hunter';

print(person);

// also notice these different ways of assigning properties on objects. Kinda neat! 
// people say be consistent, but I say have fun with it. Follow your heart. Don't fart if you don't feel comfortable rolling down the window. 

// object's are good... What if we want a whole bunch of people. 

const peeps = [];

peeps.push(person);

try {
    peeps = person = { 'name': 'steve' };
} catch (err) {
    print(Object.keys(err));
    print(err);
}

// still trying to figure out this err object... 
// either way. we've got an array with a person in it. 

peeps.push({ 'name': 'tim' })

print('There should be two peeps: ', peeps);

// Coooool, such unstructured, but still in the same object. 

peeps.push(5);

print(peeps);

// lolzzz you can just push a five onto the array. That wouldn't fly in C++ . 

// Okay arrow functions. What's up. 

function addEight() {
    return x + 8
}

var x = 2;

addEight();

print(x);

function addEight(value) {
    return value + 8;
}

x = addEight(x);

print(x);
print(addEight(x));
print(x);

// hmm only assigned when assigned with the return this seems important...
// this is called passing by value. We don't actually give the function our x, we just give it the value of x. If we want it to change our value we need to reassign with the new valuable. 

const addNine = x => x + 9;
addNine(x);
print(x);
print(addNine(x));
print(x);

// similar story to above but a new way to define functions... it looks like we pass the value right through and we have an explicit return which is 'this' object that's passed in. 
// let's try that again just to be sure. 

const subtractOne = i => i - 1;

let iii = 101

iii = subtractOne(iii);

print(iii);
print(subtractOne(iii));
print(iii);

// cool so it does return the result of i-1 ... interesante 

// something about arrow functions takes care of that = this...

function myIIIer() {
    print('iii?: ', iii);
    print('this.iii?: ', this.iii);
    this.iii = 5;
    print('iii?: ', iii);
    print('this.iii?: ', this.iii);
    setTimeout(() => {
        this.iii++;
        iii += 100;
        print('inside arrow this.iii: ', this.iii);
        print('inside arrow iii: ', iii);
    }, 0);
}

myIIIer();

print("wait what's iii: ", iii)

// hmm this demonstrate's an important principal of JavaScript. We can assign iii inside of our method to two hundred but keep moving through our print statements without it. 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    console.log('taking a break');
    await sleep(2000);
    console.log('Two seconds later')
    print(iii);
}

demo();

// ooooh damn. That iii eventually becomes 200. In this case it's like we passed by reference. As in we're talking directly to iii inside of ou myIIIer function, but we need to wait for those result to
// complete before we use that value or we could get 100 or 200 depending on how quickly that function completes. 

// just to be sure...

print('wow', iii); // this is still run before demo completes... damn. 

// This is part of how computer's break people's brain's
// This also highlights for me a general sense of computers doing amazing things. Like getting things done in the background while continuing to solve the problem. 
// Humans aren't very good at this. 

// Okay explicit return vs. implicit return...

// Explicit give me the value... RETURN it to me. 

function quadruple(x) {
    return 4 * x;
}

// Now because this function has no other code before the return statement we can make this an implicit call. 
// Of course you can, because what else would it do... 

const quadrupleFy = (x) => {
    return 4 * x;
}

print('quadrupleFy: ', quadrupleFy(4));

const quadruplFyTwo = (x) => 4 * x;

print('quadrupleFytwo: ', quadruplFyTwo(5));

// Okay I guess that's cool. We can do implicit return. Probably even to set a value; 

let discoBiscuit = 8;
discoBiscuit = quadruplFyTwo(discoBiscuit);
print("disco biscuit: ", discoBiscuit)

// so that's kind of like passing by reference. 
// we pass in the value and implicitly accept the return value. 

// 'this' seems important and confusing. 

function aFunkyJazzFunkCafe() {
    this.myVar = 0;
    var that = this;
    setTimeout(
        function () {
            // A new this is created in this function scope... 
            that.myVar++;
            console.log('that.myvar, ', that.myVar);

            console.log('this.myvar, ', this.myVar);
        },
        0
    );
}

// hmm this is also the second time we've seen setTimeout... what does it do. 

aFunkyJazzFunkCafe();

print('from way downtown: ', myVar);

function aFunckyArrowFunkCafe() {
    this.myVar = 110;
    print('what are you: ', this.myVar);
    setTimeout(
        () => {
            this.myVar++
            console.log('wait what is this.myVar: ', this.myVar);
        },
        0
    )
}

aFunckyArrowFunkCafe();

print('from beyond the arc: ', myVar);

// Welp this is part of the confusion can start. 


// Let's take a closer look at the setTimeout thing. 

let b = setTimeout(() => {
    return 'x';
}, 1);

// print('b: ', b)

// hmmm so that just gives us the whole setTimeout object. 
// hmm not sure what that did. Let's try something else. 

function timeItOut() {
    setTimeout(function hndlr() {
        print('what');
    }, 1000)
}

timeItOut();

// let's try that again and see if we can get an accurate read of iii using setTimeout. 

setTimeout(function hndlr() {
    print('what is iii meow, ', iii);
}, 1000)

// cool so we can do all sorts of weird stuff with that. 

// It seems like these folks are using setTimeout to guarentee completion of the previous statements. 

setTimeout(() => { print('wazzup') }, 1000);
setTimeout(() => { print('wazzup') }, 2000);
setTimeout(() => { print('wazzup') }, 3000);

// Or you can just delay the function inside the setTimeout method. Okay that's a little simpler for me to understand. 

// Hey why not default values. 

setTimeout((x = 40) => { print(x) }, x);


function heyThere(x = 1000) {
    setTimeout(() => { print('waiting for: ', x, 'ms') }, x);
}

heyThere()
heyThere(4000);

// hmm there also saying something about null. 

heyThere(null);
heyThere(undefined);

// so null is a value you can pass and will not pick up the default parameter. but undefined will. 

const secondPerson = {
    firstName: 'marshall',
    lastName: 'mathers',
    age: 32,
    sex: 'MALE'
}

// without destructuring 

const first = secondPerson.firstName;
print(first);
print(secondPerson.city || 'paris');

// with desctructuring

const { firstName: firstest, age: rage, city = "Paris", lastName } = secondPerson;

print(firstest, lastName, rage, city);
try {
    print(firstName);
} catch (err) {
    print(err);
}

// interesant 
// kinda neat you can destructure the object into new variables. You basically can snatch the values out in a structure way. 

// Destructuring with Arrays

const myArray = ['a', 'b', 'c']

const AAA = myArray[0];
const BBB = myArray[1];

const [aa, bb] = myArray;
print(aa, bb);

// FUNCTIONAL PROGRAMMING might be the scariest thing I've ever tried to learn. Well its a close tie with Spanish. Spanish is hard. 
// let's say we want to send a function to ourselves. 
// is that what its like: https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0 

/* 
The application state flows through pure functions. 
Functional programming is a paradigm. There are a lot of scary words but don't let them scare you away. 
Pure Functions
Function Composition
Avoid Shared State
Avoid Mutating State
Avoid Side Effects

A Pure function: 
- Given the same inputs always returns the same out put and has no side-effects. 
referential transparency. in that the value returned could be replaced with the function call to the same result. 

A Function Composition: 
Is the process of combining two or more function in order to produce a new function or perform some computation. 
f(g(x)) f is composed with g... 

A Shared State:
Can lead to race conditions. And different results if things happen in different orders. This isn't great for the web. 

*/

const xa = {
    val: 2
}

const x1 = () => xa.val += 1;
const x2 = () => xa.val *= 2;

x1();
x2();

print(xa.val);

// This example is exactly equivalent to the above, except..

const y = {
    val: 2
};

const y1 = () => y.val += 1;
const y2 = () => y.val *= 2;

y2();
y1();

// ... the order of the function calls is reversed... 

print(y.val);
// which changes the resulting value... 

/* 
Sooo... when you avoid shared state, the timing and order of function calls don't change the result of calling the function. With pure functions, given the same input you'll always get 
the same output. 

A change in one function, or the timing of a function call won't ripple out and break other parts of the program. 
*/

const xb = {
    val: 2
};

const xb1 = x => Object.assign({}, x, { val: x.val + 1 });

const xb2 = x => Object.assign({}, x, { val: x.val * 2 });


console.log('v: ', xb1(xb).val);
console.log('v: ', xb2(xb).val);
console.log('val: ', xb1(xb2(xb)).val);
console.log('vvv', xb1(xb2(xb)).val);

const yb = {
    val: 2
}

print(xb2(yb).val);
print(xb1(yb));

print('yar: ', xb1(xb2(yb)).val);

// okay so because we never assign the object. we just compose it into a new object. That's kinda neat. Its just the result of some new assignment. 
// if we wanna keep it pure the state that comes out of that could be part of the UI but never saved. 

// still need some more practice. 

// Remove function call timing dependency and you eliminate an entire class of potential bugs... Wowow That sounds nice. 


/*
A side effect: 
Modifying any external variable or object property (eg. a global variable or a variable in the prent function scope chain)
Logging to the console
Writing to the screen
Writing to a file
writing to the network
triggering any external process
calling any other functions with side effects
... So I've been doing this wrong for a while. 

We just need to keep side effects isolated from the rest of our software. 


First class functions - which allows us to treat functions as data - assign them to variables, pass them to other functions return them from functions etc. 

A Higher order function is any function which takes a function as an argument, returns a function, or both. 

Abstract or isolate actions, effects, or async flow control using callback functions, promises, etc. 
Create utilities which can act on a wide variety of data types
Partially apply a function to its arguments or create a curried function for the purpose of reuse of function composition 
Take a list of functions and return some composition of those input functions. 

What the flip is a functor. 





*/
const double = n => n * 2;

const doubleMap = numbers => numbers.map(double);
print(doubleMap([2, 3, 5]));

// in this case our array is a functor - as in it can be mapped over. 'mappable'

const doublePoints = n => n.points * 2;

const doubleMapPoints = chumbers => chumbers.map(doublePoints);

print(
    doubleMapPoints([
        { name: 'ball', points: 2 },
        { name: 'coin', points: 4 },
        { name: 'bobs', points: 19 }
    ]
    )
);

// goodness okay. So that's kinda cool. 

// A list expressed over time is a stream. 
// program logic is expressed without explicitly describing the flow control. Ahh this is scary. 

// IMperative programs spend lines of code describing the specific steps used to acheive desired results - the flow control: how to do things. 

// Declarative programs abstract the flow control process, and instead spend lines of code describing the data flow: What to do. The how gets abstracted away. 

// For example this imperative mapping takes and array of numbers and returns a new array. With each number multplied by 2: 

const doubleMaper = numbers => {
    const doubled = [];
    for (let i = 0; i < numbers.length; i++) {
        doubled.push(numbers[i] * 2);
    }
    return doubled;
};
// this is how we double the values in the array. 

console.log(doubleMaper([2, 3, 4]));


// But how does the data flow... it comes in and gets doubled and goes out. 

const doubleMapster = numbers => numbers.map(n => n * 2);
print(doubleMapster([2, 3, 4, 40]));

// imperative code frequently utilizes statements. A statement is code which performs some action. for, if, switch, throw. 
// declarative code relies on expressions. Expressions evaluate to some value. 

2 * 2 // is an express
// so is: 
doubleMap([2, 3, 5]);
Math.max(4, 3, 2);

/* He gave us homework */

// Use map to transform the following array of values into an array of item names: 
// vvv Don't change vvv 
const items = [
    { name: 'ball', points: 2 },
    { name: 'coin', points: 3 },
    { name: 'candy', points: 4 }
];
// ^^^ Don't change ^^^

const result = items.map(
    /* ==vvv Replace this code vvv== */
    (n) => { return n.name }
    /* ==^^^ Replace this code ^^^== */
);

const resultingValue = items.map( n => n.name); 

print(result, ' ', resultingValue); 

// filter where are the points are greater than or equal to four. 

const theLowerNumbers = items.filter( n=> n.points >= 3); 

print(theLowerNumbers)

