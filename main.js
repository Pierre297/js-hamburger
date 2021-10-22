// click hamburger menu
const button = document.querySelector(".fa-bars");
var hamburgerMenu = document.querySelector(".hamburger-menu");
const buttonClose = document.querySelector(".fa-times");

// rimozione active
// document.querySelector(".hamburger-menu").classList.add("active");

// bottone apertura
button.addEventListener("click",

function(){

    document.querySelector(".hamburger-menu").style.display = "unset";
}
);

// bottone chiusura
buttonClose.addEventListener("click",

function(){

    document.querySelector(".hamburger-menu").style.display = "none";
    
}
);











