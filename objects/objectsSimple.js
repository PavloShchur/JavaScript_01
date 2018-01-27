// let box = {};
//
// box.material = "cardboard";
//
// let writeToVariable = box.material;
//
// box.material = "newValue";
//
// box["material"] = "secondValue";
// let func = function () {
//     return "material";
// };
//
// box["size"] = {height : 20, width : 50};
//
// // area is a method
// box.area = function () {
//     return box.size.height * box.size.width;
// }
//
// for(var key in box){
//     // no gerentee order
//     // console.log(key);
//     // console.log(box[key]);
// }
//
// let animal = [];
//
// animal.username = 'Mittens';
//
// animal['tagline'] = 'Pet me!';
//
// let noises = [];
// animal.noises = noises;
//
// let count = 0;
// for(let key in animal){
//     count++;
//     if(key === 'username'){
//         console.log('Hi my name is ' + animal[key]);
//     } else if(key === 'tagline'){
//         console.log('I like to say ' + animal[key]);
//     }
// }
//
// console.log(animal);

// let john = {
//     name: 'John',
//     lastName: 'Smith',
//     yearOfBirth: 1990,
//     job: 'teacher',
//     isMarried: false
// };
//
// console.log(john.lastName);
// console.log(john['lastName']);
//
// let xyz = 'job';
// console.log(john[xyz]);
//
// john.lastName = 'Miller';
// john['job'] = 'programmer';
//
// console.log(john);
//
//
// let jane = new Object();
// jane.name = 'Jane';
// jane.lastName = 'Smith';
// jane['yearOfBirth'] = 1969;
// jane['job'] = 'retired';
// jane['isMarried'] = true;
//
// console.log(jane);

let john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2016 - this.yearOfBirth;
    }
};

//console.log(john.calculateAge(1970));
console.log(john.calculateAge());

let age = john.calculateAge();
john.age = age;

console.log(john);



//v2.0
let john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);


let mike = {
    yearOfBirth: 1950,
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);
























