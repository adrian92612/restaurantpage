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

function createBtn(text, className) {
  const btn = document.createElement("button");
  btn.innerText = text;
  btn.className = className;
  return btn;
}

function createLogo() {
  const logoSpace = document.createElement("div");
  logoSpace.className = "logo";

  logoSpace.innerText = "Amber's Steakhouse";
  return logoSpace;
}

function createNavPopUp() {
  const popUpNav = document.createElement("div");
  popUpNav.classList = "nav-pop-up";

  const homeBtn2 = createBtn("Home", "nav-btn2");
  const menuBtn2 = createBtn("Menu", "nav-btn2");
  const contactUsBtn2 = createBtn("Contact Us", "nav-btn2");
  popUpNav.appendChild(homeBtn2);
  popUpNav.appendChild(menuBtn2);
  popUpNav.appendChild(contactUsBtn2);

  return popUpNav;
}

function createNavBar() {
  const navSpace = document.createElement("nav");

  const homeBtn = createBtn("Home", "nav-btn");
  const menuBtn = createBtn("Menu", "nav-btn");
  const contactUsBtn = createBtn("Contact Us", "nav-btn");

  const navBtnIcon = document.createElement("img");
  navBtnIcon.src = navIcon;
  navBtnIcon.className = "nav-icon";

  navSpace.appendChild(homeBtn);
  navSpace.appendChild(menuBtn);
  navSpace.appendChild(contactUsBtn);
  navSpace.appendChild(navBtnIcon);
  navSpace.appendChild(createNavPopUp());
  return navSpace;
}
