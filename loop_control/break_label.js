/**
 * Created by User on 21.06.2017.
 */

document.write('Entering the loop!<br />');
outerloop:
for(var i = 0; i < 5; i++){
    document.write("Outerloop: " + i + "<br />");
    innerloop:
    for(var j = 0; j < 5; j++){
        if(j > 3) break;
        if(i == 2) break innerloop;
        if(i == 4) break outerloop;
        document.write("Inner loop: " + j + " <br />");
    }
    document.write("Exiting the loop!<br />");
}
