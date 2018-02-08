let counterMouseOver = 0;
let counterMouseLeave = 0;

function count_mouseOver() {
    counterMouseOver++;
}

function display_mouseOver() {
    alert('You put mose over ' + counterMouseOver + ' ' + counterMouseLeave);
}

function alertDisplay() {
    counterMouseLeave++;
}