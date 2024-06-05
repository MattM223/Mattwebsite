document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("request-a-consultation-form");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const zipCodeInput = document.getElementById("zipCode");
    form.addEventListener("submit", function (event) {
    // Initialize an array to store error messages
    const errors = [];
    // Validation for phone #)
    const phonefmt = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phonefmt.test(phoneInput.value)) {
        errors.push("Please enter a valid phone number.")
    }
    // Validation for email (must be a valid email format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
    errors.push("Please enter a valid email address.");
    }
    // Validation for zip code all number and minimum length)
    const zipNum = /^[0-9]+$/;
    if (!zipNum.test(zipCodeInput.value.length < 5)) {
    errors.push("Please enter a valid zip code.");
    }
    // If there are errors, prevent form submission and display them
    if (errors.length > 0) {
    event.preventDefault(); // Prevent form submission
    alert(errors.join("\n")); // Display error messages in an alert
    }
    });
    })
