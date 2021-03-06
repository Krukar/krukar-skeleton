/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var SCSS_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! SCSS/index */ \"./src/scss/index.scss\");\n/* harmony import */ var SCSS_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(SCSS_index__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utilities */ \"./src/js/utilities/index.js\");\n// Stylesheets\n\n\nconsole.log('index.js init');\n\n\n\nconsole.log(Utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n\n//# sourceURL=webpack:///./src/entry.js?");

/***/ }),

/***/ "./src/js/utilities/ajax.js":
/*!**********************************!*\
  !*** ./src/js/utilities/ajax.js ***!
  \**********************************/
/*! exports provided: get, post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"post\", function() { return post; });\nconst get = async (url) => {\n  const response = await fetch(url, {\n    method: 'GET',\n  });\n\n  if (!response.ok) throw response;\n\n  return response.json();\n};\n\nconst post = async (url, body) => {\n  const response = await fetch(url, {\n    method: 'POST',\n    body: JSON.stringify(body),\n  });\n\n  if (!response.ok) throw response;\n\n  return response.json();\n};\n\n\n//# sourceURL=webpack:///./src/js/utilities/ajax.js?");

/***/ }),

/***/ "./src/js/utilities/breakpoints.js":
/*!*****************************************!*\
  !*** ./src/js/utilities/breakpoints.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_variables_breakpoints_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/variables/_breakpoints.scss */ \"./src/scss/variables/_breakpoints.scss\");\n/* harmony import */ var _scss_variables_breakpoints_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_variables_breakpoints_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nObject.keys(_scss_variables_breakpoints_scss__WEBPACK_IMPORTED_MODULE_0___default.a).forEach((key) => {\n  _scss_variables_breakpoints_scss__WEBPACK_IMPORTED_MODULE_0___default.a[key] = parseInt(_scss_variables_breakpoints_scss__WEBPACK_IMPORTED_MODULE_0___default.a[key].slice(0, -2), 10);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_scss_variables_breakpoints_scss__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n\n//# sourceURL=webpack:///./src/js/utilities/breakpoints.js?");

/***/ }),

/***/ "./src/js/utilities/coordinates.js":
/*!*****************************************!*\
  !*** ./src/js/utilities/coordinates.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => new Promise((resolve, reject) => {\n  navigator.geolocation.getCurrentPosition(resolve, reject);\n}));\n\n\n//# sourceURL=webpack:///./src/js/utilities/coordinates.js?");

/***/ }),

/***/ "./src/js/utilities/index.js":
/*!***********************************!*\
  !*** ./src/js/utilities/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax */ \"./src/js/utilities/ajax.js\");\n/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoints */ \"./src/js/utilities/breakpoints.js\");\n/* harmony import */ var _coordinates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coordinates */ \"./src/js/utilities/coordinates.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  ajax: _ajax__WEBPACK_IMPORTED_MODULE_0__,\n  breakpoints: _breakpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  coordinates: _coordinates__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n});\n\n\n//# sourceURL=webpack:///./src/js/utilities/index.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"small\":\"576px\",\"medium\":\"768px\",\"large\":\"992px\",\"xlarge\":\"1400px\"};\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ }),

/***/ "./src/scss/variables/_breakpoints.scss":
/*!**********************************************!*\
  !*** ./src/scss/variables/_breakpoints.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"small\":\"576px\",\"medium\":\"768px\",\"large\":\"992px\",\"xlarge\":\"1400px\"};\n\n//# sourceURL=webpack:///./src/scss/variables/_breakpoints.scss?");

/***/ })

/******/ });