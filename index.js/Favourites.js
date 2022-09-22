const mealTitle = document.getElementById("mealTitle");
const mealInfo = document.getElementById("mealInfo");
const mealImage = document.getElementById("mealImage");
var mealData = document.getElementById("favMeal");
const mealID = JSON.parse(localStorage.getItem('id'));


const fetchMeal = () => {
  mealID.forEach(async (mealID) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
    );
    const data = await response.json();
    data.meals.forEach((element) => {
     var mData = document.createElement("div");
     mData.className='meal';
      var img = document.createElement("img");
      var side = document.createElement("div");
      img.alt = "mealPicture";
      img.src = element.strMealThumb;
      var title = document.createElement('h1');
      title.innerText = element.strMeal;
      let info = document.createElement("h4");
      info.innerText = element.strInstructions;
      mData.appendChild(img);
      side.appendChild(title);
      side.appendChild(info);
      mData.appendChild(side);
      mealData.appendChild(mData);
      
    });
   
  });
};
fetchMeal();