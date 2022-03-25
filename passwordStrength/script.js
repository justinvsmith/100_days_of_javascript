let state,
    password = document.getElementById("password"),
    passwordStrength = document.getElementById("password-strength"),
    lowerUpperCase = document.querySelector(".low-upper-case i"),
    number = document.querySelector(".number i"),
    specialChar = document.querySelector(".special-char i"),
    eightChar = document.querySelector(".eight-char i"),
    showPassword = document.querySelector(".show-pass"),
    eyeIcon = document.getElementById("eye");

showPassword.addEventListener("click", toggle);
eyeIcon.addEventListener("click", toggleEye);
password.addEventListener("keyup", () => {
    let pass = password.value;
    checkStrength(pass);
});

// Toggle password field
function toggle() {
    if(state) {
        password.setAttribute("type", "password");
        state = false;
    } else {
        password.setAttribute("type", "text");
        state = true;
    }
}

// Toggle icon in password field
function toggleEye() {
    eyeIcon.classList.toggle("fa-eye-slash");
}

//Check password strength
function checkStrength(pass) {
    let strength = 0


    // Check character case
    if(pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
        addCheck(lowerUpperCase);
    } else {
        removeCheck(lowerUpperCase);
    }

    // Check for numbers
    if(pass.match(/([0-9])/)) {
        strength += 1;
        addCheck(number);
    } else {
        removeCheck(number);
    }

    // Check for special characters
    if(pass.match(/([!,@,#,$,%,^,&,*,?,_,~])/)) {
        strength += 1;
        addCheck(specialChar);
    } else {
        removeCheck(specialChar);
    }

    // if(pass.length === 0) {
    //     passwordStrength.style.width = "0%";
    // }

    // Check password length
    if(pass.length > 7) {
        strength += 1;
        addCheck(eightChar);
    } else {
        removeCheck(eightChar);
    }

    // Update progress bar
    if(strength == 1) {
    removeStrength();
        passwordStrength.classList.add("pb-danger");
        passwordStrength.style.width = "25%";
    } else if(strength == 2) {
    removeStrength();
        passwordStrength.classList.add("pb-warning");
        passwordStrength.style.width = "50%";
    } else if(strength == 3) {
    removeStrength();
        passwordStrength.classList.add("pb-primary");
        passwordStrength.style.width = "75%";
    } else if(strength == 4) {
    removeStrength();
        passwordStrength.classList.add("pb-success");
        passwordStrength.style.width = "100%";
    } else {
        passwordStrength.style.width = "0%";
    }
}

// Remove password strength classes
function removeStrength() {
    passwordStrength.classList.remove("pb-warning", "pb-primary", "pb-success", "pb-danger");
}

// Add check icon
function addCheck(charRequired) {
    charRequired.classList.replace("fa-circle", "fa-check");
}

// Remove check icon
function removeCheck(charRequired) {
    charRequired.classList.replace("fa-check", "fa-circle");
}