
// start login event to go in cart page
function validateAndSubmit(event) {
    event.preventDefault();

    var isValidated = true;

    document.getElementById("usernameSpn").innerHTML = "";
    document.getElementById("passwordSpn").innerHTML = "";


    const username = document.getElementById("username").value;
    console.log(username);
    if (username.length < 3) {
        document.getElementById("usernameSpn").innerHTML = "Username must be min 3 chars";
        isValidated = false;
    }

    const password = document.getElementById("password").value;
    console.log(password);
    if (password.length < 6) {
        document.getElementById("passwordSpn").innerHTML = "Password must be min 6 chars";
        isValidated = false;
    }

    console.log(isValidated);

    if (isValidated == false) {
        return;
    }

    var PageUrl = "cart.html";
    var closelog = "login.html"
    window.open(PageUrl);
    window.close(closelog)
}


document.addEventListener('DOMContentLoaded', (event) => {
    const loginButton = document.getElementById("loginBtn")
    if (loginButton) {
        loginButton.addEventListener("click", validateAndSubmit);
    }
})
//end login 