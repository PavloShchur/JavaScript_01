/**
 * Created by User on 21.06.2017.
 */

var x = 1;
document.write("Entering the loop" + "<br />");
while (x < 20){
    if(x == 5){
        break;
    }
    x += 1;
    document.write(x + "<br />")
}
document.write("Exiting the loop" + "<br />")