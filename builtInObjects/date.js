window.onload = function () {
    let date = new Date();
    // document.getElementById('result').innerHTML = date;
    let dateOfBirth = new Date('January 27, 1993 11:00:00');
    // document.getElementById('result').innerHTML = dateOfBirth;
    let epoch = new Date(0);
    // document.getElementById('result').innerHTML = epoch;
    let date2 = new Date();
    document.getElementById('result').innerHTML = date2.toUTCString();


};