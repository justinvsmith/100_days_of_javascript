const thumbnails = document.getElementsByClassName("thumbnail"),
    slider = document.getElementById("slider"),
    nextBtn = document.getElementById("slide-right"),
    prevBtn = document.getElementById("slide-left");

    nextBtn.addEventListener("click", () => {
        scrollAmount = 0;
        let slideTimer = setInterval(() => {
            slider.scrollLeft += 10;
            scrollAmount += 10;
            if(scrollAmount >= 100) {
                window.clearInterval(slideTimer);
            }
        }, 25);
    });

    prevBtn.addEventListener("click", () => {
        scrollAmount = 0;
        let slideTimer = setInterval(() => {
            slider.scrollLeft -= 10;
            scrollAmount += 10;
            if(scrollAmount >= 100) {
                window.clearInterval(slideTimer);
            }
        }, 25);
    });

// Auto Play Function
function autoPlay() {
    if(slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1) {
        slider.scrollLeft = 0;
        console.log('hi');
    } else {
        slider.scrollLeft += 1.5;
        // console.log("bye");
    }
}


let play = setInterval(autoPlay, 10);


// Pause the slide on hover
for(let i=0; i<thumbnails.length; i++) {
    thumbnails[i].addEventListener("mouseover", () => {
        clearInterval(play);
    });
    thumbnails[i].addEventListener("mouseout", () => {
        return(play = setInterval(autoPlay, 10));
    });
};