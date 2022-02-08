const name = document.getElementById("name");

name.addEventListener("input", function(event) {
    if (name.validity.patternMismatch) {
        name.setCustomValidity("Please enter a valid name");
    } else {
        name.setCustomValidity("");
    }
});



const ssc = document.getElementById("ssc");

ssc.addEventListener("input", function(event) {


    if (ssc.validity.patternMismatch) {
        ssc.setCustomValidity("Please enter a valid percentage");
    } else {
        ssc.setCustomValidity("");
    }
});

const hsc = document.getElementById("hsc");

hsc.addEventListener("input", function(event) {
    if (hsc.validity.patternMismatch) {
        hsc.setCustomValidity("Please enter a valid percentage");
    } else {
        hsc.setCustomValidity("");
    }
});

const email = document.getElementById("mail");

email.addEventListener("input", function(event) {
    if (email.validity.patternMismatch) {
        email.setCustomValidity("Please enter a valid email");
    } else {
        email.setCustomValidity("");
    }
});



const phn = document.getElementById("phn");

phn.addEventListener("input", function(event) {
    if (phn.validity.patternMismatch) {
        phn.setCustomValidity("Please enter a valid phone number");
    } else {
        phn.setCustomValidity("");
    }
});