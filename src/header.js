import navIcon from "./assets/menu-burger.svg";

export default function createHeader() {
  const header = document.createElement("header");
  header.className = "container";

  //create logo on the left side
  header.appendChild(createLogo());
  //create nav on the right side
  header.appendChild(createNavBar());
  return header;
}

function createLogo() {
  const logoSpace = document.createElement("div");
  logoSpace.className = "logo";

  logoSpace.innerText = "Amber's Steakhouse";
  return logoSpace;
}

function createNavBar() {
  const navSpace = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.innerText = "Home";
  homeBtn.className = "nav-btn";
  const menuBtn = document.createElement("button");
  menuBtn.innerText = "Menu";
  menuBtn.className = "nav-btn";
  const contactUsBtn = document.createElement("button");
  contactUsBtn.innerText = "Contact Us";
  contactUsBtn.className = "nav-btn";

  const navBtnIcon = document.createElement("img");
  navBtnIcon.src = navIcon;

  navSpace.appendChild(homeBtn);
  navSpace.appendChild(menuBtn);
  navSpace.appendChild(contactUsBtn);
  navSpace.appendChild(navBtnIcon);
  return navSpace;
}
