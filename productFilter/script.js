const btns = document.querySelectorAll(".btn"),
    storeProducts = document.querySelectorAll(".store-product"),
    search = document.getElementById("search"),
    productName = document.querySelectorAll(".product-details h2"),
    noResult = document.querySelector(".no-result");

for(let i=0; i<btns.length; i++) {
    btns[i].addEventListener("click", function(e) {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";

        //Switch Tab Content
        const filter = e.target.dataset.filter;
        
        
        storeProducts.forEach((product) => {
            if(filter === "all") {
                product.style.display = "block";
            } else if(product.classList.contains(filter)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        })
    });
};

// Search Filter
    search.addEventListener("keyup", filterProducts);

    function filterProducts(e) {
        const text = e.target.value.toLowerCase();

        productName.forEach((product) => {
            const item = product.textContent;

            if(item.toLowerCase().indexOf(text) !== -1) {
                product.parentElement.parentElement.style.display = "block";
                noResult.style.display = "none";
            } else {
                product.parentElement.parentElement.style.display = "none";
                noResult.style.display = "block";
            }
        });
    }

