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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/auth/register.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Models/userModel.ts":
/*!*********************************!*\
  !*** ./src/Models/userModel.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  username: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true,\n    unique: true,\n    trim: true,\n    lowercase: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  role: {\n    type: String,\n    default: \"user\"\n  }\n}, {\n  timestamps: true\n}); // This function will fire before user Regiter\n\nuserSchema.pre(\"save\", async function (next) {\n  try {\n    const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.genSalt();\n    this.password = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hash(this.password, salt);\n    next();\n  } catch (error) {\n    console.log(error);\n  }\n});\nlet DataSet = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"models\"].EmailUser || Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"])(\"EmailUser\", userSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataSet);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTW9kZWxzL3VzZXJNb2RlbC50cz81NzkyIl0sIm5hbWVzIjpbInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwidHJpbSIsImxvd2VyY2FzZSIsInBhc3N3b3JkIiwicm9sZSIsImRlZmF1bHQiLCJ0aW1lc3RhbXBzIiwicHJlIiwibmV4dCIsInNhbHQiLCJiY3J5cHQiLCJnZW5TYWx0IiwiaGFzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIkRhdGFTZXQiLCJtb2RlbHMiLCJFbWFpbFVzZXIiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFhQSxNQUFNQSxVQUFVLEdBQUcsSUFBSUMsK0NBQUosQ0FDaEI7QUFDR0MsVUFBUSxFQUFFO0FBQ1BDLFFBQUksRUFBRUMsTUFEQztBQUVQQyxZQUFRLEVBQUU7QUFGSCxHQURiO0FBS0dDLE9BQUssRUFBRTtBQUNKSCxRQUFJLEVBQUVDLE1BREY7QUFFSkMsWUFBUSxFQUFFLElBRk47QUFHSkUsVUFBTSxFQUFFLElBSEo7QUFJSkMsUUFBSSxFQUFFLElBSkY7QUFLSkMsYUFBUyxFQUFFO0FBTFAsR0FMVjtBQVlHQyxVQUFRLEVBQUU7QUFDUFAsUUFBSSxFQUFFQyxNQURDO0FBRVBDLFlBQVEsRUFBRTtBQUZILEdBWmI7QUFnQkdNLE1BQUksRUFBRTtBQUNIUixRQUFJLEVBQUVDLE1BREg7QUFFSFEsV0FBTyxFQUFFO0FBRk47QUFoQlQsQ0FEZ0IsRUFzQmhCO0FBQ0dDLFlBQVUsRUFBRTtBQURmLENBdEJnQixDQUFuQixDLENBMkJBOztBQUNBYixVQUFVLENBQUNjLEdBQVgsQ0FBb0IsTUFBcEIsRUFBNEIsZ0JBQXNCQyxJQUF0QixFQUE0QjtBQUNyRCxNQUFJO0FBQ0QsVUFBTUMsSUFBSSxHQUFHLE1BQU1DLDZDQUFNLENBQUNDLE9BQVAsRUFBbkI7QUFDQSxTQUFLUixRQUFMLEdBQWdCLE1BQU1PLDZDQUFNLENBQUNFLElBQVAsQ0FBWSxLQUFLVCxRQUFqQixFQUEyQk0sSUFBM0IsQ0FBdEI7QUFDQUQsUUFBSTtBQUNOLEdBSkQsQ0FJRSxPQUFPSyxLQUFQLEVBQWM7QUFDYkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRjtBQUNILENBUkQ7QUFVQSxJQUFJRyxPQUFPLEdBQ1JDLCtDQUFNLENBQUNDLFNBQVAsSUFBb0JDLHNEQUFLLENBQW1CLFdBQW5CLEVBQWdDMUIsVUFBaEMsQ0FENUI7QUFHZXVCLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL01vZGVscy91c2VyTW9kZWwudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudCwgU2NoZW1hLCBtb2RlbHMsIG1vZGVsLCBNb2RlbCB9IGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2F2ZWRVc2VyRG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gICBlbWFpbDogc3RyaW5nO1xuICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgIG5hbWU/OiBzdHJpbmc7XG4gICBsb2dpblVzZXI/OiAoKSA9PiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJVXNlck1vZGVsIGV4dGVuZHMgTW9kZWw8U2F2ZWRVc2VyRG9jdW1lbnQ+IHtcbiAgIGxvZ2luVXNlcihwYXNzd29yZDogc3RyaW5nLCBlbWFpbDogc3RyaW5nKTogc3RyaW5nO1xufVxuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYShcbiAgIHtcbiAgICAgIHVzZXJuYW1lOiB7XG4gICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBlbWFpbDoge1xuICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgICB0cmltOiB0cnVlLFxuICAgICAgICAgbG93ZXJjYXNlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICByb2xlOiB7XG4gICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICBkZWZhdWx0OiBcInVzZXJcIixcbiAgICAgIH0sXG4gICB9LFxuICAge1xuICAgICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgIH1cbik7XG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBmaXJlIGJlZm9yZSB1c2VyIFJlZ2l0ZXJcbnVzZXJTY2hlbWEucHJlPGFueT4oXCJzYXZlXCIsIGFzeW5jIGZ1bmN0aW9uICh0aGlzLCBuZXh0KSB7XG4gICB0cnkge1xuICAgICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KCk7XG4gICAgICB0aGlzLnBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2godGhpcy5wYXNzd29yZCwgc2FsdCk7XG4gICAgICBuZXh0KCk7XG4gICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgfVxufSk7XG5cbmxldCBEYXRhU2V0ID1cbiAgIG1vZGVscy5FbWFpbFVzZXIgfHwgbW9kZWw8SVVzZXJNb2RlbCB8IGFueT4oXCJFbWFpbFVzZXJcIiwgdXNlclNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFTZXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Models/userModel.ts\n");

/***/ }),

/***/ "./src/pages/api/auth/register.ts":
/*!****************************************!*\
  !*** ./src/pages/api/auth/register.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ \"./src/utils/connectDB.ts\");\n/* harmony import */ var _Models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Models/userModel */ \"./src/Models/userModel.ts\");\n\n\nObject(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  switch (req.method) {\n    case \"POST\":\n      await RegisterUser(req, res);\n      break;\n\n    default:\n      break;\n  }\n});\n\nconst RegisterUser = async (req, res) => {\n  try {\n    //  Getting the data from request body\n    const {\n      username,\n      email,\n      password\n    } = req.body; // Checking if this email used before or not\n\n    const user = await _Models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n      email\n    });\n\n    if (user) {\n      return res.status(403).json({\n        success: false,\n        error: \"This email is already registered\"\n      });\n    } // Creating a new User\n\n\n    const newUser = await _Models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n      username,\n      email,\n      password\n    }); // If registration failed\n\n    if (!newUser) {\n      return res.status(403).json({\n        success: false,\n        error: \"Something went wrong\"\n      });\n    } // Returing a success response\n\n\n    res.status(201).json({\n      success: true,\n      data: {\n        newUser\n      }\n    });\n  } catch (error) {\n    if (error.code === 11000) {\n      return res.status(403).json({\n        success: false,\n        error: \"This user is already exist\"\n      });\n    }\n\n    res.status(403).json({\n      success: false,\n      error: error.message\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2F1dGgvcmVnaXN0ZXIudHM/MGRiZSJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJSZWdpc3RlclVzZXIiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwidXNlciIsIlVzZXIiLCJmaW5kT25lIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciIsIm5ld1VzZXIiLCJjcmVhdGUiLCJkYXRhIiwiY29kZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsZ0VBQVM7QUFFTSxzRUFBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDakUsVUFBUUQsR0FBRyxDQUFDRSxNQUFaO0FBQ0csU0FBSyxNQUFMO0FBQ0csWUFBTUMsWUFBWSxDQUFDSCxHQUFELEVBQU1DLEdBQU4sQ0FBbEI7QUFDQTs7QUFFSDtBQUNHO0FBTk47QUFRRixDQVREOztBQVdBLE1BQU1FLFlBQVksR0FBRyxPQUFPSCxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUN2RSxNQUFJO0FBQ0Q7QUFDQSxVQUFNO0FBQUVHLGNBQUY7QUFBWUMsV0FBWjtBQUFtQkM7QUFBbkIsUUFBZ0NOLEdBQUcsQ0FBQ08sSUFBMUMsQ0FGQyxDQUlEOztBQUNBLFVBQU1DLElBQUksR0FBRyxNQUFNQyx5REFBSSxDQUFDQyxPQUFMLENBQWE7QUFBRUw7QUFBRixLQUFiLENBQW5COztBQUNBLFFBQUlHLElBQUosRUFBVTtBQUNQLGFBQU9QLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ3pCQyxlQUFPLEVBQUUsS0FEZ0I7QUFFekJDLGFBQUssRUFBRTtBQUZrQixPQUFyQixDQUFQO0FBSUYsS0FYQSxDQWFEOzs7QUFDQSxVQUFNQyxPQUFPLEdBQUcsTUFBTU4seURBQUksQ0FBQ08sTUFBTCxDQUFZO0FBQy9CWixjQUQrQjtBQUUvQkMsV0FGK0I7QUFHL0JDO0FBSCtCLEtBQVosQ0FBdEIsQ0FkQyxDQW9CRDs7QUFDQSxRQUFJLENBQUNTLE9BQUwsRUFBYztBQUNYLGFBQU9kLEdBQUcsQ0FDTlUsTUFERyxDQUNJLEdBREosRUFFSEMsSUFGRyxDQUVFO0FBQUVDLGVBQU8sRUFBRSxLQUFYO0FBQWtCQyxhQUFLLEVBQUU7QUFBekIsT0FGRixDQUFQO0FBR0YsS0F6QkEsQ0EyQkQ7OztBQUNBYixPQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUUsSUFBWDtBQUFpQkksVUFBSSxFQUFFO0FBQUVGO0FBQUY7QUFBdkIsS0FBckI7QUFDRixHQTdCRCxDQTZCRSxPQUFPRCxLQUFQLEVBQWM7QUFDYixRQUFJQSxLQUFLLENBQUNJLElBQU4sS0FBZSxLQUFuQixFQUEwQjtBQUN2QixhQUFPakIsR0FBRyxDQUNOVSxNQURHLENBQ0ksR0FESixFQUVIQyxJQUZHLENBRUU7QUFBRUMsZUFBTyxFQUFFLEtBQVg7QUFBa0JDLGFBQUssRUFBRTtBQUF6QixPQUZGLENBQVA7QUFHRjs7QUFFRGIsT0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFLEtBQVg7QUFBa0JDLFdBQUssRUFBRUEsS0FBSyxDQUFDSztBQUEvQixLQUFyQjtBQUNGO0FBQ0gsQ0F2Q0QiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2F1dGgvcmVnaXN0ZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBjb25uZWN0REIgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQlwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uLy4uL01vZGVscy91c2VyTW9kZWxcIjtcblxuY29ubmVjdERCKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgICAgYXdhaXQgUmVnaXN0ZXJVc2VyKHJlcSwgcmVzKTtcbiAgICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAgYnJlYWs7XG4gICB9XG59O1xuXG5jb25zdCBSZWdpc3RlclVzZXIgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgIHRyeSB7XG4gICAgICAvLyAgR2V0dGluZyB0aGUgZGF0YSBmcm9tIHJlcXVlc3QgYm9keVxuICAgICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuICAgICAgLy8gQ2hlY2tpbmcgaWYgdGhpcyBlbWFpbCB1c2VkIGJlZm9yZSBvciBub3RcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcjogXCJUaGlzIGVtYWlsIGlzIGFscmVhZHkgcmVnaXN0ZXJlZFwiLFxuICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0aW5nIGEgbmV3IFVzZXJcbiAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZSh7XG4gICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgIGVtYWlsLFxuICAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcblxuICAgICAgLy8gSWYgcmVnaXN0cmF0aW9uIGZhaWxlZFxuICAgICAgaWYgKCFuZXdVc2VyKSB7XG4gICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAuc3RhdHVzKDQwMylcbiAgICAgICAgICAgIC5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVyaW5nIGEgc3VjY2VzcyByZXNwb25zZVxuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB7IG5ld1VzZXIgfSB9KTtcbiAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IuY29kZSA9PT0gMTEwMDApIHtcbiAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgIC5zdGF0dXMoNDAzKVxuICAgICAgICAgICAgLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiVGhpcyB1c2VyIGlzIGFscmVhZHkgZXhpc3RcIiB9KTtcbiAgICAgIH1cblxuICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/auth/register.ts\n");

/***/ }),

/***/ "./src/utils/connectDB.ts":
/*!********************************!*\
  !*** ./src/utils/connectDB.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst connectDB = async () => {\n  const URI = process.env.MONGO_URL;\n\n  try {\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(URI, {\n      useFindAndModify: true,\n      useUnifiedTopology: true,\n      useNewUrlParser: true,\n      useCreateIndex: true\n    });\n    console.log(`DB connceted`);\n  } catch (error) {\n    console.log(error);\n    process.exit(1);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectDB);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29ubmVjdERCLnRzP2FhYmIiXSwibmFtZXMiOlsiY29ubmVjdERCIiwiVVJJIiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSTCIsIm1vbmdvb3NlIiwiY29ubmVjdCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VDcmVhdGVJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImV4aXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxZQUFZO0FBQzNCLFFBQU1DLEdBQVEsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFNBQTdCOztBQUVBLE1BQUk7QUFDRCxVQUFNQywrQ0FBUSxDQUFDQyxPQUFULENBQWlCTCxHQUFqQixFQUFzQjtBQUN6Qk0sc0JBQWdCLEVBQUUsSUFETztBQUV6QkMsd0JBQWtCLEVBQUUsSUFGSztBQUd6QkMscUJBQWUsRUFBRSxJQUhRO0FBSXpCQyxvQkFBYyxFQUFFO0FBSlMsS0FBdEIsQ0FBTjtBQU1BQyxXQUFPLENBQUNDLEdBQVIsQ0FBYSxjQUFiO0FBQ0YsR0FSRCxDQVFFLE9BQU9DLEtBQVAsRUFBYztBQUNiRixXQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWjtBQUNBWCxXQUFPLENBQUNZLElBQVIsQ0FBYSxDQUFiO0FBQ0Y7QUFDSCxDQWZEOztBQWlCZWQsd0VBQWYiLCJmaWxlIjoiLi9zcmMvdXRpbHMvY29ubmVjdERCLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XG4gICBjb25zdCBVUkk6IGFueSA9IHByb2Nlc3MuZW52Lk1PTkdPX1VSTDtcblxuICAgdHJ5IHtcbiAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoVVJJLCB7XG4gICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiB0cnVlLFxuICAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGBEQiBjb25uY2V0ZWRgKTtcbiAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/connectDB.ts\n");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIj9jZjljIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJjcnlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcrypt\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });