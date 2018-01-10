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

makeRequest('/foo', 300, function () {});