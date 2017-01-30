/*This is a test script to see if Adobe will allow user inputs as pop-ups*/

var testvar = "this is my test var";

var dialog1 = {

    initialize: function (dialog) {
        var input = dialog.store()["inputtext"];
        input = "the input";
        dialog.load({ "inputtext": input});
    },
    commit: function (dialog) {
        var results = dialog.store();
        console.println("The inputed text was: " + results["input"])
    },
    description:
     {
        name: "The INPUT Box",
        align_children: "align_left",
        width: 350,
        height: 200,
        elements:
        [
             {
             type: "cluster",
             name: "The place you put input",
             align_children: "align left",
             elements:
             [
                 {
                 type: "static_text",
                 name: "Input: "
                 },
                 {
                 item_id: "input",
                 type: "edit_text",
                 alignment: "align_fill",
                 width: 300,
                 height: 20
                 }
             ]
             },
             {
             type: "static_text",
             name: "some other text you wanted in this cluster"
             },
         ]
     }
};

app.execDialog(dialog1);
console.clear();
console.show();
console.println(testvar);

/*The answer is NO, the settings of the script must be set out in the inital code which can be made editable by checking the "Prompt User" button*/