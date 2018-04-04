/*Welcome to computer programming in JavaScript. Let's learn some stuff and work on moving towards Ethereum
dapp development. 
Before we get started let's warm up to JavaScript. 

let's run this program in the terminal... 

*/

let x = 5

print = console.log;
print(x)

// lolz now we can do it just like python... 

try {
    let x = 'heck yeah';
    print(x)
} catch (err) {
    console.log(err)
    // hmm what's wrong is there 
}

print(x)
x = 8;
print(x)
// Wait so we can declare two xs?
// maybe there are two xs...
// let's try something else 

try {
    x = 'heck yeah again';
    print(x);
} catch (err) {
    print(err);
}

print(x)

// Oh... so now x is actually 'heck yeah again' 
// that's kinda cool. 


let me;

try {
    me = APerson();
    me.addLeg;
} catch (err) {
    print(err);
}

print('me is currently undefined: ', me);

// Let's make a person. 

APerson = new Object(
    function constructor() {
        this.name = "bob";
    }

);

// And try that again... 

try {
    me = new APerson();
    me.addLeg;
    print(me);
    print(me.name);
    // but what about add leg? 
} catch (err) {
    print(err);
}

me.addLeg = function () { me.legs = 1 };

// hmmm me.legs is undefined... 
print(me.legs);

me.addLeg = new function () {
    me.legs = 1
    print(me.name, ' and ', me.legs);
    // ahh so this me had legs... how do we get that leg to stick around? 
}

print("Wait, what's this", me.legs);

print(me.addLeg)

APerson.addLeg = new function () {
    this.legs = APerson.legs;
    this.legs += 1;
}

me.addLeg;
me.addLeg;

print(me.legs);

// hmm that didn't work... what if we added another person. 

let you = new APerson();

you.addLeg;
you.addLeg;
print(you.legs);

print(APerson.addLeg);

// hmm not making a lot of progress on this leg thing... let's try again. 

ANewPerson = new Object(
    function constructor() {
        this.legs = 0,
            this.addLeg = function () {
                this.legs += 1;
            }
    }
)

let u = new ANewPerson();

print(u.legs);
u.addLeg;
print(u.legs);

// hmm still no new legs... i think this has to do with the constructor structure let's try it again... 

AThirdPerson = new Object(
    legs = 0,
    addLeg = function () {
        this.legs + 1;
    }
)

// alright two methods. one a constructor that initializes the value of our leg and the second that adds a leg let's use the Third person! 

thirdPerson = AThirdPerson;

print(thirdPerson.legs);
thirdPerson.addLeg;
print(thirdPerson.legs);

// hmm now we have undefined legs... 

AFourthPerson = {
    legs: 2
}

print(AFourthPerson.legs);

AFourthPerson.addLeg = function () {
    print("A Forthperson: ", AFourthPerson);
    this.legs += 1;
}

print(AFourthPerson.legs);

AFourthPerson.addLeg();

print(AFourthPerson.legs);

AFourthPerson.addLeg();

print(AFourthPerson.legs);

// hey hey, there we go.. we have a person with four legs! 

// let's try taking away some legs... growing legs is easy. Taking them away takes some time... in fact you have to calculate a large number to do it! 

AFourthPerson.removeLeg = function () {
    for (let i = 0; i < 15; i++) {
        print(Math.pow(i, 12));
    }
    print('done');
    this.legs -= 1;
}

AFourthPerson.removeLeg();
print(AFourthPerson.legs);

AFourthPerson.removeLegSmartly = function (shouldWe) {
    if (shouldWe) {
        this.legs -= 1;
    } else {
        null;
    }
}

AFourthPerson.removeLegSmartly(true);
print(AFourthPerson.legs);

AFourthPerson.removeLegSmartly(false);
print(AFourthPerson.legs);

// hmmm so we can tell the function what to do to the object. 

AFourthPerson.goesOutside = function (callback) {
    print("we made it outside");
    callback();
    print("Too late.. we out here");
}

AFourthPerson.goesOutside(function () { console.log("WHAT") });

// Alright while you're outside I want you to get some bread. 
// This bread is on the web and to talk to the web ya gatta speak http. 

const https = require("https");

let breadLocation = "https://pngimg.com/uploads/bread/bread_PNG2322.png"

AFourthPerson.goesAndGetsBread = function (callback) {
    result = https.get(breadLocation);
    print(result);
    callback();
}

AFourthPerson.goesAndGetsBread(function () { null });

// Did we get the bread?
// We got something... what is result? 
// let's try something with our callback... maybe we can use it to extract more info. Like as if when we got the 
// bread our friend yelled to us about what was there.

AFourthPerson.goesAndGetsBread(
    function () {
        print("what's the path: ", result.path);
        print("and this: ", result.body)
    }
);

// it's like our callback knows what's going to happen... 
// it knows to look for the result object once it's inside the context of acquiring bread. Then it says hey here's the path! 

// Let's use this callback to put our bread in a special place.

AFourthPerson.getsAndStoresTheBread = function (callback) {
    result = https.get(breadLocation, (res) => {
        res.on(
            'data', (d) => {
                if (Math.floor(Math.random() * 20) >= 18) {
                    console.log(d);
                }
            }
        )
    });
    callback();
}

AFourthPerson.getsAndStoresTheBread((res) => {
    print("res.. ", res);
})

// hmmm, that's sort of weird our 'res.. ' get's called before our data prints... but that doesn't look right... let's try that again and try to be a bit
// more specific about where our bread get's stored. 


AFourthPerson.getAndStoresTheBreadTwo = function (callback) {
    https.get(breadLocation, (res) => callback(res));
}

AFourthPerson.getAndStoresTheBreadTwo((res) => {
    print('now we out here'); 
    res.on(
        'data', (d) => {
            if (Math.floor(Math.random() * 20) >= 18) {
                console.log('yep', d);
            }
        }
    )
}
)

// what you can see that some of the buffers are prefixed with yep, but they come through asynchronously... that's sort of amazing. 
/* 
// I think a lot of the new Syntactic sugar and neat things you can do with JavaScript can be exciting and make it seem like you're doing incredible things
But I'm just struggling with the basics of asynchrounous programming and how you effectively use callbacks. It seems like a cool idea, but I don't always know 
if I have the depth of understanding to fully understand a complex javascript system. 
*/ 

// what if we just call https.get... 

let breadPhoto = null; 

https.get(breadLocation, (res) => {
    res.on('data', (d) => {
        breadPhoto += d; 
        // okay this really screws it up... print ('we on the inside? ', breadPhoto)
    })
})

print("bread photo... nopde : ", breadPhoto); 

// hmmm breadPhoto is null... 
// Looks like we need some sort of callback to get the response back to us. 

let breadPhotoTwo; 

breadPhotoTwo = AFourthPerson.getAndStoresTheBreadTwo((res) => {
    res.on(
        'data', (d) => {
            breadPhoto += d; 
        }
    )
    res.on('end', () => {
        breadPhotoTwo = breadPhoto; 
        print("bread photo two: ", breadPhotoTwo.slice(0,50)); 
    })

})

// so in this case we get the value in breadPhotoTwo and its cool I guess, but still feels a little klunky. 
// how can we be sure we've some data an a more elegant method. 

// let's try promises. 

// actually screw promises let's figure out this whole functional thing a little bit more. 
// I'm going to pass an object into a method let it add the result of the call to bread and get the result on the other side. 

AFifthPerson = {
    legs : 0
}

// if person has two legs then they should come back with bread. 

AFifthPerson.addLeg = function(){
    this.legs += 1; 
}

AFifthPerson.addLeg(); 

print('How many legs: ', AFifthPerson.legs); 

AFifthPerson.getBread = function(){
    this.hasBread = true; 
}

function getBread() {
    this.hasBread = true; 
    setTimeout(() => {
        this.hasBread = !this.hasBread; 
        console.log(this.hasBread)
    }, 0)
}

getBread(); 

// alright we're slowing down... let's get back to scope. 

// variables have different scope. variables can exist in a function scope. 

// let's start small. 

