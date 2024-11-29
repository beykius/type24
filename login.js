const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

const error = document.querySelector(".error");

button.onclick = (event) => {
    event.preventDefault();

    const myUser = {
        email: inputs[0].value,
        password: inputs[1].value
    };

    if (!myUser.email || !myUser.password) {
        error.innerHTML = "Both email and password are required.";
        error.style.color = "red";
        error.style.display = "block";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(user => user.name === myUser.email && user.passwordOne === myUser.password);

    if (!existingUser) {
        error.innerHTML = "Invalid email or password.";
        error.style.color = "red";
        error.style.display = "block";
        return;
    }


    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("user", JSON.stringify(existingUser));
    window.location.href = 'index.html';
    console.log("User logged in:", myUser);
};