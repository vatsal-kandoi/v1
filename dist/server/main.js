(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RouterModuleNgFactory, RenderType_ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_0, View_ɵEmptyOutletComponent_Host_0, ɵEmptyOutletComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterModuleNgFactory", function() { return RouterModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵEmptyOutletComponent", function() { return RenderType_ɵEmptyOutletComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵEmptyOutletComponent_0", function() { return View_ɵEmptyOutletComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵEmptyOutletComponent_Host_0", function() { return View_ɵEmptyOutletComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵEmptyOutletComponentNgFactory", function() { return ɵEmptyOutletComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var RouterModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [ɵEmptyOutletComponentNgFactory]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]]])]); });

var styles_ɵEmptyOutletComponent = [];
var RenderType_ɵEmptyOutletComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });

function View_ɵEmptyOutletComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵEmptyOutletComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponent"], [], null, null)], null, null); }
var ɵEmptyOutletComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponent"], View_ɵEmptyOutletComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/about/about.component.css.shim.ngstyle.js":
/*!***********************************************************!*\
  !*** ./src/app/about/about.component.css.shim.ngstyle.js ***!
  \***********************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".full[_ngcontent-%COMP%]{\n    height: 100%;\n}\n.mainDiv[_ngcontent-%COMP%]{\n    display: flex;\n    width:100%;\n    height:100%;\n    padding: 0;\n    position: relative;\n    flex-direction: column;\n}\n.image-div[_ngcontent-%COMP%]{\n    margin:20px auto;\n    display: flex;\n    align-items: center;\n}\n.profile[_ngcontent-%COMP%]{\n    border-radius:50%;\n    width:100px;\n    text-align: center;\n    background-color: #2cc19c;\n    height:100px;\n    box-shadow: 1px 3px 2px 1px rgba(0,0,0,0.1);\n}\n.info[_ngcontent-%COMP%]{\n    margin:0 auto;\n}\n.name[_ngcontent-%COMP%]{\n    margin:0 auto;\n    font-size:25px;\n    font-weight:bold;\n}\n.social-icons[_ngcontent-%COMP%]{\n    display: flex;\n    color: #3e4644;\n    justify-content: center;\n}\n.icon-link[_ngcontent-%COMP%]{\n    cursor: pointer;\n    color: inherit;\n}\n.icon-social[_ngcontent-%COMP%]{\n    margin-left:5px;\n    margin-right:5px;\n}\n.icon-link[_ngcontent-%COMP%]:hover{\n    color:#FA292A !important;\n}\n.dark-occupation[_ngcontent-%COMP%]{\n    color:#45c12c !important;\n}\n.occupation[_ngcontent-%COMP%]{\n    margin:0 auto;\n    margin-bottom:10px;\n    color:#2d16ff;\n    font-weight: bold;\n    font-size:14px;\n}\n.location[_ngcontent-%COMP%]{\n    margin:10px auto;\n    font-weight: bold;\n    text-align: center;\n}\n.about-me-header[_ngcontent-%COMP%]{\n    padding:10px;\n    font-weight: bold;\n    font-size:20px;\n}\n.about-me[_ngcontent-%COMP%]{\n    padding:10px;\n    font-size:13px;\n    text-align: justify;\n    text-justify: inter-word;\n}\n.dark-info[_ngcontent-%COMP%]{\n    color: white;\n}\n.dark-social-icons[_ngcontent-%COMP%]{\n    color:white;\n}\n.dark-location[_ngcontent-%COMP%]{\n    color: white;\n}\n.download[_ngcontent-%COMP%]{\n    color:black;\n    font-weight: bold;\n    cursor: pointer;\n}\n.download[_ngcontent-%COMP%]:hover{\n    color:#FA292A;\n}\n.download[_ngcontent-%COMP%]:focus{\n    color:#FA292A\n}\n.download-cv[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom:20px;\n    left:20px;\n}\n.dark-download[_ngcontent-%COMP%]{\n    color: white;\n}\n.separator-left[_ngcontent-%COMP%]{\n    border-right:2px solid #2cc19c;\n}\n.dark-separator-left[_ngcontent-%COMP%]{\n    border-right:2px solid #3e4644;\n}\n.separator-right[_ngcontent-%COMP%]{\n    border-left:2px solid #2cc19c;\n}\n.dark-separator-right[_ngcontent-%COMP%]{\n    border-left:2px solid #3e4644;\n}\n.rightdiv[_ngcontent-%COMP%]{\n    position: relative;\n}\n.color[_ngcontent-%COMP%]{\n    color: white;\n}\n@media only screen and (max-width:600px){\n    .separator-left[_ngcontent-%COMP%]{\n        border:none;\n    }\n    .separator-right[_ngcontent-%COMP%]{\n        border:none;\n    }\n    .about-me[_ngcontent-%COMP%]{\n        padding-bottom:100px; \n    }\n}\n@media only screen and (max-width:400px){\n    .about-me[_ngcontent-%COMP%]{\n        padding-bottom: 50px;\n        font-size: 12px;\n    }\n    .name[_ngcontent-%COMP%]{\n        font-size:18px;\n    }\n    .about-me-header[_ngcontent-%COMP%]{\n        font-size: 15px;\n    }\n    .occupation[_ngcontent-%COMP%]{\n        font-size:10px;\n    }\n}\n@media only screen and (max-height: 600px){\n    .profile[_ngcontent-%COMP%]{\n        display: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxvQkFBb0I7UUFDcEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFpbkRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5pbWFnZS1kaXZ7XG4gICAgbWFyZ2luOjIwcHggYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZmlsZXtcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICB3aWR0aDoxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjYzE5YztcbiAgICBoZWlnaHQ6MTAwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDNweCAycHggMXB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cbi5pbmZve1xuICAgIG1hcmdpbjowIGF1dG87XG59XG4ubmFtZXtcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIGZvbnQtc2l6ZToyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG4uc29jaWFsLWljb25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICMzZTQ2NDQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaWNvbi1saW5re1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cbi5pY29uLXNvY2lhbHtcbiAgICBtYXJnaW4tbGVmdDo1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcbn1cbi5pY29uLWxpbms6aG92ZXJ7XG4gICAgY29sb3I6I0ZBMjkyQSAhaW1wb3J0YW50O1xufVxuLmRhcmstb2NjdXBhdGlvbntcbiAgICBjb2xvcjojNDVjMTJjICFpbXBvcnRhbnQ7XG59XG4ub2NjdXBhdGlvbntcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206MTBweDtcbiAgICBjb2xvcjojMmQxNmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZToxNHB4O1xufVxuLmxvY2F0aW9ue1xuICAgIG1hcmdpbjoxMHB4IGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFib3V0LW1lLWhlYWRlcntcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOjIwcHg7XG59XG4uYWJvdXQtbWV7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIGZvbnQtc2l6ZToxM3B4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xufVxuLmRhcmstaW5mb3tcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uZGFyay1zb2NpYWwtaWNvbnN7XG4gICAgY29sb3I6d2hpdGU7XG59XG4uZGFyay1sb2NhdGlvbntcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uZG93bmxvYWR7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRvd25sb2FkOmhvdmVye1xuICAgIGNvbG9yOiNGQTI5MkE7XG59XG4uZG93bmxvYWQ6Zm9jdXN7XG4gICAgY29sb3I6I0ZBMjkyQVxufVxuLmRvd25sb2FkLWN2e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206MjBweDtcbiAgICBsZWZ0OjIwcHg7XG59XG4uZGFyay1kb3dubG9hZHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uc2VwYXJhdG9yLWxlZnR7XG4gICAgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCAjMmNjMTljO1xufVxuLmRhcmstc2VwYXJhdG9yLWxlZnR7XG4gICAgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCAjM2U0NjQ0O1xufVxuLnNlcGFyYXRvci1yaWdodHtcbiAgICBib3JkZXItbGVmdDoycHggc29saWQgIzJjYzE5Yztcbn1cbi5kYXJrLXNlcGFyYXRvci1yaWdodHtcbiAgICBib3JkZXItbGVmdDoycHggc29saWQgIzNlNDY0NDtcbn1cbi5yaWdodGRpdntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29sb3J7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcbiAgICAuc2VwYXJhdG9yLWxlZnR7XG4gICAgICAgIGJvcmRlcjpub25lO1xuICAgIH1cbiAgICAuc2VwYXJhdG9yLXJpZ2h0e1xuICAgICAgICBib3JkZXI6bm9uZTtcbiAgICB9XG4gICAgLmFib3V0LW1le1xuICAgICAgICBwYWRkaW5nLWJvdHRvbToxMDBweDsgXG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQwMHB4KXtcbiAgICAuYWJvdXQtbWV7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5uYW1le1xuICAgICAgICBmb250LXNpemU6MThweDtcbiAgICB9XG4gICAgLmFib3V0LW1lLWhlYWRlcntcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgICAub2NjdXBhdGlvbntcbiAgICAgICAgZm9udC1zaXplOjEwcHg7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNjAwcHgpe1xuICAgIC5wcm9maWxle1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0iXX0= */"];



/***/ }),

/***/ "./src/app/about/about.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/about/about.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_AboutComponent, View_AboutComponent_0, View_AboutComponent_Host_0, AboutComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AboutComponent", function() { return RenderType_AboutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutComponent_0", function() { return View_AboutComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutComponent_Host_0", function() { return View_AboutComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponentNgFactory", function() { return AboutComponentNgFactory; });
/* harmony import */ var _about_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component.css.shim.ngstyle */ "./src/app/about/about.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _shared_darkmode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/darkmode.service */ "./src/app/shared/darkmode.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_AboutComponent = [_about_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AboutComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AboutComponent, data: {} });

function View_AboutComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 50, "div", [["class", "row full"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 36, "div", [["class", "col l6 m6 s12 full mainDiv addShadow separator-left"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { "dark-separator-left": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "image-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "img", [["alt", "Profile"], ["class", "profile"], ["src", "assets/me.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 31, "div", [["class", "info"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](8, { "dark-info": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vatsal Kandoi"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "div", [["class", "occupation"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](13, { "dark-occupation": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Student | VIT University"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 17, "div", [["class", "social-icons"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](17, { "dark-social-icons": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "div", [["class", "icon-social"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "a", [["class", "icon-link tooltipped"], ["data-position", "top"], ["data-tooltip", "Twitter profile"], ["href", "https://twitter.com/vatsal_kandoi"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 0, "i", [["class", "fab fa-twitter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "div", [["class", "icon-social"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "a", [["class", "icon-link tooltipped"], ["data-position", "top"], ["data-tooltip", "Facebook profile"], ["href", "https://www.facebook.com/batsal.kandoi"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "i", [["class", "fab fa-facebook"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "div", [["class", "icon-social"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "a", [["class", "icon-link tooltipped"], ["data-position", "top"], ["data-tooltip", "Github profile"], ["href", "https://github.com/vatsal-kandoi"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, "i", [["class", "fab fa-github"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 2, "div", [["class", "icon-social"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "a", [["class", "icon-link tooltipped"], ["data-position", "top"], ["data-tooltip", "Mail me"], ["href", "mailto:vatsalkandoi1998@gmail.com"], ["target", "_top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 0, "i", [["class", "fas fa-envelope"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 2, "div", [["class", "icon-social"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "a", [["class", "icon-link tooltipped"], ["data-position", "top"], ["data-tooltip", "Linkedin profile"], ["href", "https://www.linkedin.com/in/vatsal-kandoi-74027217b/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 0, "i", [["class", "fab fa-linkedin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 4, "div", [["class", "location"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](35, { "dark-location": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 0, "i", [["class", "fas fa-map-marker-alt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Kolkata | India"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 12, "div", [["class", "col l6 m6 s12 full rightdiv addShadow separator-right"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](40, { "dark-separator-right": 0, "color": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "div", [["class", "about-me-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ABOUT ME"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 1, "div", [["class", "about-me"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor corporis incidunt earum temporibus expedita laudantium eos maiores cumque harum! Eligendi ex veritatis quod quisquam, vitae dicta earum similique voluptas sapiente!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 5, "div", [["class", "download-cv"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 4, "a", [["class", "download"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](48, { "dark-download": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["DOWNLOAD RESUME "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 0, "i", [["class", "fas fa-download"], ["style", "margin-left:5px;"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "col l6 m6 s12 full mainDiv addShadow separator-left"; var currVal_1 = _ck(_v, 3, 0, _co.darkMode); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = "info"; var currVal_3 = _ck(_v, 8, 0, _co.darkMode); _ck(_v, 7, 0, currVal_2, currVal_3); var currVal_4 = "occupation"; var currVal_5 = _ck(_v, 13, 0, _co.darkMode); _ck(_v, 12, 0, currVal_4, currVal_5); var currVal_6 = "social-icons"; var currVal_7 = _ck(_v, 17, 0, _co.darkMode); _ck(_v, 16, 0, currVal_6, currVal_7); var currVal_8 = "location"; var currVal_9 = _ck(_v, 35, 0, _co.darkMode); _ck(_v, 34, 0, currVal_8, currVal_9); var currVal_10 = "col l6 m6 s12 full rightdiv addShadow separator-right"; var currVal_11 = _ck(_v, 40, 0, _co.darkMode, _co.darkMode); _ck(_v, 39, 0, currVal_10, currVal_11); var currVal_12 = "download"; var currVal_13 = _ck(_v, 48, 0, _co.darkMode); _ck(_v, 47, 0, currVal_12, currVal_13); }, null); }
function View_AboutComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-about", [], null, null, null, View_AboutComponent_0, RenderType_AboutComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], [_shared_darkmode_service__WEBPACK_IMPORTED_MODULE_4__["DarkmodeService"]], null, null)], null, null); }
var AboutComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-about", _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], View_AboutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_darkmode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/darkmode.service */ "./src/app/shared/darkmode.service.ts");


var AboutComponent = /** @class */ (function () {
    function AboutComponent(darkModeService) {
        var _this = this;
        this.darkModeService = darkModeService;
        this.darkMode = darkModeService.getMode();
        this.subscription = darkModeService.modeChange.subscribe(function (value) {
            _this.darkMode = value;
        });
        this.darkModeService = darkModeService;
    }
    AboutComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _educations_educations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./educations/educations.component */ "./src/app/educations/educations.component.ts");
/* harmony import */ var _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experiences/experiences.component */ "./src/app/experiences/experiences.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");








var ɵ0 = { message: 'Page not found' };
/** Declaring all the routes along with components to be displayed for routing. */
var appRoutes = [
    { path: '', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'educations', component: _educations_educations_component__WEBPACK_IMPORTED_MODULE_4__["EducationsComponent"] },
    { path: 'experiences', component: _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_5__["ExperiencesComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] },
    { path: 'error', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_1__["ErrorPageComponent"] },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"] },
    { path: 'not-found', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_1__["ErrorPageComponent"], data: ɵ0 },
    { path: '**', redirectTo: '/not-found' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());




/***/ }),

/***/ "./src/app/app.component.css.shim.ngstyle.js":
/*!***************************************************!*\
  !*** ./src/app/app.component.css.shim.ngstyle.js ***!
  \***************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".shade[_ngcontent-%COMP%]{\n    width:100%;\n    position: fixed;\n    height: 100vh;\n    background-color: rgba(0,0,0,0.2);\n}\n.centerIt[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n.main-component[_ngcontent-%COMP%]{\n    position: relative;\n    height: 300px;\n    background-color: white;\n}\n.dark-main-component[_ngcontent-%COMP%]{\n    background-color: #3e4644\n}\n.nav-bar-vert[_ngcontent-%COMP%]{\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    top:0;\n    background-color: white;\n    left:-55px;\n}\n.dark-nav-bar-vert[_ngcontent-%COMP%]{\n    background-color: #2cc133;\n}\n.nav-item-block[_ngcontent-%COMP%]{\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width:50px;\n    color:inherit;\n    cursor: pointer;\n}\n.nostyle[_ngcontent-%COMP%]{\n    color:rgba(0, 0, 0, 0.87);\n    outline: 0;\n}\n.nostyle[_ngcontent-%COMP%]:hover{\n    color:#2cc19c\n}\n.nostyle[_ngcontent-%COMP%]:focus{\n    color:#2cc19c\n}\n.active[_ngcontent-%COMP%]{\n    color:#2cc19c;\n}\n.dark-nostyle[_ngcontent-%COMP%]{\n    color:white;\n    outline: 0;\n}\n.dark-nostyle[_ngcontent-%COMP%]:hover{\n    color:#FA292A\n}\n.dark-nostyle[_ngcontent-%COMP%]:focus{\n    color:#FA292A\n}\n.dark-active[_ngcontent-%COMP%]{\n    color: #FA292A;\n}\n.background[_ngcontent-%COMP%]{\n    background-image: linear-gradient(to bottom right, #2cc19c, #7fffbf);\n    background-color:#2cc19c;\n    height: 100vh;\n    width: 100%;\n    position: fixed;\n}\n.dark-background[_ngcontent-%COMP%]{\n    background-image: linear-gradient(to bottom right, #272c2b, #2e3532);\n    background-color:#232726;\n}\n.change[_ngcontent-%COMP%]{\n    width: 30px;\n    height: 30px;\n    background-color: white;\n    position: absolute;\n    bottom:100px;\n    right:0px;\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.change[_ngcontent-%COMP%]:hover{\n    color:#FA292A;\n}\n@media only screen and (max-width:600px){\n    .nav-bar-vert[_ngcontent-%COMP%]{\n        position: fixed;\n        top:0px;\n        left:calc( 50% - 150px);\n        flex-direction: row;\n    }\n    .main-component[_ngcontent-%COMP%]{\n        height: 100%;\n    }\n    .change[_ngcontent-%COMP%]{\n        position: fixed;\n        bottom:5px !important;\n        right: 5px;\n    }\n}\n@media only screen and (max-width:400px){\n    .nav-item-block[_ngcontent-%COMP%]{\n        width: 40px;\n        height: 40px;\n    }\n    .nav-bar-vert[_ngcontent-%COMP%]{\n        left:calc(50% - 120px);\n    }\n}\n@media only screen and (max-height:566px){\n    .main-component[_ngcontent-%COMP%]{\n        margin-top: 60px;\n    }\n}\n@media only screen and (max-width:500px){\n    .change[_ngcontent-%COMP%]{\n        box-shadow: rgba(0,0,0,0.3) 0.5px 0px 1px 0.5px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGFBQWE7SUFDYixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLEtBQUs7SUFDTCx1QkFBdUI7SUFDdkIsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG9FQUFvRTtJQUNwRSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxvRUFBb0U7SUFDcEUsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLE9BQU87UUFDUCx1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSjtBQUdBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSwrQ0FBK0M7SUFDbkQ7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNoYWRle1xuICAgIHdpZHRoOjEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xufVxuLmNlbnRlckl0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbi1jb21wb25lbnR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uZGFyay1tYWluLWNvbXBvbmVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U0NjQ0XG59XG4ubmF2LWJhci12ZXJ0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdG9wOjA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbGVmdDotNTVweDtcbn1cbi5kYXJrLW5hdi1iYXItdmVydHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmNjMTMzO1xufVxuLm5hdi1pdGVtLWJsb2Nre1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6NTBweDtcbiAgICBjb2xvcjppbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ub3N0eWxle1xuICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgb3V0bGluZTogMDtcbn1cbi5ub3N0eWxlOmhvdmVye1xuICAgIGNvbG9yOiMyY2MxOWNcbn1cbi5ub3N0eWxlOmZvY3Vze1xuICAgIGNvbG9yOiMyY2MxOWNcbn1cbi5hY3RpdmV7XG4gICAgY29sb3I6IzJjYzE5Yztcbn1cblxuLmRhcmstbm9zdHlsZXtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBvdXRsaW5lOiAwO1xufVxuLmRhcmstbm9zdHlsZTpob3ZlcntcbiAgICBjb2xvcjojRkEyOTJBXG59XG4uZGFyay1ub3N0eWxlOmZvY3Vze1xuICAgIGNvbG9yOiNGQTI5MkFcbn1cbi5kYXJrLWFjdGl2ZXtcbiAgICBjb2xvcjogI0ZBMjkyQTtcbn1cbi5iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMyY2MxOWMsICM3ZmZmYmYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzJjYzE5YztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5kYXJrLWJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzI3MmMyYiwgIzJlMzUzMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMjMyNzI2O1xufVxuLmNoYW5nZXtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbToxMDBweDtcbiAgICByaWdodDowcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY2hhbmdlOmhvdmVye1xuICAgIGNvbG9yOiNGQTI5MkE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xuICAgIC5uYXYtYmFyLXZlcnR7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOjBweDtcbiAgICAgICAgbGVmdDpjYWxjKCA1MCUgLSAxNTBweCk7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuICAgIC5tYWluLWNvbXBvbmVudHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAuY2hhbmdle1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTo1cHggIWltcG9ydGFudDtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDAwcHgpe1xuICAgIC5uYXYtaXRlbS1ibG9ja3tcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG4gICAgLm5hdi1iYXItdmVydHtcbiAgICAgICAgbGVmdDpjYWxjKDUwJSAtIDEyMHB4KTtcbiAgICB9XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDo1NjZweCl7XG4gICAgLm1haW4tY29tcG9uZW50e1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUwMHB4KXtcbiAgICAuY2hhbmdle1xuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMykgMC41cHggMHB4IDFweCAwLjVweDtcbiAgICB9XG59Il19 */"];



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.css.shim.ngstyle */ "./src/app/app.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_darkmode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/darkmode.service */ "./src/app/shared/darkmode.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [], null, null, null, null, null))], null, null); }
function View_AppComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "nav-item-block"], ["role", "none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "a", [["aria-haspopup", "false"], ["class", "nostyle"], ["role", "menuitem"], ["routerLink", "/"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](6, { exact: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fas fa-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "div", [["class", "nav-item-block"], ["role", "none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 5, "a", [["aria-haspopup", "false"], ["class", "nostyle"], ["role", "menuitem"], ["routerLink", "/experiences"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 671744, [[4, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "i", [["class", "fas fa-briefcase"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 6, "div", [["class", "nav-item-block"], ["role", "none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 5, "a", [["aria-haspopup", "false"], ["class", "nostyle"], ["role", "menuitem"], ["routerLink", "/projects"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, [[6, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "i", [["class", "fas fa-pen"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 6, "div", [["class", "nav-item-block"], ["role", "none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 5, "a", [["aria-haspopup", "false"], ["class", "nostyle"], ["role", "menuitem"], ["routerLink", "/educations"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 671744, [[8, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 0, "i", [["class", "fas fa-graduation-cap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 6, "div", [["class", "nav-item-block"], ["role", "none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 5, "a", [["aria-haspopup", "false"], ["class", "nostyle"], ["role", "menuitem"], ["routerLink", "/skills"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 671744, [[10, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 0, "i", [["class", "fas fa-book-open"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 6, "div", [["class", "nav-item-block"], ["role", "none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 5, "a", [["aria-haspopup", "false"], ["class", "nostyle"], ["role", "menuitem"], ["routerLink", "/contact"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 671744, [[12, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 0, "i", [["class", "fas fa-envelope"]], null, null, null, null, null))], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 2, 0, currVal_2); var currVal_3 = _ck(_v, 6, 0, true); var currVal_4 = "active"; _ck(_v, 3, 0, currVal_3, currVal_4); var currVal_7 = "/experiences"; _ck(_v, 10, 0, currVal_7); var currVal_8 = "active"; _ck(_v, 11, 0, currVal_8); var currVal_11 = "/projects"; _ck(_v, 17, 0, currVal_11); var currVal_12 = "active"; _ck(_v, 18, 0, currVal_12); var currVal_15 = "/educations"; _ck(_v, 24, 0, currVal_15); var currVal_16 = "active"; _ck(_v, 25, 0, currVal_16); var currVal_19 = "/skills"; _ck(_v, 31, 0, currVal_19); var currVal_20 = "active"; _ck(_v, 32, 0, currVal_20); var currVal_23 = "/contact"; _ck(_v, 38, 0, currVal_23); var currVal_24 = "active"; _ck(_v, 39, 0, currVal_24); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).target; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).href; _ck(_v, 9, 0, currVal_5, currVal_6); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).target; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).href; _ck(_v, 16, 0, currVal_9, currVal_10); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).target; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).href; _ck(_v, 23, 0, currVal_13, currVal_14); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).target; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).href; _ck(_v, 30, 0, currVal_17, currVal_18); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).target; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).href; _ck(_v, 37, 0, currVal_21, currVal_22); }); }
function View_AppComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "nav-item-block"], ["role", "none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "a", [["aria-haspopup", "false"], ["class", "dark-nostyle"], ["role", "menuitem"], ["routerLink", "/"], ["routerLinkActive", "dark-active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, [[14, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](6, { exact: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fas fa-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "div", [["class", "nav-item-block"], ["role", "none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 5, "a", [["aria-haspopup", "false"], ["class", "dark-nostyle"], ["role", "menuitem"], ["routerLink", "/experiences"], ["routerLinkActive", "dark-active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 671744, [[16, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "i", [["class", "fas fa-briefcase"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 6, "div", [["class", "nav-item-block"], ["role", "none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 5, "a", [["aria-haspopup", "false"], ["class", "dark-nostyle"], ["role", "menuitem"], ["routerLink", "/projects"], ["routerLinkActive", "dark-active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, [[18, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "i", [["class", "fas fa-pen"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 6, "div", [["class", "nav-item-block"], ["role", "none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 5, "a", [["aria-haspopup", "false"], ["class", "dark-nostyle"], ["role", "menuitem"], ["routerLink", "/educations"], ["routerLinkActive", "dark-active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 671744, [[20, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 0, "i", [["class", "fas fa-graduation-cap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 6, "div", [["class", "nav-item-block"], ["role", "none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 5, "a", [["aria-haspopup", "false"], ["class", "dark-nostyle"], ["role", "menuitem"], ["routerLink", "/skills"], ["routerLinkActive", "dark-active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 671744, [[22, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 0, "i", [["class", "fas fa-book-open"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 6, "div", [["class", "nav-item-block"], ["role", "none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 5, "a", [["aria-haspopup", "false"], ["class", "dark-nostyle"], ["role", "menuitem"], ["routerLink", "/contact"], ["routerLinkActive", "dark-active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 671744, [[24, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 0, "i", [["class", "fas fa-envelope"]], null, null, null, null, null))], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 2, 0, currVal_2); var currVal_3 = _ck(_v, 6, 0, true); var currVal_4 = "dark-active"; _ck(_v, 3, 0, currVal_3, currVal_4); var currVal_7 = "/experiences"; _ck(_v, 10, 0, currVal_7); var currVal_8 = "dark-active"; _ck(_v, 11, 0, currVal_8); var currVal_11 = "/projects"; _ck(_v, 17, 0, currVal_11); var currVal_12 = "dark-active"; _ck(_v, 18, 0, currVal_12); var currVal_15 = "/educations"; _ck(_v, 24, 0, currVal_15); var currVal_16 = "dark-active"; _ck(_v, 25, 0, currVal_16); var currVal_19 = "/skills"; _ck(_v, 31, 0, currVal_19); var currVal_20 = "dark-active"; _ck(_v, 32, 0, currVal_20); var currVal_23 = "/contact"; _ck(_v, 38, 0, currVal_23); var currVal_24 = "dark-active"; _ck(_v, 39, 0, currVal_24); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).target; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).href; _ck(_v, 9, 0, currVal_5, currVal_6); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).target; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).href; _ck(_v, 16, 0, currVal_9, currVal_10); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).target; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).href; _ck(_v, 23, 0, currVal_13, currVal_14); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).target; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).href; _ck(_v, 30, 0, currVal_17, currVal_18); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).target; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).href; _ck(_v, 37, 0, currVal_21, currVal_22); }); }
function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "div", [["class", "background"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "dark-background": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 16, "div", [["class", "shade centerIt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "change tooltipped"], ["data-position", "right"], ["data-tooltip", "Toggle mode"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.change() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "i", [["class", "fas fa-cog"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 13, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 12, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 11, "div", [["class", "col l8 offset-l2 m10 offset-m1 s12 main-component"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](10, { "dark-main-component": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 6, "div", [["aria-label", "Main navigation"], ["class", "nav-bar-vert"], ["role", "navigation"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](15, { "dark-nav-bar-vert": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfThen: [1, "ngIfThen"], ngIfElse: [2, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["light", 2]], null, 0, null, View_AppComponent_2)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["dark", 2]], null, 0, null, View_AppComponent_3))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "background"; var currVal_1 = _ck(_v, 2, 0, _co.darkMode); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "col l8 offset-l2 m10 offset-m1 s12 main-component"; var currVal_3 = _ck(_v, 10, 0, _co.darkMode); _ck(_v, 9, 0, currVal_2, currVal_3); _ck(_v, 12, 0); var currVal_4 = "nav-bar-vert"; var currVal_5 = _ck(_v, 15, 0, _co.darkMode); _ck(_v, 14, 0, currVal_4, currVal_5); var currVal_6 = !_co.darkMode; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19); _ck(_v, 17, 0, currVal_6, currVal_7, currVal_8); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], [_shared_darkmode_service__WEBPACK_IMPORTED_MODULE_5__["DarkmodeService"]], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_darkmode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/darkmode.service */ "./src/app/shared/darkmode.service.ts");


var AppComponent = /** @class */ (function () {
    function AppComponent(darkModeService) {
        var _this = this;
        this.darkModeService = darkModeService;
        this.darkMode = darkModeService.getMode();
        this.subscription = darkModeService.modeChange.subscribe(function (value) {
            _this.darkMode = value;
        });
        this.darkModeService = darkModeService;
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AppComponent.prototype.change = function () {
        this.darkModeService.toggle();
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! exports provided: AppServerModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return AppServerModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_server_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component.ngfactory */ "./src/app/about/about.component.ngfactory.js");
/* harmony import */ var _contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component.ngfactory */ "./src/app/contact/contact.component.ngfactory.js");
/* harmony import */ var _educations_educations_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./educations/educations.component.ngfactory */ "./src/app/educations/educations.component.ngfactory.js");
/* harmony import */ var _experiences_experiences_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experiences/experiences.component.ngfactory */ "./src/app/experiences/experiences.component.ngfactory.js");
/* harmony import */ var _projects_projects_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component.ngfactory */ "./src/app/projects/projects.component.ngfactory.js");
/* harmony import */ var _error_page_error_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error-page/error-page.component.ngfactory */ "./src/app/error-page/error-page.component.ngfactory.js");
/* harmony import */ var _skills_skills_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills/skills.component.ngfactory */ "./src/app/skills/skills.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_server__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_animations_browser__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/http */ "@angular/http");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_angular_http__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/animations */ "@angular/animations");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_angular_animations__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
/* harmony import */ var _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _educations_educations_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./educations/educations.component */ "./src/app/educations/educations.component.ts");
/* harmony import */ var _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./experiences/experiences.component */ "./src/app/experiences/experiences.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
































var AppServerModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵEmptyOutletComponentNgFactory"], _about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AboutComponentNgFactory"], _contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ContactComponentNgFactory"], _educations_educations_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["EducationsComponentNgFactory"], _experiences_experiences_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ExperiencesComponentNgFactory"], _projects_projects_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponentNgFactory"], _error_page_error_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ErrorPageComponentNgFactory"], _skills_skills_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["SkillsComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3), new _angular_platform_server__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_server_platform_server_d"](p3_0)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["HAMMER_LOADER"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_server_platform_server_c"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_server_platform_server_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵTRANSITION_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵSharedStylesHost"], null, [_angular_platform_server__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_server_platform_server_c"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_14__["ɵServerRendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_14__["ɵServerRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EventManager"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_15__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_15__["ɵNoopAnimationDriver"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_15__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_15__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_15__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_15__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_server_platform_server_a"], [_angular_platform_server__WEBPACK_IMPORTED_MODULE_14__["ɵServerRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_15__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4352, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], null, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_18__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_18__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_18__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_18__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_12__["ViewportScroller"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["ɵNullViewportScroller"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_n"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_19__["BrowserXhr"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_server_platform_server_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_19__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_19__["BaseResponseOptions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_19__["XSRFStrategy"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_server_platform_server_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_19__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_19__["XHRBackend"], [_angular_http__WEBPACK_IMPORTED_MODULE_19__["BrowserXhr"], _angular_http__WEBPACK_IMPORTED_MODULE_19__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_19__["XSRFStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_19__["RequestOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_19__["BaseRequestOptions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_http__WEBPACK_IMPORTED_MODULE_19__["Http"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_server_platform_server_g"], [_angular_http__WEBPACK_IMPORTED_MODULE_19__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_19__["RequestOptions"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["XhrFactory"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_server_platform_server_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpHandler"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_server_platform_server_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_21__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], "serverApp", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵTRANSITION_ID"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_i"](p1_0), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_platform_browser_h"](p2_0, p2_1, p2_2)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_h"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵTRANSITION_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_18__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_22__["ModuleMapNgFactoryLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_22__["MODULE_MAP"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTES"], function () { return [[{ path: "", component: _about_about_component__WEBPACK_IMPORTED_MODULE_23__["AboutComponent"] }, { path: "about", component: _about_about_component__WEBPACK_IMPORTED_MODULE_23__["AboutComponent"] }, { path: "contact", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_24__["ContactComponent"] }, { path: "educations", component: _educations_educations_component__WEBPACK_IMPORTED_MODULE_25__["EducationsComponent"] }, { path: "experiences", component: _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_26__["ExperiencesComponent"] }, { path: "projects", component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_27__["ProjectsComponent"] }, { path: "error", component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_28__["ErrorPageComponent"] }, { path: "skills", component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_29__["SkillsComponent"] }, { path: "not-found", component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_28__["ErrorPageComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_30__["ɵ0"] }, { path: "**", redirectTo: "/not-found" }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_18__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_30__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_30__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_31__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_31__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_http__WEBPACK_IMPORTED_MODULE_19__["HttpModule"], _angular_http__WEBPACK_IMPORTED_MODULE_19__["HttpModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["NoopAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["NoopAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_server__WEBPACK_IMPORTED_MODULE_14__["ServerModule"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_14__["ServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_22__["ModuleMapLoaderModule"], _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_22__["ModuleMapLoaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"], "NoopAnimations", [])]); });



/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! exports provided: AppServerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return AppServerModule; });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css.shim.ngstyle.js":
/*!***************************************************************!*\
  !*** ./src/app/contact/contact.component.css.shim.ngstyle.js ***!
  \***************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".size[_ngcontent-%COMP%]{\n    width:20px;\n    height: 20px;\n  }\n  .textarea[_ngcontent-%COMP%]{\n    width:100%;\n    height:150px;\n  }\n  .flex[_ngcontent-%COMP%]{\n    width:100%;\n    height:100%;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n    padding:30px;\n  }\n  .dark-input[_ngcontent-%COMP%]{\n    color: white;\n}\n  .dark-input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  color: rgba(255,255,255,0.8)\n}\n  .dark-input[_ngcontent-%COMP%]::-moz-placeholder{\n  color: rgba(255,255,255,0.8)\n}\n  .dark-input[_ngcontent-%COMP%]::-ms-input-placeholder{\n  color: rgba(255,255,255,0.8)\n}\n  .dark-input[_ngcontent-%COMP%]::placeholder{\n  color: rgba(255,255,255,0.8)\n}\n  input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  color:rgba(0,0,0,0.8)\n}\n  input[_ngcontent-%COMP%]::-moz-placeholder{\n  color:rgba(0,0,0,0.8)\n}\n  input[_ngcontent-%COMP%]::-ms-input-placeholder{\n  color:rgba(0,0,0,0.8)\n}\n  input[_ngcontent-%COMP%]::placeholder{\n  color:rgba(0,0,0,0.8)\n}\n  .dark-input[_ngcontent-%COMP%]:focus{\n    border-bottom: 1px solid #37c43e;\n}\n  .dark-textarea[_ngcontent-%COMP%]{\n    color: white;\n}\n  .dark-textarea[_ngcontent-%COMP%]:focus{\n    border:1px solid #37c43e;\n}\n  .success[_ngcontent-%COMP%]{\n    background-color: #37c43e;\n}\n  @media only screen and (max-width:1000px){\n  .textarea[_ngcontent-%COMP%]{\n    height:100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtFQUNkO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsWUFBWTtFQUNkO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7RUFDRjtJQUNJLFlBQVk7QUFDaEI7RUFDQTtFQUNFO0FBQ0Y7RUFGQTtFQUNFO0FBQ0Y7RUFGQTtFQUNFO0FBQ0Y7RUFGQTtFQUNFO0FBQ0Y7RUFDQTtFQUNFO0FBQ0Y7RUFGQTtFQUNFO0FBQ0Y7RUFGQTtFQUNFO0FBQ0Y7RUFGQTtFQUNFO0FBQ0Y7RUFDQTtJQUNJLGdDQUFnQztBQUNwQztFQUNBO0lBQ0ksWUFBWTtBQUNoQjtFQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0VBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7RUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXple1xuICAgIHdpZHRoOjIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC50ZXh0YXJlYXtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxNTBweDtcbiAgfVxuICAuZmxleHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgcGFkZGluZzozMHB4O1xuICB9XG4uZGFyay1pbnB1dHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uZGFyay1pbnB1dDo6cGxhY2Vob2xkZXJ7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOClcbn1cbmlucHV0OjpwbGFjZWhvbGRlcntcbiAgY29sb3I6cmdiYSgwLDAsMCwwLjgpXG59XG4uZGFyay1pbnB1dDpmb2N1c3tcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM3YzQzZTtcbn1cbi5kYXJrLXRleHRhcmVhe1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrLXRleHRhcmVhOmZvY3Vze1xuICAgIGJvcmRlcjoxcHggc29saWQgIzM3YzQzZTtcbn1cbi5zdWNjZXNze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzN2M0M2U7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KXtcbiAgLnRleHRhcmVhe1xuICAgIGhlaWdodDoxMDBweDtcbiAgfVxufSJdfQ== */"];



/***/ }),

/***/ "./src/app/contact/contact.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/contact/contact.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_ContactComponent, View_ContactComponent_0, View_ContactComponent_Host_0, ContactComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContactComponent", function() { return RenderType_ContactComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactComponent_0", function() { return View_ContactComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactComponent_Host_0", function() { return View_ContactComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponentNgFactory", function() { return ContactComponentNgFactory; });
/* harmony import */ var _contact_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component.css.shim.ngstyle */ "./src/app/contact/contact.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _shared_darkmode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/darkmode.service */ "./src/app/shared/darkmode.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_ContactComponent = [_contact_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContactComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContactComponent, data: {} });

function View_ContactComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { form: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 25, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 24, "div", [["class", "col s12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 23, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4210688, [[1, 4], ["f", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 18, "div", [["class", "flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 13, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 7, "div", [["class", "col l5 s12 m10 offset-m1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "input", [["class", "col m5 s12 l12 input"], ["placeholder", "Enter name"], ["type", "text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](14, { "dark-input": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "input", [["class", "col m5 offset-m2 s12 l12 input"], ["placeholder", "Enter email"], ["text", "email"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](17, { "dark-input": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "div", [["class", "col l6 offset-l1 s12 m10 offset-m1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "textarea", [["class", "textarea"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](22, { "dark-textarea": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 3, "button", [["class", "col s12 btn btn-primary"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](25, { "success": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = "col m5 s12 l12 input"; var currVal_8 = _ck(_v, 14, 0, _co.darkMode); _ck(_v, 13, 0, currVal_7, currVal_8); var currVal_9 = "col m5 offset-m2 s12 l12 input"; var currVal_10 = _ck(_v, 17, 0, _co.darkMode); _ck(_v, 16, 0, currVal_9, currVal_10); var currVal_11 = "textarea"; var currVal_12 = _ck(_v, 22, 0, _co.darkMode); _ck(_v, 21, 0, currVal_11, currVal_12); var currVal_13 = "col s12 btn btn-primary"; var currVal_14 = _ck(_v, 25, 0, _co.darkMode); _ck(_v, 24, 0, currVal_13, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPending; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_15 = _co.formValue; _ck(_v, 26, 0, currVal_15); }); }
function View_ContactComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-contact", [], null, null, null, View_ContactComponent_0, RenderType_ContactComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], [_shared_darkmode_service__WEBPACK_IMPORTED_MODULE_5__["DarkmodeService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContactComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-contact", _contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], View_ContactComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_darkmode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/darkmode.service */ "./src/app/shared/darkmode.service.ts");



var ContactComponent = /** @class */ (function () {
    function ContactComponent(darkModeService) {
        var _this = this;
        this.darkModeService = darkModeService;
        this.darkMode = darkModeService.getMode();
        this.formValue = 'Submit';
        this.subscription = darkModeService.modeChange.subscribe(function (value) {
            _this.darkMode = value;
        });
        this.darkModeService = darkModeService;
    }
    ContactComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        this.formValue = 'Service unavailable.';
    };
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/educations/education/education.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/educations/education/education.component.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: RenderType_EducationComponent, View_EducationComponent_0, View_EducationComponent_Host_0, EducationComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EducationComponent", function() { return RenderType_EducationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EducationComponent_0", function() { return View_EducationComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EducationComponent_Host_0", function() { return View_EducationComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponentNgFactory", function() { return EducationComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _education_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education.component */ "./src/app/educations/education/education.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var styles_EducationComponent = [".company[_ngcontent-%COMP%]{\n        margin:10px;\n        margin-top:20px;\n        font-weight: bold;\n        font-size: 20px;\n    }\n    .date[_ngcontent-%COMP%]{\n        margin-bottom:30px;\n        margin-left:10px;\n        font-weight: bold;\n        font-size: 12px;\n    }\n    .description[_ngcontent-%COMP%]{\n        padding: 10px;\n        text-align: justify;\n        text-justify: inter-word;\n        font-size:13px;\n    }\n    .exp[_ngcontent-%COMP%]{\n        margin:20px;\n    }\n    @media only screen and (max-width:600px){\n      .exp[_ngcontent-%COMP%]{\n        padding-bottom:100px;\n      }\n    }\n    @media only screen and (max-width:500px){\n      .exp[_ngcontent-%COMP%]{\n        padding-bottom:50px;\n      }\n      .company[_ngcontent-%COMP%]{\n        font-size:15px;\n      }\n      .date[_ngcontent-%COMP%]{\n        font-size:12px;\n      }\n      .description[_ngcontent-%COMP%]{\n        font-size:12px;\n      }\n    }"];
var RenderType_EducationComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_EducationComponent, data: {} });

function View_EducationComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["class", "col l7 offset-l4 m7 offset-m4 s12 exp"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["class", "company"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", " | ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [["class", "date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "div", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.education.school; var currVal_1 = _co.education.place; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.education.date; _ck(_v, 4, 0, currVal_2); var currVal_3 = _co.education.description; _ck(_v, 6, 0, currVal_3); }); }
function View_EducationComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-education", [], null, null, null, View_EducationComponent_0, RenderType_EducationComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _education_component__WEBPACK_IMPORTED_MODULE_1__["EducationComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EducationComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-education", _education_component__WEBPACK_IMPORTED_MODULE_1__["EducationComponent"], View_EducationComponent_Host_0, { education: "education" }, {}, []);



/***/ }),

/***/ "./src/app/educations/education/education.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/educations/education/education.component.ts ***!
  \*************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/educations/educations.component.css.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/educations/educations.component.css.shim.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".navigator[_ngcontent-%COMP%]{\n    position: relative;\n}\n.dark-navigator[_ngcontent-%COMP%]{\n    color: white;\n}\n.nav-circles[_ngcontent-%COMP%]{\n    position: absolute;\n    top:calc(50% - 50px);\n    height: 100px;\n    left: 10px;\n    display: flex;\n    flex-direction: column;\n\n    justify-content: center;\n    overflow: hidden;\n}\n.prev[_ngcontent-%COMP%]{\n    width:30px;\n    height:30px;\n    outline: none;\n    border:none;\n    background-color: inherit;\n    z-index: 1;\n    position: absolute;\n    top:calc(50% - 80px);\n    left:20px;\n    cursor: pointer;\n}\n.dark-prev[_ngcontent-%COMP%]{\n    color:#2cc12c\n}\n.next[_ngcontent-%COMP%]{\n    width:30px;\n    height:30px;\n    outline: none;\n    border:none;\n    background-color: inherit;\n    z-index: 1;\n    position: absolute;\n    top:calc(50% + 60px);\n    left:20px;\n    cursor: pointer;\n}\n.dark-next[_ngcontent-%COMP%]{\n    color:#2cc12c\n}\n.prev[_ngcontent-%COMP%]:hover{\n    color:#FA292A;\n}\n.next[_ngcontent-%COMP%]:hover{\n    color:#FA292A;\n}\n.circle[_ngcontent-%COMP%]{\n    width:10px;\n    margin:5px auto;\n    height:10px;\n    cursor: pointer;\n    border-radius: 50%;\n    background-color:#2cc19c;\n}\n.dark-circle[_ngcontent-%COMP%]{\n    background-color: #2cc12c\n}\n.fullHeight[_ngcontent-%COMP%]{\n    height: 100%;\n    padding: 0px;\n}\n.item[_ngcontent-%COMP%]{\n    margin:5px auto;\n    display: flex;\n    flex-direction: row;\n    align-items: baseline;\n}\n.date[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 12px;\n    margin: 5px auto;\n    text-align: center;\n    padding:5px;\n    padding-top:0;\n}\n.active[_ngcontent-%COMP%]{\n    background-color: #FA292A;\n}\n@media only screen and (max-width:600px){\n    .nav-circles[_ngcontent-%COMP%]{\n        flex-direction: row;\n        top:calc(100% - 80px);\n        height: 80px;\n        width:200px;\n        left:calc(50% - 100px);\n    }\n    .item[_ngcontent-%COMP%]{\n        flex-direction: column-reverse;\n    }\n    .prev[_ngcontent-%COMP%]{\n        -webkit-transform: rotate(-90deg);\n                transform: rotate(-90deg);\n        position: absolute;\n        top:calc(100% - 40px);\n        left:calc(50% - 100px);\n        cursor: pointer;\n    }\n    .next[_ngcontent-%COMP%]{\n        -webkit-transform: rotate(-90deg);\n                transform: rotate(-90deg);\n        position: absolute;\n        top:calc(100% - 40px);\n        left:calc(50% + 90px);\n        cursor: pointer;\n    }\n}\n@media only screen and (max-width:400px){\n    .next[_ngcontent-%COMP%]{\n        left:calc(50% + 70px)\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9ucy9lZHVjYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCOztJQUV0Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxlQUFlO0FBQ25CO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxlQUFlO0FBQ25CO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osV0FBVztRQUNYLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixlQUFlO0lBQ25CO0FBQ0o7QUFDQTtJQUNJO1FBQ0k7SUFDSjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZWR1Y2F0aW9ucy9lZHVjYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdG9ye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kYXJrLW5hdmlnYXRvcntcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXYtY2lyY2xlc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOmNhbGMoNTAlIC0gNTBweCk7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJldntcbiAgICB3aWR0aDozMHB4O1xuICAgIGhlaWdodDozMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6Y2FsYyg1MCUgLSA4MHB4KTtcbiAgICBsZWZ0OjIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRhcmstcHJldntcbiAgICBjb2xvcjojMmNjMTJjXG59XG4ubmV4dHtcbiAgICB3aWR0aDozMHB4O1xuICAgIGhlaWdodDozMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6Y2FsYyg1MCUgKyA2MHB4KTtcbiAgICBsZWZ0OjIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRhcmstbmV4dHtcbiAgICBjb2xvcjojMmNjMTJjXG59XG4ucHJldjpob3ZlcntcbiAgICBjb2xvcjojRkEyOTJBO1xufVxuLm5leHQ6aG92ZXJ7XG4gICAgY29sb3I6I0ZBMjkyQTtcbn1cbi5jaXJjbGV7XG4gICAgd2lkdGg6MTBweDtcbiAgICBtYXJnaW46NXB4IGF1dG87XG4gICAgaGVpZ2h0OjEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyY2MxOWM7XG59XG4uZGFyay1jaXJjbGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjYzEyY1xufVxuLmZ1bGxIZWlnaHR7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5pdGVte1xuICAgIG1hcmdpbjo1cHggYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmRhdGV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIHBhZGRpbmctdG9wOjA7XG59XG4uYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQTI5MkE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xuICAgIC5uYXYtY2lyY2xlc3tcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdG9wOmNhbGMoMTAwJSAtIDgwcHgpO1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOjIwMHB4O1xuICAgICAgICBsZWZ0OmNhbGMoNTAlIC0gMTAwcHgpO1xuICAgIH1cbiAgICAuaXRlbXtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIH1cbiAgICAucHJldntcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6Y2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgIGxlZnQ6Y2FsYyg1MCUgLSAxMDBweCk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLm5leHR7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOmNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICBsZWZ0OmNhbGMoNTAlICsgOTBweCk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDAwcHgpe1xuICAgIC5uZXh0e1xuICAgICAgICBsZWZ0OmNhbGMoNTAlICsgNzBweClcbiAgICB9XG59Il19 */"];



/***/ }),

/***/ "./src/app/educations/educations.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/educations/educations.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_EducationsComponent, View_EducationsComponent_0, View_EducationsComponent_Host_0, EducationsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EducationsComponent", function() { return RenderType_EducationsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EducationsComponent_0", function() { return View_EducationsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EducationsComponent_Host_0", function() { return View_EducationsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationsComponentNgFactory", function() { return EducationsComponentNgFactory; });
/* harmony import */ var _educations_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./educations.component.css.shim.ngstyle */ "./src/app/educations/educations.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _education_education_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education/education.component.ngfactory */ "./src/app/educations/education/education.component.ngfactory.js");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./education/education.component */ "./src/app/educations/education/education.component.ts");
/* harmony import */ var _educations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./educations.component */ "./src/app/educations/educations.component.ts");
/* harmony import */ var _shared_darkmode_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/darkmode.service */ "./src/app/shared/darkmode.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_EducationsComponent = [_educations_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_EducationsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_EducationsComponent, data: {} });

function View_EducationsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "div", [["class", "row fullHeight noPadding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 20, "div", [["class", "fullHeight col s12 navigator"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { "dark-navigator": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "app-education", [], null, null, null, _education_education_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_EducationComponent_0"], _education_education_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_EducationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 0, _education_education_component__WEBPACK_IMPORTED_MODULE_4__["EducationComponent"], [], { education: [0, "education"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "button", [["class", "prev"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.prev() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](9, { "dark-prev": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "i", [["class", "fas fa-chevron-up"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "button", [["class", "next"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.next() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](13, { "dark-next": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "i", [["class", "fas fa-chevron-down"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 6, "div", [["class", "nav-circles"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 5, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "div", [["class", "circle"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onNavChange() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](19, { "active": 0, "dark-circle": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "div", [["class", "date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "fullHeight col s12 navigator"; var currVal_1 = _ck(_v, 3, 0, _co.darkMode); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.currentDisplay; _ck(_v, 6, 0, currVal_2); var currVal_4 = "prev"; var currVal_5 = _ck(_v, 9, 0, _co.darkMode); _ck(_v, 8, 0, currVal_4, currVal_5); var currVal_7 = "next"; var currVal_8 = _ck(_v, 13, 0, _co.darkMode); _ck(_v, 12, 0, currVal_7, currVal_8); var currVal_9 = "circle"; var currVal_10 = _ck(_v, 19, 0, (_co.inViewEducation === _co.currentDisplay), _co.darkMode); _ck(_v, 18, 0, currVal_9, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = (_co.current === 0); _ck(_v, 7, 0, currVal_3); var currVal_6 = (_co.current === (_co.educations.length - 1)); _ck(_v, 11, 0, currVal_6); var currVal_11 = _co.inViewEducation.date; _ck(_v, 21, 0, currVal_11); }); }
function View_EducationsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-educations", [], null, null, null, View_EducationsComponent_0, RenderType_EducationsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _educations_component__WEBPACK_IMPORTED_MODULE_5__["EducationsComponent"], [_shared_darkmode_service__WEBPACK_IMPORTED_MODULE_6__["DarkmodeService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EducationsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-educations", _educations_component__WEBPACK_IMPORTED_MODULE_5__["EducationsComponent"], View_EducationsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/educations/educations.component.ts":
/*!****************************************************!*\
  !*** ./src/app/educations/educations.component.ts ***!
  \****************************************************/
/*! exports provided: EducationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationsComponent", function() { return EducationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_darkmode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/darkmode.service */ "./src/app/shared/darkmode.service.ts");


var EducationsComponent = /** @class */ (function () {
    function EducationsComponent(darkModeService) {
        var _this = this;
        this.darkModeService = darkModeService;
        this.educations = [{
                name: 'Singhania Academy',
                place: 'Kolkata',
                date: 'APRIL 2003 - MAY 2017',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    Ipsa illo laborum eveniet amet sed in fuga dolores laboriosam,quaerat\n    magni molestias sunt deserunt esse ut quam tempora quo, voluptate excepturi."
            }, {
                name: 'Lakns Singhania Academy',
                place: 'Kolkata',
                date: 'APRIL 2003 - MAY 2017',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    Ipsa illo laborum eveniet amet sed in fuga dolores laboriosam,quaerat\n    magni molestias sunt deserunt esse ut quam tempora quo, voluptate excepturi."
            }];
        this.darkMode = darkModeService.getMode();
        this.subscription = darkModeService.modeChange.subscribe(function (value) {
            _this.darkMode = value;
        });
        this.darkModeService = darkModeService;
    }
    EducationsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    EducationsComponent.prototype.ngOnInit = function () {
        this.currentDisplay = this.educations[0];
        this.inViewEducation = this.educations[0];
        this.current = 0;
    };
    EducationsComponent.prototype.onNavChange = function () {
        this.currentDisplay = this.educations[this.current];
    };
    EducationsComponent.prototype.next = function () {
        if (this.current + 1 > this.educations.length) {
        }
        else {
            this.current = this.current + 1;
            this.inViewEducation = this.educations[this.current];
        }
    };
    EducationsComponent.prototype.prev = function () {
        if (this.current - 1 < 0) {
        }
        else {
            this.current = this.current - 1;
            this.inViewEducation = this.educations[this.current];
        }
    };
    return EducationsComponent;
}());



/***/ }),

/***/ "./src/app/error-page/error-page.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/error-page/error-page.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_ErrorPageComponent, View_ErrorPageComponent_0, View_ErrorPageComponent_Host_0, ErrorPageComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ErrorPageComponent", function() { return RenderType_ErrorPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ErrorPageComponent_0", function() { return View_ErrorPageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ErrorPageComponent_Host_0", function() { return View_ErrorPageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponentNgFactory", function() { return ErrorPageComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-page.component */ "./src/app/error-page/error-page.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_ErrorPageComponent = [".error[_ngcontent-%COMP%]{\n        font-size:25px;\n        font-weight: bold;\n        color:#FA292A;\n        text-align: center;\n        padding:5px;\n        margin:10px auto;\n    }\n    .icon[_ngcontent-%COMP%]{\n        margin:40px auto;\n        display:flex;\n        color:#FA292A;\n        margin-bottom:0px;\n        align-items: center;\n        justify-content: center;\n    }\n    .custom-btn[_ngcontent-%COMP%]{\n        background-color: #2cc19c;\n        font-weight: bold;\n    }"];
var RenderType_ErrorPageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ErrorPageComponent, data: {} });

function View_ErrorPageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "i", [["class", "fas fa-frown fa-6x"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [["class", "error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 3, "div", [["class", "col l4 offset-l4 m6 offset-m3 s8 offset-s2 btn custom-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "a", [["routerLink", "/"], ["style", "color:white"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Go to home page"]))], function (_ck, _v) { var currVal_3 = "/"; _ck(_v, 7, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.message; _ck(_v, 4, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).target; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).href; _ck(_v, 6, 0, currVal_1, currVal_2); }); }
function View_ErrorPageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-page-not-found", [], null, null, null, View_ErrorPageComponent_0, RenderType_ErrorPageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ErrorPageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-page-not-found", _error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"], View_ErrorPageComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);


/** This is an example of using template instead of templateUrl, thus eliminating the need of
 * an extra file, and declaring html where the component exits\
 * IMPORTANT : IS IT FASTER?
 */
var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent(route) {
        this.route = route;
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.message = data.message;
        });
    };
    return ErrorPageComponent;
}());

/** By adding a subbscription based observable event, we removed the need for another page not
 * found route and restricted the number of components used. reducing the size of the app.
 */


/***/ }),

/***/ "./src/app/experiences/experience/experience.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/experiences/experience/experience.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_ExperienceComponent, View_ExperienceComponent_0, View_ExperienceComponent_Host_0, ExperienceComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ExperienceComponent", function() { return RenderType_ExperienceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ExperienceComponent_0", function() { return View_ExperienceComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ExperienceComponent_Host_0", function() { return View_ExperienceComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponentNgFactory", function() { return ExperienceComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _experience_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience.component */ "./src/app/experiences/experience/experience.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var styles_ExperienceComponent = [".company[_ngcontent-%COMP%]{\n        margin:10px;\n        margin-top:20px;\n        font-weight: bold;\n        font-size: 20px;\n    }\n    .date[_ngcontent-%COMP%]{\n        margin-bottom:30px;\n        margin-left:10px;\n        font-weight: bold;\n        font-size: 12px;\n    }\n    .description[_ngcontent-%COMP%]{\n        padding: 10px;\n        text-align: justify;\n        text-justify: inter-word;\n        font-size:13px;\n    }\n    .exp[_ngcontent-%COMP%]{\n        margin:20px;\n    }\n    @media only screen and (max-width:600px){\n      .exp[_ngcontent-%COMP%]{\n        padding-bottom:100px;\n      }\n    }\n    @media only screen and (max-width:500px){\n      .exp[_ngcontent-%COMP%]{\n        padding-bottom:50px;\n      }\n      .company[_ngcontent-%COMP%]{\n        font-size:15px;\n      }\n      .date[_ngcontent-%COMP%]{\n        font-size:12px;\n      }\n      .description[_ngcontent-%COMP%]{\n        font-size:12px;\n      }\n    }"];
var RenderType_ExperienceComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ExperienceComponent, data: {} });

function View_ExperienceComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["class", "col l7 offset-l4 m7 offset-m4 s12 exp"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["class", "company"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", " | ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [["class", "date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "div", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.experience.company; var currVal_1 = _co.experience.place; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.experience.date; _ck(_v, 4, 0, currVal_2); var currVal_3 = _co.experience.description; _ck(_v, 6, 0, currVal_3); }); }
function View_ExperienceComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-experience", [], null, null, null, View_ExperienceComponent_0, RenderType_ExperienceComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _experience_component__WEBPACK_IMPORTED_MODULE_1__["ExperienceComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ExperienceComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-experience", _experience_component__WEBPACK_IMPORTED_MODULE_1__["ExperienceComponent"], View_ExperienceComponent_Host_0, { experience: "experience" }, {}, []);



/***/ }),

/***/ "./src/app/experiences/experience/experience.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/experiences/experience/experience.component.ts ***!
  \****************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/experiences/experiences.component.css.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/experiences/experiences.component.css.shim.ngstyle.js ***!
  \***********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".navigator[_ngcontent-%COMP%]{\n    position: relative;\n}\n.dark-navigator[_ngcontent-%COMP%]{\n    color: white;\n}\n.nav-circles[_ngcontent-%COMP%]{\n    position: absolute;\n    top:calc(50% - 50px);\n    height: 100px;\n    left: 10px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    overflow: hidden;\n}\n.prev[_ngcontent-%COMP%]{\n    width:30px;\n    height:30px;\n    outline: none;\n    border:none;\n    background-color: inherit;\n    z-index: 1;\n    position: absolute;\n    top:calc(50% - 80px);\n    left:20px;\n    cursor: pointer;\n}\n.dark-prev[_ngcontent-%COMP%]{\n    color:#2cc12c\n}\n.next[_ngcontent-%COMP%]{\n    width:30px;\n    height:30px;\n    outline: none;\n    border:none;\n    background-color: inherit;\n    z-index: 1;\n    position: absolute;\n    top:calc(50% + 60px);\n    left:20px;\n    cursor: pointer;\n}\n.dark-next[_ngcontent-%COMP%]{\n    color:#2cc12c\n}\n.dark-circle[_ngcontent-%COMP%]{\n    background-color: #2cc12c\n}\n.prev[_ngcontent-%COMP%]:hover{\n    color:#FA292A;\n}\n.next[_ngcontent-%COMP%]:hover{\n    color:#FA292A;\n}\n.circle[_ngcontent-%COMP%]{\n    cursor: pointer;\n    width:10px;\n    margin:5px auto;\n    height:10px;\n    border-radius: 50%;\n    background-color:#2cc19c;\n}\n.fullHeight[_ngcontent-%COMP%]{\n    height: 100%;\n    padding: 0px;\n}\n.item[_ngcontent-%COMP%]{\n    margin:5px auto;\n    display: flex;\n    max-width: 150px;\n    flex-direction: row;\n    align-items: baseline;\n}\n.date[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 12px;\n    margin: 5px auto;\n    text-align: center;\n    padding:5px;\n    padding-top:0;\n}\n.active[_ngcontent-%COMP%]{\n    background-color: #FA292A;\n}\n@media only screen and (max-width:600px){\n    .nav-circles[_ngcontent-%COMP%]{\n        flex-direction: row;\n        top:calc(100% - 80px);\n        height: 80px;\n        width:200px;\n        left:calc(50% - 100px);\n    }\n    .item[_ngcontent-%COMP%]{\n        flex-direction: column-reverse;\n    }\n    .prev[_ngcontent-%COMP%]{\n        -webkit-transform: rotate(-90deg);\n                transform: rotate(-90deg);\n        position: absolute;\n        top:calc(100% - 40px);\n        left:calc(50% - 100px);\n        cursor: pointer;\n    }\n    .next[_ngcontent-%COMP%]{\n        -webkit-transform: rotate(-90deg);\n                transform: rotate(-90deg);\n        position: absolute;\n        top:calc(100% - 40px);\n        left:calc(50% + 90px);\n        cursor: pointer;\n    }\n}\n@media only screen and (max-width:400px){\n    .next[_ngcontent-%COMP%]{\n        left:calc(50% + 70px)\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZXMvZXhwZXJpZW5jZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixXQUFXO1FBQ1gsc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGlDQUF5QjtnQkFBekIseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlDQUF5QjtnQkFBekIseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLGVBQWU7SUFDbkI7QUFDSjtBQUNBO0lBQ0k7UUFDSTtJQUNKO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9leHBlcmllbmNlcy9leHBlcmllbmNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRvcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGFyay1uYXZpZ2F0b3J7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLm5hdi1jaXJjbGVze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6Y2FsYyg1MCUgLSA1MHB4KTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJldntcbiAgICB3aWR0aDozMHB4O1xuICAgIGhlaWdodDozMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6Y2FsYyg1MCUgLSA4MHB4KTtcbiAgICBsZWZ0OjIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRhcmstcHJldntcbiAgICBjb2xvcjojMmNjMTJjXG59XG4ubmV4dHtcbiAgICB3aWR0aDozMHB4O1xuICAgIGhlaWdodDozMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6Y2FsYyg1MCUgKyA2MHB4KTtcbiAgICBsZWZ0OjIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRhcmstbmV4dHtcbiAgICBjb2xvcjojMmNjMTJjXG59XG4uZGFyay1jaXJjbGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjYzEyY1xufVxuLnByZXY6aG92ZXJ7XG4gICAgY29sb3I6I0ZBMjkyQTtcbn1cbi5uZXh0OmhvdmVye1xuICAgIGNvbG9yOiNGQTI5MkE7XG59XG4uY2lyY2xle1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDoxMHB4O1xuICAgIG1hcmdpbjo1cHggYXV0bztcbiAgICBoZWlnaHQ6MTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMmNjMTljO1xufVxuLmZ1bGxIZWlnaHR7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5pdGVte1xuICAgIG1hcmdpbjo1cHggYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4uZGF0ZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgcGFkZGluZy10b3A6MDtcbn1cbi5hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBMjkyQTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCl7XG4gICAgLm5hdi1jaXJjbGVze1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0b3A6Y2FsYygxMDAlIC0gODBweCk7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgd2lkdGg6MjAwcHg7XG4gICAgICAgIGxlZnQ6Y2FsYyg1MCUgLSAxMDBweCk7XG4gICAgfVxuICAgIC5pdGVte1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgfVxuICAgIC5wcmV2e1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDpjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgbGVmdDpjYWxjKDUwJSAtIDEwMHB4KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAubmV4dHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6Y2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgIGxlZnQ6Y2FsYyg1MCUgKyA5MHB4KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MDBweCl7XG4gICAgLm5leHR7XG4gICAgICAgIGxlZnQ6Y2FsYyg1MCUgKyA3MHB4KVxuICAgIH1cbn0iXX0= */"];



/***/ }),

/***/ "./src/app/experiences/experiences.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/experiences/experiences.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_ExperiencesComponent, View_ExperiencesComponent_0, View_ExperiencesComponent_Host_0, ExperiencesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ExperiencesComponent", function() { return RenderType_ExperiencesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ExperiencesComponent_0", function() { return View_ExperiencesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ExperiencesComponent_Host_0", function() { return View_ExperiencesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesComponentNgFactory", function() { return ExperiencesComponentNgFactory; });
/* harmony import */ var _experiences_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experiences.component.css.shim.ngstyle */ "./src/app/experiences/experiences.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _experience_experience_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience/experience.component.ngfactory */ "./src/app/experiences/experience/experience.component.ngfactory.js");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experiences/experience/experience.component.ts");
/* harmony import */ var _experiences_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experiences.component */ "./src/app/experiences/experiences.component.ts");
/* harmony import */ var _shared_darkmode_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/darkmode.service */ "./src/app/shared/darkmode.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_ExperiencesComponent = [_experiences_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ExperiencesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ExperiencesComponent, data: {} });

function View_ExperiencesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "div", [["class", "row fullHeight noPadding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 20, "div", [["class", "fullHeight col s12 navigator"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { "dark-navigator": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "app-experience", [], null, null, null, _experience_experience_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ExperienceComponent_0"], _experience_experience_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ExperienceComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 0, _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"], [], { experience: [0, "experience"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "button", [["class", "prev"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.prev() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](9, { "dark-prev": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "i", [["class", "fas fa-chevron-up"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "button", [["class", "next"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.next() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](13, { "dark-next": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "i", [["class", "fas fa-chevron-down"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 6, "div", [["class", "nav-circles"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 5, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "div", [["class", "circle"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onNavChange() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](19, { "active": 0, "dark-circle": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "div", [["class", "date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "fullHeight col s12 navigator"; var currVal_1 = _ck(_v, 3, 0, _co.darkMode); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.currentDisplay; _ck(_v, 6, 0, currVal_2); var currVal_4 = "prev"; var currVal_5 = _ck(_v, 9, 0, _co.darkMode); _ck(_v, 8, 0, currVal_4, currVal_5); var currVal_7 = "next"; var currVal_8 = _ck(_v, 13, 0, _co.darkMode); _ck(_v, 12, 0, currVal_7, currVal_8); var currVal_9 = "circle"; var currVal_10 = _ck(_v, 19, 0, (_co.inViewExperience === _co.currentDisplay), _co.darkMode); _ck(_v, 18, 0, currVal_9, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = (_co.current === 0); _ck(_v, 7, 0, currVal_3); var currVal_6 = (_co.current === (_co.experiences.length - 1)); _ck(_v, 11, 0, currVal_6); var currVal_11 = _co.inViewExperience.date; _ck(_v, 21, 0, currVal_11); }); }
function View_ExperiencesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-experiences", [], null, null, null, View_ExperiencesComponent_0, RenderType_ExperiencesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _experiences_component__WEBPACK_IMPORTED_MODULE_5__["ExperiencesComponent"], [_shared_darkmode_service__WEBPACK_IMPORTED_MODULE_6__["DarkmodeService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ExperiencesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-experiences", _experiences_component__WEBPACK_IMPORTED_MODULE_5__["ExperiencesComponent"], View_ExperiencesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/experiences/experiences.component.ts":
/*!******************************************************!*\
  !*** ./src/app/experiences/experiences.component.ts ***!
  \******************************************************/
/*! exports provided: ExperiencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesComponent", function() { return ExperiencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_darkmode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/darkmode.service */ "./src/app/shared/darkmode.service.ts");


var ExperiencesComponent = /** @class */ (function () {
    function ExperiencesComponent(darkModeService) {
        var _this = this;
        this.darkModeService = darkModeService;
        this.experiences = [{
                company: 'Lakshmipat Singhania Academy',
                place: 'Kolkata',
                date: 'APRIL 2003 - MAY 2017',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    Ipsa illo laborum eveniet amet sed in fuga dolores laboriosam,quaerat\n    magni molestias sunt deserunt esse ut quam tempora quo, voluptate excepturi."
            },
            {
                company: 'inghania Academy',
                place: 'Kolkata',
                date: 'APRIL 2004 - MAY 2017',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    Ipsa illo laborum eveniet amet sed in fuga dolores laboriosam,quaerat\n    magni molestias sunt deserunt esse ut quam tempora quo, voluptate excepturi."
            },
            {
                company: 'Academy',
                place: 'Kolkata',
                date: 'APRIL 2005 - MAY 2017',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    Ipsa illo laborum eveniet amet sed in fuga dolores laboriosam,quaerat\n    magni molestias sunt deserunt esse ut quam tempora quo, voluptate excepturi."
            }];
        this.darkMode = darkModeService.getMode();
        this.subscription = darkModeService.modeChange.subscribe(function (value) {
            _this.darkMode = value;
        });
        this.darkModeService = darkModeService;
    }
    ExperiencesComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ExperiencesComponent.prototype.ngOnInit = function () {
        this.currentDisplay = this.experiences[0];
        this.inViewExperience = this.experiences[0];
        this.current = 0;
    };
    ExperiencesComponent.prototype.onNavChange = function () {
        this.currentDisplay = this.currentDisplay = this.experiences[this.current];
    };
    ExperiencesComponent.prototype.next = function () {
        if (this.current + 1 > this.experiences.length) {
        }
        else {
            this.current = this.current + 1;
            this.inViewExperience = this.experiences[this.current];
        }
    };
    ExperiencesComponent.prototype.prev = function () {
        if (this.current - 1 < 0) {
        }
        else {
            this.current = this.current - 1;
            this.inViewExperience = this.experiences[this.current];
        }
    };
    return ExperiencesComponent;
}());



/***/ }),

/***/ "./src/app/projects/project/project.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/projects/project/project.component.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: RenderType_ProjectComponent, View_ProjectComponent_0, View_ProjectComponent_Host_0, ProjectComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProjectComponent", function() { return RenderType_ProjectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProjectComponent_0", function() { return View_ProjectComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProjectComponent_Host_0", function() { return View_ProjectComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponentNgFactory", function() { return ProjectComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.component */ "./src/app/projects/project/project.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var styles_ProjectComponent = [".company[_ngcontent-%COMP%]{\n      margin:10px;\n      margin-top:20px;\n      font-weight: bold;\n      font-size: 17px;\n  }\n  .date[_ngcontent-%COMP%]{\n      margin-bottom:30px;\n      margin-left:10px;\n      font-weight: bold;\n      font-size: 12px;\n  }\n  .description[_ngcontent-%COMP%]{\n      padding: 10px;\n      text-align: justify;\n      text-justify: inter-word;\n      font-size:13px;\n  }\n  .exp[_ngcontent-%COMP%]{\n      margin:20px;\n  }\n  @media only screen and (max-width:600px){\n    .exp[_ngcontent-%COMP%]{\n      padding-bottom:100px;\n    }\n  }\n  @media only screen and (max-width:500px){\n    .exp[_ngcontent-%COMP%]{\n      padding-bottom:50px;\n    }\n    .company[_ngcontent-%COMP%]{\n      font-size:15px;\n    }\n    .date[_ngcontent-%COMP%]{\n      font-size:12px;\n    }\n    .description[_ngcontent-%COMP%]{\n      font-size:12px;\n    }\n  }"];
var RenderType_ProjectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ProjectComponent, data: {} });

function View_ProjectComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["class", "col l7 offset-l4 m8 offset-m2 s10 offset-s1 exp"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["class", "company"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", " ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [["class", "date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "div", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.project.name; var currVal_1 = _co.project.org; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.project.date; _ck(_v, 4, 0, currVal_2); var currVal_3 = _co.project.description; _ck(_v, 6, 0, currVal_3); }); }
function View_ProjectComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-project", [], null, null, null, View_ProjectComponent_0, RenderType_ProjectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_component__WEBPACK_IMPORTED_MODULE_1__["ProjectComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProjectComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-project", _project_component__WEBPACK_IMPORTED_MODULE_1__["ProjectComponent"], View_ProjectComponent_Host_0, { project: "project" }, {}, []);



/***/ }),

/***/ "./src/app/projects/project/project.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/projects/project/project.component.ts ***!
  \*******************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/projects/projects.component.css.shim.ngstyle.js ***!
  \*****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".navigator[_ngcontent-%COMP%]{\n    position: relative;\n}\n.dark-navigator[_ngcontent-%COMP%]{\n    color: white;\n}\n.prev[_ngcontent-%COMP%]{\n    position: absolute;\n    top:calc(50% - 80px);\n    left:20px;\n    cursor: pointer;\n}\n.next[_ngcontent-%COMP%]{\n    position: absolute;\n    top:calc(50% + 60px);\n    left:20px;\n    cursor: pointer;\n}\n.dark-circle[_ngcontent-%COMP%]{\n    background-color: #2cc12c\n}\n.prev[_ngcontent-%COMP%]:hover{\n    color:#FA292A;\n}\n.next[_ngcontent-%COMP%]:hover{\n    color:#FA292A;\n}\n.nav-circles[_ngcontent-%COMP%]{\n    position: absolute;\n    top:calc(50% - 50px);\n    height: 100px;\n    left: 10px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    overflow: hidden;\n}\n.prev[_ngcontent-%COMP%]{\n    width:30px;\n    height:30px;\n    outline: none;\n    border:none;\n    background-color: inherit;\n    z-index: 1;\n    position: absolute;\n    top:calc(50% - 80px);\n    left:20px;\n    cursor: pointer;\n}\n.dark-prev[_ngcontent-%COMP%]{\n    color:#2cc12c\n}\n.next[_ngcontent-%COMP%]{\n    width:30px;\n    height:30px;\n    outline: none;\n    border:none;\n    background-color: inherit;\n    z-index: 1;\n    position: absolute;\n    top:calc(50% + 60px);\n    left:20px;\n    cursor: pointer;\n}\n.dark-next[_ngcontent-%COMP%]{\n    color:#2cc12c\n}\n.prev[_ngcontent-%COMP%]:hover{\n    color:#FA292A;\n}\n.next[_ngcontent-%COMP%]:hover{\n    color:#FA292A;\n}\n.circle[_ngcontent-%COMP%]{\n    width:10px;\n    margin:2px auto;\n    height:10px;\n    border-radius: 50%;\n    background-color:#2cc19c;\n}\n.fullHeight[_ngcontent-%COMP%]{\n    height: 100%;\n    padding: 0px;\n}\n.item[_ngcontent-%COMP%]{\n    margin:1px auto;\n    display: flex;\n    flex-direction: row;\n\n    cursor: pointer;\n    align-items: baseline;\n}\n.date[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 12px;\n    margin: 2px auto;\n    text-align: center;\n    padding:5px;\n    padding-top:0;\n}\n.active[_ngcontent-%COMP%]{\n    background-color: #FA292A;\n}\n.circle[_ngcontent-%COMP%]:hover{\n    background-color: #FA292A;   \n}\n@media only screen and (max-width:600px){\n    .nav-circles[_ngcontent-%COMP%]{\n        flex-direction: row;\n        top:calc(100% - 80px);\n        height: 80px;\n        width:200px;\n        left:calc(50% - 100px);\n    }\n    .item[_ngcontent-%COMP%]{\n        flex-direction: column-reverse;\n    }\n    .prev[_ngcontent-%COMP%]{\n        -webkit-transform: rotate(-90deg);\n                transform: rotate(-90deg);\n        position: absolute;\n        top:calc(100% - 40px);\n        left:calc(50% - 100px);\n        cursor: pointer;\n    }\n    .next[_ngcontent-%COMP%]{\n        -webkit-transform: rotate(-90deg);\n                transform: rotate(-90deg);\n        position: absolute;\n        top:calc(100% - 40px);\n        left:calc(50% + 90px);\n        cursor: pointer;\n    }\n}\n@media only screen and (max-width:400px){\n    .next[_ngcontent-%COMP%]{\n        left:calc(50% + 70px)\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLFdBQVc7UUFDWCxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksaUNBQXlCO2dCQUF6Qix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUNBQXlCO2dCQUF6Qix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsZUFBZTtJQUNuQjtBQUNKO0FBQ0E7SUFDSTtRQUNJO0lBQ0o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdG9ye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kYXJrLW5hdmlnYXRvcntcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ucHJldntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOmNhbGMoNTAlIC0gODBweCk7XG4gICAgbGVmdDoyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uZXh0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6Y2FsYyg1MCUgKyA2MHB4KTtcbiAgICBsZWZ0OjIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRhcmstY2lyY2xle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyY2MxMmNcbn1cbi5wcmV2OmhvdmVye1xuICAgIGNvbG9yOiNGQTI5MkE7XG59XG4ubmV4dDpob3ZlcntcbiAgICBjb2xvcjojRkEyOTJBO1xufVxuXG4ubmF2LWNpcmNsZXN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDpjYWxjKDUwJSAtIDUwcHgpO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcmV2e1xuICAgIHdpZHRoOjMwcHg7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDpjYWxjKDUwJSAtIDgwcHgpO1xuICAgIGxlZnQ6MjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZGFyay1wcmV2e1xuICAgIGNvbG9yOiMyY2MxMmNcbn1cbi5uZXh0e1xuICAgIHdpZHRoOjMwcHg7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDpjYWxjKDUwJSArIDYwcHgpO1xuICAgIGxlZnQ6MjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZGFyay1uZXh0e1xuICAgIGNvbG9yOiMyY2MxMmNcbn1cbi5wcmV2OmhvdmVye1xuICAgIGNvbG9yOiNGQTI5MkE7XG59XG4ubmV4dDpob3ZlcntcbiAgICBjb2xvcjojRkEyOTJBO1xufVxuLmNpcmNsZXtcbiAgICB3aWR0aDoxMHB4O1xuICAgIG1hcmdpbjoycHggYXV0bztcbiAgICBoZWlnaHQ6MTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMmNjMTljO1xufVxuLmZ1bGxIZWlnaHR7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5pdGVte1xuICAgIG1hcmdpbjoxcHggYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmRhdGV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogMnB4IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIHBhZGRpbmctdG9wOjA7XG59XG4uYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQTI5MkE7XG59XG4uY2lyY2xlOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQTI5MkE7ICAgXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xuICAgIC5uYXYtY2lyY2xlc3tcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdG9wOmNhbGMoMTAwJSAtIDgwcHgpO1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOjIwMHB4O1xuICAgICAgICBsZWZ0OmNhbGMoNTAlIC0gMTAwcHgpO1xuICAgIH1cbiAgICAuaXRlbXtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIH1cbiAgICAucHJldntcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6Y2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgIGxlZnQ6Y2FsYyg1MCUgLSAxMDBweCk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLm5leHR7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOmNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICBsZWZ0OmNhbGMoNTAlICsgOTBweCk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDAwcHgpe1xuICAgIC5uZXh0e1xuICAgICAgICBsZWZ0OmNhbGMoNTAlICsgNzBweClcbiAgICB9XG59Il19 */"];



/***/ }),

/***/ "./src/app/projects/projects.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/projects/projects.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_ProjectsComponent, View_ProjectsComponent_0, View_ProjectsComponent_Host_0, ProjectsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProjectsComponent", function() { return RenderType_ProjectsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProjectsComponent_0", function() { return View_ProjectsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProjectsComponent_Host_0", function() { return View_ProjectsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponentNgFactory", function() { return ProjectsComponentNgFactory; });
/* harmony import */ var _projects_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.component.css.shim.ngstyle */ "./src/app/projects/projects.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _project_project_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/project.component.ngfactory */ "./src/app/projects/project/project.component.ngfactory.js");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project/project.component */ "./src/app/projects/project/project.component.ts");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _shared_darkmode_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/darkmode.service */ "./src/app/shared/darkmode.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_ProjectsComponent = [_projects_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ProjectsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ProjectsComponent, data: {} });

function View_ProjectsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "div", [["class", "row fullHeight noPadding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 20, "div", [["class", "fullHeight col s12 navigator"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { "dark-navigator": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "app-project", [], null, null, null, _project_project_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ProjectComponent_0"], _project_project_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ProjectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 0, _project_project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"], [], { project: [0, "project"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "button", [["class", "prev"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.prev() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](9, { "dark-prev": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "i", [["class", "fas fa-chevron-up"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "button", [["class", "next"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.next() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](13, { "dark-next": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "i", [["class", "fas fa-chevron-down"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 6, "div", [["class", "nav-circles"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 5, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "div", [["class", "circle"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onNavChange() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](19, { "active": 0, "dark-circle": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "div", [["class", "date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "fullHeight col s12 navigator"; var currVal_1 = _ck(_v, 3, 0, _co.darkMode); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.currentDisplay; _ck(_v, 6, 0, currVal_2); var currVal_4 = "prev"; var currVal_5 = _ck(_v, 9, 0, _co.darkMode); _ck(_v, 8, 0, currVal_4, currVal_5); var currVal_7 = "next"; var currVal_8 = _ck(_v, 13, 0, _co.darkMode); _ck(_v, 12, 0, currVal_7, currVal_8); var currVal_9 = "circle"; var currVal_10 = _ck(_v, 19, 0, (_co.inViewProject === _co.currentDisplay), _co.darkMode); _ck(_v, 18, 0, currVal_9, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = (_co.current === 0); _ck(_v, 7, 0, currVal_3); var currVal_6 = (_co.current === (_co.projects.length - 1)); _ck(_v, 11, 0, currVal_6); var currVal_11 = _co.inViewProject.tech; _ck(_v, 21, 0, currVal_11); }); }
function View_ProjectsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-projects", [], null, null, null, View_ProjectsComponent_0, RenderType_ProjectsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], [_shared_darkmode_service__WEBPACK_IMPORTED_MODULE_6__["DarkmodeService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProjectsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-projects", _projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], View_ProjectsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_darkmode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/darkmode.service */ "./src/app/shared/darkmode.service.ts");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(darkModeService) {
        var _this = this;
        this.darkModeService = darkModeService;
        this.projects = [{
                name: 'Lakshmipat Singhania Academy',
                org: 'Kolkata',
                date: 'APRIL 2003 - MAY 2017',
                tech: 'NODE.JS',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n    Ipsa illo laborum eveniet amet sed in fuga dolores laboriosam,quaerat\n    magni molestias sunt deserunt esse ut quam tempora quo, voluptate excepturi."
            }];
        this.darkMode = darkModeService.getMode();
        this.subscription = darkModeService.modeChange.subscribe(function (value) {
            _this.darkMode = value;
        });
        this.darkModeService = darkModeService;
    }
    ProjectsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProjectsComponent.prototype.ngOnInit = function () {
        this.currentDisplay = this.projects[0];
        this.inViewProject = this.projects[0];
        this.current = 0;
    };
    ProjectsComponent.prototype.onNavChange = function () {
        this.currentDisplay = this.projects[this.current];
    };
    ProjectsComponent.prototype.next = function () {
        if (this.current + 1 > this.projects.length) {
        }
        else {
            this.current = this.current + 1;
            this.inViewProject = this.projects[this.current];
        }
    };
    ProjectsComponent.prototype.prev = function () {
        if (this.current - 1 < 0) {
        }
        else {
            this.current = this.current - 1;
            this.inViewProject = this.projects[this.current];
        }
    };
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/shared/darkmode.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/darkmode.service.ts ***!
  \********************************************/
/*! exports provided: DarkmodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkmodeService", function() { return DarkmodeService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


var DarkmodeService = /** @class */ (function () {
    function DarkmodeService() {
        this.modeChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.darkMode = false;
    }
    DarkmodeService.prototype.getMode = function () {
        return this.darkMode;
    };
    DarkmodeService.prototype.toggle = function () {
        this.darkMode = !this.darkMode;
        this.modeChange.next(this.darkMode);
    };
    DarkmodeService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function DarkmodeService_Factory() { return new DarkmodeService(); }, token: DarkmodeService, providedIn: "root" });
    return DarkmodeService;
}());



/***/ }),

/***/ "./src/app/skills/skill/skill.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/skills/skill/skill.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_SkillComponent, View_SkillComponent_0, View_SkillComponent_Host_0, SkillComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SkillComponent", function() { return RenderType_SkillComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SkillComponent_0", function() { return View_SkillComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SkillComponent_Host_0", function() { return View_SkillComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillComponentNgFactory", function() { return SkillComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skill_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skill.component */ "./src/app/skills/skill/skill.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var styles_SkillComponent = [".skill[_ngcontent-%COMP%]{\n        display:flex;\n        flex-direction:row;\n        color:inherit;\n      }\n      .skill-icon[_ngcontent-%COMP%]{\n        margin-right:5px;\n        padding:10px;\n        color:inherit;\n      }\n      .skill-name[_ngcontent-%COMP%]{\n        padding:15px;\n        font-weight:bold;\n        font-size:14px;\n        color:inherit;\n      }\n      .skill[_ngcontent-%COMP%]:hover{\n        color:#FA292A\n      }"];
var RenderType_SkillComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_SkillComponent, data: {} });

function View_SkillComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [["class", "skill"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["class", "skill-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [["class", "skill-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "fab fa-", _co.skill.link, " fa-2x"); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.skill.name; _ck(_v, 4, 0, currVal_1); }); }
function View_SkillComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-skill", [], null, null, null, View_SkillComponent_0, RenderType_SkillComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _skill_component__WEBPACK_IMPORTED_MODULE_1__["SkillComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SkillComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-skill", _skill_component__WEBPACK_IMPORTED_MODULE_1__["SkillComponent"], View_SkillComponent_Host_0, { skill: "skill" }, {}, []);



/***/ }),

/***/ "./src/app/skills/skill/skill.component.ts":
/*!*************************************************!*\
  !*** ./src/app/skills/skill/skill.component.ts ***!
  \*************************************************/
/*! exports provided: SkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillComponent", function() { return SkillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var SkillComponent = /** @class */ (function () {
    function SkillComponent() {
    }
    SkillComponent.prototype.ngOnInit = function () {
    };
    return SkillComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/skills/skills.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_SkillsComponent, View_SkillsComponent_0, View_SkillsComponent_Host_0, SkillsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SkillsComponent", function() { return RenderType_SkillsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SkillsComponent_0", function() { return View_SkillsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SkillsComponent_Host_0", function() { return View_SkillsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponentNgFactory", function() { return SkillsComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skill_skill_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skill/skill.component.ngfactory */ "./src/app/skills/skill/skill.component.ngfactory.js");
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skill/skill.component */ "./src/app/skills/skill/skill.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _shared_darkmode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/darkmode.service */ "./src/app/shared/darkmode.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_SkillsComponent = [".skills-div[_ngcontent-%COMP%]{\n      padding:40px;\n    }\n    .dark-skill[_ngcontent-%COMP%]{\n      color:white;\n    }\n    @media only screen and (max-width: 600px){\n      .flex[_ngcontent-%COMP%]{\n        display:flex;\n        justify-content:center;\n      }\n    }"];
var RenderType_SkillsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_SkillsComponent, data: {} });

function View_SkillsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "col l6 m6 s12 flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "app-skill", [], null, null, null, _skill_skill_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_SkillComponent_0"], _skill_skill_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_SkillComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _skill_skill_component__WEBPACK_IMPORTED_MODULE_2__["SkillComponent"], [], { skill: [0, "skill"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_SkillsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "div", [["class", "row skills-div"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](3, { "dark-skill": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SkillsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row skills-div"; var currVal_1 = _ck(_v, 3, 0, _co.darkMode); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.skills; _ck(_v, 5, 0, currVal_2); }, null); }
function View_SkillsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-skills", [], null, null, null, View_SkillsComponent_0, RenderType_SkillsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], [_shared_darkmode_service__WEBPACK_IMPORTED_MODULE_5__["DarkmodeService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SkillsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-skills", _skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], View_SkillsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_darkmode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/darkmode.service */ "./src/app/shared/darkmode.service.ts");


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(darkModeService) {
        var _this = this;
        this.darkModeService = darkModeService;
        this.skills = [{
                link: 'angular',
                name: 'Angular'
            }, {
                link: 'node',
                name: 'Node.js'
            }, {
                link: 'python',
                name: 'Python'
            }, {
                link: 'docker',
                name: 'Docker'
            }, {
                link: 'js',
                name: 'JavaScript'
            }, {
                link: 'html5',
                name: 'HTML'
            }, {
                link: 'css3-alt',
                name: 'CSS'
            }
        ];
        this.darkMode = darkModeService.getMode();
        this.subscription = darkModeService.modeChange.subscribe(function (value) {
            _this.darkMode = value;
        });
        this.darkModeService = darkModeService;
    }
    SkillsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SkillsComponent.prototype.ngOnInit = function () {
    };
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! exports provided: AppServerModuleNgFactory, AppServerModule, LAZY_MODULE_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MODULE_MAP", function() { return LAZY_MODULE_MAP; });
/* harmony import */ var _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__["AppServerModuleNgFactory"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__["AppServerModule"]; });




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}

var LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vatsalk/Documents/portfolio/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map