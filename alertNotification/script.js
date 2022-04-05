const main = document.querySelector(".main"),
    alertBox = document.querySelector(".alert"),
    exclamationIcon = document.querySelector(".fa-exclamation-circle"),
    msg = document.querySelector(".msg"),
    closeBtn = document.querySelector(".close-btn"),
    closeIcon = document.querySelector(".fa-times");

    // Show Alert Class
    class showAlert {
        constructor(state, borderColor, color) {
            this.state = state;
            this.borderColor = borderColor;
            this.color = color; 
        }

        trigger(message) {
            alertBox.style.background = this.state;
            alertBox.style.borderColor = this.borderColor;
            msg.textContent = message;
            msg.style.color = this.color;
            exclamationIcon.style.color = this.color;
            closeIcon.style.color = this.color;

            alertBox.classList.add("show");
            alertBox.classList.remove("hide");

            setTimeout(() => {
                alertBox.classList.remove("show");
                alertBox.classList.add("hide");
            }, 5000);

            closeBtn.addEventListener("click", () => {
                alertBox.classList.remove("show");
                alertBox.classList.add("hide");
            });
        }
    }

const warning = new showAlert("#ffdb9b", "#ffa502", "#ce8500");
const danger = new showAlert("#f8d7da", "#d1281f", "#721c24");

main.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn-danger")) {
        danger.trigger("Alert: This is a danger alert!");
    } else if(e.target.classList.contains("btn-warning")) {
        warning.trigger("Alert: This is a warning alert!");
    }
});