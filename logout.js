// IF NOT LOGGED IN
if (!sessionStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
}

// HELLO MESSAGE
const helloMessage = document.querySelector('.helloMessage')
const storedUser = sessionStorage.getItem("user");
if (storedUser) {
    const user = JSON.parse(storedUser);
    helloMessage.innerHTML = `👋 Hello, ${user.name}`;
}

// LOGOUT BUTTON
const logoutButton = document.querySelector(".logout");
const logOutContainer = document.querySelector(".logOutContainer");
const toolbar = document.querySelector(".toolbarMenu");
const gridPhotosElement = document.querySelector(".gridPhotos");
const grid = document.querySelector(".grid");

logoutButton.addEventListener("click", () => {
    sessionStorage.removeItem("loggedIn");
    helloMessage.textContent = "Bye, hope to see you again!";
    logOutContainer.style.display = "block";
    logoutButton.remove()
    logOutContainer.innerHTML = `Logged out succesfully`;
    toolbar.innerHTML = ` <p class="toolbarMenuList"><a href="login.html">Login <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -1160 960 960" width="15px" fill="#FFFFFF"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></a></p>`;
    if (gridPhotosElement) {
        gridPhotosElement.style.display = "none";
    }
    if (grid) {
        grid.style.display = 'none';
    }


function redirectPage(){
        window.location = "login.html";
}

    setTimeout(function() {redirectPage()}, 1500);

});
