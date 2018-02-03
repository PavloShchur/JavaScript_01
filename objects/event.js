window.onload = function () {
    document.getElementById('box').addEventListener('click', clickBox, false);
    document.getElementById('box').addEventListener('mousedown', mouseDownBox, false);
    document.getElementById('box').addEventListener('mouseover', mouseOverBox, false);
};

function clickBox(event) {
    document.getElementById('result').innerHTML = "<h1>Clicked</h1>";
    if(event.ctrlKey === true){
        document.getElementById('box').style.display = 'none';
    }
}

function mouseDownBox() {
    document.getElementById('result').innerHTML = "<h1>Mouse Down</h1>";
}

function mouseOverBox() {
    document.getElementById('result').innerHTML = "<h1>Mouse Over</h1>";
}
