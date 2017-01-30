/*This is a test script to see if Adobe will allow user inputs as pop-ups*/

var testvar = "this is my test var";
var testinput = window.prompt("make a variable!","default var");
console.clear();
console.show();
console.printIn(testinput + testvar);

/*The answer is NO, the settings of the script must be set out in the inital code which can be made editable by checking the "Prompt User" button*/