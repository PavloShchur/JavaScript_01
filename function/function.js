function sayHello() {
    document.write("Hello there")
}

function sum(x, y) {
    v = x + y;
    alert(v);
}

window.onload = function () {
    var x = 10;
    var y = 20;
    var v;
    sum(100, y);
};

function makeRequest(url, timeout, callback) {
    console.log(arguments.length);
    timeout = (typeof timeout !== "undefined") ? timeout : 3000;
    callback = (typeof callback !== "undefined") ? timeout : function () {
    };
}

makeRequest('/foo', 300, function () {
});


let speak = function (what) {
    // console.log(what);
    console.log(this.love);
};

let saySomething = {normal: "moew", love: "purr"};

speak.call(saySomething);

//console.log('speak : ' + speak('moof'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sum(a, b) {
    return a + b;
}
let arrowSum = (a, b) => a + b;
let arrowSum2 = (a, b) => {
    return a + b;
};
console.log('Arrow function ' + arrowSum(5, 75));

















