import steakImg from "./assets/steak.jpg";
import steakImg2 from "./assets/steak2.jpg";

function createSteakImg() {
  const homeImg = document.createElement("img");
  homeImg.src = steakImg;
  homeImg.className = "home-img";

  return homeImg;
}

export default function createHome() {
  const homePage = document.createElement("main");
  homePage.className = "home";

  homePage.appendChild(createSteakImg());
  return homePage;
}
