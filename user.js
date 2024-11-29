const photoUser = document.querySelector('.photoUser');
const inputsAll = document.querySelectorAll('input');
const buttonsAll = document.querySelectorAll('button');
const email = document.querySelector('.email');
const error = document.querySelector('.error');


const storedImage = localStorage.getItem("profileImage");
photoUser.innerHTML = `<img src="${storedImage}" alt="Profile Picture">`;


const loggedInUser = sessionStorage.getItem("user");
if (loggedInUser) {
    const emailId = JSON.parse(loggedInUser);
    if (email) {
        email.innerHTML = `Email: <i>${emailId.name}</i>`;
    }
}


function changePicture() {

    const newImageSrc = inputsAll[0].value;
    if (newImageSrc) {
        photoUser.innerHTML = `<img src="${newImageSrc}" alt="Profile Picture">`;
        localStorage.setItem("profileImage", newImageSrc);
    }
}

function changePassword() {
    const newPassword = inputsAll[1].value;

    if (newPassword.length >= 4 && newPassword.length <= 20) {
        const storedUser = sessionStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            user.passwordOne = newPassword;
            sessionStorage.setItem("user", JSON.stringify(user));


            const users = JSON.parse(localStorage.getItem("users")) || [];
            const index = users.findIndex(u => u.name === user.name);
            users[index].passwordOne = newPassword;
            localStorage.setItem("users", JSON.stringify(users));
            error.style.display = "block";
            error.innerHTML = `Password changed successfully.`;
            error.style.color = "green";
            function redirectPage(){
                window.location = "login.html";
            }

            setTimeout(function() {redirectPage()}, 1500);
        }
    } else {
        error.style.display = "block";
        inputsAll[1].value = ''
        error.innerHTML = `Password must be longer than 4 characters and shorter than 20.`;
    }
}


buttonsAll[1].onclick = () => {
    changePassword();
};

buttonsAll[0].onclick = () => {
    changePicture();
}