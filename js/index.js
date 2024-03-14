import renderData from "./renderData.js";
import singleFruit from "./singleView.js";
import favorites from "./favorites.js";
import shopping from "./shopping.js";

const app = {};

app.init = async () => {
    await renderData.init();

    await singleFruit.init();

    await favorites.init();

    await shopping.init();
}

app.init();