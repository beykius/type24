const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

const error = document.querySelector(".error");

button.onclick = (event) => {
    event.preventDefault();

    const myUser = {
        name: inputs[0].value,
        passwordOne: inputs[1].value,
        passwordTwo: inputs[2].value,
        imageSrc: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
    };

    if (!myUser.name || !myUser.passwordOne || !myUser.passwordTwo) {
        error.innerHTML = "All fields are required.";
        error.style.display = "block";
        return;
    }

    if (myUser.passwordOne !== myUser.passwordTwo) {
        error.innerHTML = "Passwords do not match.";
        error.style.display = "block";
        return;
    }

    if (myUser.passwordOne.length < 4 || myUser.passwordOne.length > 20) {
        error.innerHTML = "Password has to be longer than 4 characters and shorter than 20 characters.";
        error.style.display = "block";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(user => user.name === myUser.name);
    if (existingUser) {
        error.innerHTML = "This email is already registered.";
        error.style.display = "block";
        return;
    }

    users.push(myUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("profileImage", myUser.imageSrc);
    localStorage.setItem("passwords", myUser.passwordOne);

    error.style.color = "green";
    error.innerHTML = `Registration successful. Please <a href="login.html">login</a> to your account.`;
    error.style.display = "block";

    function redirectPage(){
        window.location = "login.html";
    }

    setTimeout(function() {redirectPage()}, 1500);

};
