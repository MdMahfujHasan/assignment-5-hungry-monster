fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => mealDetails(data.categories))

const mealDetails = mealName => {
    const mealDiv = document.getElementById('meal-name');
    for (let i = 0; i < mealName.length; i++) {
        const allMeals = mealName[i];

        const myMeal = document.createElement('div');

        const mealId = allMeals.idCategory;
        const mealCategory = allMeals.strCategory;
        const mealImg = allMeals.strCategoryThumb;
        const mealDescription = allMeals.strCategoryDescription;

        const mealInfo = `
        <img onclick="details()" src="${mealImg}">
        <h4 onclick="details()">${mealId}</h4>
        <h3 onclick="details()">${mealCategory}</h3>
        <p id="meal-description">${mealDescription}</p>
        `
        myMeal.innerHTML = mealInfo;
        mealDiv.appendChild(myMeal);
    }
}

function details(){
    document.getElementById('meal-description').style.display = "block";
}

function getInputValue(){
    const inputValue = document.getElementById('input').value;
    alert(inputValue);
}

// const h6 = document.createElement('h6');
        // h6.innerText = mealId;
        // const h3 = document.createElement('h3');
        // h3.innerText = mealCategory;

        // myMeal.appendChild(h6);
        // myMeal.appendChild(h3);
        // mealDiv.appendChild(myMeal);