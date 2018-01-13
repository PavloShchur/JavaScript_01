function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

alert(getRandomInt(0, 100));
alert(getRandomInt(-100, 0));