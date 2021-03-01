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

        // const h6 = document.createElement('h6');
        // h6.innerText = mealId;
        // const h3 = document.createElement('h3');
        // h3.innerText = mealCategory;

        // myMeal.appendChild(h6);
        // myMeal.appendChild(h3);
        // mealDiv.appendChild(myMeal);

        const mealInfo = `
        <h6>${mealId}</h6>
        <h3>${mealCategory}</h3>
        `
        myMeal.innerHTML = mealInfo;
        mealDiv.appendChild(myMeal);
    }
}