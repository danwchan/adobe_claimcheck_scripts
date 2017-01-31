/*This is a test script to see if Adobe will allow user inputs as pop-ups*/

var testvar = "this is my test var";

//a function to be called on the inputs from inside the dialog
function catter(numberOne, numberTwo) {
    return (numberOne) + (numberTwo);
}

// Dialog Definition 
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

/*commit isnt required because I have the ok: defined
//specify the way the varibles are assigned values, store the input
    commit: function(dialog) {
        var data = dialog.store(); 
        this.input0 = data[ "var0"];
        this.input1 = data[ "var1"];
    },
*/

//the OK button action
    ok: function(dialog) {
        var data = dialog.store(); 
        this.input0 = data[ "var0"];
        this.input1 = data[ "var1"];
        console.println("Input recorded");
        console.println(catter(data["var0"], data["var1"]));
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
app.execDialog(oDlg);
console.println(data);

/*The answer is YES but the inputs are local variables inside the dialog so fucntions must be defined outside and called inside the dialog*/