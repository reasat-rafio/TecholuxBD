webpackHotUpdate_N_E("pages/index",{

/***/ "./src/store/reducers/searchbarReducer.tsx":
/*!*************************************************!*\
  !*** ./src/store/reducers/searchbarReducer.tsx ***!
  \*************************************************/
/*! exports provided: initialSearchbarState, searchReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialSearchbarState\", function() { return initialSearchbarState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchReducer\", function() { return searchReducer; });\n/* harmony import */ var _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ \"./src/store/types/index.tsx\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initialSearchbarState = {\n  isLoading: false,\n  globalLoading: false,\n  filterProducts: []\n};\nvar searchReducer = function searchReducer(state, action) {\n  switch (action.type) {\n    case _types__WEBPACK_IMPORTED_MODULE_2__[\"SEARCHBAR_LOADING_START\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: true\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_2__[\"SEARCHBAR_LOADING_END\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: false\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_2__[\"GET_SEARCHBAR_DATA\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        filterProducts: Object(_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(action.payload)\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_2__[\"GLOBAL_LOADING_START\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        globalLoading: true\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_2__[\"GLOBAL_LOADING_END\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        globalLoading: false\n      });\n\n    default:\n      return state;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3NlYXJjaGJhclJlZHVjZXIudHN4P2RiMzIiXSwibmFtZXMiOlsiaW5pdGlhbFNlYXJjaGJhclN0YXRlIiwiaXNMb2FkaW5nIiwiZ2xvYmFsTG9hZGluZyIsImZpbHRlclByb2R1Y3RzIiwic2VhcmNoUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlNFQVJDSEJBUl9MT0FESU5HX1NUQVJUIiwiU0VBUkNIQkFSX0xPQURJTkdfRU5EIiwiR0VUX1NFQVJDSEJBUl9EQVRBIiwicGF5bG9hZCIsIkdMT0JBTF9MT0FESU5HX1NUQVJUIiwiR0xPQkFMX0xPQURJTkdfRU5EIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFhTyxJQUFNQSxxQkFBcUIsR0FBRztBQUNsQ0MsV0FBUyxFQUFFLEtBRHVCO0FBRWxDQyxlQUFhLEVBQUUsS0FGbUI7QUFHbENDLGdCQUFjLEVBQUU7QUFIa0IsQ0FBOUI7QUFLQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBYUMsTUFBYixFQUFnQztBQUMxRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRyxTQUFLQyw4REFBTDtBQUNHLDZDQUFZSCxLQUFaO0FBQW1CSixpQkFBUyxFQUFFO0FBQTlCOztBQUNILFNBQUtRLDREQUFMO0FBQ0csNkNBQVlKLEtBQVo7QUFBbUJKLGlCQUFTLEVBQUU7QUFBOUI7O0FBQ0gsU0FBS1MseURBQUw7QUFDRyw2Q0FBWUwsS0FBWjtBQUFtQkYsc0JBQWMsRUFBRSwyS0FBSUcsTUFBTSxDQUFDSyxPQUFiO0FBQWpDOztBQUNILFNBQUtDLDJEQUFMO0FBQ0csNkNBQVlQLEtBQVo7QUFBbUJILHFCQUFhLEVBQUU7QUFBbEM7O0FBQ0gsU0FBS1cseURBQUw7QUFDRyw2Q0FBWVIsS0FBWjtBQUFtQkgscUJBQWEsRUFBRTtBQUFsQzs7QUFDSDtBQUNHLGFBQU9HLEtBQVA7QUFaTjtBQWNGLENBZk0iLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvc2VhcmNoYmFyUmVkdWNlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgR0VUX1NFQVJDSEJBUl9EQVRBLFxuICAgR0xPQkFMX0xPQURJTkdfU1RBUlQsXG4gICBTRUFSQ0hCQVJfTE9BRElOR19FTkQsXG4gICBTRUFSQ0hCQVJfTE9BRElOR19TVEFSVCxcbiAgIEdMT0JBTF9MT0FESU5HX0VORCxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQWN0aW9uID0ge1xuICAgdHlwZTogc3RyaW5nO1xuICAgcGF5bG9hZDogYW55O1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTZWFyY2hiYXJTdGF0ZSA9IHtcbiAgIGlzTG9hZGluZzogZmFsc2UsXG4gICBnbG9iYWxMb2FkaW5nOiBmYWxzZSxcbiAgIGZpbHRlclByb2R1Y3RzOiBbXSxcbn07XG5leHBvcnQgY29uc3Qgc2VhcmNoUmVkdWNlciA9IChzdGF0ZTogYW55LCBhY3Rpb246IEFjdGlvbikgPT4ge1xuICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBTRUFSQ0hCQVJfTE9BRElOR19TVEFSVDpcbiAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0xvYWRpbmc6IHRydWUgfTtcbiAgICAgIGNhc2UgU0VBUkNIQkFSX0xPQURJTkdfRU5EOlxuICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzTG9hZGluZzogZmFsc2UgfTtcbiAgICAgIGNhc2UgR0VUX1NFQVJDSEJBUl9EQVRBOlxuICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZpbHRlclByb2R1Y3RzOiBbLi4uYWN0aW9uLnBheWxvYWRdIH07XG4gICAgICBjYXNlIEdMT0JBTF9MT0FESU5HX1NUQVJUOlxuICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGdsb2JhbExvYWRpbmc6IHRydWUgfTtcbiAgICAgIGNhc2UgR0xPQkFMX0xPQURJTkdfRU5EOlxuICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGdsb2JhbExvYWRpbmc6IGZhbHNlIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/reducers/searchbarReducer.tsx\n");

/***/ })

})