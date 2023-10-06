import "./main.css";
import createHeader from "./header";
import createHome from "./home";
import createFooter from "./footer";

const root = document.getElementById("root");
const mainContent = document.createElement("main");

function popUpNav() {
  console.log("clicked");
}

function addListeners() {
  const navIcon = document.querySelector(".nav-icon");
  navIcon.addEventListener("click", popUpNav);
}

(function init() {
  root.appendChild(createHeader());
  root.appendChild(mainContent.appendChild(createHome()));
  root.appendChild(createFooter());

  addListeners();
})();
