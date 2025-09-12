//welcomeMessage();

function welcomeMessage() {
    let username = prompt("Please enter your name:");
    if (username){
        document.getElementById('welcome-user').innerText = username;
    }
}

function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === "" || email === "" || message ==="") {
        alert("All fields must be filled out");
    }else {
        alert("Form submitted successfully!");

        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
    }
}