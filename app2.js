fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then(res => res.json())
.then(data => mealDetails(data.meals))

const mealDetails = mealName => {
    const mealDiv = document.getElementById('meal-name');
    for (let i = 0; i < mealName.length; i++) {
        const allMeals = mealName[i];

        const myMeal = document.createElement('div');

        const mealId = allMeals.idMeal;
        const mealsName = allMeals.strMeal;
        const drinkAlternate = allMeals.strDrinkAlternate;
        const mealCategory = allMeals.strCategory;
        const mealArea = allMeals.strArea;
        const mealInstructions = allMeals.strInstructions;
        const mealImg = allMeals.strMealThumb;
        const mealTags = allMeals.strTags;
        const mealYoutube = allMeals.strYoutube;

        const mealIngredient1 = allMeals.strIngredient1;
        const mealIngredient2 = allMeals.strIngredient2;
        const mealIngredient3 = allMeals.strIngredient3;
        const mealIngredient4 = allMeals.strIngredient4;
        const mealIngredient5 = allMeals.strIngredient5;
        const mealIngredient6 = allMeals.strIngredient6;
        const mealIngredient7 = allMeals.strIngredient7;
        const mealIngredient8 = allMeals.strIngredient8;
        const mealIngredient9 = allMeals.strIngredient9;
        const mealIngredient10 = allMeals.strIngredient10;
        const mealIngredient11 = allMeals.strIngredient11;
        const mealIngredient12 = allMeals.strIngredient12;
        const mealIngredient13 = allMeals.strIngredient13;
        const mealIngredient14 = allMeals.strIngredient14;
        const mealIngredient15 = allMeals.strIngredient15;
        const mealIngredient16 = allMeals.strIngredient16;
        const mealIngredient17 = allMeals.strIngredient17;
        const mealIngredient18 = allMeals.strIngredient18;
        const mealIngredient19 = allMeals.strIngredient19;
        const mealIngredient20 = allMeals.strIngredient20;


        const mealInfo = `
        <img src="${mealImg}">
        <h4>${mealId}</h4>
        <h3>${mealsName}</h3>
        <h3>${drinkAlternate}</h3>
        <h3>${mealCategory}</h3>
        <h3>${mealArea}</h3>
        <h3>${mealInstructions}</h3>
        <h3>${mealTags}</h3>
        <h3>${mealYoutube}</h3>

        <li>${mealIngredient1}</li>
        <li>${mealIngredient2}</li>
        <li>${mealIngredient3}</li>
        <li>${mealIngredient4}</li>
        <li>${mealIngredient5}</li>
        <li>${mealIngredient6}</li>
        <li>${mealIngredient7}</li>
        <li>${mealIngredient8}</li>
        <li>${mealIngredient9}</li>
        <li>${mealIngredient10}</li>
        <li>${mealIngredient11}</li>
        <li>${mealIngredient12}</li>
        <li>${mealIngredient13}</li>
        <li>${mealIngredient14}</li>
        <li>${mealIngredient15}</li>
        <li>${mealIngredient16}</li>
        <li>${mealIngredient17}</li>
        <li>${mealIngredient18}</li>
        <li>${mealIngredient19}</li>
        <li>${mealIngredient20}</li>
        `
        myMeal.innerHTML = mealInfo;
        mealDiv.appendChild(myMeal);
    }
}