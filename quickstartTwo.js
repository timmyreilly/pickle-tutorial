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

peeps.push({'name': 'tim'})

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


