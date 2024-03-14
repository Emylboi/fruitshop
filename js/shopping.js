import data from "./fetchData.js";
import { fruitTemplateShopCart } from "./templates.js";

const shopping = {};

shopping.init = async () => {
  const shopOutput = document.querySelector(".fruits-shopOutput");

  let shopArray = JSON.parse(localStorage.getItem("shopList")) || [];

  const fruits = await data.fetchFruits();

  const removeShopping = () => {
    const shopBtnRemove = document.querySelectorAll(".shopBtnRemove");

    shopBtnRemove.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const fruitID = event.target.getAttribute("id");
        const index = shopArray.findIndex((fruit) => fruit.id == fruitID);

        shopArray.splice(index, 1);
        localStorage.setItem("shopList", JSON.stringify(shopArray));
        renderShop();
      });
    });
  };

  const renderShop = () => {
    let total = Math.round(
      shopArray.reduce((total, item) => total + item.price, 0) * 100
    );
    let totalPrice = total / 100;
    if (shopArray.length != 0) {
      if (shopOutput) {
        shopOutput.innerHTML = "";

        shopArray.forEach((fruit) => {
          shopOutput.insertAdjacentHTML(
            "beforeend",
            fruitTemplateShopCart(fruit)
          );
        });

        shopOutput.insertAdjacentHTML("beforeend", totalPrice);
      }

      removeShopping();
    } else {
      if (shopOutput) {
        shopOutput.innerHTML = "There's nothing in the cart";
      }
    }
  };

  renderShop();

  const addCartBtn = document.querySelectorAll(".fruitShopCart");

  const addShopping = async (event) => {
    const fruitID = event.target.getAttribute("id");

    const fruitToShop = fruits.find((fruit) => fruit.id == fruitID);

    if (!shopArray.includes(fruitToShop)) {
      shopArray.push(fruitToShop);

      localStorage.setItem("shopList", JSON.stringify(shopArray));
    }

    renderShop();
  };

  addCartBtn.forEach((btn) => {
    btn.addEventListener("click", addShopping);
  });
};

export default shopping;
