Number.isFinite(); //Determine whether the passed value is a finite number.

// Finite simply means bounded. It is the opposite of infinite.
// For every finite number, positive or negative, there is always a number smaller than and larger than that.
// You always deal with finite numbers and not infinite, because infinite is something you cant reach.
// For example, 3, pi, and -2.865343494 are finite.
function div(x) {
    if (Number.isFinite(1000 / x)) {
        return 'Number is NOT Infinity.';
    }
    return 'Number is Infinity!';
}

console.log(div(0));
// expected output: "Number is Infinity!"

console.log(div(1));
// expected output: "Number is NOT Infinity."


Number.isSafeInteger(); // Determine whether the passed value is a safe integer (number between -(2^53 - 1) and 2^53 - 1).

function warn(x) {
    if (Number.isSafeInteger(x)) {
        return 'Precision safe.';
    }
    return 'Precision may be lost!';
}

console.log(warn(Math.pow(2, 53)));
// expected output: "Precision may be lost!"

console.log(warn(Math.pow(2, 53) - 1));
// expected output: "Precision safe."

