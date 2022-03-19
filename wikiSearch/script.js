const search = document.querySelector("input"),
form = document.querySelector("form"),
searchResults = document.querySelector(".results"),
errorMsg = document.querySelector(".alert"),
line = document.querySelector("hr");

const apiUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchValue = search.value;
    if(searchValue === "") {
        errorMessage("Search cannot be emtpy, please enter a search term");
    } else {
        getResult(searchValue);
    }
});

// Error Message
function errorMessage(msg) {
    errorMsg.style.display = "block";
    line.style.display = "block";
    errorMsg.textContent = "msg";
}

async function getResult(searchVal) {
    const response = await fetch(apiUrl + searchVal);
    const results = await response.json();

    console.log(results);

    if(results.query.search.length === 0) {
        return errorMessage("Invalid search, please enter another search term.")
    } else {
        displayResults(results);
    };
}

// Display results
function displayResults(results) {
    line.style.display = "block";
    let output = "";
    results.query.search.forEach((result) => {
        let resultUrl = `https://en.wikipedia.org/?curid=${result.pageid}`;
        output += `
        <div class="result p-2">
        <a href="${resultUrl}" target="_blank" rel="noopener" class="h3 fw-bold">${result.title}</a>
        <br>
        <a href="${resultUrl}" target="_blank" rel="noopener" class="fs-5 text-success">${resultUrl}</a>
        <p class="fs-5">
            ${result.snippet}
        </p>
    </div>
        `;
        searchResults.innerHTML = output;
    });
}