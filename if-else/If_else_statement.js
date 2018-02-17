let age = 15;
if (age > 18) {
    document.write("<br>Qualifies for driving</br>")
} else {
    document.write("<br>Does not qualify for driving</br>")
}

let name = 'John';
let isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = true;

if (isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}

if (isMarried) {
    console.log('YES!');
}

if (23 === "23") {
    console.log('Something to print...');
}

if (age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man.');
} else {
    console.log('John is a man.');
}

let job = 'teacher';
let output;

job = prompt('What does john do?');

switch (job) {
    case 'teacher':
        output = 'John teaches kids.';
        break;
    case 'driver':
        output = 'John drives a cab in Lisbon.';
        break;
    case 'cop':
        output = 'John helps fight crime.';
        break;
    default:
        output = 'John does something else.';
        break;
}

console.log(output);

