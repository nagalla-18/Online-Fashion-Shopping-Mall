function validateForm() {
    var firstName = document.querySelector('input[name="firstname"]').value;
    var lastName = document.querySelector('input[name="lastname"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var confirmPassword = document.querySelector('input[name="confirm-password"]').value;
    var errorMessage = document.getElementById("error-message");

    if (firstName == "" || lastName == "" || email == "" || password == "" || confirmPassword == "") {
        errorMessage.style.display = "block";
        errorMessage.innerText = "All fields are required.";
        return false;
    } else if (password !== confirmPassword) {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Passwords do not match.";
        return false;
    } else {
        errorMessage.style.display = "none";
        return true;
    }
}

function checkPasswordStrength() {
    var password = document.querySelector('input[name="password"]').value;
    var strengthBar = document.getElementById("strength-bar");

    var strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.match(/[a-z]+/)) strength += 1;
    if (password.match(/[A-Z]+/)) strength += 1;
    if (password.match(/[0-9]+/)) strength += 1;
    if (password.match(/[\W]+/)) strength += 1;

    if (strength == 1) {
        strengthBar.className = "strength-bar weak";
    } else if (strength == 2 || strength == 3) {
        strengthBar.className = "strength-bar medium";
    } else if (strength == 4 || strength == 5) {
        strengthBar.className = "strength-bar strong";
    } else {
        strengthBar.className = "strength-bar";
    }
}

function checkPasswordMatch() {
    var password = document.querySelector('input[name="password"]').value;
    var confirmPassword = document.querySelector('input[name="confirm-password"]').value;
    var matchMessage = document.getElementById("password-match");

    if (password !== "" && confirmPassword !== "") {
        if (password === confirmPassword) {
            matchMessage.className = "password-match success";
            matchMessage.innerText = "Passwords match.";
        } else {
            matchMessage.className = "password-match error";
            matchMessage.innerText = "Passwords do not match.";
        }
    } else {
        matchMessage.className = "password-match";
        matchMessage.innerText = "";
    }
}