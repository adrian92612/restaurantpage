import steakImg from "./assets/steak.jpg";
import steakImg2 from "./assets/steak2.jpg";

// const rotate = setInterval((homeImg) => {
//   homeImg.src = imgArr[arr];
//   homeImg.classList.add("fade-effect");
//   console.log(arr);
//   setTimeout(() => homeImg.classList.remove("fade-effect"), 3000);
//   arr++;
//   if (arr >= imgArr.length) arr = 0;
// }, 4000);

function createSteakImg() {
  const imgArr = [steakImg, steakImg2];
  const homeImg = document.createElement("img");
  homeImg.src = imgArr[1];

  // let arr = 1;
  // setInterval(() => {
  //   homeImg.src = imgArr[arr];
  //   homeImg.classList.add("fade-effect");
  //   console.log(arr);
  //   setTimeout(() => homeImg.classList.remove("fade-effect"), 3000);
  //   arr++;
  //   if (arr >= imgArr.length) arr = 0;
  // }, 4000);

  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";

  imgContainer.appendChild(homeImg);

  return imgContainer;
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

function createReviewSection() {
  const reviewSec = document.createElement("section");
  reviewSec.className = "review-section";

  return reviewSec;
}

export default function createHome() {
  const homePage = document.createElement("main");
  homePage.className = "home";

  homePage.appendChild(createSteakImg());
  homePage.appendChild(createDescription());
  homePage.appendChild(createReviewSection());
  return homePage;
}
