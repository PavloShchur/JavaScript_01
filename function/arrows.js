let add = (x, y) => x + y;
let square = x => x * x;
let three = () => 3;

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(n => sum += n);

let doubled = numbers.map(n => n * 2);

console.log(doubled);