const tabLinks = document.getElementsByClassName("tab-link"),
    allContent = document.querySelectorAll(".tab-content");

for(i=0; i<tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", function(e) {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";

        //switch content 
        const filter = e.target.dataset.filter;
        //The above line returns the value of the filter attribute

        allContent.forEach((content) => {
            if(content.classList.contains(filter)) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        })
    })
}