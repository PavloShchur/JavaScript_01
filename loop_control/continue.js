/**
 * Created by User on 21.06.2017.
 */

var x = 1;
document.write("Entering the loop <br />");
while(x < 10){
    x += 1;
    if(x == 5) {
        continue;
    }
    document.write(x + "<br />")
}
document.write("Entering the loop!<br />");