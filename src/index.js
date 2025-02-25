import "./styles.css";
import {renderMenu} from "./menu";
import {renderHome} from "./home.js";
import {renderAbout} from "./about";

renderHome();

const home = document.querySelector("#home");
home.addEventListener("click", () => {
    renderHome();
})

const about = document.querySelector("#about");
about.addEventListener("click", () => {
    renderAbout();
})

const menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
    renderMenu();
})