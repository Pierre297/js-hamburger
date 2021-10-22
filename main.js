// click hamburger menu
const button = document.querySelector(".fa-bars");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const buttonClose = document.querySelector(".fa-times");

button.addEventListener("click",

function(){

    document.querySelector(".hamburger-menu").style.display = "unset";

    var element = document.querySelector(".hamburger-menu");
    element.classList.remove("active");
}


);

buttonClose.addEventListener("click",

function(){

    document.querySelector(".hamburger-menu").style.display = "none";

        
}


);






