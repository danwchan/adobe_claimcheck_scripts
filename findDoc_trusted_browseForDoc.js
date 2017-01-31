//make app.browseForDoc a trusted execution
findDoc = app.trustedFunction(
    function() {
        app.browseForDoc()
    }
);