const form = document.getElementById("form"),
    username = document.getElementById("username"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    password2  = document.getElementById("password2");

    // Form event listeners
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        checkRequired([username, email, password, password2]);
        checkLength(username, 5, 16);
        checkLength(password, 8, 32);
        checkEmail(email);
        matchPassword(password, password2);
    })

    //Check required fields
    function checkRequired(inputAll) {
        inputAll.forEach((input) => {
            if(input.value.trim() === "") {
                showError(input, `${getFieldName(input)} is required.`);
            } else {
                showSuccess(input);
            };
        });
    };

    // Check input length
    function checkLength(input, min, max) {
        if(input.value.length < min) {
            showError(input, `${getFieldName(input)} must be at least ${min} characters.`);
        } else if(input.value.length > max) {
            showError(input, `${getFieldName(input)} must be less than ${max} characters.`);
        } else {
            showSuccess(input);
        }
    }

    // Validate email
    function checkEmail(input) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(re.test(input.value.trim())) {
            showSuccess(input);
        } else {
            showError(input, "Email is not valid");
        }
    }

    // Validate password
    function matchPassword(input1, input2) {
        if(input2.value !== input1.value) {
            showError(input2, "Passwords do not match");
        }
    }

    // Show error message
    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = "form-control error";
        const small = formControl.querySelector("small");
        small.innerText = message;
    }

    // Show success message
    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }

    // Get field name
    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }