import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";
import "./contact.css";

const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("name");

  alert(
    `Thank you for contacting us, ${name}! We will get back to you as soon as possible.`
  );
  form.reset();
});

var map = L.map("map").setView([51.113448, 16.9791557], 17);

L.tileLayer(
  `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=d5Yeku3vWzzANIuh30CR`,
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);
