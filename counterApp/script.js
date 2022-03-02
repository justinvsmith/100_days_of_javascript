const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

let numberCount = 0;

buttons.addEventListener("click", (e) => {
    const add = e.target.classList.contains("add");
    const subtract = e.target.classList.contains("subtract");
    const reset = e.target.classList.contains("reset");


    if(add){
        numberCount++;
            count.innerHTML=numberCount;
            setColor();
    }
    if(subtract){
        numberCount--;
            count.innerHTML=numberCount;
            setColor();
    }
    if(reset){
        numberCount = 0;
            count.innerHTML=numberCount;
            setColor();
    }

});

function setColor() {
    if(count.innerHTML > 0){
        count.style.color="yellow";
    } else if(count.innerHTML < 0){
        count.style.color="orangered";
    } else {
        count.style.color="white";
    }
}



