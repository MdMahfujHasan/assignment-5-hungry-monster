fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => mealDetails(data.categories))

const mealDetails = mealName => {
    const ul = document.getElementById('meal-name');
    for (let i = 0; i < mealName.length; i++) {
        const allMeals = mealName[i];
        console.log(allMeals);


        // const li = document.createElement('li');
        // li.innerText = categories.strCategory;
        // ul.appendChild(li);
        
    }
}