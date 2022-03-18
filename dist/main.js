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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n\r\n// import { pageInit } from \"./homePage\";\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuInit\": () => (/* binding */ menuInit)\n/* harmony export */ });\n\r\n\r\nconst menuInit = (() =>{\r\n    const container =  document.getElementById('content');\r\n\r\n    //Page title\r\n    const menuHeader = document.createElement('div');\r\n    const menuTitle = document.createElement('h2');\r\n        menuTitle.classList.add('mainTitle');\r\n        menuTitle.textContent= 'Menú';\r\n    \r\n    // First Section\r\n    const firstSection = document.createElement('section');\r\n        firstSection.classList.add('sections');\r\n    const firstSubTitle = document.createElement('h3');\r\n    firstSubTitle.textContent = 'Lorem ipsum';\r\n    //First Section div content\r\n    const divContent = document.createElement('div');\r\n        divContent.classList.add('menu-item');\r\n    const nameDescription = document.createElement('div');\r\n        const foodName = document.createElement('h4');\r\n            foodName.textContent = 'Plate´s or Beverage´s name';\r\n        const foodDescription = document.createElement('p'); \r\n            foodDescription.textContent = 'The description of this Plate or Beverage';\r\n    const foodPrice = document.createElement('div');\r\n        const price = document.createElement('h5');\r\n            price.textContent = '$ XX.XX MXN.'\r\n\r\n\r\n    \r\n\r\n    \r\n    menuHeader.appendChild(menuTitle);\r\n    container.appendChild(menuHeader);\r\n\r\n    nameDescription.appendChild(foodName);\r\n    nameDescription.appendChild(foodDescription);\r\n    foodPrice.appendChild(price);\r\n    divContent.appendChild(nameDescription);\r\n    divContent.appendChild(foodPrice);\r\n\r\n    firstSection.appendChild(firstSubTitle);\r\n    firstSection.appendChild(divContent);\r\n    \r\n    container.appendChild(firstSection);    \r\n})\r\n();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/menuPage.js?");

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navBar\": () => (/* binding */ navBar)\n/* harmony export */ });\n\r\nconst navBar =(() =>{\r\n\r\n    const navbarTitle = document.getElementById('navbar');\r\n\r\n    //Home button or \"Inicio\"\r\n    const home = document.createElement('button');\r\n    home.classList.add('nav-btn');\r\n    home.textContent = 'Kffto';\r\n\r\n    //About us button\r\n    const aboutUs = document.createElement('button');\r\n    aboutUs.classList.add('nav-btn');\r\n    aboutUs.textContent = 'Quienes somos';\r\n\r\n    //Menu button\r\n    const menu = document.createElement('button');\r\n    menu.classList.add('nav-btn');\r\n    menu.textContent = 'Menú';\r\n\r\n    //Contact button\r\n    const contact = document.createElement('button');\r\n    contact.classList.add('nav-btn');\r\n    contact.textContent = 'Contacto';\r\n\r\n\r\n\r\n    navbarTitle.appendChild(home); \r\n    navbarTitle.appendChild(aboutUs);\r\n    navbarTitle.appendChild(menu);\r\n    navbarTitle.appendChild(contact);\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/navBar.js?");

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