function sayHello() {
    alert("Hello Wrld")
}

var myObject = {name: "Pavlo", surname: "Shchur", phone: "12345"};
console.log(myObject.name);
console.log(myObject['surname']);

function myFunction(a) {
    a++;
    console.log('a = ' + a);
}

for (i = 0; i < 3; i++) {
    myFunction(i);
}

var tempVariable;
for (tempVariable in myObject) {
    console.log('tempVariable = ' + tempVariable + ' ' + myObject[tempVariable]);
}

var f = 0;

while (f < 3) {
    console.log('f = ' + f);
    f++;
}

var msg = "Hello World";
console.log(msg.startsWith('Hello'));
console.log(msg.startsWith('l', 2));
console.log(msg.endsWith('World'));
console.log(msg.includes('World'));

console.log('x'.repeat(3))

















