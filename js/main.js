const menu = document.querySelector(".menu-icon");
const mainMenu = document.querySelector(".main-menu");
const category = document.querySelector(".category");

menu.addEventListener("click", displayMenu);

function displayMenu() {
    mainMenu.classList.toggle("show-menu");
    if (mainMenu.classList.contains("show-menu")) {
        menu.style.display = "none";
    }   else {
        menu.style.display = "block";
    }
}

mainMenu.addEventListener("click", displayJoystick );

function displayJoystick() {
    menu.style.display = "block";
    mainMenu.classList.toggle("show-menu");
}
