/* this is for "pulling over" annotations from one file to another with major similarities 
user inputs can be manually entered into the var fields

USER INPUTS:*/

/* END USER INPUT SECTION*/

//a function to move annotations from one pdf for another if they are the same size
function bulkmove(currentdoc, newdoc, addedPages, removedPages) {
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
                { name: "Destination for the annotations:", type: "static_text", },
                { item_id: "var0", type: "edit_text", char_width: 15 },
                { name: "Removed pages:", type: "static_text", },
                { item_id: "var1", type: "edit_text", char_width: 15 },
                { type: "ok", ok_name: "submit"},
                { item_id: "var1", type: "edit_text", char_width: 15 },
                { type: "ok", ok_name: "submit"},
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
app.execDialog(oDlg);