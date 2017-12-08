/**
 * Created by User on 21.06.2017.
 */

var aProperty;
document.write("Navigator Object Properties<br />");
for(aProperty in navigator){
    document.write(aProperty);
    document.write("<br />")
}
document.write("Exiting from loop!")