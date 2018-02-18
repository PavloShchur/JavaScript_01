// let name = 'Jane';
// let title = 'Software Engineer';
// let hourlyWage = 10;

// ES6

// const name = 'Jane';
// let title = 'Software Engineer';
// let hourlyWage = 40;
// some time later...

// title = 'Senior Software Engineer';
// hourlyWage = 45;

////////////////////////////////////////////////////////////////////////////////////////////////////////

let name = 'John';
let age = 26;

//console.log(name + age);
//console.log(age + age);

let job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');


//let lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

/************************
 var vs let             *
 block level scope      *
                        *
 ************************/

// if (5 > 3) {
//     var globalVisibility = 5;
// }
//
// console.log('globalVisibility : ' + globalVisibility); // 5
//
//
// if (5 > 3) {
//     let noneGlobalVisibility = 5;
// }
//
// console.log('globalVisibility : ' + noneGlobalVisibility); // Uncaught ReferenceError: noneGlobalVisibility is not defined

// function test() {
//     var x = 10;
// }
// test();
//
// console.log('x : ' + x); // Uncaught ReferenceError: x is not defined

for(let i = 0; i < 1; i++){
    var v = 5;
    let l = 5;
    const c = 5;
}

console.log(`v : ${v}`); // 5
// console.log(`l : ${l}`); // Uncaught ReferenceError: l is not defined
// console.log(`c : ${c}`); // Uncaught ReferenceError: c is not defined

/************************
                        *
 const scope visibility *
                        *
 ************************/

if (5 > 3) {
    const constNoneGlobalVisibility = 5;
}

console.log('globalVisibility : ' + constnoneGlobalVisibility); // Uncaught ReferenceError: constNoneGlobalVisibility is not defined









