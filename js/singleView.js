import data from "./fetchData.js";
import { fruitTemplateSingle } from "./templates.js";

const singleFruit = {}

singleFruit.init = async () => {
    let pageFruit = document.querySelector('.page-fruit')

    const fruits = await data.fetchFruits()

        if(pageFruit){
            const search = location.search;
            const fruitID = new URLSearchParams(search).get('id')

            const foundFruit = fruits.find((fruit) => fruit.id == fruitID)

            let singleFruitContainer = document.querySelector('.single-fruit-container')
            singleFruitContainer.insertAdjacentHTML('beforeend', fruitTemplateSingle(foundFruit))
        }
}

export default singleFruit;