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
        <img src="${mealImg}">
        <h4>${mealId}</h4>
        <h3>${mealCategory}</h3>
        <p id="meal-description">${mealDescription}</p>
        `
        myMeal.innerHTML = mealInfo;
        mealDiv.appendChild(myMeal);
    }
}
function my(){
   document.getElementById('meal-description').style.display = "block";
}