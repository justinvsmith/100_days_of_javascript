const empty = "",
    uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lCase = "abcdefghijklmnopqrstuvwxyz",
    number = "0123456789",
    symbol = "!@#$%^&*=-_";

const pLength = document.getElementById("p-length"),
    upperCase = document.getElementById("p-uppercase"),
    lowerCase = document.getElementById("p-lowercase"),
    pNumber= document.getElementById("p-number"),
    pSymbol = document.getElementById("p-symbol"),
    submit = document.getElementById("submit"),
    password = document.getElementById("password")
    copy = document.getElementById("copy");

submit.addEventListener("click", () => {
    let initialPassword = empty;
    // add characters to the initial password based on options selected

    upperCase.checked ? (initialPassword += uCase) : "";
    lowerCase.checked ? (initialPassword += lCase) : "";
    pNumber.checked ? (initialPassword += number) : "";
    pSymbol.checked ? (initialPassword += symbol) : "";

    password.value = generatePassword (pLength.value, initialPassword);

    function generatePassword(length, initialPassword) {
        let pass = ""; 

        for(let i=0; i<length; i++) {
            pass += initialPassword.charAt(
                Math.floor(Math.random() * initialPassword.length)
            )
        } 
        return pass;
    }

    
})

// COPY FUNCTION

copy.addEventListener("click", () => {
    if(password.value == "") {
        alert("Please generate a password")
    } else {
        password.select();
        document.execCommand("copy");
        alert("Password has been copied");
    }
})