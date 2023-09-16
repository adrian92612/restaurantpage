import "./main.css";
import createHeader from "./header";
import createHome from "./home";
import createFooter from "./footer";

const root = document.getElementById("root");

root.appendChild(createHeader());
root.appendChild(createHome());
root.appendChild(createFooter());
