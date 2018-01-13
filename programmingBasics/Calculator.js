function saveName() {
    var enterNumber = prompt("Enter some number: ");
    alert("Power of the entering number: " + Math.pow(enterNumber, 2));
}
saveName();

function myFunction() {
    var y = document.getElementById("txt1").value;
    var z = document.getElementById("txt2").value;
    if (y == '') y = 0;
    if (z == '') z = 0;
    var x = parseInt(y) + parseInt(z);
    document.getElementById("demo").innerHTML = x;
}
