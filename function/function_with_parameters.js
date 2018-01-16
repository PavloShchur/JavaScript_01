function sayHello(name, age) {
    document.write(name + " is " + age + " years old.")
}


function plus(a, b) {
    return (
        console.log(a + b),
            console.log(this),
            console.log(arguments)
    )
}

plus(2, 2);

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