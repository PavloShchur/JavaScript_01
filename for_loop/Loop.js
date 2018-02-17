window.onload = function () {
// for loop
//     for (let y = 0; y < 400; y += 20) {
//         if(y === 200) continue;
//         if(y === 300) break;
//         console.log(y);
//     }
// while loop

    // let x = 10;
    //
    // while(x > 0){
    //     document.getElementById('result').innerHTML += '<h2>' + x + '</h2>';
    //     x--;
    // }
    //
    // let input = '';
    //
    // while(input !== 'AAA'){
    //     alert('continue');
    //     input = prompt('Enter your value.');
    // }

// do while

    // let z = 0;
    //
    // do {
    //     console.log(`Number ${z}`);
    //     z++;
    // } while ( z < 10 ) {
    //     console.log(`Number ${z}`);
    // }

// loop over array

    const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
    // for (let i = 0; i < cars.length; i++) {
    //     console.log(cars[i]);
    // }
    // cars.forEach(function (car, index, array) {
    //     console.log(`${index} : ${car}`);
    //     console.log(array);
    // });

    const users = [
        {id : 1, name : 'John'},
        {id : 2, name : 'Sara'},
        {id : 3, name : 'Karen'},
        {id : 4, name : 'Bob'},
    ];

    const  ids = users.map(function (user) {
        return user.id;
    });

    console.log(ids);

    // var aProperty;
    // document.write("Navigator Object Properties<br />");
    // for(aProperty in navigator){
    //     document.write(aProperty);
    //     document.write("<br />")
    // }
    // document.write("Exiting from loop!");

    const user = {
        firstName : 'John',
        lastName : 'Doe',
        age : 25,
    };

    for(let x in user) {
        console.log(`${x} : ${user[x]}`);
    }

};




















