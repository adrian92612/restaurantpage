import "./main.css";
import createHeader from "./header";
import createHome from "./home";

const root = document.getElementById("root");

root.appendChild(createHeader());
root.appendChild(createHome());
