function sayHello() {
    alert("Hello Wrld")
}

function gerValue(condition) {
    const person = {name : 'Pavlo'};
    if (condition == true) {
        person.name = 'Shchur Pavlo';
        console.log(person);
        return 'TRUE';
    } else {
        return 'FALSE';
    }
}

console.log(gerValue(true));










