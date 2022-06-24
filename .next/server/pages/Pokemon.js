"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/Pokemon";
exports.ids = ["pages/Pokemon"];
exports.modules = {

/***/ "./pages/Pokemon/index.jsx":
/*!*********************************!*\
  !*** ./pages/Pokemon/index.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AllPokemons)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/Card/Card */ \"./src/components/Card/Card.jsx\");\n\n\n\n// import styles from '../styles/Home.module.css'\n\nfunction AllPokemons() {\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://pokeapi.co/api/v2/pokemon?limit=151&offset=0\").then((response)=>setData(response.data)\n        );\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data?.results?.map((item, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    data: item.url\n                }, void 0, false, {\n                    fileName: \"/home/viniitalo/\\xc1rea de Trabalho/Sidney/pokedex/pages/Pokemon/index.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 25\n                }, this)\n            }, index, false, {\n                fileName: \"/home/viniitalo/\\xc1rea de Trabalho/Sidney/pokedex/pages/Pokemon/index.jsx\",\n                lineNumber: 22,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qb2tlbW9uL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQWtEO0FBQ3pCO0FBQ3pCLGlEQUFpRDtBQUNDO0FBRW5DLFNBQVNLLFdBQVcsR0FBRztJQUNsQyxNQUFNLEVBTlYsR0FNV0MsSUFBSSxHQU5mLEdBTWlCQyxPQUFPLE1BQUlMLCtDQUFRLEVBQUU7SUFFbENELGdEQUFTLENBQUMsSUFBTTtRQUNaRSxnREFDUSxDQUFDLHNEQUFzRCxDQUFDLENBQzNETSxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxHQUFLSCxPQUFPLENBQUNHLFFBQVEsQ0FBQ0osSUFBSSxDQUFDO1FBQUEsQ0FBQztLQUNsRCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBR1AscUJBQ0k7a0JBRUtBLElBQUksRUFBRUssT0FBTyxFQUFFQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxLQUFLLEdBQUs7WUFFakMscUJBQ0ksOERBQUNDLEtBQUc7MEJBQ0EsNEVBQUNYLGlFQUFJO29CQUFDRSxJQUFJLEVBQUVPLElBQUksQ0FBQ0csR0FBRzs7Ozs7d0JBQUk7ZUFEbEJGLEtBQUs7Ozs7b0JBRVQsQ0FDVDtTQUNKLENBQUM7cUJBSUgsQ0FDTjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZWRleC8uL3BhZ2VzL1Bva2Vtb24vaW5kZXguanN4PzVhMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2FyZC9DYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxsUG9rZW1vbnMoKSB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAuZ2V0KFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTE1MSZvZmZzZXQ9MFwiKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzZXREYXRhKHJlc3BvbnNlLmRhdGEpKVxuICAgIH0sIFtdKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiA8YnV0dG9uPjxhIGhyZWY9Jy8nIC8+dm9sdGFyPC9idXR0b24+ICovfVxuICAgICAgICAgICAge2RhdGE/LnJlc3VsdHM/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgZGF0YT17aXRlbS51cmx9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuXG5cblxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQ2FyZCIsIkFsbFBva2Vtb25zIiwiZGF0YSIsInNldERhdGEiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZXN1bHRzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGl2IiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Pokemon/index.jsx\n");

/***/ }),

/***/ "./src/components/Card/Card.jsx":
/*!**************************************!*\
  !*** ./src/components/Card/Card.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./src/components/Card/style.jsx\");\n\n/* eslint-disable react-hooks/rules-of-hooks */ \n\n\nfunction Card({ data  }) {\n    console.log(\"data\", data);\n    const infoAllPoke = (url)=>{\n        const { 0: poke , 1: setPoke  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n            axios__WEBPACK_IMPORTED_MODULE_1___default().get(url).then((response)=>{\n                setPoke(response.data);\n            });\n        }, []);\n        return poke;\n    };\n    const call = infoAllPoke(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Card, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Name, {\n                children: call?.name\n            }, void 0, false, {\n                fileName: \"/home/viniitalo/\\xc1rea de Trabalho/Sidney/pokedex/src/components/Card/Card.jsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                src: call?.sprites.other.dream_world.front_default\n            }, void 0, false, {\n                fileName: \"/home/viniitalo/\\xc1rea de Trabalho/Sidney/pokedex/src/components/Card/Card.jsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/viniitalo/\\xc1rea de Trabalho/Sidney/pokedex/src/components/Card/Card.jsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7QUFEQSwrQ0FBK0MsQ0FDckI7QUFDa0I7QUFDaEI7QUFFYixTQUFTSSxJQUFJLENBQUMsRUFBRUMsSUFBSSxHQUFFLEVBQUU7SUFDbkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sRUFBRUYsSUFBSSxDQUFDO0lBQ3pCLE1BQU1HLFdBQVcsR0FBRyxDQUFDQyxHQUFHLEdBQUs7UUFDekIsTUFBTSxFQVJkLEdBUWVDLElBQUksR0FSbkIsR0FRcUJDLE9BQU8sTUFBSVYsK0NBQVEsRUFBRTtRQUNsQ0MsZ0RBQVMsQ0FBQyxJQUFNO1lBQ1pGLGdEQUNRLENBQUNTLEdBQUcsQ0FBQyxDQUNSSSxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxHQUFLO2dCQUNoQkgsT0FBTyxDQUFDRyxRQUFRLENBQUNULElBQUksQ0FBQyxDQUFDO2FBRTFCLENBQUM7U0FDVCxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1AsT0FBT0ssSUFBSTtLQUNkO0lBR0QsTUFBTUssSUFBSSxHQUFHUCxXQUFXLENBQUNILElBQUksQ0FBQztJQUM5QixxQkFDSSw4REFBQ0Ysd0NBQU07OzBCQUNILDhEQUFDQSx3Q0FBTTswQkFBRVksSUFBSSxFQUFFRSxJQUFJOzs7OztvQkFBVTswQkFDN0IsOERBQUNkLHlDQUFPO2dCQUFDZ0IsR0FBRyxFQUFFSixJQUFJLEVBQUVLLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQUNDLGFBQWE7Ozs7O29CQUFJOzs7Ozs7WUFDMUQsQ0FDWjtDQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZWRleC8uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3g/Njk5NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rcyAqL1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCh7IGRhdGEgfSkge1xuICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKVxuICAgIGNvbnN0IGluZm9BbGxQb2tlID0gKHVybCkgPT4ge1xuICAgICAgICBjb25zdCBbcG9rZSwgc2V0UG9rZV0gPSB1c2VTdGF0ZSgpXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5nZXQodXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb2tlKHJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgW10pO1xuICAgICAgICByZXR1cm4gcG9rZVxuICAgIH1cblxuXG4gICAgY29uc3QgY2FsbCA9IGluZm9BbGxQb2tlKGRhdGEpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFMuQ2FyZCA+XG4gICAgICAgICAgICA8Uy5OYW1lPntjYWxsPy5uYW1lfTwvUy5OYW1lPlxuICAgICAgICAgICAgPFMuSW1hZ2Ugc3JjPXtjYWxsPy5zcHJpdGVzLm90aGVyLmRyZWFtX3dvcmxkLmZyb250X2RlZmF1bHR9IC8+XG4gICAgICAgIDwvUy5DYXJkPlxuICAgIClcblxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTIiwiQ2FyZCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaW5mb0FsbFBva2UiLCJ1cmwiLCJwb2tlIiwic2V0UG9rZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNhbGwiLCJOYW1lIiwibmFtZSIsIkltYWdlIiwic3JjIiwic3ByaXRlcyIsIm90aGVyIiwiZHJlYW1fd29ybGQiLCJmcm9udF9kZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Card/Card.jsx\n");

/***/ }),

/***/ "./src/components/Card/style.jsx":
/*!***************************************!*\
  !*** ./src/components/Card/style.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card),\n/* harmony export */   \"Image\": () => (/* binding */ Image),\n/* harmony export */   \"Name\": () => (/* binding */ Name)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Card = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`\n    margin: 20px;\n    height: 300px;\n    width: 200px;\n    border: 5px white solid;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    background:  gray  ;\n`;\nconst Name = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`\n    text-transform: uppercase;\n    font-weight: bold;\n`;\nconst Image = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`\n    width: 150px;\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL3N0eWxlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUVoQyxNQUFNQyxJQUFJLEdBQUdELDhEQUFVLENBQUM7Ozs7Ozs7Ozs7O0FBVy9CLENBQUM7QUFDTSxNQUFNRyxJQUFJLEdBQUdILDREQUFRLENBQUM7OztBQUc3QixDQUFDO0FBRU0sTUFBTUssS0FBSyxHQUFHTCw4REFBVSxDQUFDOztBQUVoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZWRleC8uL3NyYy9jb21wb25lbnRzL0NhcmQvc3R5bGUuanN4P2M0OGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbjogMjBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBib3JkZXI6IDVweCB3aGl0ZSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICBncmF5ICA7XG5gXG5leHBvcnQgY29uc3QgTmFtZSA9IHN0eWxlZC5wYFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gXG5cbmV4cG9ydCBjb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gICAgd2lkdGg6IDE1MHB4O1xuYFxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkNhcmQiLCJkaXYiLCJOYW1lIiwicCIsIkltYWdlIiwiaW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Card/style.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Pokemon/index.jsx"));
module.exports = __webpack_exports__;

})();