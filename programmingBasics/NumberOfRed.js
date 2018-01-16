function game() {
    var arr = [];
    var rounds = 100;
    var i = 0;
    var n = 0;
    var length = 0;
    var max_length = 0;
    var sum = 0;

    for (i = 0; i <= rounds; i++) {
        n = Math.round(Math.random() * 36);
        if (n != 0) {
            n = (n % 2) * 2 - 1;
        }
        arr.push(n);
    }
    alert('arr: ' + arr);

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            length = 0;
            while (i < arr.length && arr[i] == 1) {
                i++;
                length++;
            }
            if (length > max_length) {
                max_length = length;
            }
        }
    }
    alert('Number of red: ' + max_length);
}

game();