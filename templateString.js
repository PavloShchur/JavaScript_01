let name = 'John';
let age = 30;
let job = 'Web Developer';
let city = 'Miami';

let html;

// without template strings ( ES5 )
html = '<ul><li>Name : ' + name + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City: ' + city + '</li>' +
    '</ul>';

let hello = () => 'Hello World!';

// with template strings ( ES6 )
html = `
    <ul>
    <li>Name : ${name}</li>
    <li>Age : ${age}</li>
    <li>Job : ${job}</li>
    <li>City : ${city}</li>
    <li>${ 2 + 2 }</li>
    <li>${ hello() }</li>
    <li>${ age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

document.body.innerHTML = html;





















