/* this is for "pulling over" annotations from one file to another with major similarities 
user inputs can be manually entered into the var fields

USER INPUTS:*/

/* END USER INPUT SECTION*/

var newdoc = 

/* this is in the Javascript folder of my adobe installation 
C:\Program Files (x86)\Adobe\Acrobat 10.0\Acrobat\Javascripts*/

//make app.browseForDoc a trusted execution
findDoc = app.trustedFunction(
    function() {
        app.browseForDoc()
    }
);

//a function to move annotations from one pdf for another if they are the same size
function bulkmove(numberOne, numberTwo) {
    return (numberOne) + (numberTwo);
}

//a function to move annotations from one pdf for another if 
function big2small(numberOne, numberTwo) {
    return (numberOne) + (numberTwo);
}

//a function to move annotations from one pdf for another if
function small2big(numberOne, numberTwo) {
    return (numberOne) + (numberTwo);
}

//Dialog for
var chooseNew = { 

//the look
    description: { name: "Hey, look!", elements: [
    	{ name: "Please choose the file you want to import the annotations into (the destination)", type: "static_text"},
    	{ type: "ok", },
    ] } 
}; 

// Main user input dialog definition 
var oDlg = {

//set the variables
    input0: "",
    input1: "",
    
//initialize the dialog by loading the variables
    initialize: function(dialog) {
        var listofinput = {
             "var0":this.input0,
             "var1":this.input1
        }
        dialog.load(listofinput);
    },

//the OK button action
    ok: function(dialog) {
        var data = dialog.store(); 
        this.input0 = data[ "var0"];
        this.input1 = data[ "var1"];
        console.println("Input recorded");
        console.println((data["var0"] + data["var1"]));
    },

//how the box should look and which areas corresspond to which inputs
    description: {
        name: "Test Dialog", elements: [ {
            type: "view", elements: [
                { name: "Input:", type: "static_text", },
                { item_id: "var0", type: "edit_text", char_width: 15 },
                { name: "Input2:", type: "static_text", },
                { item_id: "var1", type: "edit_text", char_width: 15 },
                { type: "ok", ok_name: "submit"},
            ]
        },]
    }
};	

// Dialog Activation 
console.clear();
console.show();
app.execDialog(chooseNew);
var destination = app.trustedFunction(findDoc());
app.execDialog(oDlg);