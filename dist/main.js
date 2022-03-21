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

/***/ "./src/contactNumber.js":
/*!******************************!*\
  !*** ./src/contactNumber.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactCard\": () => (/* binding */ contactCard)\n/* harmony export */ });\n\r\n\r\nconst contactCard = (title, phoneNumber) => {\r\n    const cardContainer = document.createElement('div');\r\n        cardContainer.classList.add('card-container');\r\n    const cardTitle = document.createElement('h3');\r\n        cardTitle.classList.add('card-title');\r\n        cardTitle.textContent = title;\r\n    const cardContent = document.createElement('p');\r\n        cardContent.classList.add('card-content');\r\n        cardContent.innerHTML = `¿En que podemos ayudarte? <br />\r\n                                ${phoneNumber}`\r\n                                \r\n    cardContainer.appendChild(cardTitle);\r\n    cardContainer.appendChild(cardContent);\r\n\r\n    return cardContainer;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/contactNumber.js?");

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactInit\": () => (/* binding */ contactInit)\n/* harmony export */ });\n/* harmony import */ var _pageTitles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageTitles */ \"./src/pageTitles.js\");\n/* harmony import */ var _contactNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactNumber */ \"./src/contactNumber.js\");\n/* harmony import */ var _socialMediaCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socialMediaCreator */ \"./src/socialMediaCreator.js\");\n\r\n\r\n\r\n\r\n\r\nconst contactInit = (() => {\r\n    const container =  document.getElementById('content');\r\n\r\n    //Page title\r\n    const menuTitle = (0,_pageTitles__WEBPACK_IMPORTED_MODULE_0__.pageHeader)('Contacto')\r\n    container.appendChild(menuTitle);\r\n\r\n    //Contact card\r\n    const myContact = (0,_contactNumber__WEBPACK_IMPORTED_MODULE_1__.contactCard)('Bienvenido', 2222002200);\r\n    container.appendChild(myContact);\r\n\r\n    //Social media div\r\n    const myMedia = (0,_socialMediaCreator__WEBPACK_IMPORTED_MODULE_2__.socialMedia)();\r\n    container.appendChild(myMedia);\r\n\r\n})\r\n();\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/contactPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n\r\n// import { pageInit } from \"./homePage\";\r\n// import { menuInit } from \"./menuPage\";\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navBar\": () => (/* binding */ navBar)\n/* harmony export */ });\n\r\nconst navBar =(() =>{\r\n\r\n    const navbarTitle = document.getElementById('navbar');\r\n\r\n    //Home button or \"Inicio\"\r\n    const home = document.createElement('button');\r\n    home.classList.add('nav-btn');\r\n    home.textContent = 'Kffto';\r\n\r\n    //About us button\r\n    const aboutUs = document.createElement('button');\r\n    aboutUs.classList.add('nav-btn');\r\n    aboutUs.textContent = 'Quienes somos';\r\n\r\n    //Menu button\r\n    const menu = document.createElement('button');\r\n    menu.classList.add('nav-btn');\r\n    menu.textContent = 'Menú';\r\n\r\n    //Contact button\r\n    const contact = document.createElement('button');\r\n    contact.classList.add('nav-btn');\r\n    contact.textContent = 'Contacto';\r\n\r\n\r\n\r\n    navbarTitle.appendChild(home); \r\n    navbarTitle.appendChild(aboutUs);\r\n    navbarTitle.appendChild(menu);\r\n    navbarTitle.appendChild(contact);\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/navBar.js?");

/***/ }),

/***/ "./src/pageTitles.js":
/*!***************************!*\
  !*** ./src/pageTitles.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageHeader\": () => (/* binding */ pageHeader)\n/* harmony export */ });\n//This function creates the title for each page\r\nconst pageHeader = (headerText) => {\r\n    const header = document.createElement('div');\r\n    const pageTitle = document.createElement('h2');\r\n        pageTitle.classList.add('mainTitle');\r\n        pageTitle.textContent= headerText;\r\n\r\n    header.appendChild(pageTitle);\r\n\r\n    return header;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/pageTitles.js?");

/***/ }),

/***/ "./src/socialMediaCreator.js":
/*!***********************************!*\
  !*** ./src/socialMediaCreator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"socialMedia\": () => (/* binding */ socialMedia)\n/* harmony export */ });\n\r\n\r\nconst socialMedia = () => {\r\n\r\n    const socialContainer = document.createElement('div');\r\n    socialContainer.classList.add('social-container');\r\n  \r\n    const kTwitter = document.createElement('a');\r\n    kTwitter.setAttribute('href', '#');\r\n    const twitter = document.createElement('i');\r\n    twitter.classList.add('fab', 'fa-twitter');\r\n    kTwitter.appendChild(twitter);\r\n  \r\n    const kInsta = document.createElement('a');\r\n    kInsta.setAttribute('href', '#');\r\n    const instagram = document.createElement('i');\r\n    instagram.classList.add('fab', 'fa-instagram');\r\n    kInsta.appendChild(instagram);\r\n\r\n    const kFace = document.createElement('a');\r\n    kFace.setAttribute('href', '#');\r\n    const facebook = document.createElement('i');\r\n    facebook.classList.add('fab', 'fa-facebook-square'); \r\n    kFace.appendChild(facebook);\r\n  \r\n    socialContainer.appendChild(kTwitter);\r\n    socialContainer.appendChild(kInsta);\r\n    socialContainer.appendChild(kFace);\r\n  \r\n    return socialContainer;\r\n  };\r\n\r\n  \n\n//# sourceURL=webpack://restaurant/./src/socialMediaCreator.js?");

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