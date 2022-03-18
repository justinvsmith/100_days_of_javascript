// http://api.icndb.com/jokes/random

const joke = document.querySelector(".joke"),
    btn = document.querySelector(".btn"),
    url = "http://api.icndb.com/jokes/random";

btn.addEventListener("click", getJoke);

//getting jokes, using fetch with promises
// function getJoke() {
//     fetch(url)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             joke.innerHTML = data.value.joke;
//         })
// };

//getting jokes using async await
async function getJoke() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        joke.innerHTML = data.value.joke;
    } catch(error) {
        joke.innerHTML = error.message;
    }
    
};