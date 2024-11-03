$(document).ready(function() {
    console.log("Document is ready");

    if ($("#testProp").length) {
        console.log("#testProp found, adding class");
        $("#testProp").addClass("scriptClass");
    } else {
        console.log("#testProp not found at document ready");
    }
});
