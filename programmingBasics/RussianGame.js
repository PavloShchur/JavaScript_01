function startGame() {
    var n = 0;
    do {
        if ((Math.random() * 6) < 1) {
            alert("End");
            break;
        }
        n++;
    } while (prompt('Continue - 1, another - STOP') == '1')
    {
        alert("Rounds: " + n);
    }
}
startGame();