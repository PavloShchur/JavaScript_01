const defaultName = 'John';
const defaultAge = 35;

function sayHello(name = defaultName, age = defaultAge) {
    document.write(`${name} is ${age} years old.`)
}

let greet = () => sayHello(document.getElementById('name').value, document.getElementById('age').value);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var calc = {
    status: 'Awesome',
    plus: function (a, b) {
        return (
            console.log(this),
                console.log(a + b),
                console.log(arguments),
                console.log(this.status)
        )
    }
}

calc.plus(2, 2);

var Dog = function () {
    var name, breed;
    return console.dir(this);
}

firstDog = new Dog;
firstDog.name = "Rover";
firstDog.breed = "Doberman";

secondDog = new Dog;
secondDog.name = "Fluffy";
secondDog.breed = "Poodle"

//prototype
var speak = function (saywhat) {
    console.log(saywhat);
}

var Dog = function () {
    var name, breed;
}

var Cat = function () {
    var name, breed;
}

Dog.prototype.speak = speak;
Cat.prototype.speak = speak;

firstDog = new Dog;
firstDog.name = "Rover";
firstDog.breed = "Doberman";
firstDog.speak('woof');

firstCat = new Cat;
firstCat.name = "Sniggles";
firstCat.breed = "Manx";
firstCat.speak('meow');

function calculateAge(yearOfBirth) {
    let age = 2016 - yearOfBirth;
    return age;
}

let ageJohn = calculateAge(1990);
let ageMike = calculateAge(1969);
let ageMary = calculateAge(1948);


function yearsUntilRetirement(name, year) {
    let age = calculateAge(year);
    let retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired. ' + Math.abs(retirement));
    }
}


yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);

// immediately invokable function expressions IIFE
(function (name) {
    console.log(`Hello ${name}`);
})('Bred');

const todo = {
    add : function () {
        console.log('Add todo ...');
    },
    edit : function (id = 'as47gb4') {
        console.log(`Edit todo ${id}`);
    }
};

todo.delete = function () {
    console.log('Delete todo ...');
}

todo.add();
todo.edit('fg');
todo.delete('fg');






















