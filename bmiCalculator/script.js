//BMI - kg/m2
//Normal - 18.5 - 24.9
//Underweight - < 18.5
//Overweight - 25 - 29.9
//Obese - 30 and above

const btn = document.querySelector(".btn"),
result = document.querySelector(".result"),
reset = document.querySelector(".reset");

btn.addEventListener("click", calculateBMI);

function calculateBMI(e) {
    e.preventDefault();

    let bmi;

    let height = document.querySelector(".height").value;
    let weight = document.querySelector(".weight").value;

    //Validate input
    if(height === "" || isNaN(height)) {
        return (result.innerHTML = "Provide a valid height");
    } else if(weight === "" || isNaN(weight)) {
        return (result.innerHTML = "Provide a valid weight");
    } else {
        height = height/100;
        let bmi = (weight / Math.pow(height, 2)).toFixed(2);
        // Categorize results
        if(bmi < 18.5) {
            showResult(`Underweight: <span>${bmi}</span>`, "orange");
        } else if(bmi >= 18.5 && bmi < 24.9) {
            showResult(`Normal: <span>${bmi}</span>`, "green");
        } else if(bmi >= 25.0 && bmi < 29.9) {
            showResult(`Normal: <span>${bmi}</span>`, "blue");
        } else {
            showResult(`Obese: <span>${bmi}</span`, "red");
        }
    }

    result.style.display = "block";
    reset.style.display = "block";
    
}

function showResult(value, color) {
    result.style.backgroundColor = color;
    return (result.innerHTML = value);
}

reset.addEventListener("click", () => {
    document.querySelector("form").reset();
    reset.style.display = "none";
    result.style.display = "none";
})