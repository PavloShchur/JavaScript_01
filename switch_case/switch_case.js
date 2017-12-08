/**
 * Created by User on 21.06.2017.
 */

var grade = 'A';
document.write("Entering switch block<br />");
switch (grade) {
    case 'A':
        document.write("Good job<br />");
        break;
    case 'B':
        document.write("Pretty job<br />");
        break;
    case 'C':
        document.write("Passed<br />");
        break;
    case 'D':
        document.write("Not so good<br />");
        break;
    case 'F':
        document.write("Failed<br />");
        break;
    default: document.write("Unknown grade<br />")
}

document.write("Exiting switch block");