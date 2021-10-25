const openMenu = document.querySelector(".header-right > a");
const hamMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close");

// apertura menù
openMenu.addEventListener('click',

function(){
    hamMenu.classList.add("active");

}

);

// chiusura menù

closeMenu.addEventListener('click',

function(){
    hamMenu.classList.remove("active");

}

);



 










