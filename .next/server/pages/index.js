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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"entre\": \"Home_entre__FfuOY\",\n\t\"button\": \"Home_button__Zs7A2\",\n\t\"page\": \"Home_page__0ydta\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlZGV4Ly4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz9iMTcwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZW50cmVcIjogXCJIb21lX2VudHJlX19GZnVPWVwiLFxuXHRcImJ1dHRvblwiOiBcIkhvbWVfYnV0dG9uX19aczdBMlwiLFxuXHRcInBhZ2VcIjogXCJIb21lX3BhZ2VfXzB5ZHRhXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Modal/Modal */ \"./src/components/Modal/Modal.jsx\");\n\n/* eslint-disable @next/next/no-html-link-for-pages */ \n\n\n\n\nfunction Home() {\n    const { 0: abilities , 1: setAbilities  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: pokemon , 1: setPokemon  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: openModal , 1: setOpenModal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const pokemonAbilities = (choice)=>{\n        axios__WEBPACK_IMPORTED_MODULE_3___default().get(`https://pokeapi.co/api/v2/pokemon/${choice}`).then((response)=>setAbilities(response.data)\n        );\n        setOpenModal(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Pokedex\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\pages\\\\index.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\pages\\\\index.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\pages\\\\index.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    openModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        nome: abilities?.name,\n                        tipo: abilities && abilities?.types[0]?.type?.name,\n                        hp: abilities && abilities?.stats[0].base_stat,\n                        ataque: abilities && abilities?.stats[1].base_stat,\n                        defesa: abilities && abilities?.stats[2].base_stat,\n                        ataqueEspecial: abilities && abilities?.stats[3].base_stat,\n                        defesaEspecial: abilities && abilities?.stats[4].base_stat,\n                        velocidade: abilities && abilities?.stats[5].base_stat,\n                        imagem: abilities?.sprites?.other[\"official-artwork\"]?.front_default,\n                        alt: \"\",\n                        setOpenModal: setOpenModal\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\pages\\\\index.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: (e)=>setPokemon(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\pages\\\\index.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().entre),\n                                onClick: ()=>pokemonAbilities(pokemon)\n                                ,\n                                children: \" Entre\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\pages\\\\index.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/Pokemon\",\n                                    children: \"Todos Pokemons\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\pages\\\\index.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 45\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\pages\\\\index.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\pages\\\\index.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\pages\\\\index.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\pages\\\\index.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzBDQUFFLDRFQUFDa0QsR0FBQztvQ0FBQ0MsSUFBSSxFQUFDLFVBQVU7OENBQUMsZ0JBQWM7Ozs7O3dDQUFJOzs7OztvQ0FBUzs7Ozs7OzRCQUM1RTs7Ozs7O29CQUNEOzs7Ozs7WUFDRixDQUNSO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlZGV4Ly4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1odG1sLWxpbmstZm9yLXBhZ2VzICovXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2FiaWxpdGllcywgc2V0QWJpbGl0aWVzXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW3Bva2Vtb24sIHNldFBva2Vtb25dID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbb3Blbk1vZGFsLCBzZXRPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IHBva2Vtb25BYmlsaXRpZXMgPSAoY2hvaWNlKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtjaG9pY2V9YClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzZXRBYmlsaXRpZXMocmVzcG9uc2UuZGF0YSkpXHJcbiAgICBzZXRPcGVuTW9kYWwodHJ1ZSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlBva2VkZXg8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufSA+XHJcbiAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvOS85OC9JbnRlcm5hdGlvbmFsX1BvayVDMyVBOW1vbl9sb2dvLnN2Zy8xMjAwcHgtSW50ZXJuYXRpb25hbF9Qb2slQzMlQTltb25fbG9nby5zdmcucG5nJyAvPlxyXG5cclxuICAgICAgICB7b3Blbk1vZGFsICYmXHJcbiAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgbm9tZT17YWJpbGl0aWVzPy5uYW1lfVxyXG4gICAgICAgICAgICB0aXBvPXthYmlsaXRpZXMgJiYgYWJpbGl0aWVzPy50eXBlc1swXT8udHlwZT8ubmFtZX1cclxuICAgICAgICAgICAgaHA9e2FiaWxpdGllcyAmJiBhYmlsaXRpZXM/LnN0YXRzWzBdLmJhc2Vfc3RhdH1cclxuICAgICAgICAgICAgYXRhcXVlPXthYmlsaXRpZXMgJiYgYWJpbGl0aWVzPy5zdGF0c1sxXS5iYXNlX3N0YXR9XHJcbiAgICAgICAgICAgIGRlZmVzYT17YWJpbGl0aWVzICYmIGFiaWxpdGllcz8uc3RhdHNbMl0uYmFzZV9zdGF0fVxyXG4gICAgICAgICAgICBhdGFxdWVFc3BlY2lhbD17YWJpbGl0aWVzICYmIGFiaWxpdGllcz8uc3RhdHNbM10uYmFzZV9zdGF0fVxyXG4gICAgICAgICAgICBkZWZlc2FFc3BlY2lhbD17YWJpbGl0aWVzICYmIGFiaWxpdGllcz8uc3RhdHNbNF0uYmFzZV9zdGF0fVxyXG4gICAgICAgICAgICB2ZWxvY2lkYWRlPXthYmlsaXRpZXMgJiYgYWJpbGl0aWVzPy5zdGF0c1s1XS5iYXNlX3N0YXR9XHJcbiAgICAgICAgICAgIGltYWdlbT17YWJpbGl0aWVzPy5zcHJpdGVzPy5vdGhlcltcIm9mZmljaWFsLWFydHdvcmtcIl0/LmZyb250X2RlZmF1bHR9IGFsdD1cIlwiXHJcbiAgICAgICAgICAgIHNldE9wZW5Nb2RhbD17c2V0T3Blbk1vZGFsfSAvPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldFBva2Vtb24oZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5lbnRyZX0gb25DbGljaz17KCkgPT4gcG9rZW1vbkFiaWxpdGllcyhwb2tlbW9uKX0gPiBFbnRyZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PjxhIGhyZWY9XCIvUG9rZW1vblwiPlRvZG9zIFBva2Vtb25zPC9hPjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2RpdiA+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwidXNlU3RhdGUiLCJheGlvcyIsIk1vZGFsIiwiSG9tZSIsImFiaWxpdGllcyIsInNldEFiaWxpdGllcyIsInBva2Vtb24iLCJzZXRQb2tlbW9uIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwicG9rZW1vbkFiaWxpdGllcyIsImNob2ljZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1haW4iLCJpbWciLCJzcmMiLCJub21lIiwibmFtZSIsInRpcG8iLCJ0eXBlcyIsInR5cGUiLCJocCIsInN0YXRzIiwiYmFzZV9zdGF0IiwiYXRhcXVlIiwiZGVmZXNhIiwiYXRhcXVlRXNwZWNpYWwiLCJkZWZlc2FFc3BlY2lhbCIsInZlbG9jaWRhZGUiLCJpbWFnZW0iLCJzcHJpdGVzIiwib3RoZXIiLCJmcm9udF9kZWZhdWx0IiwiYWx0IiwiaW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsImVudHJlIiwib25DbGljayIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "./src/components/Modal/Modal.jsx":
/*!****************************************!*\
  !*** ./src/components/Modal/Modal.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./src/components/Modal/style.jsx\");\n\n\n\nfunction Modal({ nome , tipo , hp , ataque , defesa , ataqueEspecial , defesaEspecial , velocidade , imagem , setOpenModal ={\n    setOpenModal\n}  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Nome:\",\n                            nome\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\src\\\\components\\\\Modal\\\\Modal.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Tipo:\",\n                            tipo\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\src\\\\components\\\\Modal\\\\Modal.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"HP:\",\n                            hp\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\src\\\\components\\\\Modal\\\\Modal.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Ataque:\",\n                            ataque\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\src\\\\components\\\\Modal\\\\Modal.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Defesa:\",\n                            defesa\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\src\\\\components\\\\Modal\\\\Modal.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Ataque-Especial:\",\n                            ataqueEspecial\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\src\\\\components\\\\Modal\\\\Modal.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Defesa-Especial:\",\n                            defesaEspecial\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\src\\\\components\\\\Modal\\\\Modal.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Velocidade:\",\n                            velocidade\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\src\\\\components\\\\Modal\\\\Modal.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\src\\\\components\\\\Modal\\\\Modal.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                    src: imagem\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\src\\\\components\\\\Modal\\\\Modal.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\src\\\\components\\\\Modal\\\\Modal.jsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Botao, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.X, {\n                    onClick: ()=>setOpenModal(false)\n                    ,\n                    children: \"X\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\src\\\\components\\\\Modal\\\\Modal.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\src\\\\components\\\\Modal\\\\Modal.jsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\opah\\\\Pictures\\\\layouts\\\\Sidney\\\\pokedex\\\\src\\\\components\\\\Modal\\\\Modal.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9Nb2RhbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDRztBQUViLFNBQVNFLEtBQUssQ0FBQyxFQUFFQyxJQUFJLEdBQUVDLElBQUksR0FBRUMsRUFBRSxHQUFFQyxNQUFNLEdBQUVDLE1BQU0sR0FBRUMsY0FBYyxHQUFFQyxjQUFjLEdBQUVDLFVBQVUsR0FBRUMsTUFBTSxHQUFFQyxZQUFZLEVBQUc7SUFBRUEsWUFBWTtDQUFFLEdBQUUsRUFBRTtJQUVuSixxQkFDSSw4REFBQ1gsNkNBQVc7OzBCQUNSLDhEQUFDQSw4Q0FBWTs7a0NBQ1QsOERBQUNjLEdBQUM7OzRCQUFDLE9BQUs7NEJBQUNaLElBQUk7Ozs7Ozs0QkFBSztrQ0FDbEIsOERBQUNZLEdBQUM7OzRCQUFDLE9BQUs7NEJBQUNYLElBQUk7Ozs7Ozs0QkFBSztrQ0FDbEIsOERBQUNXLEdBQUM7OzRCQUFDLEtBQUc7NEJBQUNWLEVBQUU7Ozs7Ozs0QkFBSztrQ0FDZCw4REFBQ1UsR0FBQzs7NEJBQUMsU0FBTzs0QkFBQ1QsTUFBTTs7Ozs7OzRCQUFLO2tDQUN0Qiw4REFBQ1MsR0FBQzs7NEJBQUMsU0FBTzs0QkFBQ1IsTUFBTTs7Ozs7OzRCQUFLO2tDQUN0Qiw4REFBQ1EsR0FBQzs7NEJBQUMsa0JBQWdCOzRCQUFDUCxjQUFjOzs7Ozs7NEJBQUs7a0NBQ3ZDLDhEQUFDTyxHQUFDOzs0QkFBQyxrQkFBZ0I7NEJBQUNOLGNBQWM7Ozs7Ozs0QkFBSztrQ0FDdkMsOERBQUNNLEdBQUM7OzRCQUFDLGFBQVc7NEJBQUNMLFVBQVU7Ozs7Ozs0QkFBSzs7Ozs7O29CQUNuQjswQkFDZiw4REFBQ00sS0FBRzswQkFDQSw0RUFBQ2YseUNBQU87b0JBQUNpQixHQUFHLEVBQUVQLE1BQU07Ozs7O3dCQUFZOzs7OztvQkFDOUI7MEJBQ04sOERBQUNWLHlDQUFPOzBCQUNKLDRFQUFDQSxxQ0FBRztvQkFBQ29CLE9BQU8sRUFBRSxJQUFNVCxZQUFZLENBQUMsS0FBSyxDQUFDO29CQUFBOzhCQUFFLEdBQUM7Ozs7O3dCQUFNOzs7OztvQkFDMUM7Ozs7OztZQUNDLENBQ2xCO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlZGV4Ly4vc3JjL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuanN4PzEwOWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbCh7IG5vbWUsIHRpcG8sIGhwLCBhdGFxdWUsIGRlZmVzYSwgYXRhcXVlRXNwZWNpYWwsIGRlZmVzYUVzcGVjaWFsLCB2ZWxvY2lkYWRlLCBpbWFnZW0sIHNldE9wZW5Nb2RhbCA9IHsgc2V0T3Blbk1vZGFsIH0gfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFMuQ29udGFpbmVyID5cclxuICAgICAgICAgICAgPFMuVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxwPk5vbWU6e25vbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+VGlwbzp7dGlwb308L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5IUDp7aHB9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+QXRhcXVlOnthdGFxdWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+RGVmZXNhOntkZWZlc2F9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+QXRhcXVlLUVzcGVjaWFsOnthdGFxdWVFc3BlY2lhbH08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5EZWZlc2EtRXNwZWNpYWw6e2RlZmVzYUVzcGVjaWFsfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlZlbG9jaWRhZGU6e3ZlbG9jaWRhZGV9PC9wPlxyXG4gICAgICAgICAgICA8L1MuVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTLkltYWdlIHNyYz17aW1hZ2VtfT48L1MuSW1hZ2U+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Uy5Cb3Rhbz5cclxuICAgICAgICAgICAgICAgIDxTLlggb25DbGljaz17KCkgPT4gc2V0T3Blbk1vZGFsKGZhbHNlKX0+WDwvUy5YPlxyXG4gICAgICAgICAgICA8L1MuQm90YW8+XHJcbiAgICAgICAgPC9TLkNvbnRhaW5lciA+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUyIsIk1vZGFsIiwibm9tZSIsInRpcG8iLCJocCIsImF0YXF1ZSIsImRlZmVzYSIsImF0YXF1ZUVzcGVjaWFsIiwiZGVmZXNhRXNwZWNpYWwiLCJ2ZWxvY2lkYWRlIiwiaW1hZ2VtIiwic2V0T3Blbk1vZGFsIiwiQ29udGFpbmVyIiwiVHlwb2dyYXBoeSIsInAiLCJkaXYiLCJJbWFnZSIsInNyYyIsIkJvdGFvIiwiWCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Modal/Modal.jsx\n");

/***/ }),

/***/ "./src/components/Modal/style.jsx":
/*!****************************************!*\
  !*** ./src/components/Modal/style.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Botao\": () => (/* binding */ Botao),\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Image\": () => (/* binding */ Image),\n/* harmony export */   \"Typography\": () => (/* binding */ Typography),\n/* harmony export */   \"X\": () => (/* binding */ X)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`\r\n    background-image: url(https://cdn-icons-png.flaticon.com/512/188/188918.png);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: fixed;\r\n    width: 700px;\r\n    height: 600px;\r\n    color: black;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    z-index: 10;\r\n`;\nconst Botao = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 20px;\r\n    cursor: pointer;\r\n`;\nconst X = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`\r\n    font-size: larger;\r\n    color: black;\r\n    font-weight: bold;\r\n`;\nconst Image = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`\r\n    width: 450px;\r\n    height: 450px;\r\n`;\nconst Typography = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`\r\n    font-size: larger;\r\n    font-weight: bold;\r\n    border: 2px black solid;\r\n    border-radius: 20px;\r\n    text-transform: capitalize;\r\n    background-color: white;\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9zdHlsZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUVoQyxNQUFNQyxTQUFTLEdBQUdELGtFQUFjLENBQUM7QUFleEMsT0FBTyxNQUFNRyxLQUFLLEdBQUdILE1BQU0sQ0FBQ0ksR0FBRyxDQUFDO0FBT2hDLE9BQU8sTUFBTUMsQ0FBQyxHQUFHTCxNQUFNLENBQUNNLENBQUMsQ0FBQztBQU0xQixPQUFPLE1BQU1DLEtBQUssR0FBR1AsTUFBTSxDQUFDUSxHQUFHLENBQUM7QUFLaEMsT0FBTyxNQUFNQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bva2VkZXgvLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9zdHlsZS5qc3g/MWViNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzE4OC8xODg5MTgucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJvdGFvID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBYID0gc3R5bGVkLnBgXHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFR5cG9ncmFwaHkgPSBzdHlsZWQuZGl2YFxyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwic2VjdGlvbiIsIkJvdGFvIiwiZGl2IiwiWCIsInAiLCJJbWFnZSIsImltZyIsIlR5cG9ncmFwaHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Modal/style.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();