// let age = 15;
// if (age > 18) {
//     document.write("<br>Qualifies for driving</br>")
// } else {
//     document.write("<br>Does not qualify for driving</br>")
// }

// let name = 'John';
// let age = 26;
// let isMarried = 'yes';
//
// if (isMarried === 'yes') {
//     console.log(name + ' is married!');
// } else {
//     console.log(name + ' will hopefully marry soon :)');
// }
//
// isMarried = true;
//
// if (isMarried) {
//     console.log('YES!');
// } else {
//     console.log('NO!');
// }
//
// if (isMarried) {
//     console.log('YES!');
// }
//
// if (23 === "23") {
//     console.log('Something to print...');
// }
//
// var age = 20;
//
// if (age < 20) {
//     console.log('John is a teenager');
// } else if (age >= 20 && age < 30) {
//     console.log('John is a young man.');
// } else {
//     console.log('John is a man.');
// }

// let job = 'teacher';
//
// job = prompt('What does john do?');
//
// switch (job) {
//     case 'teacher':
//         console.log('John teaches kids.');
//         break;
//     case 'driver':
//         console.log('John drives a cab in Lisbon.');
//         break;
//     case 'cop':
//         console.log('John helps fight crime.');
//         break;
//     default:
//         console.log('John does something else.');
// }

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
*/

// SOLUTION:
let heightJohn = 170;
let heightMike = 195;
let ageJohn = 36;
let ageMike = 29;

let scoreJohn = heightJohn + 5 * ageJohn;
let scoreMike = heightMike + 5 * ageMike;


if (scoreJohn > scoreMike) {
    console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn) {
    console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreJohn === scoreMike) {
    console.log('There is a draw.');
}

let heightMary = 158;
let ageMary = 31;
let scoreMary = heightMary + 5 * ageMary;


if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary wins the game with ' + scoreMary + ' points!');
} else {
    console.log('It\'s a draw.');
}

let players = [
    {name : 'John', score : scoreJohn},
    {name : 'Mike', score : scoreMike},
    {name : 'Mary', score : scoreMary},
];

players.sort = function(a,b) {
    return a[1].score > b[1].score ? 1 : a[1].score <b[1].score? -1 : 0;
};

for(let i = 0; i < players.length; i++){
    console.log(players[i]);
}



















