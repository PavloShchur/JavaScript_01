function startRiddle() {
var  score = 0;
    if (prompt('Сижу верхом, не ведаю на ком') == 'шапка') {
        score++;
        alert('Верно!');
    } else {
        alert('Не верно!');
    }
    if (prompt('Зимой и летом одним цветом') == 'елка') {
        score++;
        alert('Верно!');
    } else {
        alert('Не верно!');
    }
    if (prompt('Кто ево раздевает, тот слози проливает') == 'лук') {
        score++;
        alert('Верно!');
    } else {
        alert('Не верно!');
    }
    alert('Конец! Верних ответов: ' + score);
}

startRiddle();