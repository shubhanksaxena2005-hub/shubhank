// test.js

window.onload = function () {
    console.log("Student Registration Form Test Started");

    // Check if the form exists
    const form = document.getElementById("registrationForm");

    if (form) {
        console.log("✔ Registration form found.");
    } else {
        console.log("✘ Registration form not found.");
    }

    // Required fields
    const fields = [
        "name",
        "email",
        "phone",
        "course",
        "gender"
    ];

    fields.forEach(function (field) {
        if (document.getElementById(field)) {
            console.log("✔ " + field + " field found.");
        } else {
            console.log("✘ " + field + " field missing.");
        }
    });

    console.log("Testing Completed.");
};