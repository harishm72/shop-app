webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/harish/mt-blue/shop-app/src/pages/home.js\",\n    _this = undefined;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Home() {\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(CategorySection, {\n    link: \"/mens-wear\",\n    title: \"Men's Outerwear\",\n    imgURL: \"/shop-app/images/mens_outerwear.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }), __jsx(CategorySection, {\n    link: \"/womens-wear\",\n    title: \"Ladies Outerwear\",\n    imgURL: \"/shop-app/images/ladies_outerwear.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"flex\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(CategorySection, {\n    link: \"/mens-tshirt\",\n    title: \"Men's T-Shirts\",\n    imgURL: \"/shop-app/images/mens_tshirts.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }), __jsx(CategorySection, {\n    link: \"/womens-tshirt\",\n    title: \"Ladies T-Shirts\",\n    imgURL: \"/shop-app/images/ladies_tshirts.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  })));\n}\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar CategorySection = function CategorySection(props) {\n  var link = props.link,\n      imgURL = props.imgURL,\n      title = props.title;\n  return __jsx(\"section\", {\n    className: \"mens-outerwear\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: link,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: imgURL,\n    alt: \"Men's Outerwear\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  })), __jsx(\"p\", {\n    className: \"category-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, title), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: link,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, \"SHOP NOW\")));\n};\n\n_c2 = CategorySection;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"CategorySection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUuanM/ODA3MyJdLCJuYW1lcyI6WyJIb21lIiwiQ2F0ZWdvcnlTZWN0aW9uIiwicHJvcHMiLCJsaW5rIiwiaW1nVVJMIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQ2QsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxlQUFEO0FBQ0UsUUFBSSxFQUFDLFlBRFA7QUFFRSxTQUFLLEVBQUMsaUJBRlI7QUFHRSxVQUFNLEVBQUMscUNBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUUsTUFBQyxlQUFEO0FBQ0UsUUFBSSxFQUFDLGNBRFA7QUFFRSxTQUFLLEVBQUMsa0JBRlI7QUFHRSxVQUFNLEVBQUMsdUNBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBV0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxlQUFEO0FBQ0UsUUFBSSxFQUFDLGNBRFA7QUFFRSxTQUFLLEVBQUMsZ0JBRlI7QUFHRSxVQUFNLEVBQUMsbUNBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUUsTUFBQyxlQUFEO0FBQ0UsUUFBSSxFQUFDLGdCQURQO0FBRUUsU0FBSyxFQUFDLGlCQUZSO0FBR0UsVUFBTSxFQUFDLHFDQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQVhGLENBREY7QUEwQkQ7O0tBM0JRQSxJO0FBNkJNQSxtRUFBZjs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ3pCQyxJQUR5QixHQUNERCxLQURDLENBQ3pCQyxJQUR5QjtBQUFBLE1BQ25CQyxNQURtQixHQUNERixLQURDLENBQ25CRSxNQURtQjtBQUFBLE1BQ1hDLEtBRFcsR0FDREgsS0FEQyxDQUNYRyxLQURXO0FBRWpDLFNBQ0U7QUFBUyxhQUFTLEVBQUMsZ0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFRixJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRUMsTUFBVjtBQUFrQixPQUFHLEVBQUMsaUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBRyxhQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQkMsS0FBL0IsQ0FKRixFQUtFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVGLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FMRixDQURGO0FBV0QsQ0FiRDs7TUFBTUYsZSIsImZpbGUiOiIuL3NyYy9wYWdlcy9ob21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q2F0ZWdvcnlTZWN0aW9uXG4gICAgICAgIGxpbms9XCIvbWVucy13ZWFyXCJcbiAgICAgICAgdGl0bGU9XCJNZW4ncyBPdXRlcndlYXJcIlxuICAgICAgICBpbWdVUkw9XCIvc2hvcC1hcHAvaW1hZ2VzL21lbnNfb3V0ZXJ3ZWFyLmpwZ1wiXG4gICAgICAvPlxuICAgICAgPENhdGVnb3J5U2VjdGlvblxuICAgICAgICBsaW5rPVwiL3dvbWVucy13ZWFyXCJcbiAgICAgICAgdGl0bGU9XCJMYWRpZXMgT3V0ZXJ3ZWFyXCJcbiAgICAgICAgaW1nVVJMPVwiL3Nob3AtYXBwL2ltYWdlcy9sYWRpZXNfb3V0ZXJ3ZWFyLmpwZ1wiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgIDxDYXRlZ29yeVNlY3Rpb25cbiAgICAgICAgICBsaW5rPVwiL21lbnMtdHNoaXJ0XCJcbiAgICAgICAgICB0aXRsZT1cIk1lbidzIFQtU2hpcnRzXCJcbiAgICAgICAgICBpbWdVUkw9XCIvc2hvcC1hcHAvaW1hZ2VzL21lbnNfdHNoaXJ0cy5qcGdcIlxuICAgICAgICAvPlxuICAgICAgICA8Q2F0ZWdvcnlTZWN0aW9uXG4gICAgICAgICAgbGluaz1cIi93b21lbnMtdHNoaXJ0XCJcbiAgICAgICAgICB0aXRsZT1cIkxhZGllcyBULVNoaXJ0c1wiXG4gICAgICAgICAgaW1nVVJMPVwiL3Nob3AtYXBwL2ltYWdlcy9sYWRpZXNfdHNoaXJ0cy5qcGdcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbmNvbnN0IENhdGVnb3J5U2VjdGlvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGxpbmssIGltZ1VSTCwgdGl0bGUgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1lbnMtb3V0ZXJ3ZWFyXCI+XG4gICAgICA8TGluayBocmVmPXtsaW5rfT5cbiAgICAgICAgPGltZyBzcmM9e2ltZ1VSTH0gYWx0PVwiTWVuJ3MgT3V0ZXJ3ZWFyXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNhdGVnb3J5LXRpdGxlXCI+e3RpdGxlfTwvcD5cbiAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PlxuICAgICAgICA8YnV0dG9uPlNIT1AgTk9XPC9idXR0b24+XG4gICAgICA8L0xpbms+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.js\n");

/***/ })

})