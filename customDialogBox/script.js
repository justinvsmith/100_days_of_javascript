const btn1 = document.querySelector(".btn-1"),
    btn2 = document.querySelector(".btn-2"),
    confirmEl = document.querySelector(".confirm"),
    closeEl = document.querySelector(".close"),
    title = document.querySelector(".title"),
    content = document.querySelector(".content"),
    btnOk = document.querySelector(".btn-ok"),
    btnCancel = document.querySelector(".btn-cancel");

//     btn1.addEventListener("click", () => {
//         changeBg("red");
//     })
//     btn2.addEventListener("click", () => {
//         changeBg("purple");
//     })

// function changeBg(color) {
//     let x = confirm("Change Background to " + color);
//     if(x) {
//         document.body.style.backgroundColor = color;

//     }
// }

// Custom Confirm Box
class ShowConfirm {
    constructor(title, content, ok, cancel) {
        this.title = title;
        this.content = content;
        this.ok = ok;
        this.cancel = cancel;
    }

    trigger(callbackFn) {
        title.textContent = this.title;
        content.textContent = this.content;
        btnOk.innerText = this.ok;
        btnCancel.innerText = this.cancel;

        confirmEl.classList.remove("close-modal");

        closeEl.addEventListener("click", this.closeModal);
        btnCancel.addEventListener("click", this.closeModal);

        btnOk.addEventListener("click", () => {
            callbackFn();
            this.closeModal();
        })
    }

    closeModal() {
        confirmEl.classList.add("close-modal");
    }
}

// Btn Event Listener
    btn1.addEventListener("click", () => {
        changeBg("red");
    })
    btn2.addEventListener("click", () => {
        changeBg("purple");
    })

const changeBack = new ShowConfirm(
    "Change Background",
    "You are about to change the background",
    "Change",
    "Nevermind"
);

function changeBg(color) {
    changeBack.trigger(setBg);
    function setBg() {
        document.body.style.backgroundColor = color;
    }
}