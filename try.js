function validateLogin(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Example: Check if username is "admin" and password is "1234"
    if (username !== "" && password !== "") {
        alert("Login successful!");
        window.location.href = "try.html"; // Redirect to main page on successful login
    } else {
        document.getElementById("error-msg").textContent = "Invalid username or password";
    }
}

