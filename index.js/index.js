// get the data from the html page
const search = document.getElementById("searchBox");
var mealData = document.getElementById("mealData");
var favourites = JSON.parse(localStorage.getItem("id")) || [];
const handleFavouritePush = () => {
  localStorage.setItem("id", JSON.stringify(favourites));
};
// search data from api.
const searchApi = async () => {
  console.log("fetching");
  try {
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.meals != null) {
      mealData.removeAttribute("class");
      data.meals.forEach((element) => {
        var mData = document.createElement('div');
        mData.className ='meal';
        var mealPage = document.createElement("a");
        mealPage.href = `./mealDetail.html?${element.idMeal}`;
        var mealImage = document.createElement("img");
        mealImage.src = element.strMealThumb;
        
        var mealTitle = document.createElement("h3");
        mealTitle.innerText = element.strMeal;
        
        var favouriteButton = document.createElement("button");
        favouriteButton.innerText = "Add to Favourite";
        favouriteButton.id = element.idMeal;
        favouriteButton.class = "addFavourite";
        favouriteButton.onclick = () => {
          favourites.push(element.idMeal);
          favouriteButton.innerText = "Added";
          
          
        };
        mealPage.appendChild(mealImage);
        mealPage.appendChild(mealTitle);
        mData.appendChild(mealPage);
        mData.appendChild(favouriteButton);
        mealData.appendChild(mData);
      });
    } else {
     
      mealData.style.visibility = "visible";
    }
  } catch (error) {
    console.log(error);
    return;
  }
};