function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function handleSubmit(event) {
    event.preventDefault();
    var email = document.querySelector('input[name="email"]').value;
    var errorMessage = document.getElementById("error-message");
    var message = document.getElementById("message");

    if (email === "" || !validateEmail(email)) {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Please enter a valid email address.";
    } else {
        errorMessage.style.display = "none";
        message.style.display = "block";
        message.innerText = "A password reset link has been sent to your email.";
    }
}