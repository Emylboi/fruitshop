import { fruitTemplateFavorite } from "./templates.js";
import data from "./fetchData.js";

const favorites = {}

favorites.init = async () => {

    const favoriteOutput = document.querySelector('.fruits-favorite')

    let favoriteArray = JSON.parse(localStorage.getItem("favoriteList")) || [];

    const fruits = await data.fetchFruits();

    const removeFavorite = () => {
        const favBtnRemove = document.querySelectorAll(".favBtnRemove");

        favBtnRemove.forEach((btn) => {
            btn.addEventListener("click", (event) => {
                const fruitID = event.target.getAttribute("id")
                const index = favoriteArray.findIndex((fruit) => fruit.id == fruitID)

                favoriteArray.splice(index, 1);
                localStorage.setItem("favoriteList", JSON.stringify(favoriteArray));
                renderFavorites();
            })
        })
    }

    const renderFavorites = () => {
        if (favoriteArray.length != 0) {
            favoriteOutput.innerHTML = "";

            favoriteArray.forEach((fruit) => {
                favoriteOutput.insertAdjacentHTML("beforeend", fruitTemplateFavorite(fruit));
            })
            
            removeFavorite();
        } else{
            favoriteOutput.innerHTML = "There's no favorites"
        }
    };

    renderFavorites();

    const favBtn = document.querySelectorAll(".fruitFavorite")

    const addFavorite = async (event) => {
        const fruitID = event.target.getAttribute("id");

        const fruitToAdd = fruits.find((fruit) => fruit.id == fruitID);

        if (!favoriteArray.includes(fruitToAdd)){
            favoriteArray.push(fruitToAdd)

            localStorage.setItem("favoriteList", JSON.stringify(favoriteArray));
        }

        renderFavorites();
    }

    favBtn.forEach((btn) => {
        btn.addEventListener("click", addFavorite);
    });
};

export default favorites;