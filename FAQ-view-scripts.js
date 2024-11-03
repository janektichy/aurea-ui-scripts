setTimeout(function() {
    if ($("#testProp").length) {
        $("#testProp").addClass("scriptClass");
    } else {
        console.log("#testProp element not found");
    }
}, 2000); // 2-second delay
