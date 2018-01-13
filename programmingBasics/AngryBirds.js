function shot() {
    var degree = prompt('A:');
    degree = parseInt(degree);
    if (((degree > 15) & (degree < 30)) || ((degree > 45) & (degree < 60))) {
        alert('Bingo!');
    } else {
        alert('NO!!!!!!!!');
    }
}
shot();