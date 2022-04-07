const modal = document.getElementById("modal"),
    input = document.getElementById("link"),
    btn = document.getElementById("btn"),
    close = document.getElementsByClassName("close")[0];

    btn.addEventListener("click", openPopup);
    close.addEventListener("click", closePopup);

    function openPopup(e) {
        e.preventDefault();
        modal.style.display = "block";
        startCountdown();
    }

    function closePopup() {
        // e.preventDefault();
        modal.style.display = "none";
    }

window.onclick = function(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    }
}

let reverseCounter = 10;
let progressBar = document.getElementById("pbar");
let counting = document.getElementById("counting");

function startCountdown() {
    let downloadTimer = setInterval(() => {
        progressBar.value = 10 - (--reverseCounter);
        if(reverseCounter <= 0) {
            clearInterval(downloadTimer);
            closePopup();
            // window.open(input.value, "_blank");
        }
        counting.innerHTML = reverseCounter;
    }, 1000)
    let reverseCounter = 10;
}