// filter by main ingredient
// www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

//look up full meal by recipe
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772

const form = document.querySelector("form"),
    searchInput = document.getElementById("search"),
    mealList = document.getElementById("meal"),
    mealModal = document.querySelector(".meal-modal"),
    recipe = document.querySelector(".recipe-content"),
    closeBtn = document.querySelector(".close-btn"),
    searchURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=",
    lookupURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

// Event Listeners
form.addEventListener("submit", getMeals);
mealList.addEventListener("click", getMealRecipe);
closeBtn.addEventListener("click", () => {
    mealModal.style.display = "none";
})

async function getMeals() {
    let searchInputVal = searchInput.value.trim();
    let res = await fetch(`${searchURL}${searchInputVal}`);
    const data = await res.json();
    displayMeals(data.meals);
};

//Display Meals
function displayMeals(meals) {
    let html = "";

    if(meals) {
        meals.forEach((meal) => {
            html += `
            <div class="meal" data-id="${meal.idMeal}">
            <div class="meal-img">
                <img src="${meal.strMealThumb}" alt="food image">
            </div>
            <div class="meal-name">
                <h3>${meal.strMeal}</h3>
                <a href="#" class="recipe-btn">View Recipe &rarr;</a>
            </div>
        </div>
            `;
            // mealList.
        })
    } else {
        html = "No meal was found, plese try again."
    }

    mealList.innerHTML = html;
};

//Get Recipe
async function getMealRecipe(e) {
    if(e.target.classList.contains("recipe-btn")) {
        let mealItem = e.target.parentElement.parentElement; 
        const res = await fetch(`${lookupURL}${mealItem.dataset.id}`);
        const data = await res.json();
        
        displayRecipe(data.meals);
    }
}

//Display Recipe
function displayRecipe(meal) {
    meal = meal[0];
    let html = `
    <div class="recipe-img">
    <img src="${meal.strMealThumb}" alt="image of meal">
</div>
<h2 class="recipe-title">${meal.strMeal}</h2>

<div class="recipe-instruction">
    <h3>Instruction</h3>
    <p>${meal.strInstructions}</p>
</div>
<div class="recipe-link">
    <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
</div>
    `;

    recipe.innerHTML = html;
    mealModal.style.display = "block";
}