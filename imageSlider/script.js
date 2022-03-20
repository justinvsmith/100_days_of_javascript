const slides = document.querySelectorAll(".slide"),
    next = document.querySelector(".next"),
    prev = document.querySelector(".prev"),
    autoScroll = true;

let slideInterval;
let intervalTime = 5000;

// Next Button
const nextSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add("current");
    } else {
        slides[0].classList.add("current");
    }
    current.classList.remove("current");
};

// Prev Button
const prevSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add("current");
    } else {
        slides[slides.length - 1].classList.add("current");
    }
    current.classList.remove("current");
};

// Add EventListeners
next.addEventListener("click", () => {
    nextSlide();
    if(autoScroll) {
    clearInterval(slideInterval);
    auto();
    }
});

prev.addEventListener("click", () => {
    prevSlide();
    if(autoScroll) {
    clearInterval(slideInterval);
    auto();
    }
});

// Auto Scroll
if(autoScroll) {
    function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
    }
}

auto();