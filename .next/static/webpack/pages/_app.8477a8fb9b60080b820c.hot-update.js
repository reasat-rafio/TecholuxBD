webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/store/index.tsx":
/*!*****************************!*\
  !*** ./src/store/index.tsx ***!
  \*****************************/
/*! exports provided: GlobalState, useCtx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalState\", function() { return GlobalState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCtx\", function() { return useCtx; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_snackbarReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/snackbarReducer */ \"./src/store/reducers/snackbarReducer.tsx\");\n/* harmony import */ var _reducers_searchbarReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/searchbarReducer */ \"./src/store/reducers/searchbarReducer.tsx\");\n/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/userReducer */ \"./src/store/reducers/userReducer.tsx\");\n\n\nvar _jsxFileName = \"/media/reasat-rafio/Local dowg/programming/PRODUCTION/technoLuxBD/src/store/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\nvar Store = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null);\nvar GlobalState = function GlobalState(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_4__[\"userReducer\"], _reducers_userReducer__WEBPACK_IMPORTED_MODULE_4__[\"initialUserState\"], function () {\n    if (true) {\n      var localData = localStorage.getItem(\"userState\");\n      return localData ? JSON.parse(localData) : _reducers_userReducer__WEBPACK_IMPORTED_MODULE_4__[\"initialUserState\"];\n    }\n\n    return _reducers_searchbarReducer__WEBPACK_IMPORTED_MODULE_3__[\"initialSearchbarState\"];\n  }),\n      userState = _useReducer[0],\n      userDispatch = _useReducer[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    localStorage.setItem(\"userState\", JSON.stringify(userState));\n  }, [userState]);\n\n  var _useReducer2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(_reducers_searchbarReducer__WEBPACK_IMPORTED_MODULE_3__[\"searchReducer\"], _reducers_searchbarReducer__WEBPACK_IMPORTED_MODULE_3__[\"initialSearchbarState\"]),\n      searchState = _useReducer2[0],\n      searchDispatch = _useReducer2[1];\n\n  var _useReducer3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(_reducers_snackbarReducer__WEBPACK_IMPORTED_MODULE_2__[\"snackbarReducer\"], _reducers_snackbarReducer__WEBPACK_IMPORTED_MODULE_2__[\"initialSnackbarState\"]),\n      snackbarState = _useReducer3[0],\n      snackbarDispatch = _useReducer3[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Store.Provider, {\n    value: {\n      snackbarState: snackbarState,\n      snackbarDispatch: snackbarDispatch,\n      searchState: searchState,\n      searchDispatch: searchDispatch,\n      userState: userState,\n      userDispatch: userDispatch\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 7\n  }, _this);\n};\n\n_s(GlobalState, \"N6Cnfm195eatWuFsnztQdLUOYGE=\");\n\n_c = GlobalState;\nvar useCtx = function useCtx() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(Store);\n};\n\n_s2(useCtx, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"GlobalState\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2luZGV4LnRzeD9mMjBmIl0sIm5hbWVzIjpbIlN0b3JlIiwiY3JlYXRlQ29udGV4dCIsIkdsb2JhbFN0YXRlIiwiY2hpbGRyZW4iLCJ1c2VSZWR1Y2VyIiwidXNlclJlZHVjZXIiLCJpbml0aWFsVXNlclN0YXRlIiwibG9jYWxEYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImluaXRpYWxTZWFyY2hiYXJTdGF0ZSIsInVzZXJTdGF0ZSIsInVzZXJEaXNwYXRjaCIsInVzZUVmZmVjdCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzZWFyY2hSZWR1Y2VyIiwic2VhcmNoU3RhdGUiLCJzZWFyY2hEaXNwYXRjaCIsInNuYWNrYmFyUmVkdWNlciIsImluaXRpYWxTbmFja2JhclN0YXRlIiwic25hY2tiYXJTdGF0ZSIsInNuYWNrYmFyRGlzcGF0Y2giLCJ1c2VDdHgiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQUlBO0FBRUEsSUFBTUEsS0FBSyxnQkFBR0MsMkRBQWEsQ0FBTSxJQUFOLENBQTNCO0FBYU8sSUFBTUMsV0FBaUMsR0FBRyxTQUFwQ0EsV0FBb0MsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsb0JBQzlCQyx3REFBVSxDQUN6Q0MsaUVBRHlDLEVBRXpDQyxzRUFGeUMsRUFHekMsWUFBTTtBQUNILGNBQW1DO0FBQ2hDLFVBQU1DLFNBQVMsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLENBQWxCO0FBQ0EsYUFBT0YsU0FBUyxHQUFHRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osU0FBWCxDQUFILEdBQTJCRCxzRUFBM0M7QUFDRjs7QUFDRCxXQUFPTSxnRkFBUDtBQUNGLEdBVHdDLENBRG9CO0FBQUEsTUFDekRDLFNBRHlEO0FBQUEsTUFDOUNDLFlBRDhDOztBQVloRUMseURBQVMsQ0FBQyxZQUFNO0FBQ2JQLGdCQUFZLENBQUNRLE9BQWIsQ0FBcUIsV0FBckIsRUFBa0NOLElBQUksQ0FBQ08sU0FBTCxDQUFlSixTQUFmLENBQWxDO0FBQ0YsR0FGUSxFQUVOLENBQUNBLFNBQUQsQ0FGTSxDQUFUOztBQVpnRSxxQkFnQjFCVCx3REFBVSxDQUM3Q2Msd0VBRDZDLEVBRTdDTixnRkFGNkMsQ0FoQmdCO0FBQUEsTUFnQnpETyxXQWhCeUQ7QUFBQSxNQWdCNUNDLGNBaEI0Qzs7QUFBQSxxQkFxQnRCaEIsd0RBQVUsQ0FDakRpQix5RUFEaUQsRUFFakRDLDhFQUZpRCxDQXJCWTtBQUFBLE1BcUJ6REMsYUFyQnlEO0FBQUEsTUFxQjFDQyxnQkFyQjBDOztBQTBCaEUsc0JBQ0cscUVBQUMsS0FBRCxDQUFPLFFBQVA7QUFDRyxTQUFLLEVBQUU7QUFDSkQsbUJBQWEsRUFBYkEsYUFESTtBQUVKQyxzQkFBZ0IsRUFBaEJBLGdCQUZJO0FBR0pMLGlCQUFXLEVBQVhBLFdBSEk7QUFJSkMsb0JBQWMsRUFBZEEsY0FKSTtBQUtKUCxlQUFTLEVBQVRBLFNBTEk7QUFNSkMsa0JBQVksRUFBWkE7QUFOSSxLQURWO0FBQUEsY0FVSVg7QUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREg7QUFjRixDQXhDTTs7R0FBTUQsVzs7S0FBQUEsVztBQTBDTixJQUFNdUIsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQTs7QUFBQSxTQUFNQyx3REFBVSxDQUFDMUIsS0FBRCxDQUFoQjtBQUFBLENBQWY7O0lBQU15QixNIiwiZmlsZSI6Ii4vc3JjL3N0b3JlL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgIGluaXRpYWxTbmFja2JhclN0YXRlLFxuICAgc25hY2tiYXJSZWR1Y2VyLFxufSBmcm9tIFwiLi9yZWR1Y2Vycy9zbmFja2JhclJlZHVjZXJcIjtcbmltcG9ydCB7XG4gICBpbml0aWFsU2VhcmNoYmFyU3RhdGUsXG4gICBzZWFyY2hSZWR1Y2VyLFxufSBmcm9tIFwiLi9yZWR1Y2Vycy9zZWFyY2hiYXJSZWR1Y2VyXCI7XG5pbXBvcnQgeyBpbml0aWFsVXNlclN0YXRlLCB1c2VyUmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJzL3VzZXJSZWR1Y2VyXCI7XG5cbmNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dDxhbnk+KG51bGwpO1xuXG5pbnRlcmZhY2UgU3RvcmVQcm9wcyB7XG4gICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG50eXBlIEFjdGlvbiA9IHtcbiAgIHR5cGU6IHN0cmluZztcbiAgIHBheWxvYWQ6IGFueTtcbn07XG5cbnR5cGUgUHJvZmlsZVJlZHVjZXIgPSAoc3RhdGU6IGFueSwgYWN0aW9uOiBBY3Rpb24pID0+IGFueTtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0YXRlOiBSZWFjdC5GQzxTdG9yZVByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgIGNvbnN0IFt1c2VyU3RhdGUsIHVzZXJEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxuICAgICAgdXNlclJlZHVjZXIsXG4gICAgICBpbml0aWFsVXNlclN0YXRlLFxuICAgICAgKCkgPT4ge1xuICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclN0YXRlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsRGF0YSA/IEpTT04ucGFyc2UobG9jYWxEYXRhKSA6IGluaXRpYWxVc2VyU3RhdGU7XG4gICAgICAgICB9XG4gICAgICAgICByZXR1cm4gaW5pdGlhbFNlYXJjaGJhclN0YXRlO1xuICAgICAgfVxuICAgKTtcbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJTdGF0ZVwiLCBKU09OLnN0cmluZ2lmeSh1c2VyU3RhdGUpKTtcbiAgIH0sIFt1c2VyU3RhdGVdKTtcblxuICAgY29uc3QgW3NlYXJjaFN0YXRlLCBzZWFyY2hEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxuICAgICAgc2VhcmNoUmVkdWNlcixcbiAgICAgIGluaXRpYWxTZWFyY2hiYXJTdGF0ZVxuICAgKTtcblxuICAgY29uc3QgW3NuYWNrYmFyU3RhdGUsIHNuYWNrYmFyRGlzcGF0Y2hdID0gdXNlUmVkdWNlcjxQcm9maWxlUmVkdWNlcj4oXG4gICAgICBzbmFja2JhclJlZHVjZXIsXG4gICAgICBpbml0aWFsU25hY2tiYXJTdGF0ZVxuICAgKTtcblxuICAgcmV0dXJuIChcbiAgICAgIDxTdG9yZS5Qcm92aWRlclxuICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgIHNuYWNrYmFyU3RhdGUsXG4gICAgICAgICAgICBzbmFja2JhckRpc3BhdGNoLFxuICAgICAgICAgICAgc2VhcmNoU3RhdGUsXG4gICAgICAgICAgICBzZWFyY2hEaXNwYXRjaCxcbiAgICAgICAgICAgIHVzZXJTdGF0ZSxcbiAgICAgICAgICAgIHVzZXJEaXNwYXRjaCxcbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1N0b3JlLlByb3ZpZGVyPlxuICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VDdHggPSAoKSA9PiB1c2VDb250ZXh0KFN0b3JlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/index.tsx\n");

/***/ })

})