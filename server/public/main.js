(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-kanban-board></app-kanban-board>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_kanban_board_kanban_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/kanban-board/kanban-board.component */ "./src/app/components/kanban-board/kanban-board.component.ts");
/* harmony import */ var _service_kanban_board_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/kanban-board.service */ "./src/app/service/kanban-board.service.ts");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-drag-drop */ "./node_modules/ng-drag-drop/index.js");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_kanban_board_kanban_board_component__WEBPACK_IMPORTED_MODULE_6__["KanbanBoardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                ng_drag_drop__WEBPACK_IMPORTED_MODULE_8__["NgDragDropModule"].forRoot(),
            ],
            providers: [_service_kanban_board_service__WEBPACK_IMPORTED_MODULE_7__["KanbanBoardService"],],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/kanban-board/kanban-board.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/kanban-board/kanban-board.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Coming+Soon|El+Messiri|Gloria+Hallelujah|Spicy+Rice|VT323');\n\n.footer {\n      text-align: center;\n}\n\n.slide {\n    height: 93%;;\n}\n\n.git:hover {\n -webkit-transform: rotateY(180deg) ;\n         transform: rotateY(180deg) ;\n}\n\n.git {\n    height:50px;\n    bottom: 0;\n}\n\n/* hide /show delete button */\n\n.ngx-dnd-item  span{\n  visibility:hidden;\n}\n\n.ngx-dnd-item:hover  span{\n  visibility:visible;\n}\n\nspan {\n   float:right;\n   cursor: pointer;\n   font-size: 13px;\n}\n\n.message {\nfont-family: 'El Messiri', sans-serif;\nmargin:0;\nsize: 15px;\ncolor: white;\n}\n\n.message {\n  -webkit-animation: seconds 1.0s forwards;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-delay: 5s;\n  animation: seconds 1.0s forwards;\n  animation-iteration-count: 1;\n  animation-delay: 5s;\n  position: relative;\n}\n\n@-webkit-keyframes seconds {\n  0% {\n    \n  }\n  100% {\n visibility: hidden;\n  }\n}\n\nbutton {\n  background: steelblue;\n  height: 54px;\n  width: 25%;\n  font-weight: lighter;\n  text-shadow: 0 1px 0 #38678f;\n  color: white;\n  border: 1px solid #38678f;\n  box-shadow: inset 0px 1px 2px #568ebd;\n  transition: all 0.2s;\n}\n\nh1 {\n    color: white;\n    margin:0;\n    /* font-family: 'Spicy Rice', cursive; */\n/* font-family: 'Gloria Hallelujah', cursive; */\n/* font-family: 'VT323', monospace; */\n/* font-family: 'El Messiri', sans-serif; */\nfont-family: 'Coming Soon', cursive;\n}\n\n.form-control {\n      border: 2px solid black;\n}\n\n.form-group {\n    display: inline-block;\n    margin: 5px;\n}\n\n.container {\n   min-height: 100%;\n    margin: 0 auto;\n    text-align: center;\n}\n\ntd {\n     vertical-align:top;\n}\n\n.ngx-dnd-item {\n    margin: 10px;\n    padding: 10px;\n    background-color: rgba(0, 0, 0, 0.2);\n    transition: opacity 0.4s ease-in-out;\n    border: 2px solid steelblue;\n    display: block;\n}\n\ntable {\n  width: 100%;\n  max-width: 600px;\n  height: 320px;\n  border-collapse: collapse;\n  border: 1px solid #38678f;\n  margin: 30px auto;\n  background: white;\n}\n\nth {\n  background: steelblue;\n  height: 54px;\n  width: 25%;\n  font-weight: lighter;\n  text-shadow: 0 1px 0 #38678f;\n  color: white;\n  border: 1px solid #38678f;\n  box-shadow: inset 0px 1px 2px #568ebd;\n  transition: all 0.2s;\n}\n\ntr {\n  border-bottom: 1px solid #cccccc;\n}\n\ntr:last-child {\n  border-bottom: 0px;\n}\n\ntd {\n  border-right: 1px solid #cccccc;\n  padding: 10px;\n  transition: all 0.2s;\n}\n\ntd:last-child {\n  border-right: 0px;\n}\n\n/* td.selected {\n  background: #d7e4ef;\n} */\n\ntd input {\n  font-size: 14px;\n  background: none;\n  outline: none;\n  border: 0;\n  display: table-cell;\n  height: 100%;\n  width: 100%;\n}\n\ntd input:focus {\n  box-shadow: 0 1px 0 steelblue;\n  color: steelblue;\n}\n\n::-moz-selection {\n  background: steelblue;\n  color: white;\n}\n\n.heavyTable {\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n  -webkit-animation: float 5s infinite;\n          animation: float 5s infinite;\n}\n\n.main {\n  max-width: 600px;\n  margin: auto;\n}\n\n.content {\n  color: white;\n  text-align: center;\n}\n\n.content pre {\n  padding: 1.2em 0 0.5em;\n  background: white;\n  background: rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(255, 255, 255, 0.9);\n  color: #38678f;\n}\n\n.content .button {\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  height: 48px;\n  line-height: 48px;\n  padding: 0 20px;\n  border-radius: 24px;\n  border: 1px solid #38678f;\n  background: steelblue;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 1px 3px rgba(255, 255, 255, 0.2);\n  transition: all 0.1s;\n}\n\n.content .button:hover {\n  background: #4f8aba;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.1);\n}\n\n.content .button:active {\n  color: #294d6b;\n  background: #427aa9;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 0 5px rgba(0, 0, 0, 0.2);\n}\n\n.content .button:focus {\n  outline: none;\n}\n\nh1 {\n  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n\n/* button */\n\na {\n  color: inherit;\n}\n\na:hover {\n  color: #7f8ff4;\n}\n\n.container__item {\n    display: flex;\n    margin-left: 100px;\n    display: flex;\n}\n\n.uppercase {\n  text-transform: uppercase;\n}\n\n.btn {\n  background:steelblue;\n  margin-top:6px;\n  display: inline-block;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  border: 0;\n  outline: 0;\n  padding: 0;\n  transition: all 200ms ease-in;\n  cursor: pointer;\n}\n\n.btn:disabled {\n    cursor:default;\n}\n\n.btn--primary {\n      background:steelblue;\n  color: #fff;\n  box-shadow: 0 0 10px 2px rgba(0, 0, 0, .1);\n  border-radius: 2px;\n  padding: 12px 36px;\n}\n\n.btn--primary:hover {\n  background: #6c7ff2;\n}\n\n.btn--primary:active {\n  background: #7f8ff4;\n  box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, .2);\n}\n\n.btn--inside {\n  margin-left: -26px;\n}\n\n.form__field {\n     flex: 1;\n  width: 360px;\n  background:wheat;\n  color: black;\n  font: inherit;\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .1);\n  border: 0;\n  outline: 0;\n  padding: 22px 18px;\n}\n\n/* loader */\n\n.loader {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  display: flex;\n}\n\n.dash {\n  margin: 0 15px;\n  width: 35px;\n  height: 15px;\n  border-radius: 8px;\n  background: #FF2CBD;\n  box-shadow: 0 0 10px 0 #FECDFF;\n}\n\n.uno {\n     background: red;\n  margin-right: -18px;\n  -webkit-transform-origin: center left;\n          transform-origin: center left;\n  -webkit-animation: spin 3s linear infinite;\n          animation: spin 3s linear infinite;  \n}\n\n.dos {\n     background: white;\n  -webkit-transform-origin: center right;\n          transform-origin: center right;\n  -webkit-animation: spin2 3s linear infinite;\n          animation: spin2 3s linear infinite;\n  -webkit-animation-delay: .2s;\n          animation-delay: .2s;\n}\n\n.tres {\n     background: red;\n  -webkit-transform-origin: center right;\n          transform-origin: center right;\n  -webkit-animation: spin3 3s linear infinite;\n          animation: spin3 3s linear infinite;\n  -webkit-animation-delay: .3s;\n          animation-delay: .3s;\n}\n\n.cuatro {\n     background: white;\n  -webkit-transform-origin: center right;\n          transform-origin: center right;\n  -webkit-animation: spin4 3s linear infinite;\n          animation: spin4 3s linear infinite;\n  -webkit-animation-delay: .4s;\n          animation-delay: .4s;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  25% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n  30% {\n    -webkit-transform: rotate(370deg);\n            transform: rotate(370deg);\n  }\n  35% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  25% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n  30% {\n    -webkit-transform: rotate(370deg);\n            transform: rotate(370deg);\n  }\n  35% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes spin2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  20% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  30% {\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n  35% {\n    -webkit-transform: rotate(-190deg);\n            transform: rotate(-190deg);\n  }\n  40% {\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n  78% {\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n  95% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n  98% {\n    -webkit-transform: rotate(-370deg);\n            transform: rotate(-370deg);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n\n@keyframes spin2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  20% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  30% {\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n  35% {\n    -webkit-transform: rotate(-190deg);\n            transform: rotate(-190deg);\n  }\n  40% {\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n  78% {\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n  95% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n  98% {\n    -webkit-transform: rotate(-370deg);\n            transform: rotate(-370deg);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n\n@-webkit-keyframes spin3 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  27% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);  \n  }\n  40% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  45% {\n    -webkit-transform: rotate(190deg);\n            transform: rotate(190deg);\n  }\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  62% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  75% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n  80% {\n    -webkit-transform: rotate(370deg);\n            transform: rotate(370deg);\n  }\n  85% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin3 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  27% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);  \n  }\n  40% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  45% {\n    -webkit-transform: rotate(190deg);\n            transform: rotate(190deg);\n  }\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  62% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  75% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n  80% {\n    -webkit-transform: rotate(370deg);\n            transform: rotate(370deg);\n  }\n  85% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes spin4 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  38% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  60% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n  65% {\n    -webkit-transform: rotate(-370deg);\n            transform: rotate(-370deg);\n  }\n  75% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n\n@keyframes spin4 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  38% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  60% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n  65% {\n    -webkit-transform: rotate(-370deg);\n            transform: rotate(-370deg);\n  }\n  75% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n\n/* fade in */\n\n.container {\n  animation: my_fade_animation 0.7s linear;\n  animation: my_fade_animation1 0.7s linear;\n  -webkit-animation: my_fade_animation 0.7s linear;\n}\n\n@-webkit-keyframes my_fade_animation {\n from { opacity:0; }\n to { opacity:1; }\n}\n\n@keyframes my_fade_animation {\n from { opacity:0; }\n to { opacity:1; }\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9rYW5iYW4tYm9hcmQva2FuYmFuLWJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUhBQWlIOztBQUVqSDtNQUNNLG1CQUFtQjtDQUN4Qjs7QUFDRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtDQUNDLG9DQUE0QjtTQUE1Qiw0QkFBNEI7Q0FDNUI7O0FBQ0Q7SUFDSSxZQUFZO0lBQ1osVUFBVTtDQUNiOztBQUNELDhCQUE4Qjs7QUFDOUI7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBQ0Q7R0FDRyxZQUFZO0dBQ1osZ0JBQWdCO0dBQ2hCLGdCQUFnQjtDQUNsQjs7QUFDRDtBQUNBLHNDQUFzQztBQUN0QyxTQUFTO0FBQ1QsV0FBVztBQUNYLGFBQWE7Q0FDWjs7QUFFQTtFQUNDLHlDQUF5QztFQUN6QyxxQ0FBcUM7RUFDckMsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtDQUNwQjs7QUFDRDtFQUNFOztHQUVDO0VBQ0Q7Q0FDRCxtQkFBbUI7R0FDakI7Q0FDRjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsV0FBVztFQUNYLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzQ0FBc0M7RUFDdEMscUJBQXFCO0NBQ3RCOztBQUNEO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCx5Q0FBeUM7QUFDN0MsZ0RBQWdEO0FBQ2hELHNDQUFzQztBQUN0Qyw0Q0FBNEM7QUFDNUMsb0NBQW9DO0NBQ25DOztBQUVEO01BQ00sd0JBQXdCO0NBQzdCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7Q0FDZjs7QUFFRDtHQUNHLGlCQUFpQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCOztBQUNEO0tBQ0ssbUJBQW1CO0NBQ3ZCOztBQUNEO0lBQ0ks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QUFPLFVBQVUsRUFBRTtDQUNuQixLQUFLLFVBQVUsRUFBRTtDQUNqQjs7QUFIRDtDQUNDLE9BQU8sVUFBVSxFQUFFO0NBQ25CLEtBQUssVUFBVSxFQUFFO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9rYW5iYW4tYm9hcmQva2FuYmFuLWJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNvbWluZytTb29ufEVsK01lc3Npcml8R2xvcmlhK0hhbGxlbHVqYWh8U3BpY3krUmljZXxWVDMyMycpO1xuXG4uZm9vdGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zbGlkZSB7XG4gICAgaGVpZ2h0OiA5MyU7O1xufVxuXG4uZ2l0OmhvdmVyIHtcbiB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSA7XG59XG4uZ2l0IHtcbiAgICBoZWlnaHQ6NTBweDtcbiAgICBib3R0b206IDA7XG59XG4vKiBoaWRlIC9zaG93IGRlbGV0ZSBidXR0b24gKi9cbi5uZ3gtZG5kLWl0ZW0gIHNwYW57XG4gIHZpc2liaWxpdHk6aGlkZGVuO1xufVxuLm5neC1kbmQtaXRlbTpob3ZlciAgc3BhbntcbiAgdmlzaWJpbGl0eTp2aXNpYmxlO1xufVxuc3BhbiB7XG4gICBmbG9hdDpyaWdodDtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbiAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tZXNzYWdlIHtcbmZvbnQtZmFtaWx5OiAnRWwgTWVzc2lyaScsIHNhbnMtc2VyaWY7XG5tYXJnaW46MDtcbnNpemU6IDE1cHg7XG5jb2xvcjogd2hpdGU7XG59XG5cbiAubWVzc2FnZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzZWNvbmRzIDEuMHMgZm9yd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDVzO1xuICBhbmltYXRpb246IHNlY29uZHMgMS4wcyBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiA1cztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNlY29uZHMge1xuICAwJSB7XG4gICAgXG4gIH1cbiAgMTAwJSB7XG4gdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHN0ZWVsYmx1ZTtcbiAgaGVpZ2h0OiA1NHB4O1xuICB3aWR0aDogMjUlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgIzM4Njc4ZjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg2NzhmO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDJweCAjNTY4ZWJkO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbmgxIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOjA7XG4gICAgLyogZm9udC1mYW1pbHk6ICdTcGljeSBSaWNlJywgY3Vyc2l2ZTsgKi9cbi8qIGZvbnQtZmFtaWx5OiAnR2xvcmlhIEhhbGxlbHVqYWgnLCBjdXJzaXZlOyAqL1xuLyogZm9udC1mYW1pbHk6ICdWVDMyMycsIG1vbm9zcGFjZTsgKi9cbi8qIGZvbnQtZmFtaWx5OiAnRWwgTWVzc2lyaScsIHNhbnMtc2VyaWY7ICovXG5mb250LWZhbWlseTogJ0NvbWluZyBTb29uJywgY3Vyc2l2ZTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnRkIHtcbiAgICAgdmVydGljYWwtYWxpZ246dG9wO1xufVxuLm5neC1kbmQtaXRlbSB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBzdGVlbGJsdWU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGhlaWdodDogMzIwcHg7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODY3OGY7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbnRoIHtcbiAgYmFja2dyb3VuZDogc3RlZWxibHVlO1xuICBoZWlnaHQ6IDU0cHg7XG4gIHdpZHRoOiAyNSU7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjMzg2NzhmO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODY3OGY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMnB4ICM1NjhlYmQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxudHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcbn1cbnRyOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiAwcHg7XG59XG50ZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2NjY2M7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxudGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMHB4O1xufVxuLyogdGQuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjZDdlNGVmO1xufSAqL1xudGQgaW5wdXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbnRkIGlucHV0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAxcHggMCBzdGVlbGJsdWU7XG4gIGNvbG9yOiBzdGVlbGJsdWU7XG59XG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogc3RlZWxibHVlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWF2eVRhYmxlIHtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBhbmltYXRpb246IGZsb2F0IDVzIGluZmluaXRlO1xufVxuLm1haW4ge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uY29udGVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudCBwcmUge1xuICBwYWRkaW5nOiAxLjJlbSAwIDAuNWVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGNvbG9yOiAjMzg2NzhmO1xufVxuXG4uY29udGVudCAuYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg2NzhmO1xuICBiYWNrZ3JvdW5kOiBzdGVlbGJsdWU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCBpbnNldCAwIDFweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbi5jb250ZW50IC5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNGY4YWJhO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSwgaW5zZXQgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuLmNvbnRlbnQgLmJ1dHRvbjphY3RpdmUge1xuICBjb2xvcjogIzI5NGQ2YjtcbiAgYmFja2dyb3VuZDogIzQyN2FhOTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIGluc2V0IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmNvbnRlbnQgLmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5oMSB7XG4gIHRleHQtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi8qIGJ1dHRvbiAqL1xuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiAjN2Y4ZmY0O1xufVxuLmNvbnRhaW5lcl9faXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi51cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmJ0biB7XG4gIGJhY2tncm91bmQ6c3RlZWxibHVlO1xuICBtYXJnaW4tdG9wOjZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG46ZGlzYWJsZWQge1xuICAgIGN1cnNvcjpkZWZhdWx0O1xufVxuLmJ0bi0tcHJpbWFyeSB7XG4gICAgICBiYWNrZ3JvdW5kOnN0ZWVsYmx1ZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAxMnB4IDM2cHg7XG59XG4uYnRuLS1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzZjN2ZmMjtcbn1cbi5idG4tLXByaW1hcnk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzdmOGZmNDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgLjIpO1xufVxuLmJ0bi0taW5zaWRlIHtcbiAgbWFyZ2luLWxlZnQ6IC0yNnB4O1xufVxuLmZvcm1fX2ZpZWxkIHtcbiAgICAgZmxleDogMTtcbiAgd2lkdGg6IDM2MHB4O1xuICBiYWNrZ3JvdW5kOndoZWF0O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiAyMnB4IDE4cHg7XG59XG5cbi8qIGxvYWRlciAqL1xuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kYXNoIHtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogI0ZGMkNCRDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAjRkVDREZGO1xufVxuXG4udW5vIHtcbiAgICAgYmFja2dyb3VuZDogcmVkO1xuICBtYXJnaW4tcmlnaHQ6IC0xOHB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgbGVmdDtcbiAgYW5pbWF0aW9uOiBzcGluIDNzIGxpbmVhciBpbmZpbml0ZTsgIFxufVxuXG4uZG9zIHtcbiAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcbiAgYW5pbWF0aW9uOiBzcGluMiAzcyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kZWxheTogLjJzO1xufVxuXG4udHJlcyB7XG4gICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xuICBhbmltYXRpb246IHNwaW4zIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAuM3M7XG59XG5cbi5jdWF0cm8ge1xuICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xuICBhbmltYXRpb246IHNwaW40IDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAuNHM7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNzBkZWcpO1xuICB9XG4gIDM1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbjIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICB9XG4gIDM1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE5MGRlZyk7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgfVxuICA3OCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICB9XG4gIDk1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gIH1cbiAgOTglIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzcwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4zIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDI3JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7ICBcbiAgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgNDUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxOTBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxuICA2MiUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzcwZGVnKTtcbiAgfVxuICA4NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW40IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDM4JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgfVxuICA2NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNzBkZWcpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gIH1cbn1cblxuLyogZmFkZSBpbiAqL1xuLmNvbnRhaW5lciB7XG4gIGFuaW1hdGlvbjogbXlfZmFkZV9hbmltYXRpb24gMC43cyBsaW5lYXI7XG4gIGFuaW1hdGlvbjogbXlfZmFkZV9hbmltYXRpb24xIDAuN3MgbGluZWFyO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbXlfZmFkZV9hbmltYXRpb24gMC43cyBsaW5lYXI7XG59XG5Aa2V5ZnJhbWVzIG15X2ZhZGVfYW5pbWF0aW9uIHtcbiBmcm9tIHsgb3BhY2l0eTowOyB9XG4gdG8geyBvcGFjaXR5OjE7IH1cbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/kanban-board/kanban-board.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/kanban-board/kanban-board.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"board\" class=\"slide\">\n  <div class=\"container main\" >\n  <h1>Welcome to Kanban Board</h1>\n    <p class=\"message\">*add new task, and drop him where you want</p>\n        <form class=\"form\" (ngSubmit)=\"create()\">\n               <div class=\"container\">\n                        <div class=\"container__item\">\n                            <form class=\"form\">\n                                <input type=\"text\" name=\"create\"  class=\"form__field\" [(ngModel)]=\"text\"  placeholder=\"add new task...\" />\n                                </form>\n                            <button [disabled]=\"!text\" type=\"submit\" class=\"btn btn--primary btn--inside uppercase\">add</button>\n                      </div>\n               </div>\n        </form>    \n                  <table class=\"heavyTable\">\n                      <thead>\n                        <tr>\n                          <th>To do</th>\n                          <th>Doing ({{ doingList.length }}/3)</th>\n                          <th>Done</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                            <td droppable class=\"ngx-dnd-container\" (onDrop)=\"onItemDrop($event, 'todo')\" [(ngModel)]=\"todoList\" ngDefaultControl>\n                              <div class=\"ngx-dnd-item\"  (onDragEnd)=\"dragEnd($event,todoList) \"  draggable [dragData]=\"item\"  *ngFor=\"let item of todoList\">{{ item.text }} <span data-toggle=\"tooltip\" title=\"Delete\" (click)=\"delete(item)\">x</span></div>\n                              \n                            </td>\n\n                            <td droppable  [dropEnabled]=\"isDropAllowed()\" class=\" ngx-dnd-container\" (onDrop)=\"onItemDrop($event, 'doing')\" ngDefaultControl  [(ngModel)]=\"doingList\">\n                              <div class=\"ngx-dnd-item\" (onDragEnd)=\"dragEnd($event,doingList) \" draggable [dragData]=\"item\" *ngFor=\"let item of doingList\">{{ item.text }} <span data-toggle=\"tooltip\" title=\"Delete\" (click)=\"delete(item)\" >x</span>\n                                </div>\n                            </td>\n                            \n                            <td droppable class=\"ngx-dnd-container\"  (onDrop)=\"onItemDrop($event, 'done')\" [(ngModel)]=\"doneList\" ngDefaultControl>\n                              <div class=\"ngx-dnd-item\"  (onDragEnd)=\"dragEnd($event,doneList) \" draggable [dragData]=\"item\" *ngFor=\"let item of doneList\">{{item.text}} <span data-toggle=\"tooltip\" title=\"Delete\" (click)=\"delete(item)\" >x</span>\n                                </div>\n                            </td>\n                          </tr>\n                        </tbody>\n                </table>\n   </div>     \n      <div class=\"footer\"><a href=\"https://github.com/npilipovic86/kanban-board#kanbanboard\" target=\"_blank\"><img class=\" git\"\n            src=\"assets/git.svg\" data-toggle=\"tooltip\" title=\"About\"></a></div>\n      </div>\n        <div class=\"loader\" *ngIf=\"loader\">\n                <div class=\"dash uno\"></div>\n                 <div class=\"dash dos\"></div>\n                <div class=\"dash tres\"></div>\n                <div class=\"dash cuatro\"></div>\n        </div>\n        \n               \n                 "

/***/ }),

/***/ "./src/app/components/kanban-board/kanban-board.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/kanban-board/kanban-board.component.ts ***!
  \*******************************************************************/
/*! exports provided: KanbanBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KanbanBoardComponent", function() { return KanbanBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_kanban_board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/kanban-board.service */ "./src/app/service/kanban-board.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KanbanBoardComponent = /** @class */ (function () {
    function KanbanBoardComponent(_service) {
        this._service = _service;
        this.todoList = [];
        this.doneList = [];
        this.doingList = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    KanbanBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader = true;
        this.board = false;
        this.interval = setTimeout(function () {
            _this.toggle();
        }, 2000);
        this.getData();
    };
    KanbanBoardComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
        this.subscription.unsubscribe();
    };
    //loader => board transition
    KanbanBoardComponent.prototype.toggle = function () {
        this.loader = !this.loader;
        this.board = !this.board;
    };
    KanbanBoardComponent.prototype.resetAllList = function () {
        this.todoList = [];
        this.doneList = [];
        this.doingList = [];
    };
    KanbanBoardComponent.prototype.delete = function (card) {
        var _this = this;
        this._service.delete(card).subscribe(function (response) {
            var listOfCard = _this.findList(card);
            _this.removeItem(card, listOfCard);
        });
    };
    KanbanBoardComponent.prototype.isDropAllowed = function () {
        return this.doingList.length < 3;
    };
    KanbanBoardComponent.prototype.removeItem = function (item, list) {
        var index = list.findIndex(function (x) { return x.id === item.id; });
        list.splice(index, 1);
    };
    //find the list of the card
    KanbanBoardComponent.prototype.findList = function (card) {
        if (card.done) {
            return this.doneList;
        }
        else if (card.doing) {
            return this.doingList;
        }
        else {
            return this.todoList;
        }
    };
    KanbanBoardComponent.prototype.dragEnd = function (event, array) {
        var _this = this;
        //change position of elements
        for (var i = 0; i < array.length; i++) {
            array[i].position = i;
        }
        //save positions
        array.forEach(function (element) {
            _this.update(element);
        });
    };
    KanbanBoardComponent.prototype.onItemDrop = function (cardDrag, listName) {
        var card = cardDrag.dragData;
        if (listName === "todo") {
            //remove card from list
            this.removeItem(card, this.findList(card));
            //set new list
            card.doing = false;
            card.done = false;
            card.todo = true;
            card.position = this.todoList.length;
            //add to list
            this.todoList.push(card);
            //save to db
            this.update(card);
        }
        else if (listName === "doing" && this.doingList.length < 3) {
            this.removeItem(card, this.findList(card));
            card.doing = true;
            card.done = false;
            card.todo = false;
            card.position = this.doingList.length;
            this.doingList.push(card);
            this.update(card);
        }
        else {
            this.removeItem(card, this.findList(card));
            card.doing = false;
            card.done = true;
            card.todo = false;
            card.position = this.doneList.length;
            this.doneList.push(card);
            this.update(card);
        }
    };
    KanbanBoardComponent.prototype.sortInList = function (cardList) {
        var _this = this;
        if (cardList) {
            cardList.forEach(function (element) {
                if (element.done) {
                    _this.doneList.push(element);
                }
                else if (element.doing) {
                    _this.doingList.push(element);
                }
                else {
                    _this.todoList.push(element);
                }
            });
            //sort by position
            this.doneList.sort(function (a, b) {
                return a.position - b.position;
            });
            this.doingList.sort(function (a, b) {
                return a.position - b.position;
            });
            this.todoList.sort(function (a, b) {
                return a.position - b.position;
            });
        }
    };
    KanbanBoardComponent.prototype.getData = function () {
        var _this = this;
        var sub1 = this._service.getAll().subscribe(function (response) {
            _this.cardList = response;
            _this.sortInList(_this.cardList);
        });
        this.subscription.add(sub1);
    };
    KanbanBoardComponent.prototype.update = function (card) {
        var _this = this;
        this._service.update(card).subscribe(function (response) {
            _this.resetAllList();
            _this.sortInList(_this.cardList);
        });
    };
    KanbanBoardComponent.prototype.create = function () {
        var _this = this;
        this.card = {
            text: this.text,
            done: false,
            doing: false,
            todo: true,
            position: this.todoList.length
        };
        var sub2 = this._service.create(this.card).subscribe(function (response) {
            //response => card
            //add new card to list
            _this.cardList.push(response);
            //update all list
            _this.resetAllList();
            _this.sortInList(_this.cardList);
            //reset text input
            _this.text = "";
        });
        this.subscription.add(sub2);
    };
    KanbanBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-kanban-board",
            template: __webpack_require__(/*! ./kanban-board.component.html */ "./src/app/components/kanban-board/kanban-board.component.html"),
            styles: [__webpack_require__(/*! ./kanban-board.component.css */ "./src/app/components/kanban-board/kanban-board.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_service_kanban_board_service__WEBPACK_IMPORTED_MODULE_1__["KanbanBoardService"]])
    ], KanbanBoardComponent);
    return KanbanBoardComponent;
}());



/***/ }),

/***/ "./src/app/service/kanban-board.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/kanban-board.service.ts ***!
  \*************************************************/
/*! exports provided: KanbanBoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KanbanBoardService", function() { return KanbanBoardService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KanbanBoardService = /** @class */ (function () {
    function KanbanBoardService(_http) {
        this._http = _http;
        this.path = '/boards';
    }
    KanbanBoardService.prototype.getAll = function () {
        return this._http.get(this.path);
    };
    KanbanBoardService.prototype.delete = function (pbe) {
        return this._http.delete(this.path + '/' + pbe.id);
    };
    KanbanBoardService.prototype.create = function (pbe) {
        return this._http.post(this.path, pbe);
    };
    KanbanBoardService.prototype.update = function (pbe) {
        return this._http.put(this.path + '/' + pbe.id, pbe);
    };
    KanbanBoardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], KanbanBoardService);
    return KanbanBoardService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/majstor/workspace/kanban-board/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map