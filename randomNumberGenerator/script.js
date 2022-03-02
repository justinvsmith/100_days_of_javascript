const count = document.querySelector(".number");
const buttons = document.querySelector(".buttons");


function generateNumber() {
    randNum = Math.floor(Math.random() * 100 + 1);
    count.innerHTML=randNum;
}

buttons.addEventListener("click", generateNumber);



