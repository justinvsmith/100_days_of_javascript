const apiURL = "https://api.themoviedb.org/3/discover/movie?api_key=0ec28970f673001aa550dc63d39bac72&sort_by=popularity.desc&page=1",
    searchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=0ec28970f673001aa550dc63d39bac72&query=",
    imgPATH = "https://image.tmdb.org/t/p/w1280";

let moviesDIV = document.querySelector(".movies"),
    form = document.querySelector("form"),
    search = document.querySelector(".search");

getMovies(apiURL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    displayMovies(data.results);
};


// Display Movies
function displayMovies(movies) {
    moviesDIV.innerHTML = "";
    movies.forEach((movie) => {
        const div = document.createElement("div");
        div.classList.add("movie");
        div.innerHTML = `
        <img src="${imgPATH + movie.poster_path}" alt="">
                    <div class="details">
                        <h2 class="title">${movie.title}</h2>
                        <p class="rate">Rating: <span class="rating">${movie.vote_average}</span></p>
                        <p class="overview">
                            ${movie.overview}
                        </p>
                    </div>
        `;
        moviesDIV.appendChild(div);
    });
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    moviesDIV.innerHTML = "";
    
    const inputVal = search.value;

    if(inputVal) {
        getMovies(searchAPI + inputVal);
        search.value = "";
    }
});

