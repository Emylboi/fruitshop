export const fruitTemplateMobile = (fruit) => 
`
    <div class="product" id="${fruit.id}">
        <img src="${fruit.countryflag}" alt="" class="fruitCountryFlag">
        <img src="${fruit.image}" alt="" class="fruitImage">
        <i class="fa-regular fa-star fruitFavorite" id="${fruit.id}"></i>
        <div class="fruitInfo">
            <p class="fruitName">${fruit.fruitname}</p>
            <p class="fruitPrice">$${fruit.price}</p>
            <p class="fruitWeight">${fruit.weight}</p>
            <i class="fa-solid fa-cart-shopping fruitShopCart" id="${fruit.id}"></i>
            <button><a href="fruit.html?id=${fruit.id}">More Info</a></button>
        </div>
    </div>
`

export const fruitTemplateSingle = (fruit) => 
`
    <div class="product" id="${fruit.id}">
        <img src="${fruit.image}" alt="" class="fruitImage">
        <p class="fruitName">${fruit.fruitname}</p>
        <div class="country-container">   
            <img src="${fruit.countryflag}" alt="" class="fruitCountryFlag">
            <p>${fruit.country}</p>
        </div> 
        <p class="fruitDescription">${fruit.description}</p>
        
        <button><a href="index.html">Go Back</a></button>
    </div>
`

export const fruitTemplateFavorite = (fruit) => 
`
    <div class="product" id="${fruit.id}">
        <p class="fruitName">${fruit.fruitname}</p>
        <button class="favBtnRemove" id="${fruit.id}">Remove</button>
    </div>
`

export const fruitTemplateShopCart = (fruit) => 
`
    <div class="product" id="${fruit.id}">
        <p class="fruitName">${fruit.fruitname}</p>
        <button class="shopBtnRemove" id="${fruit.id}">Remove</button>
    </div>  
`