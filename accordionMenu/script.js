const accordion = document.querySelectorAll(".accordion");

for(let i=0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const desc = this.nextElementSibling;
        if(desc.style.maxHeight) {
            desc.style.maxHeight = null;
        } else {
            desc.style.maxHeight = desc.scrollHeight + "px";
        }
    })
}
