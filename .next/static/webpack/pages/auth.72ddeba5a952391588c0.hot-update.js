webpackHotUpdate_N_E("pages/auth",{

/***/ "./src/Components/auth/LoginSection.tsx":
/*!**********************************************!*\
  !*** ./src/Components/auth/LoginSection.tsx ***!
  \**********************************************/
/*! exports provided: LoginSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginSection\", function() { return LoginSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/svg */ \"./src/utils/svg.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hookform/resolvers/yup */ \"./node_modules/@hookform/resolvers/yup/dist/yup.module.js\");\n/* harmony import */ var _utils_yupSchema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/yupSchema */ \"./src/utils/yupSchema.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/client.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/styles */ \"./src/utils/styles.ts\");\n\n\n\n\n\nvar _jsxFileName = \"/media/reasat-rafio/Local dowg/programming/PRODUCTION/technoLuxBD/src/Components/auth/LoginSection.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar LoginSection = function LoginSection(_ref) {\n  _s();\n\n  Object(_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_ref);\n\n  var classes = Object(_utils_styles__WEBPACK_IMPORTED_MODULE_12__[\"FormStyles\"])();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"])(); // Setting up Yup as useFrom resolver\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__[\"useForm\"])({\n    resolver: Object(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__[\"yupResolver\"])(_utils_yupSchema__WEBPACK_IMPORTED_MODULE_9__[\"LoginSchema\"])\n  }),\n      handleSubmit = _useForm.handleSubmit,\n      register = _useForm.register,\n      errors = _useForm.errors;\n\n  console.log(errors);\n\n  var socialAuthenticationAction = /*#__PURE__*/function () {\n    var _ref2 = Object(_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(platform) {\n      return _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              router.push(\"/\");\n              _context.next = 3;\n              return Object(next_auth_client__WEBPACK_IMPORTED_MODULE_11__[\"signIn\"])(platform);\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function socialAuthenticationAction(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var onSignInSubmit = /*#__PURE__*/function () {\n    var _ref3 = Object(_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(data) {\n      return _media_reasat_rafio_Local_dowg_programming_PRODUCTION_technoLuxBD_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              console.log(data);\n\n            case 1:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function onSignInSubmit(_x2) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    className: \"sign-in-form\",\n    onSubmit: handleSubmit(onSignInSubmit),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      className: \"title\",\n      children: \"Sign in\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 10\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"TextField\"], {\n      className: \"textField\",\n      variant: \"outlined\",\n      margin: \"normal\",\n      fullWidth: true,\n      label: \"Email Address\",\n      name: \"email\",\n      inputRef: register,\n      autoFocus: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 10\n    }, _this), errors.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"], {\n      variant: \"body2\",\n      color: \"secondary\",\n      children: errors.email.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"TextField\"], {\n      className: \"textField\",\n      variant: \"outlined\",\n      margin: \"normal\",\n      inputRef: register,\n      fullWidth: true,\n      label: \"Password\",\n      name: \"password\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 10\n    }, _this), errors.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"], {\n      variant: \"body2\",\n      color: \"secondary\",\n      children: errors.password.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"submit\",\n      value: \"Login\",\n      className: \"btn solid\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 10\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"], {\n        variant: \"caption\",\n        className: classes.h2,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: classes.span,\n          children: \"Or Sign in with social platforms\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 16\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 10\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.socials,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n        variant: \"outlined\",\n        className: classes.iconBtn,\n        onClick: function onClick() {\n          return socialAuthenticationAction(\"google\");\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: classes.icon,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {\n            src: _utils_svg__WEBPACK_IMPORTED_MODULE_6__[\"GoogleIcon\"],\n            height: \"40\",\n            width: \"40\",\n            layout: \"intrinsic\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 19\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 16\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n        variant: \"outlined\",\n        className: classes.iconBtn,\n        onClick: function onClick() {\n          return socialAuthenticationAction(\"facebook\");\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: classes.icon,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {\n            src: _utils_svg__WEBPACK_IMPORTED_MODULE_6__[\"FacebookIcon\"],\n            height: \"40\",\n            width: \"40\",\n            layout: \"intrinsic\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 19\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 16\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n        variant: \"outlined\",\n        className: classes.iconBtn,\n        onClick: function onClick() {\n          return socialAuthenticationAction(\"github\");\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: classes.icon,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {\n            src: _utils_svg__WEBPACK_IMPORTED_MODULE_6__[\"GuthubIcon\"],\n            height: \"40\",\n            width: \"40\",\n            layout: \"intrinsic\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 19\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 16\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 10\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 7\n  }, _this);\n};\n\n_s(LoginSection, \"cjBwBpZxmCb/cSkbV5CHig3UDi0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"], react_hook_form__WEBPACK_IMPORTED_MODULE_7__[\"useForm\"]];\n});\n\n_c = LoginSection;\n\nvar _c;\n\n$RefreshReg$(_c, \"LoginSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvYXV0aC9Mb2dpblNlY3Rpb24udHN4P2VmODgiXSwibmFtZXMiOlsiTG9naW5TZWN0aW9uIiwiY2xhc3NlcyIsIkZvcm1TdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VGb3JtIiwicmVzb2x2ZXIiLCJ5dXBSZXNvbHZlciIsIkxvZ2luU2NoZW1hIiwiaGFuZGxlU3VibWl0IiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJjb25zb2xlIiwibG9nIiwic29jaWFsQXV0aGVudGljYXRpb25BY3Rpb24iLCJwbGF0Zm9ybSIsInB1c2giLCJzaWduSW4iLCJvblNpZ25JblN1Ym1pdCIsImRhdGEiLCJlbWFpbCIsIm1lc3NhZ2UiLCJwYXNzd29yZCIsImgyIiwic3BhbiIsInNvY2lhbHMiLCJpY29uQnRuIiwiaWNvbiIsIkdvb2dsZUljb24iLCJGYWNlYm9va0ljb24iLCJHdXRodWJJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlPLElBQU1BLFlBQXlDLEdBQUcsU0FBNUNBLFlBQTRDLE9BQVE7QUFBQTs7QUFBQTs7QUFDOUQsTUFBTUMsT0FBTyxHQUFHQyxpRUFBVSxFQUExQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEIsQ0FGOEQsQ0FHOUQ7O0FBSDhELGlCQUluQkMsK0RBQU8sQ0FBQztBQUNoREMsWUFBUSxFQUFFQywyRUFBVyxDQUFDQyw0REFBRDtBQUQyQixHQUFELENBSlk7QUFBQSxNQUl0REMsWUFKc0QsWUFJdERBLFlBSnNEO0FBQUEsTUFJeENDLFFBSndDLFlBSXhDQSxRQUp3QztBQUFBLE1BSTlCQyxNQUo4QixZQUk5QkEsTUFKOEI7O0FBTzlEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjs7QUFFQSxNQUFNRywwQkFBMEI7QUFBQSw2VkFBRyxp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TTs7R0FBTTlCLFk7VUFFS0ksc0QsRUFFNEJDLHVEOzs7S0FKakNMLFkiLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9hdXRoL0xvZ2luU2VjdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIFRleHRGaWVsZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBGYWNlYm9va0ljb24sIEdvb2dsZUljb24sIEd1dGh1Ykljb24gfSBmcm9tIFwiLi4vLi4vdXRpbHMvc3ZnXCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tIFwiQGhvb2tmb3JtL3Jlc29sdmVycy95dXBcIjtcbmltcG9ydCB7IExvZ2luU2NoZW1hIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3l1cFNjaGVtYVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHsgRm9ybVN0eWxlcyB9IGZyb20gXCIuLi8uLi91dGlscy9zdHlsZXNcIjtcblxuaW50ZXJmYWNlIExvZ2luU2VjdGlvblByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBMb2dpblNlY3Rpb246IFJlYWN0LkZDPExvZ2luU2VjdGlvblByb3BzPiA9ICh7fSkgPT4ge1xuICAgY29uc3QgY2xhc3NlcyA9IEZvcm1TdHlsZXMoKTtcbiAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgLy8gU2V0dGluZyB1cCBZdXAgYXMgdXNlRnJvbSByZXNvbHZlclxuICAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHJlZ2lzdGVyLCBlcnJvcnMgfSA9IHVzZUZvcm0oe1xuICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKExvZ2luU2NoZW1hKSxcbiAgIH0pO1xuICAgY29uc29sZS5sb2coZXJyb3JzKTtcblxuICAgY29uc3Qgc29jaWFsQXV0aGVudGljYXRpb25BY3Rpb24gPSBhc3luYyAocGxhdGZvcm06IHN0cmluZykgPT4ge1xuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgYXdhaXQgc2lnbkluKHBsYXRmb3JtKTtcbiAgIH07XG5cbiAgIGNvbnN0IG9uU2lnbkluU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgfTtcblxuICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNpZ24taW4tZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TaWduSW5TdWJtaXQpfT5cbiAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPlNpZ24gaW48L2gyPlxuICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dEZpZWxkXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgLz5cbiAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwubWVzc2FnZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICl9XG4gICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0RmllbGRcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgIC8+XG4gICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkLm1lc3NhZ2V9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICApfVxuICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIgY2xhc3NOYW1lPVwiYnRuIHNvbGlkXCIgLz5cbiAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oMn0+XG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3Bhbn0+XG4gICAgICAgICAgICAgICAgICBPciBTaWduIGluIHdpdGggc29jaWFsIHBsYXRmb3Jtc1xuICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NpYWxzfT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkJ0bn1cbiAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNvY2lhbEF1dGhlbnRpY2F0aW9uQWN0aW9uKFwiZ29vZ2xlXCIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259PlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICBzcmM9e0dvb2dsZUljb259XG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImludHJpbnNpY1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkJ0bn1cbiAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNvY2lhbEF1dGhlbnRpY2F0aW9uQWN0aW9uKFwiZmFjZWJvb2tcIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgIHNyYz17RmFjZWJvb2tJY29ufVxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJpbnRyaW5zaWNcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25CdG59XG4gICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzb2NpYWxBdXRoZW50aWNhdGlvbkFjdGlvbihcImdpdGh1YlwiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgc3JjPXtHdXRodWJJY29ufVxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJpbnRyaW5zaWNcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/auth/LoginSection.tsx\n");

/***/ })

})