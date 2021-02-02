module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/auth/[...nextauth].ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, {\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.GitHub({\n    clientId: process.env.GITHUB_CLIENT_ID,\n    clientSecret: process.env.GITHUB_CLIENT_SECRET\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Facebook({\n    clientId: process.env.FACEBOOK_CLIENT_ID,\n    clientSecret: process.env.FACEBOOK_CLIENT_SECRET\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Google({\n    clientId: process.env.GOOGLE_CLIENT_ID,\n    clientSecret: process.env.GOOGLE_CLIENT_SECRET\n  })],\n  debug: true,\n  secret: process.env.AUTH_SECRET,\n  jwt: {\n    secret: process.env.JWT_SECRET\n  },\n  database: process.env.MONGO_URL\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz83MmNmIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIk5leHRBdXRoIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiR2l0SHViIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwiRmFjZWJvb2siLCJGQUNFQk9PS19DTElFTlRfSUQiLCJGQUNFQk9PS19DTElFTlRfU0VDUkVUIiwiR29vZ2xlIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiZGVidWciLCJzZWNyZXQiLCJBVVRIX1NFQ1JFVCIsImp3dCIsIkpXVF9TRUNSRVQiLCJkYXRhYmFzZSIsIk1PTkdPX1VSTCJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSxnRUFBQ0EsR0FBRCxFQUFzQkMsR0FBdEIsS0FDWkMsZ0RBQVEsQ0FBQ0YsR0FBRCxFQUFNQyxHQUFOLEVBQVc7QUFDaEJFLFdBQVMsRUFBRSxDQUNSQywwREFBUyxDQUFDQyxNQUFWLENBQWlCO0FBQ2RDLFlBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQURSO0FBRWRDLGdCQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQUZaLEdBQWpCLENBRFEsRUFLUlAsMERBQVMsQ0FBQ1EsUUFBVixDQUFtQjtBQUNoQk4sWUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUssa0JBRE47QUFFaEJILGdCQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZTTtBQUZWLEdBQW5CLENBTFEsRUFTUlYsMERBQVMsQ0FBQ1csTUFBVixDQUFpQjtBQUNkVCxZQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUSxnQkFEUjtBQUVkTixnQkFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWVM7QUFGWixHQUFqQixDQVRRLENBREs7QUFlaEJDLE9BQUssTUFmVztBQWdCaEJDLFFBQU0sRUFBRVosT0FBTyxDQUFDQyxHQUFSLENBQVlZLFdBaEJKO0FBaUJoQkMsS0FBRyxFQUFFO0FBQ0ZGLFVBQU0sRUFBRVosT0FBTyxDQUFDQyxHQUFSLENBQVljO0FBRGxCLEdBakJXO0FBb0JoQkMsVUFBUSxFQUFFaEIsT0FBTyxDQUFDQyxHQUFSLENBQVlnQjtBQXBCTixDQUFYLENBRFgiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBQcm92aWRlcnMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PlxuICAgTmV4dEF1dGgocmVxLCByZXMsIHtcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgUHJvdmlkZXJzLkdpdEh1Yih7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXG4gICAgICAgICB9KSxcbiAgICAgICAgIFByb3ZpZGVycy5GYWNlYm9vayh7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfQ0xJRU5UX0lELFxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5GQUNFQk9PS19DTElFTlRfU0VDUkVULFxuICAgICAgICAgfSksXG4gICAgICAgICBQcm92aWRlcnMuR29vZ2xlKHtcbiAgICAgICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxuICAgICAgc2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIX1NFQ1JFVCxcbiAgICAgIGp3dDoge1xuICAgICAgICAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICAgICAgfSxcbiAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5NT05HT19VUkwsXG4gICB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIj8yOWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth\n");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/providers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI/NjljNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvcHJvdmlkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers\n");

/***/ })

/******/ });