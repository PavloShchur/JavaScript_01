// function sayHello(name, age) {
//     document.write(name + " is " + age + " years old.")
// }
//
// function plus(a, b) {
//     return (
//         console.log(a + b),
//             console.log(this),
//             console.log(arguments)
//     )
// }
//
// plus(2, 2);
//
// var calc = {
//     status: 'Awesome',
//     plus: function (a, b) {
//         return (
//             console.log(this),
//                 console.log(a + b),
//                 console.log(arguments),
//                 console.log(this.status)
//         )
//     }
// }
//
// calc.plus(2, 2);
//
// var Dog = function () {
//     var name, breed;
//     return console.dir(this);
// }
//
// firstDog = new Dog;
// firstDog.name = "Rover";
// firstDog.breed = "Doberman";
//
// secondDog = new Dog;
// secondDog.name = "Fluffy";
// secondDog.breed = "Poodle"
//
// //prototype
// var speak = function (saywhat) {
//     console.log(saywhat);
// }
//
// var Dog = function () {
//     var name, breed;
// }
//
// var Cat = function () {
//     var name, breed;
// }
//
// Dog.prototype.speak = speak;
// Cat.prototype.speak = speak;
//
// firstDog = new Dog;
// firstDog.name = "Rover";
// firstDog.breed = "Doberman";
// firstDog.speak('woof');
//
// firstCat = new Cat;
// firstCat.name = "Sniggles";
// firstCat.breed = "Manx";
// firstCat.speak('meow');

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


let nameImprover = function (name, adj) {
    return 'Col' + name + ' Mc' + adj + ' pants';
};

function nameStaySame(name) {
    return name;
}

$('body').hide();

myArr.forEach(function (val) {
    console.log(val);
});

$('button').on('click', function () {
    console.log('Don\'t press my buttons!');
});






















