webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/styles/globals.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./src/styles/globals.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat&family=Titillium+Web:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n  min-height: 100vh;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n.navbar {\\n  font-family: Montserrat, sans-serif;\\n  color: #ffffff;\\n  position: sticky;\\n  width: 100vw;\\n  top: 0;\\n  /* header */\\n  /* dropdown */\\n  /* mega menu  */\\n}\\n.navbar .header {\\n  background: #122331;\\n  position: relative;\\n  margin: auto;\\n  display: flex;\\n  align-items: center;\\n  padding: 1rem 2rem;\\n  z-index: 1;\\n}\\n.navbar .header .logo {\\n  font-size: 2rem;\\n}\\n.navbar .header a {\\n  text-decoration: none;\\n  color: #ffffff;\\n}\\n.navbar .header ul {\\n  list-style: none;\\n}\\n.navbar .header .menu-items {\\n  display: flex;\\n  align-items: center;\\n}\\n.navbar .header li {\\n  padding: 0.5rem 1rem;\\n  transition: background 0.3s ease-in-out;\\n}\\n.navbar .header li:hover {\\n  background-color: #ff652f;\\n}\\n.navbar .dropdown {\\n  position: relative;\\n}\\n.navbar .dropdown-menu,\\n.navbar .menu-right {\\n  position: absolute;\\n  background: #122331;\\n  width: 100%;\\n  top: 50px;\\n  left: 0;\\n  opacity: 0;\\n  visibility: hidden;\\n  transition: all 0.3s ease;\\n}\\n.navbar .menu-right {\\n  top: 0;\\n  left: 110%;\\n}\\n.navbar .menu-item {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 100%;\\n}\\n.navbar .dropdown:hover .dropdown-menu {\\n  top: 34px;\\n  opacity: 1;\\n  visibility: visible;\\n}\\n.navbar .dropdown-right:hover .menu-right {\\n  left: 100%;\\n  opacity: 1;\\n  visibility: visible;\\n}\\n.navbar .mega-menu {\\n  position: absolute;\\n  left: 0;\\n  width: 100vw;\\n  top: 80px;\\n  opacity: 0;\\n  visibility: hidden;\\n  transition: all 0.3s ease;\\n}\\n.navbar .mega-menu .content {\\n  background: #122331;\\n  padding: 1rem;\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  grid-gap: 1rem;\\n  gap: 1rem;\\n  width: 100%;\\n  justify-content: space-between;\\n}\\n.navbar .mega-menu .content .col {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  line-height: 3rem;\\n}\\n.navbar .mega-menu .content .col .img-wrapper {\\n  display: block;\\n  position: relative;\\n  width: 200px;\\n  height: 100px;\\n  overflow: hidden;\\n}\\n.navbar .mega-menu .content .col .img-wrapper:hover img {\\n  transform: scale(1.1);\\n}\\n.navbar .mega-menu .content .col .img {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n}\\n.navbar .mega-menu .content .col img {\\n  width: 100%;\\n  transition: transform 0.3s ease-in-out;\\n}\\n.navbar .mega-menu .content .col h2 {\\n  color: #ff652f;\\n  font-size: 1.2rem;\\n  line-height: 3rem;\\n  font-weight: bold;\\n}\\n.navbar .mega-menu .content .col p {\\n  line-height: 1.2rem;\\n}\\n.navbar .mega-menu .content .col .mega-links {\\n  border-left: 1px solid #1a3246;\\n}\\n.navbar .mega-menu .content .col .mega-links li {\\n  padding: 0 1rem;\\n}\\n.navbar .mega-menu .content .col .mega-links li a {\\n  padding: 0 1rem;\\n}\\n.navbar .mega-menu .content .col .read-more {\\n  display: inline-block;\\n  padding-top: 1rem;\\n  color: #427dad;\\n  transition: color 0.3s ease;\\n}\\n.navbar .menu-items li:hover .mega-menu {\\n  top: 50px;\\n  opacity: 1;\\n  visibility: visible;\\n}\\n.navbar .content .col .read-more:hover {\\n  color: #ff652f;\\n}\\n.navbar .menu-searchSection {\\n  display: flex;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://globals.scss\",\"webpack://../Components/Layout/NavLayout/_mainNavbar.scss\"],\"names\":[],\"mappings\":\"AAAA;;EAEG,UAAA;EACA,SAAA;EACA,8IAAA;EAEA,iBAAA;AACH;;AAEA;EACG,cAAA;EACA,qBAAA;AACH;;AAEA;EACG,SAAA;EACA,UAAA;EACA,sBAAA;AACH;;AChBA;EACG,mCAAA;EACA,cAAA;EACA,gBAAA;EACA,YAAA;EACA,MAAA;EAEA,WAAA;EAiCA,aAAA;EAmCA,eAAA;ADhDH;ACnBG;EACG,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EAEA,kBAAA;EACA,UAAA;ADoBN;ACnBM;EACG,eAAA;ADqBT;ACnBM;EACG,qBAAA;EACA,cAAA;ADqBT;ACnBM;EACG,gBAAA;ADqBT;ACnBM;EACG,aAAA;EACA,mBAAA;ADqBT;ACnBM;EACG,oBAAA;EACA,uCAAA;ADqBT;ACpBS;EACG,yBAAA;ADsBZ;AChBG;EACG,kBAAA;ADkBN;AChBG;;EAEG,kBAAA;EACA,mBAAA;EACA,WAAA;EACA,SAAA;EACA,OAAA;EACA,UAAA;EACA,kBAAA;EACA,yBAAA;ADkBN;AChBG;EACG,MAAA;EACA,UAAA;ADkBN;AChBG;EACG,aAAA;EACA,8BAAA;EACA,WAAA;ADkBN;AChBG;EACG,SAAA;EACA,UAAA;EACA,mBAAA;ADkBN;AChBG;EACG,UAAA;EACA,UAAA;EACA,mBAAA;ADkBN;ACdG;EACG,kBAAA;EACA,OAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,yBAAA;ADgBN;ACfM;EACG,mBAAA;EACA,aAAA;EACA,aAAA;EACA,qCAAA;EACA,cAAA;EAAA,SAAA;EACA,WAAA;EACA,8BAAA;ADiBT;AChBS;EACG,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,iBAAA;ADkBZ;ACjBY;EACG,cAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;ADmBf;ACjBkB;EACG,qBAAA;ADmBrB;ACfY;EACG,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;ADiBf;ACfY;EACG,WAAA;EACA,sCAAA;ADiBf;ACfY;EACG,cAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;ADiBf;ACfY;EACG,mBAAA;ADiBf;ACfY;EACG,8BAAA;ADiBf;AChBe;EACG,eAAA;ADkBlB;ACjBkB;EACG,eAAA;ADmBrB;ACfY;EACG,qBAAA;EACA,iBAAA;EACA,cAAA;EACA,2BAAA;ADiBf;ACRY;EACG,SAAA;EACA,UAAA;EACA,mBAAA;ADUf;ACJG;EACG,cAAA;ADMN;ACJG;EACG,aAAA;ADMN\",\"sourcesContent\":[\"html,\\nbody {\\n   padding: 0;\\n   margin: 0;\\n   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n   min-height: 100vh;\\n}\\n\\na {\\n   color: inherit;\\n   text-decoration: none;\\n}\\n\\n* {\\n   margin: 0;\\n   padding: 0;\\n   box-sizing: border-box;\\n}\\n\\n// Main Layout\\n@import \\\"../Components/Layout/NavLayout/mainNavbar\\\";\\n\",\"@import url(\\\"https://fonts.googleapis.com/css2?family=Montserrat&family=Titillium+Web:wght@400;700&display=swap\\\");\\n\\n.navbar {\\n   font-family: Montserrat, sans-serif;\\n   color: #ffffff;\\n   position: sticky;\\n   width: 100vw;\\n   top: 0;\\n\\n   /* header */\\n   .header {\\n      background: #122331;\\n      position: relative;\\n      margin: auto;\\n      display: flex;\\n      align-items: center;\\n      //   justify-content: space-between;\\n      padding: 1rem 2rem;\\n      z-index: 1;\\n      .logo {\\n         font-size: 2rem;\\n      }\\n      a {\\n         text-decoration: none;\\n         color: #ffffff;\\n      }\\n      ul {\\n         list-style: none;\\n      }\\n      .menu-items {\\n         display: flex;\\n         align-items: center;\\n      }\\n      li {\\n         padding: 0.5rem 1rem;\\n         transition: background 0.3s ease-in-out;\\n         &:hover {\\n            background-color: #ff652f;\\n         }\\n      }\\n   }\\n\\n   /* dropdown */\\n   .dropdown {\\n      position: relative;\\n   }\\n   .dropdown-menu,\\n   .menu-right {\\n      position: absolute;\\n      background: #122331;\\n      width: 100%;\\n      top: 50px;\\n      left: 0;\\n      opacity: 0;\\n      visibility: hidden;\\n      transition: all 0.3s ease;\\n   }\\n   .menu-right {\\n      top: 0;\\n      left: 110%;\\n   }\\n   .menu-item {\\n      display: flex;\\n      justify-content: space-between;\\n      width: 100%;\\n   }\\n   .dropdown:hover .dropdown-menu {\\n      top: 34px;\\n      opacity: 1;\\n      visibility: visible;\\n   }\\n   .dropdown-right:hover .menu-right {\\n      left: 100%;\\n      opacity: 1;\\n      visibility: visible;\\n   }\\n\\n   /* mega menu  */\\n   .mega-menu {\\n      position: absolute;\\n      left: 0;\\n      width: 100vw;\\n      top: 80px;\\n      opacity: 0;\\n      visibility: hidden;\\n      transition: all 0.3s ease;\\n      .content {\\n         background: #122331;\\n         padding: 1rem;\\n         display: grid;\\n         grid-template-columns: repeat(4, 1fr);\\n         gap: 1rem;\\n         width: 100%;\\n         justify-content: space-between;\\n         .col {\\n            display: flex;\\n            flex-direction: column;\\n            justify-content: space-between;\\n            line-height: 3rem;\\n            .img-wrapper {\\n               display: block;\\n               position: relative;\\n               width: 200px;\\n               height: 100px;\\n               overflow: hidden;\\n               &:hover {\\n                  img {\\n                     transform: scale(1.1);\\n                  }\\n               }\\n            }\\n            .img {\\n               position: absolute;\\n               top: 0;\\n               right: 0;\\n               bottom: 0;\\n               left: 0;\\n            }\\n            img {\\n               width: 100%;\\n               transition: transform 0.3s ease-in-out;\\n            }\\n            h2 {\\n               color: #ff652f;\\n               font-size: 1.2rem;\\n               line-height: 3rem;\\n               font-weight: bold;\\n            }\\n            p {\\n               line-height: 1.2rem;\\n            }\\n            .mega-links {\\n               border-left: 1px solid #1a3246;\\n               li {\\n                  padding: 0 1rem;\\n                  a {\\n                     padding: 0 1rem;\\n                  }\\n               }\\n            }\\n            .read-more {\\n               display: inline-block;\\n               padding-top: 1rem;\\n               color: #427dad;\\n               transition: color 0.3s ease;\\n            }\\n         }\\n      }\\n   }\\n\\n   .menu-items {\\n      li {\\n         &:hover {\\n            .mega-menu {\\n               top: 50px;\\n               opacity: 1;\\n               visibility: visible;\\n            }\\n         }\\n      }\\n   }\\n\\n   .content .col .read-more:hover {\\n      color: #ff652f;\\n   }\\n   .menu-searchSection {\\n      display: flex;\\n   }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWxzLnNjc3M/ZWUwYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNrRztBQUNsRyw4QkFBOEIseUZBQTJCO0FBQ3pELDhCQUE4QixRQUFTLGlHQUFpRyxrQkFBa0I7QUFDMUo7QUFDQSw4QkFBOEIsUUFBUyxnQkFBZ0IsZUFBZSxjQUFjLG1KQUFtSixzQkFBc0IsR0FBRyxPQUFPLG1CQUFtQiwwQkFBMEIsR0FBRyxPQUFPLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxhQUFhLHdDQUF3QyxtQkFBbUIscUJBQXFCLGlCQUFpQixXQUFXLHlEQUF5RCxtQkFBbUIsd0JBQXdCLHVCQUF1QixpQkFBaUIsa0JBQWtCLHdCQUF3Qix1QkFBdUIsZUFBZSxHQUFHLHlCQUF5QixvQkFBb0IsR0FBRyxxQkFBcUIsMEJBQTBCLG1CQUFtQixHQUFHLHNCQUFzQixxQkFBcUIsR0FBRywrQkFBK0Isa0JBQWtCLHdCQUF3QixHQUFHLHNCQUFzQix5QkFBeUIsNENBQTRDLEdBQUcsNEJBQTRCLDhCQUE4QixHQUFHLHFCQUFxQix1QkFBdUIsR0FBRyxnREFBZ0QsdUJBQXVCLHdCQUF3QixnQkFBZ0IsY0FBYyxZQUFZLGVBQWUsdUJBQXVCLDhCQUE4QixHQUFHLHVCQUF1QixXQUFXLGVBQWUsR0FBRyxzQkFBc0Isa0JBQWtCLG1DQUFtQyxnQkFBZ0IsR0FBRywwQ0FBMEMsY0FBYyxlQUFlLHdCQUF3QixHQUFHLDZDQUE2QyxlQUFlLGVBQWUsd0JBQXdCLEdBQUcsc0JBQXNCLHVCQUF1QixZQUFZLGlCQUFpQixjQUFjLGVBQWUsdUJBQXVCLDhCQUE4QixHQUFHLCtCQUErQix3QkFBd0Isa0JBQWtCLGtCQUFrQiwwQ0FBMEMsbUJBQW1CLGNBQWMsZ0JBQWdCLG1DQUFtQyxHQUFHLG9DQUFvQyxrQkFBa0IsMkJBQTJCLG1DQUFtQyxzQkFBc0IsR0FBRyxpREFBaUQsbUJBQW1CLHVCQUF1Qixp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QkFBeUIseUJBQXlCLGlEQUFpRCxxQkFBcUIsdUJBQXVCLDBDQUEwQyxpQkFBaUIsNEJBQTRCLHFDQUFxQyw2Q0FBNkMsZ0NBQWdDLDRCQUE0QixnQ0FBZ0Msb0NBQW9DLDhCQUE4QiwrQkFBK0Isa0NBQWtDLDBCQUEwQix5QkFBeUIsNkNBQTZDLHFCQUFxQixrQkFBa0IsZUFBZSxvQkFBb0Isb0NBQW9DLHdCQUF3QiwwQkFBMEIsMkJBQTJCLHlCQUF5QixlQUFlLG1CQUFtQiw2QkFBNkIsd0RBQXdELGVBQWUsa0JBQWtCLGdDQUFnQyxtQ0FBbUMsbUNBQW1DLG1DQUFtQyxlQUFlLGlCQUFpQixxQ0FBcUMsZUFBZSwyQkFBMkIsZ0RBQWdELHFCQUFxQixvQ0FBb0MsdUJBQXVCLHVDQUF1QyxxQkFBcUIsa0JBQWtCLGVBQWUsMEJBQTBCLHVDQUF1QyxtQ0FBbUMsZ0NBQWdDLDZDQUE2QyxlQUFlLFlBQVksU0FBUyxNQUFNLG9CQUFvQixZQUFZLG9CQUFvQiwwQkFBMEIsMkJBQTJCLDRCQUE0QixxQ0FBcUMsZUFBZSxZQUFZLFNBQVMsTUFBTSx1Q0FBdUMsdUJBQXVCLE1BQU0sMEJBQTBCLHNCQUFzQixNQUFNLEdBQUcscUJBQXFCO0FBQ3B1UztBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9zcmMvc3R5bGVzL2dsb2JhbHMuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZmFtaWx5PVRpdGlsbGl1bStXZWI6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgdG9wOiAwO1xcbiAgLyogaGVhZGVyICovXFxuICAvKiBkcm9wZG93biAqL1xcbiAgLyogbWVnYSBtZW51ICAqL1xcbn1cXG4ubmF2YmFyIC5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogIzEyMjMzMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuLm5hdmJhciAuaGVhZGVyIC5sb2dvIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLm5hdmJhciAuaGVhZGVyIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5uYXZiYXIgLmhlYWRlciB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ubmF2YmFyIC5oZWFkZXIgLm1lbnUtaXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXZiYXIgLmhlYWRlciBsaSB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuLm5hdmJhciAuaGVhZGVyIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY1MmY7XFxufVxcbi5uYXZiYXIgLmRyb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm5hdmJhciAuZHJvcGRvd24tbWVudSxcXG4ubmF2YmFyIC5tZW51LXJpZ2h0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICMxMjIzMzE7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogNTBweDtcXG4gIGxlZnQ6IDA7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuLm5hdmJhciAubWVudS1yaWdodCB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAxMTAlO1xcbn1cXG4ubmF2YmFyIC5tZW51LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubmF2YmFyIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tbWVudSB7XFxuICB0b3A6IDM0cHg7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLm5hdmJhciAuZHJvcGRvd24tcmlnaHQ6aG92ZXIgLm1lbnUtcmlnaHQge1xcbiAgbGVmdDogMTAwJTtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4ubmF2YmFyIC5tZWdhLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHRvcDogODBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG4ubmF2YmFyIC5tZWdhLW1lbnUgLmNvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogIzEyMjMzMTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5uYXZiYXIgLm1lZ2EtbWVudSAuY29udGVudCAuY29sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbGluZS1oZWlnaHQ6IDNyZW07XFxufVxcbi5uYXZiYXIgLm1lZ2EtbWVudSAuY29udGVudCAuY29sIC5pbWctd3JhcHBlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ubmF2YmFyIC5tZWdhLW1lbnUgLmNvbnRlbnQgLmNvbCAuaW1nLXdyYXBwZXI6aG92ZXIgaW1nIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLm5hdmJhciAubWVnYS1tZW51IC5jb250ZW50IC5jb2wgLmltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxufVxcbi5uYXZiYXIgLm1lZ2EtbWVudSAuY29udGVudCAuY29sIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4ubmF2YmFyIC5tZWdhLW1lbnUgLmNvbnRlbnQgLmNvbCBoMiB7XFxuICBjb2xvcjogI2ZmNjUyZjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLm5hdmJhciAubWVnYS1tZW51IC5jb250ZW50IC5jb2wgcCB7XFxuICBsaW5lLWhlaWdodDogMS4ycmVtO1xcbn1cXG4ubmF2YmFyIC5tZWdhLW1lbnUgLmNvbnRlbnQgLmNvbCAubWVnYS1saW5rcyB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMxYTMyNDY7XFxufVxcbi5uYXZiYXIgLm1lZ2EtbWVudSAuY29udGVudCAuY29sIC5tZWdhLWxpbmtzIGxpIHtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuLm5hdmJhciAubWVnYS1tZW51IC5jb250ZW50IC5jb2wgLm1lZ2EtbGlua3MgbGkgYSB7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcbi5uYXZiYXIgLm1lZ2EtbWVudSAuY29udGVudCAuY29sIC5yZWFkLW1vcmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBjb2xvcjogIzQyN2RhZDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG59XFxuLm5hdmJhciAubWVudS1pdGVtcyBsaTpob3ZlciAubWVnYS1tZW51IHtcXG4gIHRvcDogNTBweDtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4ubmF2YmFyIC5jb250ZW50IC5jb2wgLnJlYWQtbW9yZTpob3ZlciB7XFxuICBjb2xvcjogI2ZmNjUyZjtcXG59XFxuLm5hdmJhciAubWVudS1zZWFyY2hTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9nbG9iYWxzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi9Db21wb25lbnRzL0xheW91dC9OYXZMYXlvdXQvX21haW5OYXZiYXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRyxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhJQUFBO0VBRUEsaUJBQUE7QUFDSDs7QUFFQTtFQUNHLGNBQUE7RUFDQSxxQkFBQTtBQUNIOztBQUVBO0VBQ0csU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUNIOztBQ2hCQTtFQUNHLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFFQSxXQUFBO0VBaUNBLGFBQUE7RUFtQ0EsZUFBQTtBRGhESDtBQ25CRztFQUNHLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0FEb0JOO0FDbkJNO0VBQ0csZUFBQTtBRHFCVDtBQ25CTTtFQUNHLHFCQUFBO0VBQ0EsY0FBQTtBRHFCVDtBQ25CTTtFQUNHLGdCQUFBO0FEcUJUO0FDbkJNO0VBQ0csYUFBQTtFQUNBLG1CQUFBO0FEcUJUO0FDbkJNO0VBQ0csb0JBQUE7RUFDQSx1Q0FBQTtBRHFCVDtBQ3BCUztFQUNHLHlCQUFBO0FEc0JaO0FDaEJHO0VBQ0csa0JBQUE7QURrQk47QUNoQkc7O0VBRUcsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FEa0JOO0FDaEJHO0VBQ0csTUFBQTtFQUNBLFVBQUE7QURrQk47QUNoQkc7RUFDRyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FEa0JOO0FDaEJHO0VBQ0csU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBRGtCTjtBQ2hCRztFQUNHLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QURrQk47QUNkRztFQUNHLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QURnQk47QUNmTTtFQUNHLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FEaUJUO0FDaEJTO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBRGtCWjtBQ2pCWTtFQUNHLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QURtQmY7QUNqQmtCO0VBQ0cscUJBQUE7QURtQnJCO0FDZlk7RUFDRyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QURpQmY7QUNmWTtFQUNHLFdBQUE7RUFDQSxzQ0FBQTtBRGlCZjtBQ2ZZO0VBQ0csY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRGlCZjtBQ2ZZO0VBQ0csbUJBQUE7QURpQmY7QUNmWTtFQUNHLDhCQUFBO0FEaUJmO0FDaEJlO0VBQ0csZUFBQTtBRGtCbEI7QUNqQmtCO0VBQ0csZUFBQTtBRG1CckI7QUNmWTtFQUNHLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QURpQmY7QUNSWTtFQUNHLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QURVZjtBQ0pHO0VBQ0csY0FBQTtBRE1OO0FDSkc7RUFDRyxhQUFBO0FETU5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gICBwYWRkaW5nOiAwO1xcbiAgIG1hcmdpbjogMDtcXG4gICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXFxuICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxuICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmEge1xcbiAgIGNvbG9yOiBpbmhlcml0O1xcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuKiB7XFxuICAgbWFyZ2luOiAwO1xcbiAgIHBhZGRpbmc6IDA7XFxuICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLy8gTWFpbiBMYXlvdXRcXG5AaW1wb3J0IFxcXCIuLi9Db21wb25lbnRzL0xheW91dC9OYXZMYXlvdXQvbWFpbk5hdmJhclxcXCI7XFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4ubmF2YmFyIHtcXG4gICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcXG4gICBjb2xvcjogI2ZmZmZmZjtcXG4gICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgIHdpZHRoOiAxMDB2dztcXG4gICB0b3A6IDA7XFxuXFxuICAgLyogaGVhZGVyICovXFxuICAgLmhlYWRlciB7XFxuICAgICAgYmFja2dyb3VuZDogIzEyMjMzMTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAvLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgICAgei1pbmRleDogMTtcXG4gICAgICAubG9nbyB7XFxuICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgIH1cXG4gICAgICBhIHtcXG4gICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgY29sb3I6ICNmZmZmZmY7XFxuICAgICAgfVxcbiAgICAgIHVsIHtcXG4gICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgIH1cXG4gICAgICAubWVudS1pdGVtcyB7XFxuICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIH1cXG4gICAgICBsaSB7XFxuICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY1MmY7XFxuICAgICAgICAgfVxcbiAgICAgIH1cXG4gICB9XFxuXFxuICAgLyogZHJvcGRvd24gKi9cXG4gICAuZHJvcGRvd24ge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICB9XFxuICAgLmRyb3Bkb3duLW1lbnUsXFxuICAgLm1lbnUtcmlnaHQge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMTIyMzMxO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHRvcDogNTBweDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgfVxcbiAgIC5tZW51LXJpZ2h0IHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMTEwJTtcXG4gICB9XFxuICAgLm1lbnUtaXRlbSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgfVxcbiAgIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tbWVudSB7XFxuICAgICAgdG9wOiAzNHB4O1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICB9XFxuICAgLmRyb3Bkb3duLXJpZ2h0OmhvdmVyIC5tZW51LXJpZ2h0IHtcXG4gICAgICBsZWZ0OiAxMDAlO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICB9XFxuXFxuICAgLyogbWVnYSBtZW51ICAqL1xcbiAgIC5tZWdhLW1lbnUge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICB0b3A6IDgwcHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgICAuY29udGVudCB7XFxuICAgICAgICAgYmFja2dyb3VuZDogIzEyMjMzMTtcXG4gICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgIC5jb2wge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgLmltZy13cmFwcGVyIHtcXG4gICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuaW1nIHtcXG4gICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBoMiB7XFxuICAgICAgICAgICAgICAgY29sb3I6ICNmZjY1MmY7XFxuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5tZWdhLWxpbmtzIHtcXG4gICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMxYTMyNDY7XFxuICAgICAgICAgICAgICAgbGkge1xcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgICAgICAgICAgICAgICBhIHtcXG4gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnJlYWQtbW9yZSB7XFxuICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICAgICAgICAgICAgIGNvbG9yOiAjNDI3ZGFkO1xcbiAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgfVxcbiAgICAgIH1cXG4gICB9XFxuXFxuICAgLm1lbnUtaXRlbXMge1xcbiAgICAgIGxpIHtcXG4gICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAubWVnYS1tZW51IHtcXG4gICAgICAgICAgICAgICB0b3A6IDUwcHg7XFxuICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICB9XFxuICAgICAgfVxcbiAgIH1cXG5cXG4gICAuY29udGVudCAuY29sIC5yZWFkLW1vcmU6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjZmY2NTJmO1xcbiAgIH1cXG4gICAubWVudS1zZWFyY2hTZWN0aW9uIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/styles/globals.scss\n");

/***/ })

})