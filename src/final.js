import { arrayCars } from "./cars";
import "./final.css";

const urlParams = new URLSearchParams(window.location.search);
const carId = urlParams.get("id");
const date = urlParams.get("date");
const image = document.getElementById("image");

const date_receipt = document.getElementById("date_receipt");
const car = document.getElementById("car");

date_receipt.innerHTML = date;
car.innerHTML = arrayCars[carId].carBrand + " " + arrayCars[carId].model;

image.src = arrayCars[carId].url;
