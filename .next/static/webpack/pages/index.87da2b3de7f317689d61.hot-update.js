webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Components/NavBar/LergeNavbar/SearchField/SearchField.tsx":
/*!***********************************************************************!*\
  !*** ./src/Components/NavBar/LergeNavbar/SearchField/SearchField.tsx ***!
  \***********************************************************************/
/*! exports provided: SearchField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchField\", function() { return SearchField; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_search_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui-search-bar */ \"./node_modules/material-ui-search-bar/lib/index.js\");\n/* harmony import */ var material_ui_search_bar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_search_bar__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../store */ \"./src/store/index.tsx\");\n/* harmony import */ var _store_actions_searchbarAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../store/actions/searchbarAction */ \"./src/store/actions/searchbarAction.tsx\");\n\n\n\n\n\n\nvar _jsxFileName = \"/media/reasat-rafio/Local dowg/programming/PRODUCTION/technoLuxBD/src/Components/NavBar/LergeNavbar/SearchField/SearchField.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar SearchField = function SearchField(_ref) {\n  _s();\n\n  Object(_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_ref);\n\n  // Search Filter Items\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      searchFilter = _useState[0],\n      setSearchFilter = _useState[1]; // This funtion will deside wether the dropdown is getting shown or not\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      searchDropdown = _useState2[0],\n      setSearchDropdown = _useState2[1]; // Global state\n\n\n  var _useCtx = Object(_store__WEBPACK_IMPORTED_MODULE_8__[\"useCtx\"])(),\n      _useCtx$searchState = _useCtx.searchState,\n      isLoading = _useCtx$searchState.isLoading,\n      filterProducts = _useCtx$searchState.filterProducts,\n      searchDispatch = _useCtx.searchDispatch; // Fetching the data for search\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref2 = Object(_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var _yield$axios$get, data;\n\n        return _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                searchDispatch(Object(_store_actions_searchbarAction__WEBPACK_IMPORTED_MODULE_9__[\"srcLoadingStartAction\"])()); // const { data } = await axios.get(\n                //    \"https://jsonplaceholder.typicode.com/users\",\n                //    {\n                //       params: {\n                //          username: filter || undefined,\n                //       },\n                //    }\n                // );\n\n                _context.next = 4;\n                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"https://jsonplaceholder.typicode.com/users\");\n\n              case 4:\n                _yield$axios$get = _context.sent;\n                data = _yield$axios$get.data;\n                searchDispatch(Object(_store_actions_searchbarAction__WEBPACK_IMPORTED_MODULE_9__[\"searchDataAction\"])(data));\n                searchDispatch(Object(_store_actions_searchbarAction__WEBPACK_IMPORTED_MODULE_9__[\"srcLoadingEndAction\"])());\n                _context.next = 13;\n                break;\n\n              case 10:\n                _context.prev = 10;\n                _context.t0 = _context[\"catch\"](0);\n                console.log(_context.t0);\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 10]]);\n      }));\n\n      return function fetchData() {\n        return _ref2.apply(this, arguments);\n      };\n    }(); // filterProducts.filter((val) => {\n    //    if (val.username.toLowerCase().includes(filter.toLowerCase())) {\n    //       setSearchFilter([...searchFilter, val]);\n    //       console.log(val);\n    //    }\n    // });\n\n\n    fetchData();\n  }, []);\n\n  var searchAction = /*#__PURE__*/function () {\n    var _ref3 = Object(_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(filter) {\n      return _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              try {\n                if (filter.length != 0) {\n                  setSearchDropdown(true);\n                } else {\n                  setSearchDropdown(false);\n                }\n\n                setSearchFilter(filter);\n              } catch (error) {\n                console.log(error);\n              }\n\n            case 1:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function searchAction(_x) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(material_ui_search_bar__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        className: \"searchBar\",\n        onChange: function onChange(e) {\n          return searchAction(e);\n        },\n        placeholder: \"Search the entire store here ...\",\n        cancelOnEscape: true,\n        onCancelSearch: function onCancelSearch() {\n          return setSearchDropdown(false);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 10\n    }, _this), searchDropdown && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: \"dropdown-menu\",\n      children: [filterProducts.filter(function (val) {\n        if (val.username.toLowerCase().includes(searchFilter.toLowerCase())) {\n          return val;\n        }\n      }), \". .map((p, i) => (\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"#\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: \"menu-item\",\n            children: p.username\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 22\n        }, _this)\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 19\n      }, _this), \"))\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(SearchField, \"jehZW5PJJv3NZ1fJ9a6+FuuVxLY=\", false, function () {\n  return [_store__WEBPACK_IMPORTED_MODULE_8__[\"useCtx\"]];\n});\n\n_c = SearchField;\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchField\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvTmF2QmFyL0xlcmdlTmF2YmFyL1NlYXJjaEZpZWxkL1NlYXJjaEZpZWxkLnRzeD8zMTg1Il0sIm5hbWVzIjpbIlNlYXJjaEZpZWxkIiwidXNlU3RhdGUiLCJzZWFyY2hGaWx0ZXIiLCJzZXRTZWFyY2hGaWx0ZXIiLCJzZWFyY2hEcm9wZG93biIsInNldFNlYXJjaERyb3Bkb3duIiwidXNlQ3R4Iiwic2VhcmNoU3RhdGUiLCJpc0xvYWRpbmciLCJmaWx0ZXJQcm9kdWN0cyIsInNlYXJjaERpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwic3JjTG9hZGluZ1N0YXJ0QWN0aW9uIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwic2VhcmNoRGF0YUFjdGlvbiIsInNyY0xvYWRpbmdFbmRBY3Rpb24iLCJjb25zb2xlIiwibG9nIiwic2VhcmNoQWN0aW9uIiwiZmlsdGVyIiwibGVuZ3RoIiwiZXJyb3IiLCJlIiwidmFsIiwidXNlcm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFRTyxJQUFNQSxXQUF1QyxHQUFHLFNBQTFDQSxXQUEwQyxPQUFRO0FBQUE7O0FBQUE7O0FBQzVEO0FBRDRELGtCQUVwQkMsc0RBQVEsRUFGWTtBQUFBLE1BRXJEQyxZQUZxRDtBQUFBLE1BRXZDQyxlQUZ1QyxpQkFJNUQ7OztBQUo0RCxtQkFLaEJGLHNEQUFRLENBQVUsS0FBVixDQUxRO0FBQUEsTUFLckRHLGNBTHFEO0FBQUEsTUFLckNDLGlCQUxxQyxrQkFNNUQ7OztBQU40RCxnQkFVeERDLHFEQUFNLEVBVmtEO0FBQUEsb0NBUXpEQyxXQVJ5RDtBQUFBLE1BUTFDQyxTQVIwQyx1QkFRMUNBLFNBUjBDO0FBQUEsTUFRL0JDLGNBUitCLHVCQVEvQkEsY0FSK0I7QUFBQSxN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aWVsZC9TZWFyY2hGaWVsZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCJtYXRlcmlhbC11aS1zZWFyY2gtYmFyXCI7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VDdHggfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmVcIjtcbmltcG9ydCB7XG4gICBzcmNMb2FkaW5nRW5kQWN0aW9uLFxuICAgc3JjTG9hZGluZ1N0YXJ0QWN0aW9uLFxuICAgc2VhcmNoRGF0YUFjdGlvbixcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvc2VhcmNoYmFyQWN0aW9uXCI7XG5cbmludGVyZmFjZSBTZWFyY2hGaWVsZFByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hGaWVsZDogUmVhY3QuRkM8U2VhcmNoRmllbGRQcm9wcz4gPSAoe30pID0+IHtcbiAgIC8vIFNlYXJjaCBGaWx0ZXIgSXRlbXNcbiAgIGNvbnN0IFtzZWFyY2hGaWx0ZXIsIHNldFNlYXJjaEZpbHRlcl0gPSB1c2VTdGF0ZTxhbnk+KCk7XG5cbiAgIC8vIFRoaXMgZnVudGlvbiB3aWxsIGRlc2lkZSB3ZXRoZXIgdGhlIGRyb3Bkb3duIGlzIGdldHRpbmcgc2hvd24gb3Igbm90XG4gICBjb25zdCBbc2VhcmNoRHJvcGRvd24sIHNldFNlYXJjaERyb3Bkb3duXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgIC8vIEdsb2JhbCBzdGF0ZVxuICAgY29uc3Qge1xuICAgICAgc2VhcmNoU3RhdGU6IHsgaXNMb2FkaW5nLCBmaWx0ZXJQcm9kdWN0cyB9LFxuICAgICAgc2VhcmNoRGlzcGF0Y2gsXG4gICB9ID0gdXNlQ3R4KCk7XG5cbiAgIC8vIEZldGNoaW5nIHRoZSBkYXRhIGZvciBzZWFyY2hcbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2VhcmNoRGlzcGF0Y2goc3JjTG9hZGluZ1N0YXJ0QWN0aW9uKCkpO1xuICAgICAgICAgICAgLy8gY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICAgICAvLyAgICBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiLFxuICAgICAgICAgICAgLy8gICAge1xuICAgICAgICAgICAgLy8gICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICB1c2VybmFtZTogZmlsdGVyIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgICAgICAvLyAgICB9XG4gICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICAgICAgICBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBzZWFyY2hEaXNwYXRjaChzZWFyY2hEYXRhQWN0aW9uKGRhdGEpKTtcbiAgICAgICAgICAgIHNlYXJjaERpc3BhdGNoKHNyY0xvYWRpbmdFbmRBY3Rpb24oKSk7XG4gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIC8vIGZpbHRlclByb2R1Y3RzLmZpbHRlcigodmFsKSA9PiB7XG4gICAgICAvLyAgICBpZiAodmFsLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAvLyAgICAgICBzZXRTZWFyY2hGaWx0ZXIoWy4uLnNlYXJjaEZpbHRlciwgdmFsXSk7XG4gICAgICAvLyAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgLy8gICAgfVxuICAgICAgLy8gfSk7XG4gICAgICBmZXRjaERhdGEoKTtcbiAgIH0sIFtdKTtcblxuICAgY29uc3Qgc2VhcmNoQWN0aW9uID0gYXN5bmMgKGZpbHRlcikgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgIGlmIChmaWx0ZXIubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgIHNldFNlYXJjaERyb3Bkb3duKHRydWUpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFNlYXJjaERyb3Bkb3duKGZhbHNlKTtcbiAgICAgICAgIH1cbiAgICAgICAgIHNldFNlYXJjaEZpbHRlcihmaWx0ZXIpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgIH07XG5cblxuICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoQmFyXCJcbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2VhcmNoQWN0aW9uKGUpfVxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggdGhlIGVudGlyZSBzdG9yZSBoZXJlIC4uLlwiXG4gICAgICAgICAgICAgICBjYW5jZWxPbkVzY2FwZT17dHJ1ZX1cbiAgICAgICAgICAgICAgIG9uQ2FuY2VsU2VhcmNoPXsoKSA9PiBzZXRTZWFyY2hEcm9wZG93bihmYWxzZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgIHsvKiB7aXNMb2FkaW5nICYmIDxMaW5lYXJQcm9ncmVzcyAvPn0gKi99XG5cbiAgICAgICAgIHtzZWFyY2hEcm9wZG93biAmJiAoXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAge2ZpbHRlclByb2R1Y3RzLmZpbHRlcigodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZih2YWwudXNlcm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hGaWx0ZXIudG9Mb3dlckNhc2UoKSkpe1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfSl9LlxuICAgICAgICAgICAgICAubWFwKChwLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj57cC51c2VybmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICApfVxuICAgICAgPC8+XG4gICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/NavBar/LergeNavbar/SearchField/SearchField.tsx\n");

/***/ })

})