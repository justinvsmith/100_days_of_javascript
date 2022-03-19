import * as v from "./js/variables.js";
import * as f from "./js/functions.js";

v.form.addEventListener("submit", (e) => {
    e.preventDefault();
    let user = v.search.value.split(" ").join("");
    
    // same action for user variable, using regEx
    // let user = v.search.value.replace(/\s+/g, "");

    if(user === "") {
        f.errorMessage("Input cannot be blank");
        console.log("blank");
    } else {
        f.getUser(user);
        v.search.value = "";
    }
});