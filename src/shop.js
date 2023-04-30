import { arrayCars } from "./cars";
import "./style.css";
import "./shop.css";

const info = document.getElementById("info");

arrayCars.forEach((element) => {
  info.innerHTML += `<div id="${element.id}" class="product"> <img src="${element.url}" alt="Car"> <h2>${element.carBrand} ${element.model}</h2> <p>${element.year}</p><p>${element.horsePower} kW</p> <p>${element.mileage} KM</p><p>${element.price} PLN</p> <button onclick="location.href='form.html?id=${element.id}'" >BUY</button> </div>`;
});
