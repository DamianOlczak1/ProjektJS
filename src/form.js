import { arrayCars } from "./cars";
import "./form.css";

const urlParams = new URLSearchParams(window.location.search);
const carId = urlParams.get("id");
const fullname = document.getElementById("fullname")
const carBrand = document.getElementById("carBrand");
const model = document.getElementById("model");
const price = document.getElementById("price");
let currentPrice = arrayCars[carId].price
const nawigacja = document.getElementById("nawigacja")
const kamera = document.getElementById("kamera")
const siedzenia = document.getElementById("siedzenia")
const error= document.getElementById("error")
const form = document.getElementById("form")
const date = document.getElementById("date")


carBrand.innerHTML = arrayCars[carId].carBrand;
model.innerHTML = arrayCars[carId].model;
price.innerHTML = currentPrice;


const actualDate = new Date()
actualDate.setDate(actualDate.getDate()+14)
date.valueAsDate = actualDate
date.min = actualDate.toISOString().split("T")[0]

nawigacja.addEventListener("click", ()=>{
    if(nawigacja.checked){
        currentPrice = currentPrice + 5000;
    }
    else {
        currentPrice = currentPrice - 5000;
        };

    price.innerHTML = currentPrice;
});
kamera.addEventListener("click", ()=>{
    if(kamera.checked){
        currentPrice = currentPrice + 7000;
    }
    else {
        currentPrice = currentPrice - 7000;
        };

    price.innerHTML = currentPrice;
});
siedzenia.addEventListener("click", ()=>{
    if(siedzenia.checked){
        currentPrice = currentPrice + 2000;
    }
    else {
        currentPrice = currentPrice - 2000;
        };

    price.innerHTML = currentPrice;
});

form.addEventListener("submit", (e) => {
    const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    e.preventDefault()
    if(!regName.test(fullname.value)){
        error.innerHTML = "error";
    }else{
        window.location.href = `final.html?id=${carId}&date=${date.value}`
        ;
    }

});


