function calculateProfit() {
    var deposit = parseInt(prompt('Deposit: '));
    var percent = parseInt(prompt('Percent: '));
    var years = parseInt(prompt('Years: '));

    for(var i = 1; i <= years; i++){
        deposit += deposit * percent / 100;
    }
    alert('Profit: ' + deposit + ' for years: ' + years);
}

calculateProfit();