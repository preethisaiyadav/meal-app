const mealID = location.search.substring(1);
const mealTitle = document.getElementById('mealTitle');
const mealInfo = document.getElementById('mealInfo');
const mealImage = document.getElementById("mealImage");
  const fetchMeal = async ()=>{
    const response= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    const data = await response.json();
    data.meals.forEach(element => {
        mealTitle.innerText = element.strMeal;
        mealImage.setAttribute("src", `${element.strMealThumb}`);
        mealInfo.innerHTML=element.strInstructions;
    });
    console.log(data.meals);
}
fetchMeal();
// document.getElementsByTagName('p').innerHTML=mealID;
console.log(mealID);