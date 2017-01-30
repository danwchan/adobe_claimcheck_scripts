/*This is a test script to see if Adobe will allow user inputs as pop-ups*/

var teststatus = window.confirm("testing this");
var testinput = window.prompt("make a variable!","default var");
window.alert(teststatus);
window.alert(testinput);

/*The answer is NO, the settings of the script must be set out in the inital code which can be made editable by checking the "Prompt User" button*/