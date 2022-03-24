import { navBar } from "./navigation bar/navBar";
import { pageInit } from "./home/homePage";
import { identityInit } from "./whoWeAre/whoWeAre";
import { menuInit } from "./menu/menuPage";
import { contactInit } from "./contact/contactPage";

import { homeNavigation, menuNavigation, identityNavigation, contactNavigation, } from "./tabNavFunction/tabNav";


import"normalize.css";
import"./style/style.scss";

const landingHome = pageInit();

const homeButton = document.getElementById('home-button');
    homeButton.addEventListener('click', homeNavigation);
const aboutButton = document.getElementById('about-button');
    aboutButton.addEventListener('click', identityNavigation);
const menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', menuNavigation);   
const contactButton = document.getElementById('contact-button');
    contactButton.addEventListener('click', contactNavigation);   

