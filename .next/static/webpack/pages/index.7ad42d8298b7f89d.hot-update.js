/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/containers/home/HomeTestimonial.tsx":
/*!************************************************************!*\
  !*** ./src/components/containers/home/HomeTestimonial.tsx ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/Layout */ \"./src/components/layout/Layout.tsx\");\n/* harmony import */ var _components_layout_banner_HomeOneBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layout/banner/HomeOneBanner */ \"./src/components/layout/banner/HomeOneBanner.tsx\");\n/* harmony import */ var _components_containers_home_Agency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/containers/home/Agency */ \"./src/components/containers/home/Agency.tsx\");\n/* harmony import */ var _components_containers_home_PortfolioText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/containers/home/PortfolioText */ \"./src/components/containers/home/PortfolioText.tsx\");\n/* harmony import */ var _components_containers_home_HomeOffer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/containers/home/HomeOffer */ \"./src/components/containers/home/HomeOffer.tsx\");\n/* harmony import */ var _components_containers_home_HomeTestimonial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/containers/home/HomeTestimonial */ \"./src/components/containers/home/HomeTestimonial.tsx\");\n/* harmony import */ var _components_containers_home_HomeTestimonial__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_containers_home_HomeTestimonial__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_containers_home_HomeBlog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/containers/home/HomeBlog */ \"./src/components/containers/home/HomeBlog.tsx\");\n/* harmony import */ var _components_containers_home_HomeSponsor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/containers/home/HomeSponsor */ \"./src/components/containers/home/HomeSponsor.tsx\");\n/* harmony import */ var _components_containers_home_NextPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/containers/home/NextPage */ \"./src/components/containers/home/NextPage.tsx\");\n\n\n\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        header: 1,\n        footer: 1,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_banner_HomeOneBanner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\coding rakha\\\\agency-creative\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 15,\n                columnNumber: 8\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_containers_home_Agency__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\coding rakha\\\\agency-creative\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_containers_home_PortfolioText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\coding rakha\\\\agency-creative\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_containers_home_HomeOffer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\coding rakha\\\\agency-creative\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_containers_home_HomeTestimonial__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {\n                fileName: \"D:\\\\coding rakha\\\\agency-creative\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_containers_home_HomeBlog__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\coding rakha\\\\agency-creative\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_containers_home_HomeSponsor__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\coding rakha\\\\agency-creative\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_containers_home_NextPage__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\coding rakha\\\\agency-creative\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\coding rakha\\\\agency-creative\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDc0I7QUFDcUI7QUFDWjtBQUNjO0FBQ1I7QUFDWTtBQUNkO0FBQ007QUFDTjtBQUU3RCxNQUFNVSxPQUFPO0lBQ1gscUJBQ0UsOERBQUNULGlFQUFNQTtRQUFDVSxRQUFRO1FBQUdDLFFBQVE7OzBCQUN4Qiw4REFBQ1YsK0VBQWFBOzs7OzswQkFDZiw4REFBQ0MsMEVBQU1BOzs7OzswQkFDUCw4REFBQ0MsaUZBQWFBOzs7OzswQkFDZCw4REFBQ0MsNkVBQVNBOzs7OzswQkFDViw4REFBQ0Msb0ZBQWVBOzs7OzswQkFDaEIsOERBQUNDLDRFQUFRQTs7Ozs7MEJBQ1QsOERBQUNDLCtFQUFXQTs7Ozs7MEJBQ1osOERBQUNDLDZFQUFRQTs7Ozs7Ozs7Ozs7QUFHZjtLQWJNQztBQWVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBIb21lT25lQmFubmVyIGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0L2Jhbm5lci9Ib21lT25lQmFubmVyXCI7XHJcbmltcG9ydCBBZ2VuY3kgZnJvbSBcIkAvY29tcG9uZW50cy9jb250YWluZXJzL2hvbWUvQWdlbmN5XCI7XHJcbmltcG9ydCBQb3J0Zm9saW9UZXh0IGZyb20gXCJAL2NvbXBvbmVudHMvY29udGFpbmVycy9ob21lL1BvcnRmb2xpb1RleHRcIjtcclxuaW1wb3J0IEhvbWVPZmZlciBmcm9tIFwiQC9jb21wb25lbnRzL2NvbnRhaW5lcnMvaG9tZS9Ib21lT2ZmZXJcIjtcclxuaW1wb3J0IEhvbWVUZXN0aW1vbmlhbCBmcm9tIFwiQC9jb21wb25lbnRzL2NvbnRhaW5lcnMvaG9tZS9Ib21lVGVzdGltb25pYWxcIjtcclxuaW1wb3J0IEhvbWVCbG9nIGZyb20gXCJAL2NvbXBvbmVudHMvY29udGFpbmVycy9ob21lL0hvbWVCbG9nXCI7XHJcbmltcG9ydCBIb21lU3BvbnNvciBmcm9tIFwiQC9jb21wb25lbnRzL2NvbnRhaW5lcnMvaG9tZS9Ib21lU3BvbnNvclwiO1xyXG5pbXBvcnQgTmV4dFBhZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9jb250YWluZXJzL2hvbWUvTmV4dFBhZ2VcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgaGVhZGVyPXsxfSBmb290ZXI9ezF9ID5cclxuICAgICAgIDxIb21lT25lQmFubmVyIC8+XHJcbiAgICAgIDxBZ2VuY3kgLz5cclxuICAgICAgPFBvcnRmb2xpb1RleHQgLz5cclxuICAgICAgPEhvbWVPZmZlciAvPlxyXG4gICAgICA8SG9tZVRlc3RpbW9uaWFsIC8+XHJcbiAgICAgIDxIb21lQmxvZyAvPlxyXG4gICAgICA8SG9tZVNwb25zb3IgLz4gIFxyXG4gICAgICA8TmV4dFBhZ2UgLz4gIFxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkhvbWVPbmVCYW5uZXIiLCJBZ2VuY3kiLCJQb3J0Zm9saW9UZXh0IiwiSG9tZU9mZmVyIiwiSG9tZVRlc3RpbW9uaWFsIiwiSG9tZUJsb2ciLCJIb21lU3BvbnNvciIsIk5leHRQYWdlIiwiSG9tZSIsImhlYWRlciIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});