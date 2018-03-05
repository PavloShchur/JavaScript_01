function sayHello() {
    document.write("Hello there")
}

function sum(x, y) {
    v = x + y;
    alert(v);
}

window.onload = function () {
    var x = 10;
    var y = 20;
    var v;
    sum(100, y);
};

function makeRequest(url, timeout, callback) {
    console.log(arguments.length);
    timeout = (typeof timeout !== "undefined") ? timeout : 3000;
    callback = (typeof callback !== "undefined") ? timeout : function () {
    };
}

makeRequest('/foo', 300, function () {
});


let speak = function (what) {
    // console.log(what);
    console.log(this.love);
};

let saySomething = {normal: "moew", love: "purr"};

speak.call(saySomething);

//console.log('speak : ' + speak('moof'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sum(a, b) {
    return a + b;
}
let arrowSum = (a, b) => a + b;
let arrowSum2 = (a, b) => {
    return a + b;
};
console.log('Arrow function ' + arrowSum(5, 75));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function plus(a , b) {
    return (
        console.log('plus'),
        console.log(a + b),
        console.log(this),
        console.log(arguments)
    )
}

plus(2,2);

// using functions as methods
console.log('calc');

let calc = {
    status: 'Awesome',
    plus: function (a,b) {
        return (
            console.log(this),
            console.log(a+b),
            console.log(arguments),
            console.log(this.status)
        )
    }
};

calc.plus(2,2);

// invoking instances through the constructor
console.log('dir');
let Dog = function() {
    let name, breed;
    return console.dir(this);
};

firstDog = new Dog;
firstDog.name = "Rover";
firstDog.breed = "Doberman";

secondDog = new Dog;
secondDog.name = "Fluffy";
secondDog.breed = "Poodle";


















