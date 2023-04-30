import { arrayCars } from "./cars";
import "./style.css";
import "./form.css";

const urlParams = new URLSearchParams(window.location.search);
const carId = urlParams.get("id");
const fullname = document.getElementById("fullname");
const carBrand = document.getElementById("carBrand");
const model = document.getElementById("model");
const price = document.getElementById("price");
let currentPrice = arrayCars[carId].price;
const nawigacja = document.getElementById("nawigacja");
const kamera = document.getElementById("kamera");
const siedzenia = document.getElementById("siedzenia");
const error = document.getElementById("error");
const form = document.getElementById("form");
const date = document.getElementById("date");
const payment = document.getElementById("payment");
const pickup = document.getElementById("pickup");
const insuranceyes = document.getElementById("insuranceyes");
const insuranceno = document.getElementById("insuranceno");
const extrasprices = {
  kamera: 7000,
  siedzenia: 2000,
  nawigacja: 5000,
};
let formData = {
  date: null,
  fullname: null,
  insurance: null,
  kamera: null,
  nawigacja: null,
  payment: "",
  pickup: null,
  siedzenia: null,
};
const actualDate = new Date();
actualDate.setDate(actualDate.getDate() + 14);
date.valueAsDate = actualDate;
date.min = actualDate.toISOString().split("T")[0];

formData = { ...formData, ...JSON.parse(window.localStorage.getItem("user")) };

if (formData) {
  if (formData.date) {
    date.valueAsDate = new Date(formData.date);
  }

  fullname.value = formData.fullname;
  payment.value = formData.payment;
  kamera.checked = formData.kamera ? true : false;
  siedzenia.checked = formData.siedzenia ? true : false;
  nawigacja.checked = formData.nawigacja ? true : false;
  pickup.value = formData.pickup;
  if (formData.insurance === true) {
    insuranceyes.checked = true;
  } else if (formData.insurance === false) {
    insuranceno.checked = true;
  }
}

if (kamera.checked) {
  currentPrice = currentPrice + extrasprices.kamera;
}
if (siedzenia.checked) {
  currentPrice = currentPrice + extrasprices.siedzenia;
}
if (nawigacja.checked) {
  currentPrice = currentPrice + extrasprices.nawigacja;
}

form.addEventListener("input", (e) => {
  if (e.target.id === "insuranceno") {
    formData["insurance"] = false;
  } else if (e.target.id === "insuranceyes") {
    formData["insurance"] = true;
  } else if (
    e.target.id === "kamera" ||
    e.target.id === "siedzenia" ||
    e.target.id === "nawigacja"
  ) {
    formData[e.target.id] = e.target.checked;
  } else {
    formData[e.target.id] = e.target.value;
  }
  window.localStorage.setItem("user", JSON.stringify(formData));
});

carBrand.innerHTML = arrayCars[carId].carBrand;
model.innerHTML = arrayCars[carId].model;
price.innerHTML = currentPrice;

nawigacja.addEventListener("click", () => {
  if (nawigacja.checked) {
    currentPrice = currentPrice + extrasprices.nawigacja;
  } else {
    currentPrice = currentPrice - extrasprices.nawigacja;
  }

  price.innerHTML = currentPrice;
});
kamera.addEventListener("click", () => {
  if (kamera.checked) {
    currentPrice = currentPrice + extrasprices.kamera;
  } else {
    currentPrice = currentPrice - extrasprices.kamera;
  }

  price.innerHTML = currentPrice;
});
siedzenia.addEventListener("click", () => {
  if (siedzenia.checked) {
    currentPrice = currentPrice + extrasprices.siedzenia;
  } else {
    currentPrice = currentPrice - extrasprices.siedzenia;
  }

  price.innerHTML = currentPrice;
});

form.addEventListener("submit", (e) => {
  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  e.preventDefault();
  if (!regName.test(fullname.value)) {
    error.innerHTML = "Error";
  } else {
    window.localStorage.clear("user");
    window.location.href = `final.html?id=${carId}&date=${date.value}`;
  }
});
