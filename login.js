function validateForm() {
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var errorMessage = document.getElementById("error-message");

    if (email == "" || password == "") {
        errorMessage.style.display = "block";
        return false;
    } else {
        errorMessage.style.display = "none";
        return true;
    }
}