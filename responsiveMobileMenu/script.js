const links = document.querySelectorAll(".nav-list li a");

const x = window.matchMedia("(max-width: 600px)");

for(link of links) {
    link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
    hideMenu();
}

//RESPONSIVE MOBILE MENU
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");


const showMenu = () => {
    hamburger.style.display = "none";
    close.style.transform = "translateY(0)";
    menu.style.transform = "translateY(0)";
};

const hideMenu = () => {
    close.style.transform = "translateY(-20rem)";
    hamburger.style.display = "block";
    menu.style.transform = "translateY(-200%)";
}

console.log(window.outerWidth);


var onresize = (e) => {
   //note i need to pass the event as an argument to the function
    width = e.target.outerWidth;

    if (width > 600){
        showMenu();
    } else {
        hideMenu();
    }
}

window.addEventListener("resize", onresize);

hamburger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);

