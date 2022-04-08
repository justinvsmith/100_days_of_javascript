const typedWord = document.querySelector(".typed-word"),
    cursor = document.querySelector(".cursor"),
    wordArray = ["Web Developer", "Product Designer", "Developer Advocate"],
    typingDelay = 200,
    erasingDelay = 100,
    newWordDelay = 2000;
let wordArrayIndex = 0;
let letterIndex = 0;

// Typing function
function type() {
    if(letterIndex < wordArray[wordArrayIndex].length) {

        if(!cursor.classList.contains("typing")) {
            cursor.classList.add("typing");
        } 

        typedWord.textContent += wordArray[wordArrayIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursor.classList.remove("typing");
        setTimeout(erase, newWordDelay);
    }

}

// Erase function
function erase() {
    if(letterIndex > 0) {

        if(!cursor.classList.contains("typing")) {
            cursor.classList.add("typing");
        }

        typedWord.textContent = wordArray[wordArrayIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursor.classList.remove("typing");
        wordArrayIndex++;
        if(wordArrayIndex >= wordArray.length) {
            wordArrayIndex = 0;
        }
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, newWordDelay);
});

// preloader js
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.style.display = "none";
});



