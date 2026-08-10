document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let firstName = document.querySelector('input[name="fname"]').value.trim();
        let lastName = document.querySelector('input[name="lname"]').value.trim();
        let roll = document.querySelector('input[name="roll"]').value.trim();
        let email = document.querySelector('input[name="email"]').value.trim();
        let password = document.querySelector('input[name="password"]').value.trim();
        let phone = document.querySelector('input[name="phone"]').value.trim();
        let dob = document.querySelector('input[name="dob"]').value;

        let gender = document.querySelector('input[name="gender"]:checked');

        let course = document.querySelector("select").value;

        let address = document.querySelector("textarea").value.trim();

        
        if (
            firstName === "" ||
            lastName === "" ||
            roll === "" ||
            email === "" ||
            password === "" ||
            phone === "" ||
            dob === "" ||
            !gender ||
            course === "Select Course" ||
            address === ""
        ) {
            alert("Please fill all the required fields.");
            return;
        }

      
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

       
        if (!/^[0-9]{10}$/.test(phone)) {
            alert("Phone number must contain exactly 10 digits.");
            return;
        }

      
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        alert("Student Registration Successful!");

        form.reset();
    });

});