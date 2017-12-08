/**
 * Created by User on 21.06.2017.
 */
var grade = 'A';
document.write("Entering switch block<br />");
switch (grade) {
    case 'A':
        document.write("Good job<br />");
    case 'B':
        document.write("Pretty job<br />");
    case 'C':
        document.write("Passed<br />");
    case 'D':
        document.write("Not so good<br />");
    case 'F':
        document.write("Failed<br />");
    default:
        document.write("Unknown grade<br />")
}

document.write("Exiting switch block");