// My Challenge Answer
const content = document.querySelector("textarea"),
    limit = document.querySelector(".limit"),
    btn = document.querySelector(".btn");
let limitVal = 50;
limit.textContent = limitVal;

window.addEventListener("input", (e) => {
    let inputCount = e.target.value.length;
    limit.textContent = limitVal - inputCount;

    if(inputCount > limitVal) {
        limit.classList.add("limitHit");
        btn.disabled = true;
    } else {
        limit.classList.remove("limitHit");
        btn.disabled = false;
    }
});

// Instructor Challenge Answer
// const input = document.querySelector("textarea"), 
//     btn = document.querySelector(".btn"),
//     limit = document.querySelector(".limit");
// let max = 50;

// const updateLimit = () => {
//     limit.textContent = max;
//     input.addEventListener("input", () => {
//         let inputLength = input.value.length;
//         limit.textContent = max - inputLength;

//         if(inputLength > max) {
//             btn.disabled = true;
//             limit.style.color = "red";
//         } else {
//             btn.disabled = false;
//             limit.style.color = "black";
//         }
//     });
// };

// updateLimit();