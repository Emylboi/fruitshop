import data from "./fetchData.js";
import { fruitTemplateMobile } from "./templates.js";

const renderData = {};
renderData.init = async () => {
    let fruitContainer = document.querySelector(".fruit-container");

    const fruits = await data.fetchFruits();

    // HVORFOR VIRKER DENNE IKKE????????
    /* if(fruitContainer){
        fruits.foreach((fruit) => {
            fruitContainer.insertAdjacentHTML("beforeend", fruitTemplateMobile(fruit));
        });
    } */

    // MEN DENNE VIRKER???? DE ER ENS
    if (fruitContainer) {
        fruits.forEach((fruit) => {
          fruitContainer.insertAdjacentHTML("beforeend", fruitTemplateMobile(fruit));
        });
    }
};

export default renderData;