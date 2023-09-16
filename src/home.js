import steakImg from "./assets/steak.jpg";
import steakImg2 from "./assets/steak2.jpg";

function createSteakImg() {
  const homeImg = document.createElement("img");
  homeImg.src = steakImg;
  homeImg.className = "home-img";

  return homeImg;
}

function createDescription() {
  const descSection = document.createElement("section");
  descSection.className = "desc-section";

  const slogan = document.createElement("h1");
  slogan.innerText = "Your Steak Sanctuary";

  const description = document.createElement("p");
  description.innerText =
    "Experience culinary excellence at Amber's Steakhouse, nestled in the heart of Manila. Our warm, inviting ambiance and skilled chefs craft exceptional prime cuts to perfection, infusing each steak with unforgettable flavor. Whether celebrating a special occasion or savoring time with loved ones, our attentive staff ensures your experience exceeds expectations. With a meticulously curated menu and extensive wine selection, Amber's Steakhouse elevates every bite, creating lasting memories in a welcoming setting.";

  descSection.appendChild(slogan);
  descSection.appendChild(description);
  return descSection;
}

// function createReviewSection(){

// }

export default function createHome() {
  const homePage = document.createElement("main");
  homePage.className = "home";

  homePage.appendChild(createSteakImg());
  homePage.appendChild(createDescription());
  return homePage;
}
