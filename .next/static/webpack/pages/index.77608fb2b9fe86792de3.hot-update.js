webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Components/NavBar/LergeNavbar/SearchField/SearchField.tsx":
/*!***********************************************************************!*\
  !*** ./src/Components/NavBar/LergeNavbar/SearchField/SearchField.tsx ***!
  \***********************************************************************/
/*! exports provided: SearchField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchField\", function() { return SearchField; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_search_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui-search-bar */ \"./node_modules/material-ui-search-bar/lib/index.js\");\n/* harmony import */ var material_ui_search_bar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_search_bar__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../store */ \"./src/store/index.tsx\");\n/* harmony import */ var _store_actions_searchbarAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../store/actions/searchbarAction */ \"./src/store/actions/searchbarAction.tsx\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/media/reasat-rafio/Local dowg/programming/PRODUCTION/technoLuxBD/src/Components/NavBar/LergeNavbar/SearchField/SearchField.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar SearchField = function SearchField(_ref) {\n  _s();\n\n  Object(_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_ref);\n\n  // Search Filter Items\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      searchFilter = _useState[0],\n      setSearchFilter = _useState[1]; // This funtion will deside wether the dropdown is getting shown or not\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      searchDropdown = _useState2[0],\n      setSearchDropdown = _useState2[1]; // Global state\n\n\n  var _useCtx = Object(_store__WEBPACK_IMPORTED_MODULE_9__[\"useCtx\"])(),\n      _useCtx$searchState = _useCtx.searchState,\n      isLoading = _useCtx$searchState.isLoading,\n      filterProducts = _useCtx$searchState.filterProducts,\n      searchDispatch = _useCtx.searchDispatch; // Fetching the data for search\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref2 = Object(_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n        var _yield$axios$get, data;\n\n        return _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                searchDispatch(Object(_store_actions_searchbarAction__WEBPACK_IMPORTED_MODULE_10__[\"srcLoadingStartAction\"])()); // const { data } = await axios.get(\n                //    \"https://jsonplaceholder.typicode.com/users\",\n                //    {\n                //       params: {\n                //          username: filter || undefined,\n                //       },\n                //    }\n                // );\n\n                _context.next = 4;\n                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(\"https://jsonplaceholder.typicode.com/users\");\n\n              case 4:\n                _yield$axios$get = _context.sent;\n                data = _yield$axios$get.data;\n                searchDispatch(Object(_store_actions_searchbarAction__WEBPACK_IMPORTED_MODULE_10__[\"searchDataAction\"])(data));\n                searchDispatch(Object(_store_actions_searchbarAction__WEBPACK_IMPORTED_MODULE_10__[\"srcLoadingEndAction\"])());\n                _context.next = 13;\n                break;\n\n              case 10:\n                _context.prev = 10;\n                _context.t0 = _context[\"catch\"](0);\n                console.log(_context.t0);\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 10]]);\n      }));\n\n      return function fetchData() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n\n  var searchAction = /*#__PURE__*/function () {\n    var _ref3 = Object(_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(filter) {\n      return _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              try {\n                if (filter.length != 0) {\n                  setSearchDropdown(true);\n                } else {\n                  setSearchDropdown(false);\n                }\n\n                filterProducts.filter(function (val) {\n                  if (val.username.toLowerCase().includes(filter.toLowerCase())) {\n                    setSearchFilter([].concat(Object(_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(searchFilter), [val]));\n                    console.log(val);\n                  }\n                });\n              } catch (error) {\n                console.log(error);\n              }\n\n            case 1:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function searchAction(_x) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  console.log(searchFilter);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(material_ui_search_bar__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        className: \"searchBar\",\n        onChange: function onChange(e) {\n          return searchAction(e);\n        },\n        placeholder: \"Search the entire store here ...\",\n        cancelOnEscape: true,\n        onCancelSearch: function onCancelSearch() {\n          return setSearchDropdown(false);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 10\n    }, _this), searchDropdown && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: \"dropdown-menu\",\n      children: searchFilter.map(function (p, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n            href: \"#\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: \"menu-item\",\n              children: p.username\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 93,\n              columnNumber: 25\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 22\n          }, _this)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 19\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(SearchField, \"yHWWS/pai+4JcYWCh4dGNEDUaeU=\", false, function () {\n  return [_store__WEBPACK_IMPORTED_MODULE_9__[\"useCtx\"]];\n});\n\n_c = SearchField;\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchField\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvTmF2QmFyL0xlcmdlTmF2YmFyL1NlYXJjaEZpZWxkL1NlYXJjaEZpZWxkLnRzeD8zMTg1Il0sIm5hbWVzIjpbIlNlYXJjaEZpZWxkIiwidXNlU3RhdGUiLCJzZWFyY2hGaWx0ZXIiLCJzZXRTZWFyY2hGaWx0ZXIiLCJzZWFyY2hEcm9wZG93biIsInNldFNlYXJjaERyb3Bkb3duIiwidXNlQ3R4Iiwic2VhcmNoU3RhdGUiLCJpc0xvYWRpbmciLCJmaWx0ZXJQcm9kdWN0cyIsInNlYXJjaERpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwic3JjTG9hZGluZ1N0YXJ0QWN0aW9uIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwic2VhcmNoRGF0YUFjdGlvbiIsInNyY0xvYWRpbmdFbmRBY3Rpb24iLCJjb25zb2xlIiwibG9nIiwic2VhcmNoQWN0aW9uIiwiZmlsdGVyIiwibGVuZ3RoIiwidmFsIiwidXNlcm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZXJyb3IiLCJlIiwibWFwIiwicCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVFPLElBQU1BLFdBQXVDLEdBQUcsU0FBMUNBLFdBQTBDLE9BQVE7QUFBQTs7QUFBQTs7QUFDNUQ7QUFENEQsa0JBRXBCQyxzREFBUSxDQUFNLEVBQU4sQ0FGWTtBQUFBLE1BRXJEQyxZQUZxRDtBQUFBLE1BRXZDQyxlQUZ1QyxpQkFJNUQ7OztBQUo0RCxtQkFLaEJGLHNEQUFRLENBQVUsS0FBVixDQUxRO0FBQUEsTUFLckRHLGNBTHFEO0FBQUEsTUFLckNDLGlCQUxxQyxrQkFNNUQ7OztBQU40RCxnQkFVeERDLHFEQUFNLEVBVmtEO0FBQUEsb0NBUXpEQyxXQVJ5RDtBQUFBLE1BUTFDQyxTQVIwQyx1QkFRMUNBLFNBUjBDO0FBQUEsTUFRL0JDLGNBUitCLHVC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QTtBQUFBLGFBZE47QUFBQSxrQkFESDtBQTJCRixDQXRGTTs7R0FBTWhDLFc7VUFVTk0sNkM7OztLQVZNTixXIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvTmF2QmFyL0xlcmdlTmF2YmFyL1NlYXJjaEZpZWxkL1NlYXJjaEZpZWxkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIm1hdGVyaWFsLXVpLXNlYXJjaC1iYXJcIjtcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZUN0eCB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZVwiO1xuaW1wb3J0IHtcbiAgIHNyY0xvYWRpbmdFbmRBY3Rpb24sXG4gICBzcmNMb2FkaW5nU3RhcnRBY3Rpb24sXG4gICBzZWFyY2hEYXRhQWN0aW9uLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9zZWFyY2hiYXJBY3Rpb25cIjtcblxuaW50ZXJmYWNlIFNlYXJjaEZpZWxkUHJvcHMge31cblxuZXhwb3J0IGNvbnN0IFNlYXJjaEZpZWxkOiBSZWFjdC5GQzxTZWFyY2hGaWVsZFByb3BzPiA9ICh7fSkgPT4ge1xuICAgLy8gU2VhcmNoIEZpbHRlciBJdGVtc1xuICAgY29uc3QgW3NlYXJjaEZpbHRlciwgc2V0U2VhcmNoRmlsdGVyXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuXG4gICAvLyBUaGlzIGZ1bnRpb24gd2lsbCBkZXNpZGUgd2V0aGVyIHRoZSBkcm9wZG93biBpcyBnZXR0aW5nIHNob3duIG9yIG5vdFxuICAgY29uc3QgW3NlYXJjaERyb3Bkb3duLCBzZXRTZWFyY2hEcm9wZG93bl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAvLyBHbG9iYWwgc3RhdGVcbiAgIGNvbnN0IHtcbiAgICAgIHNlYXJjaFN0YXRlOiB7IGlzTG9hZGluZywgZmlsdGVyUHJvZHVjdHMgfSxcbiAgICAgIHNlYXJjaERpc3BhdGNoLFxuICAgfSA9IHVzZUN0eCgpO1xuXG4gICAvLyBGZXRjaGluZyB0aGUgZGF0YSBmb3Igc2VhcmNoXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlYXJjaERpc3BhdGNoKHNyY0xvYWRpbmdTdGFydEFjdGlvbigpKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgLy8gICAgXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnNcIixcbiAgICAgICAgICAgIC8vICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgLy8gICAgICAgICAgdXNlcm5hbWU6IGZpbHRlciB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgICAgLy8gICAgfVxuICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgICAgXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnNcIlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgc2VhcmNoRGlzcGF0Y2goc2VhcmNoRGF0YUFjdGlvbihkYXRhKSk7XG4gICAgICAgICAgICBzZWFyY2hEaXNwYXRjaChzcmNMb2FkaW5nRW5kQWN0aW9uKCkpO1xuICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZldGNoRGF0YSgpO1xuICAgfSwgW10pO1xuXG4gICBjb25zdCBzZWFyY2hBY3Rpb24gPSBhc3luYyAoZmlsdGVyKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICAgaWYgKGZpbHRlci5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgc2V0U2VhcmNoRHJvcGRvd24odHJ1ZSk7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0U2VhcmNoRHJvcGRvd24oZmFsc2UpO1xuICAgICAgICAgfVxuXG4gICAgICAgICBmaWx0ZXJQcm9kdWN0cy5maWx0ZXIoKHZhbCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbC51c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlci50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICAgc2V0U2VhcmNoRmlsdGVyKFsuLi5zZWFyY2hGaWx0ZXIsIHZhbF0pO1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgIH07XG4gICBjb25zb2xlLmxvZyhzZWFyY2hGaWx0ZXIpO1xuXG4gICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8U2VhcmNoQmFyXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hCYXJcIlxuICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZWFyY2hBY3Rpb24oZSl9XG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCB0aGUgZW50aXJlIHN0b3JlIGhlcmUgLi4uXCJcbiAgICAgICAgICAgICAgIGNhbmNlbE9uRXNjYXBlPXt0cnVlfVxuICAgICAgICAgICAgICAgb25DYW5jZWxTZWFyY2g9eygpID0+IHNldFNlYXJjaERyb3Bkb3duKGZhbHNlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgey8qIHtpc0xvYWRpbmcgJiYgPExpbmVhclByb2dyZXNzIC8+fSAqL31cblxuICAgICAgICAge3NlYXJjaERyb3Bkb3duICYmIChcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICB7c2VhcmNoRmlsdGVyLm1hcCgocCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+e3AudXNlcm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICl9XG4gICAgICA8Lz5cbiAgICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/NavBar/LergeNavbar/SearchField/SearchField.tsx\n");

/***/ })

})