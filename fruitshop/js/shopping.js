import data from "./fetchData.js";
import { fruitTemplateShopCart } from "./templates.js";

const shopping = {}

shopping.init = async () => {
    const shopOutput = document.querySelector('.fruits-ShopOutput')
    let shopArray = JSON.parse(localStorage.getItem("shopList")) || [];

    const fruits = await data.fetchFruits();

    const removeShopping = () => {
        const shopBtnRemove = document.querySelectorAll(".shopBtnRemove");

        shopBtnRemove.forEach((btn) => {
            btn.addEventListener("click", (event) => {
                const fruitID = event.target.getAttribute("id")
                const index = favoriteArray.findIndex((fruit) => fruit.id == fruitID)

                favoriteArray.splice(index, 1);
                localStorage.setItem("shopList", JSON.stringify(shopArray));
                renderShop();
            })
        })
    }

    const renderShop = () => {
        if (shopArray.length != 0) {
            shopOutput.innerHTML = "";

            shopArray.forEach((fruit) => {
                shopOutput.insertAdjacentHTML("beforeend", fruitTemplateShopCart(fruit));
            })
            
            removeShopping();
        } else{
            shopOutput.innerHTML = "There's nothing in the cart"
        }
    };

    const addCartBtn = document.querySelectorAll(".fruitShopCart")

    const addShopping = async (event) => {
        const fruitID = event.target.getAttribute("id")
        const fruitToShop = fruits.find((fruit) => fruit.id == fruitID);

        if (!shopArray.includes(fruitToShop)){
            shopArray.push(fruitToShop)

            localStorage.setItem("shopList", JSON.stringify(shopArray));
        }

        renderShop();
    }

    addCartBtn.forEach((btn) => {
        btn.addEventListener("click", addShopping);
    })
}

export default shopping;