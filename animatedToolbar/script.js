const searchIcon = document.querySelector(".fa-search"),
    closeIcon = document.querySelector(".fa-times"),
    searchEl = document.querySelector(".search"),
    searchIn = document.querySelector(".search input");

searchIcon.addEventListener("click", () => {
    searchIcon.style.transform = "translateY(200%)";
    closeIcon.style.transform = "translateY(0%)";
    showSearchEl();
});

closeIcon.addEventListener("click", () => {
    searchIcon.style.transform = "translateY(0%)";
    closeIcon.style.transform = "translateY(-200%)";
    hideSearchEl();
});

function showSearchEl() {
    searchEl.style.transform = "translateX(0)";
    setTimeout(() => {
        searchEl.style.width = "30rem";
    }, 1000);
    setTimeout(() => {
        searchIn.setAttribute("placeholder", "Search...");
    }, 2000);
}

function hideSearchEl() {
    searchIn.removeAttribute("placeholder", "");
    setTimeout(() => {
        searchEl.style.width = "4.5rem";
    }, 1000);
    setTimeout(() => {
        searchEl.style.transform = "translateX(200%)";
    }, 2000);
}