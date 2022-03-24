import { navBar } from "../navigation bar/navBar";

import { pageInit } from "../home/homePage";
import { identityInit } from "../whoWeAre/whoWeAre";
import { menuInit } from "../menu/menuPage";
import { contactInit } from "../contact/contactPage";

import { clearContent } from "../tabNavFunction/resetFunction";

const homeNavigation = (e) => {
    const body = document.querySelector('body');
    clearContent(body);
    pageInit();
};
const menuNavigation = (e) => {
    const body = document.querySelector('body');
    clearContent(body);
    menuInit();
};
const identityNavigation = (e) => {
    const body = document.querySelector('body');
    clearContent(body);
    identityInit();
};
const contactNavigation = (e) => {
    const body = document.querySelector('body');
    clearContent(body);
    contactInit();
};

export {
    homeNavigation,
    menuNavigation,
    identityNavigation,
    contactNavigation,
}