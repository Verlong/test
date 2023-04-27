// Зарендери розмітку піц у список.
// Використовуй шаблон карточки піци, який наведений нижче.
// У кожної піци є своя категорія, тому зроби масив категорій,
//  які є унікальними на основі масиву об'єктів піц і зарендери категорії у
//  список контейнера categories, просто огорнувши назву категорії у елемент списку.
//  Тепер ти можеш додати динаміку і зробити фільтр по категоріях, показуй ті піци,
//     які співпали з обраною категорією.
// Використовуй html з файлу pizzas.html.
// Використовуй масив піц з файлу pizzas.js
// <li class="card" id="${id}">
//   <div class="card__image">
//     <img src="${imgUrl}" alt="${title}" />
//   </div>
//   <div class="card__info">
//     <div class="car__info--title">
//       <h3>${title}</h3>
//     </div>
//     <div class="card__info--button">
//       <div data-heart>&#x2764;</div>
//     </div>
//   </div>
// </li>

const pizzas = [
  {
    id: 0,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
    title: "Pepperoni Fresh with pepper",
    types: ["thin", "traditional"],
    sizes: [26, 30, 40],
    price: 80.3,
    category: "Meat",
    rating: 4,
  },
  {
    id: 1,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    title: "Cheese",
    types: ["thin"],
    sizes: [26, 40],
    price: 24.5,
    category: "Vegetarian",
    rating: 6,
  },
  {
    id: 2,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
    title: "Barbecue chicken",
    types: ["thin"],
    sizes: [26, 40],
    price: 29.5,
    category: "Grill",
    rating: 4,
  },
  {
    id: 3,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
    title: "Sweet and sour chicken",
    types: ["thin"],
    sizes: [26, 30, 40],
    price: 27.5,
    category: "Meat",
    rating: 2,
  },
  {
    id: 4,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    title: "Cheeseburger pizza",
    types: ["thin", "traditional"],
    sizes: [26, 30, 40],
    price: 41.5,
    category: "Grill",
    rating: 8,
  },
  {
    id: 5,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
    title: "Crazy pepperoni",
    types: ["thin"],
    sizes: [30, 40],
    price: 58,
    category: "Meat",
    rating: 2,
  },
  {
    id: 6,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
    title: "Pepperoni",
    types: ["thin", "traditional"],
    sizes: [26, 30, 40],
    price: 67.5,
    category: "Meat",
    rating: 9,
  },
  {
    id: 7,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
    title: "Margarita",
    types: ["thin", "traditional"],
    sizes: [26, 30, 40],
    price: 45,
    category: "Vegetarian",
    rating: 10,
  },
  {
    id: 8,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
    title: "Four seasons",
    types: ["thin", "traditional"],
    sizes: [26, 30, 40],
    price: 39.5,
    category: "Meat",
    rating: 10,
  },
  {
    id: 9,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
    title: "Vegetables and mushrooms 🌱",
    types: ["thin", "traditional"],
    sizes: [26, 30, 40],
    price: 28.5,
    category: "Vegetarian",
    rating: 7,
  },
];

const pizzasList = document.querySelector(".cards-list");
const pizzasMarcup = pizzas
  .map(({ imageUrl, title, id }) => {
    return `<li class="card" id="${id}">
                <div class="card__image">
           <img src="${imageUrl}" alt="${title}" />
                 </div>
               <div class="card__info">
                   <div class="car__info--title">
             <h3>${title}</h3>
                      </div>
                    <div class="card__info--button">
            <div data-heart>&#x2764;</div>
                      </div>
                 </div>
              </li>`;
  })
  .join("");
// console.log(pizzasMarcup);
pizzasList.insertAdjacentHTML("afterbegin", pizzasMarcup);

const catList = document.querySelector(".categories > ul");
console.log(catList);

const catItem = pizzas.map(({ category }) => category);
console.log(catItem);

const uniqueCatItm = [...new Set(catItem)];
console.log(uniqueCatItm);

const catItemMarkup = uniqueCatItm
  .map((category) => `<li>${category}</li>`)
  .join(" ");

catList.insertAdjacentHTML("afterbegin", catItemMarkup);

catList.addEventListener("click", filterPizzas);
function filterPizzas(e) {
  if (e.target.nodeName === "LI") {
    const selectedCateg = e.target.textContent;
    console.log(e.target.textContent);

    const filteredArrey = pizzas.filter(
      (pizza) => pizza.category === selectedCateg
    );
    console.log(filteredArrey);
    const pizzasMarcup = filteredArrey
      .map(({ imageUrl, title, id }) => {
        return `<li class="card" id="${id}">
                <div class="card__image">
           <img src="${imageUrl}" alt="${title}" />
                 </div>
               <div class="card__info">
                   <div class="car__info--title">
             <h3>${title}</h3>
                      </div>
                    <div class="card__info--button">
            <div data-heart>&#x2764;</div>
                      </div>
                 </div>
              </li>`;
      })
      .join("");

    pizzasList.innerHTML = "";

    pizzasList.insertAdjacentHTML("afterbegin", pizzasMarcup);
  }
}
