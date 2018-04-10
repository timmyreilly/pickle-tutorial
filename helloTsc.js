// Type script
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function ggreeter(person) {
    return " Hello, " + person.firstName + " " + person.lastName;
}
var chooser = { firstName: "Jane", lastName: "User" };
var student = new Student('tim ', 'm', 'fasdfreilly');
document.body.innerHTML = ggreeter(student);
