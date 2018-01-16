function getCard() {
    var cards = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    return cards[getRandomInt(0, cards.length - 1)];
}

function getSum(arr) {
    var i = 0;
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        var card = arr[i];
        if (card != 'A') {
            if (card == 'J' || card == 'Q' || card == 'K') {
                sum += 10;
            } else {
                sum += parseInt(card);
            }
        }
    }

    for (i = 0; i < arr.length; i++) {
        var card = arr[i];
        if (card == "A") {
            if (sum > 10) {
                sum += 1;
            } else {
                sum += 10;
            }
        }
    }
    return sum;
}

var dealer = [getCard()];
var player = [getCard(), getCard()];

function getStatus() {
    return 'Dealer: ' + dealer.join(' ') + ' Player: ' + player.join(' ');
}

var answer = '';

if (getSum(player) == 21) {
    alert('BlackJack!!!!');
} else {
    do {
        answer = prompt('Dealer: ' + dealer.join(' ') + ' Player: ' + player.join(' ') + ' One more card - 1');
        if (answer = '1') {
            player.push([getCard()]);
            console.log(getStatus());
            sum = getSum(player);
            if (sum > 21) {
                alert("End of the the game: " + getStatus() + ' ' + getSum(player));
                break;
            } else if (sum == 21) {
                alert("BlackJack: " + getStatus());
                break;
            }
        } else {
            while (getSum(dealer) < 17) {
                dealer.push(getCard());
            }

            var sumDealer = getSum(dealer);
            var sumPlayer = getSum(player);

            if (sumDealer == 21) {
                alert('Dealer has BlackJack');
            } else if (sumDealer > 21) {
                alert('Dealer has too many cards: ' + getStatus());
            } else if (sumDealer == sumPlayer) {
                alert('Equal');
            } else if (sumPlayer > sumDealer) {
                alert('You won! ' + getStatus());
            } else {
                alert('Lost: ' + getStatus());
            }
        }
    } while (answer == '1')
    {
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}