export default function createHeader() {
  const header = document.createElement("header");

  //create logo on the left side
  header.appendChild(createLogo());
  //create nav on the right side
  header.appendChild(createNavBar());
  return header;
}

function createLogo() {
  const logoSpace = document.createElement("div");
  logoSpace.className = "logo";

  logoSpace.innerText = "LOGO";
  return logoSpace;
}

function createNavBar() {
  const navSpace = document.createElement("nav");

  return navSpace;
}
