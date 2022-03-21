/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact/contact-dependencies/contactNumber.js":
/*!***********************************************************!*\
  !*** ./src/contact/contact-dependencies/contactNumber.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactCard\": () => (/* binding */ contactCard)\n/* harmony export */ });\n\r\n\r\nconst contactCard = (title, phoneNumber) => {\r\n    const cardContainer = document.createElement('div');\r\n        cardContainer.classList.add('card-container');\r\n    const cardTitle = document.createElement('h3');\r\n        cardTitle.classList.add('card-title');\r\n        cardTitle.textContent = title;\r\n    const cardContent = document.createElement('p');\r\n        cardContent.classList.add('card-content');\r\n        cardContent.innerHTML = `¿En que podemos ayudarte? <br />\r\n        <i class=\"fab fa-whatsapp\"></i> ${phoneNumber}`\r\n                                \r\n    cardContainer.appendChild(cardTitle);\r\n    cardContainer.appendChild(cardContent);\r\n\r\n    return cardContainer;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/contact/contact-dependencies/contactNumber.js?");

/***/ }),

/***/ "./src/contact/contact-dependencies/socialMediaCreator.js":
/*!****************************************************************!*\
  !*** ./src/contact/contact-dependencies/socialMediaCreator.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"socialMedia\": () => (/* binding */ socialMedia)\n/* harmony export */ });\n\r\n\r\nconst socialMedia = () => {\r\n\r\n    const socialContainer = document.createElement('div');\r\n    socialContainer.classList.add('social-container');\r\n  \r\n    const kTwitter = document.createElement('a');\r\n    kTwitter.setAttribute('href', '#');\r\n    const twitter = document.createElement('i');\r\n    twitter.classList.add('fab', 'fa-twitter');\r\n    kTwitter.appendChild(twitter);\r\n  \r\n    const kInsta = document.createElement('a');\r\n    kInsta.setAttribute('href', '#');\r\n    const instagram = document.createElement('i');\r\n    instagram.classList.add('fab', 'fa-instagram');\r\n    kInsta.appendChild(instagram);\r\n\r\n    const kFace = document.createElement('a');\r\n    kFace.setAttribute('href', '#');\r\n    const facebook = document.createElement('i');\r\n    facebook.classList.add('fab', 'fa-facebook-square'); \r\n    kFace.appendChild(facebook);\r\n  \r\n    socialContainer.appendChild(kTwitter);\r\n    socialContainer.appendChild(kInsta);\r\n    socialContainer.appendChild(kFace);\r\n  \r\n    return socialContainer;\r\n  };\r\n\r\n  \n\n//# sourceURL=webpack://restaurant/./src/contact/contact-dependencies/socialMediaCreator.js?");

/***/ }),

/***/ "./src/contact/contactPage.js":
/*!************************************!*\
  !*** ./src/contact/contactPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactInit\": () => (/* binding */ contactInit)\n/* harmony export */ });\n/* harmony import */ var _general_dependencies_pageTitles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../general-dependencies/pageTitles */ \"./src/general-dependencies/pageTitles.js\");\n/* harmony import */ var _contact_dependencies_contactNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-dependencies/contactNumber */ \"./src/contact/contact-dependencies/contactNumber.js\");\n/* harmony import */ var _contact_dependencies_socialMediaCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-dependencies/socialMediaCreator */ \"./src/contact/contact-dependencies/socialMediaCreator.js\");\n\r\n\r\n\r\n\r\n\r\nconst contactInit = (() => {\r\n    const container =  document.getElementById('content');\r\n\r\n    //Page title\r\n    const menuTitle = (0,_general_dependencies_pageTitles__WEBPACK_IMPORTED_MODULE_0__.pageHeader)('Contacto')\r\n    container.appendChild(menuTitle);\r\n\r\n    //Contact card\r\n    const myContact = (0,_contact_dependencies_contactNumber__WEBPACK_IMPORTED_MODULE_1__.contactCard)('Bienvenido', 2222002200);\r\n    container.appendChild(myContact);\r\n\r\n    //Social media div\r\n    const myMedia = (0,_contact_dependencies_socialMediaCreator__WEBPACK_IMPORTED_MODULE_2__.socialMedia)();\r\n    container.appendChild(myMedia);\r\n\r\n})\r\n();\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/contact/contactPage.js?");

/***/ }),

/***/ "./src/general-dependencies/pageTitles.js":
/*!************************************************!*\
  !*** ./src/general-dependencies/pageTitles.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageHeader\": () => (/* binding */ pageHeader)\n/* harmony export */ });\n//This function creates the title for each page\r\nconst pageHeader = (headerText) => {\r\n    const header = document.createElement('div');\r\n    const pageTitle = document.createElement('h2');\r\n        pageTitle.classList.add('mainTitle');\r\n        pageTitle.textContent= headerText;\r\n\r\n    header.appendChild(pageTitle);\r\n\r\n    return header;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/general-dependencies/pageTitles.js?");

/***/ }),

/***/ "./src/home/homePage.js":
/*!******************************!*\
  !*** ./src/home/homePage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageInit\": () => (/* binding */ pageInit)\n/* harmony export */ });\n\r\n\r\nconst pageInit = (() =>{\r\n    const container = document.getElementById('content');\r\n    const mainImage = document.createElement('img');\r\n        mainImage.src = \"../images/mainImage/coffee-6632533_1920.jpg\";\r\n    const title = document.createElement('h1');\r\n        title.classList.add('title');\r\n        title.textContent = 'Kffto';\r\n    const slogan = document.createElement('h1'); \r\n        slogan.classList.add('slogan');\r\n        slogan.textContent = 'Vive la Experienccia del Café';    \r\n\r\n    container.appendChild(mainImage);\r\n    container.appendChild(title);\r\n    container.appendChild(slogan);  \r\n})\r\n();\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/home/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navigation_bar_navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation bar/navBar */ \"./src/navigation bar/navBar.js\");\n/* harmony import */ var _home_homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/homePage */ \"./src/home/homePage.js\");\n/* harmony import */ var _menu_menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menuPage */ \"./src/menu/menuPage.js\");\n/* harmony import */ var _contact_contactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contactPage */ \"./src/contact/contactPage.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu/menu-dependencies/menuSection&ItemsCreators.js":
/*!*****************************************************************!*\
  !*** ./src/menu/menu-dependencies/menuSection&ItemsCreators.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuItem\": () => (/* binding */ menuItem),\n/* harmony export */   \"menuSection\": () => (/* binding */ menuSection)\n/* harmony export */ });\n \r\n\r\n const menuSection = (menuSubText) => {\r\n\r\n\r\n    const mSection = document.createElement('section');\r\n        mSection.classList.add('sections');\r\n\r\n    const subTitle = document.createElement('h3');\r\n    subTitle.textContent = menuSubText;\r\n\r\n    mSection.appendChild(subTitle);\r\n\r\n    return mSection;\r\n\r\n\r\n };\r\n\r\n const menuItem = (itemName, itemDescription, itemPrice) => {\r\n\r\n    const menuItemContent = document.createElement('div');\r\n        menuItemContent.classList.add('menu-item');\r\n\r\n    const nameContainer = document.createElement('div');\r\n    const foodName = document.createElement('h4');\r\n        foodName.textContent = itemName;\r\n    const foodDescription = document.createElement('p');\r\n        foodDescription.textContent = itemDescription;\r\n    \r\n    nameContainer.appendChild(foodName);\r\n    nameContainer.appendChild(foodDescription);\r\n\r\n    const priceContainer = document.createElement('div');\r\n    const price = document.createElement('h5');\r\n        price.textContent = `$ ${itemPrice} MXN.`\r\n    \r\n    priceContainer.appendChild(price);\r\n\r\n    menuItemContent.appendChild(nameContainer);\r\n    menuItemContent.appendChild(priceContainer);\r\n\r\n    return menuItemContent;\r\n\r\n\r\n }\r\n\r\n\r\n\r\n\r\n\r\n \n\n//# sourceURL=webpack://restaurant/./src/menu/menu-dependencies/menuSection&ItemsCreators.js?");

/***/ }),

/***/ "./src/menu/menuPage.js":
/*!******************************!*\
  !*** ./src/menu/menuPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuInit\": () => (/* binding */ menuInit)\n/* harmony export */ });\n/* harmony import */ var _menu_dependencies_menuSection_ItemsCreators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-dependencies/menuSection&ItemsCreators */ \"./src/menu/menu-dependencies/menuSection&ItemsCreators.js\");\n/* harmony import */ var _general_dependencies_pageTitles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general-dependencies/pageTitles */ \"./src/general-dependencies/pageTitles.js\");\n\r\n\r\n\r\n\r\n\r\nconst menuInit = (() =>{\r\n    const container =  document.getElementById('content');\r\n\r\n    //Page title\r\n    const menuTitle = (0,_general_dependencies_pageTitles__WEBPACK_IMPORTED_MODULE_1__.pageHeader)('Menú')\r\n    container.appendChild(menuTitle);\r\n    \r\n    // First Section\r\n    const firstSection = (0,_menu_dependencies_menuSection_ItemsCreators__WEBPACK_IMPORTED_MODULE_0__.menuSection)('Bebidas calientes');\r\n    container.appendChild(firstSection);\r\n\r\n    //Menu elements for their respective sections, we are appending them to the variable that we declared as firstSection.\r\n    const cafeAmericano = (0,_menu_dependencies_menuSection_ItemsCreators__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Café Americano', 'Lorem ipsum dolor', '35.00');\r\n    firstSection.appendChild(cafeAmericano);    \r\n    const cappuccino = (0,_menu_dependencies_menuSection_ItemsCreators__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Cappuccino', 'Lorem ipsum dolor', '44.00');\r\n    firstSection.appendChild(cappuccino);\r\n    const moka = (0,_menu_dependencies_menuSection_ItemsCreators__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Moka', 'Lorem ipsum dolor', '50.00');\r\n    firstSection.appendChild(moka);  \r\n    \r\n    // Second Section\r\n    const secondSection = (0,_menu_dependencies_menuSection_ItemsCreators__WEBPACK_IMPORTED_MODULE_0__.menuSection)('Métodos de extracción');\r\n    container.appendChild(secondSection);\r\n\r\n    //Menu elements for their respective sections, we are appending them to the variable that we declared as secondSection.\r\n    const chemex = (0,_menu_dependencies_menuSection_ItemsCreators__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Chemex', 'Lorem ipsum dolor', '60.00');\r\n    secondSection.appendChild(chemex); \r\n    const v60 = (0,_menu_dependencies_menuSection_ItemsCreators__WEBPACK_IMPORTED_MODULE_0__.menuItem)('V60', 'Lorem ipsum dolor', '60.00');\r\n    secondSection.appendChild(v60); \r\n    const aeropress = (0,_menu_dependencies_menuSection_ItemsCreators__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Aeropress', 'Lorem ipsum dolor', '60.00');\r\n    secondSection.appendChild(aeropress); \r\n\r\n})\r\n();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/menu/menuPage.js?");

/***/ }),

/***/ "./src/navigation bar/navBar.js":
/*!**************************************!*\
  !*** ./src/navigation bar/navBar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navBar\": () => (/* binding */ navBar)\n/* harmony export */ });\n\r\nconst navBar =(() =>{\r\n\r\n    const navbarTitle = document.getElementById('navbar');\r\n\r\n    //Home button or \"Inicio\"\r\n    const home = document.createElement('button');\r\n    home.classList.add('nav-btn');\r\n    home.textContent = 'Kffto';\r\n\r\n    //About us button\r\n    const aboutUs = document.createElement('button');\r\n    aboutUs.classList.add('nav-btn');\r\n    aboutUs.textContent = 'Quienes somos';\r\n\r\n    //Menu button\r\n    const menu = document.createElement('button');\r\n    menu.classList.add('nav-btn');\r\n    menu.textContent = 'Menú';\r\n\r\n    //Contact button\r\n    const contact = document.createElement('button');\r\n    contact.classList.add('nav-btn');\r\n    contact.textContent = 'Contacto';\r\n\r\n\r\n\r\n    navbarTitle.appendChild(home); \r\n    navbarTitle.appendChild(aboutUs);\r\n    navbarTitle.appendChild(menu);\r\n    navbarTitle.appendChild(contact);\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/navigation_bar/navBar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;