"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/common/Navbar.jsx":
/*!**************************************!*\
  !*** ./components/common/Navbar.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Navbar() {\n    _s();\n    function handleScroll() {\n        const bodyScroll = window.scrollY;\n        const navbar = document.querySelector(\".navbar\");\n        if (bodyScroll > 300) navbar.classList.add(\"nav-scroll\");\n        else navbar.classList.remove(\"nav-scroll\");\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    function handleDropdownMouseMove(event) {\n        event.currentTarget.querySelector(\".dropdown-menu\").classList.add(\"show\");\n    }\n    function handleDropdownMouseLeave(event) {\n        event.currentTarget.querySelector(\".dropdown-menu\").classList.remove(\"show\");\n    }\n    function handleToggleNav() {\n        if (document.querySelector(\".navbar .navbar-collapse\").classList.contains(\"show\")) {\n            document.querySelector(\".navbar .navbar-collapse\").classList.remove(\"show\");\n        } else if (!document.querySelector(\".navbar .navbar-collapse\").classList.contains(\"show\")) {\n            document.querySelector(\".navbar .navbar-collapse\").classList.add(\"show\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-expand-lg bord blur\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container o-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"logo icon-img-100\",\n                    href: \"#\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/assets/imgs/logo-light.png\",\n                        alt: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"navbar-toggler\",\n                    type: \"button\",\n                    \"data-toggle\": \"collapse\",\n                    \"data-target\": \"#navbarSupportedContent\",\n                    \"aria-controls\": \"navbarSupportedContent\",\n                    \"aria-expanded\": \"false\",\n                    \"aria-label\": \"Toggle navigation\",\n                    onClick: handleToggleNav,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"icon-bar\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-bars\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"collapse navbar-collapse justify-content-center\",\n                    id: \"navbarSupportedContent\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"navbar-nav\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"rolling-text\",\n                                        children: \"ΑΡΧΙΚΗ\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"/page-about\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"rolling-text\",\n                                        children: \"Η ΕΤΑΙΡΙΑ\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this),\n                            \"\\\\\\\\Here i am simply activating these for later\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"/page-services\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"rolling-text\",\n                                        children: \"ΥΠΗΡΕΣΙΕΣ\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"/portfolio-masonry\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"rolling-text\",\n                                        children: \"ΕΡΓΑ\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"/page-contact\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"rolling-text\",\n                                        children: \"ΕΠΙΚΟΙΝΩΝΙΑ\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"contact-button\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/page-contact\",\n                        className: \"butn butn-sm butn-bg main-colorbg radius-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text\",\n                            children: \"Free Anaysis\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                            lineNumber: 105,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/elias-elias/components/common/Navbar.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29tbW9uL05hdmJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3lDO0FBRXpDLFNBQVNFOztJQUNQLFNBQVNDO1FBQ1AsTUFBTUMsYUFBYUMsT0FBT0MsT0FBTztRQUNqQyxNQUFNQyxTQUFTQyxTQUFTQyxhQUFhLENBQUM7UUFFdEMsSUFBSUwsYUFBYSxLQUFLRyxPQUFPRyxTQUFTLENBQUNDLEdBQUcsQ0FBQzthQUN0Q0osT0FBT0csU0FBUyxDQUFDRSxNQUFNLENBQUM7SUFDL0I7SUFDQVgsZ0RBQVNBLENBQUM7UUFDUkksT0FBT1EsZ0JBQWdCLENBQUMsVUFBVVY7UUFDbEMsT0FBTyxJQUFNRSxPQUFPUyxtQkFBbUIsQ0FBQyxVQUFVWDtJQUNwRCxHQUFHLEVBQUU7SUFDTCxTQUFTWSx3QkFBd0JDLEtBQUs7UUFDcENBLE1BQU1DLGFBQWEsQ0FBQ1IsYUFBYSxDQUFDLGtCQUFrQkMsU0FBUyxDQUFDQyxHQUFHLENBQUM7SUFDcEU7SUFFQSxTQUFTTyx5QkFBeUJGLEtBQUs7UUFDckNBLE1BQU1DLGFBQWEsQ0FDaEJSLGFBQWEsQ0FBQyxrQkFDZEMsU0FBUyxDQUFDRSxNQUFNLENBQUM7SUFDdEI7SUFDQSxTQUFTTztRQUNQLElBQ0VYLFNBQ0dDLGFBQWEsQ0FBQyw0QkFDZEMsU0FBUyxDQUFDVSxRQUFRLENBQUMsU0FDdEI7WUFDQVosU0FDR0MsYUFBYSxDQUFDLDRCQUNkQyxTQUFTLENBQUNFLE1BQU0sQ0FBQztRQUN0QixPQUFPLElBQ0wsQ0FBQ0osU0FDRUMsYUFBYSxDQUFDLDRCQUNkQyxTQUFTLENBQUNVLFFBQVEsQ0FBQyxTQUN0QjtZQUNBWixTQUFTQyxhQUFhLENBQUMsNEJBQTRCQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUNuRTtJQUNGO0lBQ0EscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBRUYsV0FBVTtvQkFBb0JHLE1BQUs7OEJBQ3BDLDRFQUFDQzt3QkFBSUMsS0FBSTt3QkFBOEJDLEtBQUk7Ozs7Ozs7Ozs7OzhCQUc3Qyw4REFBQ0M7b0JBQ0NQLFdBQVU7b0JBQ1ZRLE1BQUs7b0JBQ0xDLGVBQVk7b0JBQ1pDLGVBQVk7b0JBQ1pDLGlCQUFjO29CQUNkQyxpQkFBYztvQkFDZEMsY0FBVztvQkFDWEMsU0FBU2pCOzhCQUVULDRFQUFDa0I7d0JBQUtmLFdBQVU7a0NBQ2QsNEVBQUNnQjs0QkFBRWhCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSWpCLDhEQUFDQztvQkFDQ0QsV0FBVTtvQkFDVmlCLElBQUc7OEJBRUgsNEVBQUNDO3dCQUFHbEIsV0FBVTs7MENBQ1osOERBQUNtQjtnQ0FBR25CLFdBQVU7MENBQ1osNEVBQUNFO29DQUFFRixXQUFVO29DQUFXRyxNQUFLOzhDQUMzQiw0RUFBQ1k7d0NBQUtmLFdBQVU7a0RBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR25DLDhEQUFDbUI7Z0NBQUduQixXQUFVOzBDQUNaLDRFQUFDRTtvQ0FBRUYsV0FBVTtvQ0FBV0csTUFBSzs4Q0FDM0IsNEVBQUNZO3dDQUFLZixXQUFVO2tEQUFlOzs7Ozs7Ozs7Ozs7Ozs7OzRCQUU5QjswQ0FJTCw4REFBQ21CO2dDQUFHbkIsV0FBVTswQ0FDWiw0RUFBQ0U7b0NBQUVGLFdBQVU7b0NBQVdHLE1BQUs7OENBQzNCLDRFQUFDWTt3Q0FBS2YsV0FBVTtrREFBZTs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHbkMsOERBQUNtQjtnQ0FBR25CLFdBQVU7MENBQ1osNEVBQUNFO29DQUFFRixXQUFVO29DQUFXRyxNQUFLOzhDQUMzQiw0RUFBQ1k7d0NBQUtmLFdBQVU7a0RBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR25DLDhEQUFDbUI7Z0NBQUduQixXQUFVOzBDQUNaLDRFQUFDRTtvQ0FBRUYsV0FBVTtvQ0FBV0csTUFBSzs4Q0FDM0IsNEVBQUNZO3dDQUFLZixXQUFVO2tEQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTXZDLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0U7d0JBQ0NDLE1BQUs7d0JBQ0xILFdBQVU7a0NBRVYsNEVBQUNlOzRCQUFLZixXQUFVO3NDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkM7R0EzR1NwQjtLQUFBQTtBQTZHVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1vbi9OYXZiYXIuanN4P2IyM2MiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcclxuICAgIGNvbnN0IGJvZHlTY3JvbGwgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcclxuXHJcbiAgICBpZiAoYm9keVNjcm9sbCA+IDMwMCkgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdi1zY3JvbGwnKTtcclxuICAgIGVsc2UgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1zY3JvbGwnKTtcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gIH0sIFtdKTtcclxuICBmdW5jdGlvbiBoYW5kbGVEcm9wZG93bk1vdXNlTW92ZShldmVudCkge1xyXG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tbWVudScpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZURyb3Bkb3duTW91c2VMZWF2ZShldmVudCkge1xyXG4gICAgZXZlbnQuY3VycmVudFRhcmdldFxyXG4gICAgICAucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLW1lbnUnKVxyXG4gICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVUb2dnbGVOYXYoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZScpXHJcbiAgICAgICAgLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpXHJcbiAgICApIHtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcignLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlJylcclxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgIWRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZScpXHJcbiAgICAgICAgLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpXHJcbiAgICApIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlJykuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBib3JkIGJsdXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgby1oaWRkZW5cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvIGljb24taW1nLTEwMFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1ncy9sb2dvLWxpZ2h0LnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxyXG4gICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxyXG4gICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGVOYXZ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIj48L2k+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcclxuICAgICAgICAgIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm9sbGluZy10ZXh0XCI+zpHOoc6nzpnOms6XPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3BhZ2UtYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvbGxpbmctdGV4dFwiPs6XIM6VzqTOkc6ZzqHOmc6RPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgXFxcXEhlcmUgaSBhbSBzaW1wbHkgYWN0aXZhdGluZyB0aGVzZSBmb3IgbGF0ZXJcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvcGFnZS1zZXJ2aWNlc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm9sbGluZy10ZXh0XCI+zqXOoM6XzqHOlc6jzpnOlc6jPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3BvcnRmb2xpby1tYXNvbnJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb2xsaW5nLXRleHRcIj7Olc6hzpPOkTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9wYWdlLWNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvbGxpbmctdGV4dFwiPs6VzqDOmc6azp/Omc6dzqnOnc6ZzpE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWJ1dHRvblwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cIi9wYWdlLWNvbnRhY3RcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXRuIGJ1dG4tc20gYnV0bi1iZyBtYWluLWNvbG9yYmcgcmFkaXVzLTVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+RnJlZSBBbmF5c2lzPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTmF2YmFyIiwiaGFuZGxlU2Nyb2xsIiwiYm9keVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJuYXZiYXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZURyb3Bkb3duTW91c2VNb3ZlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlRHJvcGRvd25Nb3VzZUxlYXZlIiwiaGFuZGxlVG9nZ2xlTmF2IiwiY29udGFpbnMiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImJ1dHRvbiIsInR5cGUiLCJkYXRhLXRvZ2dsZSIsImRhdGEtdGFyZ2V0IiwiYXJpYS1jb250cm9scyIsImFyaWEtZXhwYW5kZWQiLCJhcmlhLWxhYmVsIiwib25DbGljayIsInNwYW4iLCJpIiwiaWQiLCJ1bCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/common/Navbar.jsx\n"));

/***/ })

});