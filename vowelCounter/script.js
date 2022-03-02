const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", vowelCount);

function vowelCount() {
    const word = document.querySelector(".input-text").value.toLowerCase();
    let len = word.length;
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for(l=0; l<len; l++){
        if(vowels.includes(word[l])){
            count += 1;
        }
    }
    result.innerHTML = `${word.toUpperCase()} contains ${count} vowels.`
}