/*This is a test script to see if Adobe will allow user inputs as pop-ups*/

var testvar = "this is my test var";

// Dialog Definition 
var oDlg = {

    input1: "",

    initialize: function(dialog) {
        var listofinput = {
             "inpt":this.input1
        }
        dialog.load(listofinput);
    },

    commit: function(dialog) {
        var data = dialog.store(); 
        this.strName = data[ "usnm"]; 
    },

    description: {
        name: "Test Dialog", elements: [ {
            type: "view", elements: [
                { name: "Enter your name:", type: "static_text", },
                { item_id: "usnm", type: "edit_text", char_width: 15 },
                { type: "ok_cancel", },
            ]
        },]
    }
};	

// Dialog Activation 
app.execDialog(oDlg);


console.clear();
console.show();

console.println(testvar);

console.print1n(data["inpt"]);

/*The answer is NO, the settings of the script must be set out in the inital code which can be made editable by checking the "Prompt User" button*/