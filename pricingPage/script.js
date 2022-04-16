const checkBox = document.querySelector("#checkbox"),
    slider = document.querySelector(".slider"),
    basic = document.querySelector(".basic"),
    prof = document.querySelector(".prof"),
    master = document.querySelector(".master");

slider.addEventListener("click", () => {
    if(!checkBox.checked) {
        [basic.textContent, prof.textContent, master.textContent] = 
        ["119.99", "239.99", "359.99"];
    } else {
        [basic.textContent, prof.textContent, master.textContent] = 
        ["9.99", "19.99", "29.99"];
    }
});