// Type script

class Student {
    fullName: string; 
    constructor (public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName; 
    }
}

interface Person {
    firstName: string; 
    lastName: string; 
}

function ggreeter(person : Person){
    return " Hello, " + person.firstName + " " + person.lastName; 
}

let chooser = { firstName: "Jane", lastName: "User"}; 
let student = new Student('tim ', 'm', 'fasdfreilly'); 

document.body.innerHTML = ggreeter(student); 

