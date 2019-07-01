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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zoom */ "./src/js/zoom.js");
/* harmony import */ var _pencil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pencil */ "./src/js/pencil.js");
// eslint-disable-next-line import/named



let scale = 1;
const drawingArea = document.querySelector('.drawing-area');
// const ctx = canvas.getContext('2d');

Object(_zoom__WEBPACK_IMPORTED_MODULE_0__["addOnWheel"])(_pencil__WEBPACK_IMPORTED_MODULE_1__["canvas"], (e) => {
  const delta = e.deltaY;

  if (delta > 0) scale += 0.05;
  else scale -= 0.05;

  _pencil__WEBPACK_IMPORTED_MODULE_1__["canvas"].style.transform = `scale(${scale})`;

  e.preventDefault();
});

drawingArea.onmousedown = _pencil__WEBPACK_IMPORTED_MODULE_1__["pensil"];

function previewListDuplicate() {
  const btnDuplicate = document.querySelectorAll('.preview-list-duplicate');

  const previewList = document.querySelector('.preview-list-tile');
  const listSortable = document.querySelector('.preview-list-sortable');
  const previewDuplicate = previewList.cloneNode(true);

  [].forEach.call(btnDuplicate, (elem) => {
    // console.log(elem);
    elem.addEventListener('click', () => {
      console.log('a');
      listSortable.appendChild(previewDuplicate);
    }, false);
    console.log(elem);
  });
}

previewListDuplicate();


/***/ }),

/***/ "./src/js/pencil.js":
/*!**************************!*\
  !*** ./src/js/pencil.js ***!
  \**************************/
/*! exports provided: canvas, pensil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pensil", function() { return pensil; });
// export default class Draw {
//   constructor(canvas) {
//     this.canvas = canvas;
//   }

//   pensil(e) {
//     this.canvas.fillRect(e.offsetX, e.offsetY, 10, 10);
//   }
// }

const canvas = document.getElementById('canvas');
const previewListCanvas = document.querySelector('.canvas');

const pensil = function () {
  canvas.onmousemove = function (e) {
    const cParm = canvas.width / 100;
    const mC = x => (Math.floor(x / cParm) * cParm);
    canvas.getContext('2d').fillRect(mC(e.offsetX), mC(e.offsetY), cParm, cParm);
  };
  this.onmouseup = function () {
    canvas.onmousemove = null;
    const dataURL = canvas.toDataURL("image/png");
    previewListCanvas.style.backgroundImage = `url(${dataURL})`;
  };
};

// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/js/zoom.js":
/*!************************!*\
  !*** ./src/js/zoom.js ***!
  \************************/
/*! exports provided: addOnWheel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOnWheel", function() { return addOnWheel; });
function addOnWheel(elem, handler) {
  console.log('hello zoom');
  if (elem.addEventListener) {
    if ('onwheel' in document) {
      elem.addEventListener('wheel', handler);
    } else {
      // eslint-disable-next-line no-undef
      canvas.attachEvent('onmousewheel', handler);
    }
  }
}

// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map