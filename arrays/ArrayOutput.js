// let box = [];

// box[0] = true;
// box[1] = 'moew';
//
// box.push({'hello' : 'goodbuy'});
//
// let i = 0;
//
// console.log(box[i]);
// console.log(box.pop());
// console.log(box);

// box['size'] = 9;
// box['word'] = 'moew';
//box.push('whoo!');

// console.log('box[0] : ' + box[0]); // undefined

// for(var kye in box){
//     console.log(kye + ' ' + box[kye]);
//     console.log(box.kye);
// }

// for(let i = 0; i < box.length; i++){
//     console.log(i + ' ' + box[i]);
// }

// let noiseArray = ['purr', 'oink'];
// noiseArray.unshift('hiss');
// noiseArray.push('moew');
// console.log(noiseArray.length);
// console.log(noiseArray);
// noiseArray[3] = 'growl';
// console.log(noiseArray);

// let names = ['John', 'Jane', 'Mark'];
// let years = new Array(1990, 1969, 1948);
//
// console.log(names[2]);
// names[1] = 'Ben';
// console.log(names);
//
//
// let john = ['John', 'Smith', 1990, 'designer', false];
//
// john.push('blue');
// john.unshift('Mr.');
// john.pop();
// john.shift();
// console.log(john);
//
// if (john.indexOf('teacher') === -1) {
//     console.log('John is NOT a teacher.');
// }

window.onload = function () {

    let airlines = ['American', 'Southwest', 'United',
        'Virgin America', 'jetBlue', 'Alaskan', 'Blue', 'Air Canada'];

    // document.getElementById('result').innerHTML = airlines;

    airlines.push('Mesa');

    // document.getElementById('result').innerHTML = airlines;

    for(let i = 0; i < airlines.length; i++){
        document.getElementById('result').innerHTML += '<h2>' + airlines[i] + '</h2>';
    }
};














































