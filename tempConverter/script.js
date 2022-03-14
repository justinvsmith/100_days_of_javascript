let fahrenheit = document.querySelector(".fahrenheit"),
    celsius = document.querySelector(".celsius"),
    kelvins = document.querySelector(".kelvins"),
    form = document.querySelector("form");
    
form.addEventListener("input", convertWeight);

function convertWeight(e) {
    if(e.target.classList.contains("fahrenheit")) {
        let x = e.target.value;
        celsius.value = ((x - 32) / 1.8).toFixed(2);
        kelvins.value = ((x - 32) / 1.8 + 273.15).toFixed(2);
    }
    
    if(e.target.classList.contains("celsius")) {
        let x = e.target.value;
        fahrenheit.value = ((x * 1.8) + 32).toFixed(2);
        kelvins.value = (x + 273.15).toFixed(2);
    }
    
    if(e.target.classList.contains("kelvins")) {
        let x = e.target.value;
        fahrenheit.value = ((x - 273.15) * 1.8 + 32).toFixed(2);
        celsius.value =  (parseFloat(x) - 273.15).toFixed(2);
    }
    
}