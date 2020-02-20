(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/board-dialog/board-dialog.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/board-dialog/board-dialog.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dialog-title\">\n    <h1 mat-dialog-title>{{ dialogTitle }}</h1>\n</div>\n\n<mat-dialog-content [formGroup]=\"form\" class=\"dialog-content\">\n    <mat-form-field class=\"kanban-title\">\n        <mat-label>Title</mat-label>\n        <input matInput placeholder=\"Title\" formControlName=\"title\" />\n        <mat-error *ngIf=\"form.get('title').touched && form.get('title').hasError('required')\">\n            <strong>Required</strong>\n        </mat-error>\n    </mat-form-field>\n\n    <mat-dialog-actions>\n        <button class=\"mat-raised-button\" (click)=\"close()\">Close</button>\n        <button class=\"mat-raised-button mat-primary\" (click)=\"save()\">Save</button>\n    </mat-dialog-actions>\n</mat-dialog-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/board-view/board-view.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/board-view/board-view.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"page-title\">\n        <h1>{{ kanban?.title }}</h1>\n    </div>\n    <div>\n        <button mat-raised-button (click)=\"openDialogForNewTask()\">Create New Task</button>\n        <button mat-raised-button (click)=\"openDialogForNewList()\">Create New List</button>\n    </div>\n    <div class=\"kanban-board\" *ngIf=\"kanban\">\n        <div class=\"list-container\" *ngFor=\"let item of kanban.lists\">\n            <h2>{{ item.title }}</h2>\n            <div\n                cdkDropList\n                id=\"{{ item.title }}\"\n                [cdkDropListData]=\"lists[item.title]\"\n                [cdkDropListConnectedTo]=\"dropListConnectedTo()\"\n                class=\"board-list\"\n                (cdkDropListDropped)=\"drop($event)\"\n            >\n                <div class=\"sticky-note\" *ngFor=\"let task of lists[item.title]\" cdkDrag [style.background-color]=\"task.color\" id=\"{{ task.id }}\">\n                    <app-task [task]=\"task\" (delete)=\"deleteTask($event)\" (edit)=\"openDialogForEditTask($event)\"></app-task>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/board/board.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/board/board.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card routerLink=\"/boards/{{ item.id }}\">\n    <mat-card-header>\n        <mat-card-title>{{ item.title }}</mat-card-title>\n        <mat-card-actions>\n            <mat-icon matTooltip=\"Delete\" [matTooltipPosition]=\"['above']\" (click)=\"remove()\">delete</mat-icon>\n            <mat-icon matTooltip=\"Edit\" [matTooltipPosition]=\"['above']\" (click)=\"openDialogForEdit()\">edit</mat-icon>\n        </mat-card-actions>\n    </mat-card-header>\n    <mat-card-footer>\n        {{ item?.timestamp | date: 'E, dd MMM yy, HH:mm':'+0100' }}\n    </mat-card-footer>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/confirmation-dialog/confirmation-dialog.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/confirmation-dialog/confirmation-dialog.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-content>  {{ data }}</div>\n<div class='wrap' mat-dialog-actions >\n  <button mat-raised-button (click)=\"onNoClick()\" cdkFocusInitial>No</button>\n  <button mat-raised-button [mat-dialog-close]=\"true\" color='primary'>Yes</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/kanban-dialog/kanban-dialog.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/kanban-dialog/kanban-dialog.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dialog-title\">\n    <h1 mat-dialog-title>{{ dialogTitle }}</h1>\n</div>\n\n<mat-dialog-content [formGroup]=\"form\" class=\"dialog-content\">\n    <mat-form-field class=\"kanban-title\">\n        <mat-label>Title</mat-label>\n        <input matInput placeholder=\"Title\" formControlName=\"title\" />\n        <mat-error *ngIf=\"form.get('title').touched && form.get('title').hasError('required')\">\n            <strong>Required</strong>\n        </mat-error>\n    </mat-form-field>\n\n    <mat-dialog-actions>\n        <button class=\"mat-raised-button\" (click)=\"close()\">Close</button>\n        <button class=\"mat-raised-button mat-primary\" (click)=\"save()\">Save</button>\n    </mat-dialog-actions>\n</mat-dialog-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/main/main.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/main/main.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div>\n        <h2>Boards</h2>\n    </div>\n    <div>\n        <button mat-raised-button (click)=\"openDialogForNew()\">Create New Kanban Board</button>\n    </div>\n    <br />\n    <mat-divider></mat-divider>\n    <mat-list class=\"list\">\n        <mat-list-item class=\"list1\" *ngFor=\"let item of boards\">\n            <app-board [item]=\"item\" (delete)=\"delete($event)\" (edit)=\"openDialogForEdit($event)\"></app-board>\n        </mat-list-item>\n    </mat-list>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/task-dialog/task-dialog.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/task-dialog/task-dialog.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{ kanbanTitle }}</h1>\n\n<mat-dialog-content [formGroup]=\"form\" class=\"dialog-content\">\n    <mat-form-field>\n        <mat-label>Title</mat-label>\n        <input matInput placeholder=\"Title\" formControlName=\"title\" class=\"task-title\" />\n        <mat-error *ngIf=\"form.get('title').touched && form.get('title').hasError('required')\">\n            <strong>Required</strong>\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <mat-label>Color</mat-label>\n        <input matInput placeholder=\"Color\" type=\"color\" formControlName=\"color\" [value]=\"form.value.color\" />\n        <mat-error *ngIf=\"form.get('color').touched && form.get('color').hasError('required')\">\n            <strong>Required</strong>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Description</mat-label>\n        <textarea matInput placeholder=\"Description\" formControlName=\"description\" class=\"description-area\"> </textarea>\n        <mat-error *ngIf=\"form.get('description').touched && form.get('description').hasError('required')\">\n            <strong>Required</strong>\n        </mat-error>\n    </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button class=\"mat-raised-button\" (click)=\"close()\">Close</button>\n    <button class=\"mat-raised-button mat-primary\" (click)=\"save()\">Save</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/task/task.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/task/task.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-header [style.background-color]=\"task.color\">\n        <mat-card-title>{{ task.title }}</mat-card-title>\n        <mat-card-actions>\n            <mat-icon matTooltip=\"Delete\" [matTooltipPosition]=\"['above']\" (click)=\"remove()\">delete</mat-icon>\n            <mat-icon matTooltip=\"Edit\" [matTooltipPosition]=\"['above']\" (click)=\"openDialogForEdit()\">edit</mat-icon>\n        </mat-card-actions>\n    </mat-card-header>\n    <mat-card-content>\n        <p>\n            {{ task.description }}\n        </p>\n    </mat-card-content>\n    <mat-card-footer>\n        <span>{{ task?.timestamp | date: 'E, dd MMM yy, HH:mm':'+0100' }}</span>\n    </mat-card-footer>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_board_view_board_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/board-view/board-view.component */ "./src/app/component/board-view/board-view.component.ts");
/* harmony import */ var _component_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/main/main.component */ "./src/app/component/main/main.component.ts");





const routes = [
    { path: 'boards', component: _component_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] },
    { path: 'boards/:id', component: _component_board_view_board_view_component__WEBPACK_IMPORTED_MODULE_3__["BoardViewComponent"] },
    { path: '**', redirectTo: 'boards' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'kanban-board-client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_board_dialog_board_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/board-dialog/board-dialog.component */ "./src/app/component/board-dialog/board-dialog.component.ts");
/* harmony import */ var _component_board_view_board_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/board-view/board-view.component */ "./src/app/component/board-view/board-view.component.ts");
/* harmony import */ var _component_board_board_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/board/board.component */ "./src/app/component/board/board.component.ts");
/* harmony import */ var _component_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/confirmation-dialog/confirmation-dialog.component */ "./src/app/component/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _component_kanban_dialog_kanban_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/kanban-dialog/kanban-dialog.component */ "./src/app/component/kanban-dialog/kanban-dialog.component.ts");
/* harmony import */ var _component_main_main_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/main/main.component */ "./src/app/component/main/main.component.ts");
/* harmony import */ var _component_task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/task-dialog/task-dialog.component */ "./src/app/component/task-dialog/task-dialog.component.ts");
/* harmony import */ var _component_task_task_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/task/task.component */ "./src/app/component/task/task.component.ts");
/* harmony import */ var _service_board_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service/board.service */ "./src/app/service/board.service.ts");
/* harmony import */ var _service_task_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./service/task.service */ "./src/app/service/task.service.ts");

























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
            _component_main_main_component__WEBPACK_IMPORTED_MODULE_20__["MainComponent"],
            _component_kanban_dialog_kanban_dialog_component__WEBPACK_IMPORTED_MODULE_19__["KanbanDialogComponent"],
            _component_task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_21__["TaskDialogComponent"],
            _component_task_task_component__WEBPACK_IMPORTED_MODULE_22__["TaskComponent"],
            _component_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmationDialogComponent"],
            _component_board_board_component__WEBPACK_IMPORTED_MODULE_17__["BoardComponent"],
            _component_board_dialog_board_dialog_component__WEBPACK_IMPORTED_MODULE_15__["BoardDialogComponent"],
            _component_board_view_board_view_component__WEBPACK_IMPORTED_MODULE_16__["BoardViewComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"]
        ],
        providers: [_service_board_service__WEBPACK_IMPORTED_MODULE_23__["BoardService"], _service_task_service__WEBPACK_IMPORTED_MODULE_24__["TaskService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
        entryComponents: [_component_kanban_dialog_kanban_dialog_component__WEBPACK_IMPORTED_MODULE_19__["KanbanDialogComponent"], _component_task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_21__["TaskDialogComponent"], _component_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmationDialogComponent"], _component_board_dialog_board_dialog_component__WEBPACK_IMPORTED_MODULE_15__["BoardDialogComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/board-dialog/board-dialog.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/board-dialog/board-dialog.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dialog-content {\n  width: 450px;\n  min-height: 240px;\n}\n\n.kanban-title {\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hanN0b3Ivd29ya3NwYWNlL2thbmJhbi1ib2FyZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnQvYm9hcmQtZGlhbG9nL2JvYXJkLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2JvYXJkLWRpYWxvZy9ib2FyZC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ib2FyZC1kaWFsb2cvYm9hcmQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1jb250ZW50IHtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgbWluLWhlaWdodDogMjQwcHg7XG59XG5cbi5rYW5iYW4tdGl0bGUge1xuICAgIHdpZHRoOiA0MDBweDtcbn1cbiIsIi5kaWFsb2ctY29udGVudCB7XG4gIHdpZHRoOiA0NTBweDtcbiAgbWluLWhlaWdodDogMjQwcHg7XG59XG5cbi5rYW5iYW4tdGl0bGUge1xuICB3aWR0aDogNDAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/component/board-dialog/board-dialog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/board-dialog/board-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: BoardDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardDialogComponent", function() { return BoardDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_service_board_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/board.service */ "./src/app/service/board.service.ts");





'@angular/forms';
let BoardDialogComponent = class BoardDialogComponent {
    constructor(fb, dialogRef, data, _service) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this._service = _service;
        this.dialogTitle = data.title;
        console.log('TCL: BoardDialogComponent -> data', data);
        this.board = data.kanban;
        this.showDeleteButton = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [this.board.id],
            title: [this.board.title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            timestamp: [this.board.timestamp]
        });
        this.dialogTitle === 'Update Kanban' ? (this.showDeleteButton = true) : (this.showDeleteButton = false);
    }
    close(item) {
        this.dialogRef.close(item);
    }
    save() {
        if (this.form.valid) {
            if (!this.board.id) {
                this._service.create(this.form.value.title).subscribe((result) => {
                    this.close(result);
                });
            }
            else {
                this._service.update(this.form.value).subscribe((response) => {
                    this.close(this.form.value);
                });
            }
        }
    }
};
BoardDialogComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_service_board_service__WEBPACK_IMPORTED_MODULE_4__["BoardService"] }
];
BoardDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/board-dialog/board-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board-dialog.component.scss */ "./src/app/component/board-dialog/board-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], BoardDialogComponent);



/***/ }),

/***/ "./src/app/component/board-view/board-view.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/board-view/board-view.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  font-family: \"Open Sans\", sans-serif;\n  text-align: center;\n}\n\n.kanban-board {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.list-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 1em;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.board-list {\n  padding: 2px 2px 2px 2px;\n  border: solid 1px #ccc;\n  min-height: 400px;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\nsticky-note {\n  padding: 20px 10px;\n  border: solid 1px #ccc;\n  border-radius: 4px;\n  margin-top: 2px;\n  color: rgba(0, 0, 0, 0.87);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.sticky-note {\n  border-radius: 4px;\n  margin-top: 2px;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.sticky-note.cdk-drop-list-dragging .sticky-note:not(.cdk-drag-placeholder) {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hanN0b3Ivd29ya3NwYWNlL2thbmJhbi1ib2FyZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnQvYm9hcmQtdmlldy9ib2FyZC12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvYm9hcmQtdmlldy9ib2FyZC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURPQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSko7O0FET0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxlQUFBO0FDTEo7O0FET0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUNKSjs7QURPQTtFQUNJLFVBQUE7QUNKSjs7QURPQTtFQUNJLHNFQUFBO0VBQUEsOERBQUE7RUFBQSxzREFBQTtFQUFBLDBHQUFBO0FDSko7O0FET0E7RUFDSSxzRUFBQTtFQUFBLDhEQUFBO0VBQUEsc0RBQUE7RUFBQSwwR0FBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2JvYXJkLXZpZXcvYm9hcmQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5rYW5iYW4tYm9hcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5saXN0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgMWVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uYm9hcmQtbGlzdCB7XG4gICAgcGFkZGluZzogMnB4IDJweCAycHggMnB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgLy8gYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLy8gb3ZvIGplIGlza2xqdWNlbm9cbnN0aWNreS1ub3RlIHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zdGlja3ktbm90ZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcblxuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uc3RpY2t5LW5vdGUuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuc3RpY2t5LW5vdGU6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbiIsIi5jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ua2FuYmFuLWJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5saXN0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5ib2FyZC1saXN0IHtcbiAgcGFkZGluZzogMnB4IDJweCAycHggMnB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuc3RpY2t5LW5vdGUge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zdGlja3ktbm90ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5zdGlja3ktbm90ZS5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5zdGlja3ktbm90ZTpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/board-view/board-view.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/board-view/board-view.component.ts ***!
  \**************************************************************/
/*! exports provided: BoardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardViewComponent", function() { return BoardViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_model_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/task */ "./src/app/model/task.ts");
/* harmony import */ var src_app_service_board_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/board.service */ "./src/app/service/board.service.ts");
/* harmony import */ var src_app_service_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/task.service */ "./src/app/service/task.service.ts");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ "./src/app/component/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _kanban_dialog_kanban_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../kanban-dialog/kanban-dialog.component */ "./src/app/component/kanban-dialog/kanban-dialog.component.ts");
/* harmony import */ var _task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../task-dialog/task-dialog.component */ "./src/app/component/task-dialog/task-dialog.component.ts");











let BoardViewComponent = class BoardViewComponent {
    constructor(
    // private _boardService: BoardService,
    _kanbanService, _taskService, route, dialog) {
        this._kanbanService = _kanbanService;
        this._taskService = _taskService;
        this.route = route;
        this.dialog = dialog;
        this.lists = [];
    }
    ngOnInit() {
        this.getKanban();
    }
    deleteTask(id) {
        console.log(id);
        this.confirm()
            .afterClosed()
            .subscribe((result) => {
            if (result) {
                this._taskService.delete(id).subscribe(() => {
                    let index = this.kanban.tasks.findIndex((e) => e.id === id);
                    this.kanban.tasks.splice(index, 1);
                    this.splitTasksByStatus();
                });
            }
        });
    }
    confirm() {
        return this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmationDialogComponent"], {
            width: '350px',
            data: 'Do you want to delete this item?'
        });
    }
    dropListConnectedTo() {
        return this.kanban.lists.map((e) => e.title);
    }
    openDialogForNewTask() {
        this.openDialog('Create New Task', new src_app_model_task__WEBPACK_IMPORTED_MODULE_5__["Task"]());
    }
    openDialogForEditTask(task) {
        this.openDialog('Update Task', task);
    }
    openDialog(title, task) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            title: title,
            boardId: this.route.snapshot.paramMap.get('id'),
            column: this.kanban.lists[0].title,
            task: task
        };
        this.dialog
            .open(_task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_10__["TaskDialogComponent"], dialogConfig)
            .afterClosed()
            .subscribe((result) => {
            if (result) {
                let res = this.kanban.tasks.find((e) => e.id === result.id);
                if (!res) {
                    this.kanban.tasks.push(result);
                }
                else {
                    let index = this.kanban.tasks.findIndex((e) => e.id === result.id);
                    this.kanban.tasks[index] = result;
                }
                this.splitTasksByStatus();
            }
        });
    }
    openDialogForEditList(list) {
        event.cancelBubble = true;
        if (event.stopPropagation)
            event.stopPropagation();
        this.openDialogForList('Update Kanban');
    }
    openDialogForNewList() {
        this.openDialogForList('Create new Kanban');
    }
    openDialogForList(title) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            title: title,
            boardId: this.route.snapshot.paramMap.get('id')
        };
        this.dialog
            .open(_kanban_dialog_kanban_dialog_component__WEBPACK_IMPORTED_MODULE_9__["KanbanDialogComponent"], dialogConfig)
            .afterClosed()
            .subscribe((result) => {
            if (result) {
                this.kanban.lists.push(result);
            }
            else {
                this.getKanban();
            }
        });
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            this.updateTaskStatusAfterDragDrop(event);
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    updateTaskStatusAfterDragDrop(event) {
        let taskId = event.item.element.nativeElement.id;
        let containerId = event.container.id;
        let task = this.kanban.tasks.find((t) => t.id === taskId);
        if (task)
            this.updateTaskStatus(task, containerId);
    }
    getKanban() {
        const id = this.route.snapshot.paramMap.get('id');
        this._kanbanService.getById(id).subscribe((response) => {
            this.kanban = response;
            this.splitTasksByStatus();
        });
    }
    updateTaskStatus(task, containerId) {
        task.status = containerId;
        this._taskService.update(task).subscribe();
    }
    splitTasksByStatus() {
        this.kanban.lists.forEach((l) => {
            this.lists[l.title] = this.kanban.tasks.filter((t) => t.status === l.title);
        });
        console.log('lists', this.lists);
    }
};
BoardViewComponent.ctorParameters = () => [
    { type: src_app_service_board_service__WEBPACK_IMPORTED_MODULE_6__["BoardService"] },
    { type: src_app_service_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
BoardViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-board-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/board-view/board-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board-view.component.scss */ "./src/app/component/board-view/board-view.component.scss")).default]
    })
], BoardViewComponent);



/***/ }),

/***/ "./src/app/component/board/board.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/board/board.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 1rem;\n}\n.list a {\n  text-decoration: none;\n}\n.mat-card {\n  -webkit-transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 3em;\n  border-radius: 4px;\n  cursor: pointer;\n  overflow: hidden;\n}\n.mat-card:hover .mat-card-header .mat-card-actions {\n  opacity: 1;\n}\n.mat-card .mat-card-footer {\n  font-size: 9px;\n}\n.mat-card-actions {\n  -webkit-transition: opacity 0.4s ease-in-out;\n  transition: opacity 0.4s ease-in-out;\n  opacity: 0;\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  cursor: pointer;\n  margin: 0;\n  padding: 4px;\n}\n.mat-card-actions .mat-icon {\n  margin: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hanN0b3Ivd29ya3NwYWNlL2thbmJhbi1ib2FyZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnQvYm9hcmQvYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDSSxxQkFBQTtBQ0NSO0FER0E7RUFDSSxpRUFBQTtFQUFBLHlEQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDREo7QURHSTtFQUNJLFVBQUE7QUNEUjtBRElJO0VBQ0ksY0FBQTtBQ0ZSO0FES0E7RUFDSSw0Q0FBQTtFQUFBLG9DQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNISjtBREtJO0VBQ0ksV0FBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICAmIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxufVxuXG4ubWF0LWNhcmQge1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAzZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjpob3ZlciAubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAmIC5tYXQtY2FyZC1mb290ZXIge1xuICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICB9XG59XG4ubWF0LWNhcmQtYWN0aW9ucyB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDRweDtcblxuICAgICYgLm1hdC1pY29uIHtcbiAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgfVxufVxuIiwiLmxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLmxpc3QgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1hdC1jYXJkIHtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAzZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1hdC1jYXJkOmhvdmVyIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLWFjdGlvbnMge1xuICBvcGFjaXR5OiAxO1xufVxuLm1hdC1jYXJkIC5tYXQtY2FyZC1mb290ZXIge1xuICBmb250LXNpemU6IDlweDtcbn1cblxuLm1hdC1jYXJkLWFjdGlvbnMge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA0cHg7XG59XG4ubWF0LWNhcmQtYWN0aW9ucyAubWF0LWljb24ge1xuICBtYXJnaW46IDJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/board/board.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/board/board.component.ts ***!
  \****************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BoardComponent = class BoardComponent {
    constructor() {
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    remove() {
        this.delete.emit(this.item.id);
    }
    openDialogForEdit() {
        this.edit.emit(this.item);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoardComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BoardComponent.prototype, "delete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BoardComponent.prototype, "edit", void 0);
BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/board/board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board.component.scss */ "./src/app/component/board/board.component.scss")).default]
    })
], BoardComponent);



/***/ }),

/***/ "./src/app/component/confirmation-dialog/confirmation-dialog.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/component/confirmation-dialog/confirmation-dialog.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hanN0b3Ivd29ya3NwYWNlL2thbmJhbi1ib2FyZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnQvY29uZmlybWF0aW9uLWRpYWxvZy9jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvY29uZmlybWF0aW9uLWRpYWxvZy9jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7VUFBQSw4QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2NvbmZpcm1hdGlvbi1kaWFsb2cvY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59IiwiLndyYXAge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/component/confirmation-dialog/confirmation-dialog.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/confirmation-dialog/confirmation-dialog.component.ts ***!
  \********************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let ConfirmationDialogComponent = class ConfirmationDialogComponent {
    constructor(_dialogRef, data) {
        this._dialogRef = _dialogRef;
        this.data = data;
        this._dialogRef.disableClose = true;
    }
    onNoClick() {
        this._dialogRef.close();
    }
    ngOnInit() { }
};
ConfirmationDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ConfirmationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirmation-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirmation-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/confirmation-dialog/confirmation-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirmation-dialog.component.scss */ "./src/app/component/confirmation-dialog/confirmation-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ConfirmationDialogComponent);



/***/ }),

/***/ "./src/app/component/kanban-dialog/kanban-dialog.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/component/kanban-dialog/kanban-dialog.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9rYW5iYW4tZGlhbG9nL2thbmJhbi1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/kanban-dialog/kanban-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/kanban-dialog/kanban-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: KanbanDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KanbanDialogComponent", function() { return KanbanDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_service_board_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/board.service */ "./src/app/service/board.service.ts");





let KanbanDialogComponent = class KanbanDialogComponent {
    constructor(fb, dialogRef, data, _service) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this._service = _service;
        this.dialogTitle = data.title;
        this.boardId = data.boardId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    close(kanban) {
        this.dialogRef.close(kanban);
    }
    save() {
        if (this.form.valid) {
            this._service.saveNewList(this.boardId, this.form.value).subscribe((result) => {
                this.close(result);
            });
        }
    }
};
KanbanDialogComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_service_board_service__WEBPACK_IMPORTED_MODULE_4__["BoardService"] }
];
KanbanDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kanban-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kanban-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/kanban-dialog/kanban-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kanban-dialog.component.scss */ "./src/app/component/kanban-dialog/kanban-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], KanbanDialogComponent);



/***/ }),

/***/ "./src/app/component/main/main.component.scss":
/*!****************************************************!*\
  !*** ./src/app/component/main/main.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  text-align: center;\n}\n.container .list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 1rem;\n}\n.container .list a {\n  text-decoration: none;\n}\n.container .mat-list-item {\n  margin: 1rem;\n  width: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hanN0b3Ivd29ya3NwYWNlL2thbmJhbi1ib2FyZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnQvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBRENJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxhQUFBO0FDQ1I7QURDUTtFQUNJLHFCQUFBO0FDQ1o7QURHSTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5saXN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcblxuICAgICAgICAmIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiAubWF0LWxpc3QtaXRlbSB7XG4gICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAubGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uY29udGFpbmVyIC5saXN0IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY29udGFpbmVyIC5tYXQtbGlzdC1pdGVtIHtcbiAgbWFyZ2luOiAxcmVtO1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/main/main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/main/main.component.ts ***!
  \**************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_model_board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/board */ "./src/app/model/board.ts");
/* harmony import */ var src_app_service_board_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/board.service */ "./src/app/service/board.service.ts");
/* harmony import */ var _board_dialog_board_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../board-dialog/board-dialog.component */ "./src/app/component/board-dialog/board-dialog.component.ts");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ "./src/app/component/confirmation-dialog/confirmation-dialog.component.ts");







let MainComponent = class MainComponent {
    constructor(_service, dialog) {
        this._service = _service;
        this.dialog = dialog;
        this.boards = [];
    }
    ngOnInit() {
        this.getData();
    }
    confirm() {
        return this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"], {
            width: '350px',
            data: 'Do you want to delete this item?'
        });
    }
    delete(id) {
        console.log(id);
        event.cancelBubble = true;
        if (event.stopPropagation)
            event.stopPropagation();
        this.confirm()
            .afterClosed()
            .subscribe((result) => {
            if (result) {
                this._service.delete(id).subscribe(() => this.getData());
            }
        });
    }
    openDialogForEdit(kanban) {
        event.cancelBubble = true;
        if (event.stopPropagation)
            event.stopPropagation();
        this.openDialog('Update Board', kanban);
    }
    openDialogForNew() {
        this.openDialog('Create new Board', new src_app_model_board__WEBPACK_IMPORTED_MODULE_3__["Board"]());
    }
    openDialog(title, kanban) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            title: title,
            kanban: kanban
        };
        this.dialog
            .open(_board_dialog_board_dialog_component__WEBPACK_IMPORTED_MODULE_5__["BoardDialogComponent"], dialogConfig)
            .afterClosed()
            .subscribe((result) => {
            if (result) {
                let res = this.boards.find((e) => e.id === result.id);
                if (!res) {
                    this.boards.push(result);
                }
                else {
                    let index = this.boards.findIndex((e) => e.id === result.id);
                    this.boards[index] = result;
                }
            }
            else {
                this.getData();
            }
        });
    }
    getData() {
        this._service.getAll().subscribe((res) => {
            this.boards = res;
        });
    }
};
MainComponent.ctorParameters = () => [
    { type: src_app_service_board_service__WEBPACK_IMPORTED_MODULE_4__["BoardService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/component/main/main.component.scss")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/component/task-dialog/task-dialog.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/component/task-dialog/task-dialog.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC90YXNrLWRpYWxvZy90YXNrLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/task-dialog/task-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/task-dialog/task-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: TaskDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDialogComponent", function() { return TaskDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_service_board_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/board.service */ "./src/app/service/board.service.ts");
/* harmony import */ var src_app_service_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/task.service */ "./src/app/service/task.service.ts");
/* harmony import */ var _service_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/form.service */ "./src/app/service/form.service.ts");







let TaskDialogComponent = class TaskDialogComponent {
    constructor(fb, dialogRef, data, _kanbanService, _taskService, _formService) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this._kanbanService = _kanbanService;
        this._taskService = _taskService;
        this._formService = _formService;
        this.kanbanTitle = data.title;
        this.column = data.column;
        this.kanbanId = data.boardId;
        this.task = data.task;
    }
    ngOnInit() {
        this.form = this.fb.group({
            title: [this.task.title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [this.task.description, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            color: [this.task.color || '#ffffff', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [this.task.status],
            timestamp: [this.task.timestamp]
        }, { updateOn: 'blur' });
    }
    close(task) {
        this.dialogRef.close(task);
    }
    save() {
        this._formService.markFormGroupTouched(this.form);
        if (this.form.valid) {
            if (!this.task.id) {
                this.form.value.status = this.column;
                this._kanbanService.saveNewTaskInKanban(this.kanbanId, this.form.value).subscribe((response) => {
                    this.close(response);
                });
            }
            else {
                this.form.value.id = this.task.id;
                this._taskService.update(this.form.value).subscribe((response) => {
                    this.close(this.form.value);
                });
            }
        }
    }
};
TaskDialogComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_service_board_service__WEBPACK_IMPORTED_MODULE_4__["BoardService"] },
    { type: src_app_service_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] },
    { type: _service_form_service__WEBPACK_IMPORTED_MODULE_6__["FormService"] }
];
TaskDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/task-dialog/task-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-dialog.component.scss */ "./src/app/component/task-dialog/task-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], TaskDialogComponent);



/***/ }),

/***/ "./src/app/component/task/task.component.scss":
/*!****************************************************!*\
  !*** ./src/app/component/task/task.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-card {\n  padding: 0;\n  box-sizing: border-box;\n  cursor: move;\n}\n.mat-card:hover .mat-card-actions {\n  opacity: 1;\n}\n.mat-card .mat-card-header {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  height: 2em;\n}\n.mat-card .mat-card-actions {\n  -webkit-transition: opacity 0.4s ease-in-out;\n  transition: opacity 0.4s ease-in-out;\n  opacity: 0;\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  cursor: pointer;\n  margin: 0;\n  padding: 0 4px;\n}\n.mat-card .mat-card-actions .mat-icon {\n  margin: 2px;\n}\n.mat-card .mat-card-footer {\n  font-size: 10px;\n  margin: 0;\n}\n.mat-card .mat-card-footer span {\n  padding: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hanN0b3Ivd29ya3NwYWNlL2thbmJhbi1ib2FyZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnQvdGFzay90YXNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvdGFzay90YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksVUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUk7RUFDSSxVQUFBO0FDQVI7QURHSTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDRFI7QURJSTtFQUNJLDRDQUFBO0VBQUEsb0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ0ZSO0FESVE7RUFDSSxXQUFBO0FDRlo7QURTSTtFQUdJLGVBQUE7RUFDQSxTQUFBO0FDVFI7QURXUTtFQUVJLFlBQUE7QUNWWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC90YXNrL3Rhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xuICAgIC8vIG1hcmdpbjogM3B4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjdXJzb3I6IG1vdmU7XG5cbiAgICAmOmhvdmVyIC5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAmIC5tYXQtY2FyZC1oZWFkZXIge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICAgIGhlaWdodDogMmVtO1xuICAgIH1cblxuICAgICYgLm1hdC1jYXJkLWFjdGlvbnMge1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDRweDtcblxuICAgICAgICAmIC5tYXQtaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIH1cblxuICAgICYgLm1hdC1jYXJkLWZvb3RlciB7XG4gICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICYgc3BhbiB7XG4gICAgICAgICAgICAvLyBtYXJnaW46IDRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgICAgICAgICAgLy8gcmlnaHQ6IDA7XG4gICAgICAgICAgICAvLyBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIubWF0LWNhcmQge1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IG1vdmU7XG59XG4ubWF0LWNhcmQ6aG92ZXIgLm1hdC1jYXJkLWFjdGlvbnMge1xuICBvcGFjaXR5OiAxO1xufVxuLm1hdC1jYXJkIC5tYXQtY2FyZC1oZWFkZXIge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMmVtO1xufVxuLm1hdC1jYXJkIC5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCA0cHg7XG59XG4ubWF0LWNhcmQgLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1pY29uIHtcbiAgbWFyZ2luOiAycHg7XG59XG4ubWF0LWNhcmQgLm1hdC1jYXJkLWZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luOiAwO1xufVxuLm1hdC1jYXJkIC5tYXQtY2FyZC1mb290ZXIgc3BhbiB7XG4gIHBhZGRpbmc6IDRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/task/task.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/task/task.component.ts ***!
  \**************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TaskComponent = class TaskComponent {
    constructor() {
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    remove() {
        this.delete.emit(this.task.id);
    }
    openDialogForEdit() {
        this.edit.emit(this.task);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TaskComponent.prototype, "task", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TaskComponent.prototype, "delete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TaskComponent.prototype, "edit", void 0);
TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/task/task.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task.component.scss */ "./src/app/component/task/task.component.scss")).default]
    })
], TaskComponent);



/***/ }),

/***/ "./src/app/model/board.ts":
/*!********************************!*\
  !*** ./src/app/model/board.ts ***!
  \********************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Board {
}


/***/ }),

/***/ "./src/app/model/task.ts":
/*!*******************************!*\
  !*** ./src/app/model/task.ts ***!
  \*******************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Task {
}


/***/ }),

/***/ "./src/app/service/board.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/board.service.ts ***!
  \******************************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let BoardService = class BoardService {
    constructor(_http) {
        this._http = _http;
        this.path = '/api/kanbans';
    }
    getAll() {
        return this._http.get(this.path);
    }
    getById(id) {
        return this._http.get(this.path + '/' + id);
        // .map((result: Response) => result.json())
        // .catch(this.getError)
    }
    delete(id) {
        return this._http.delete(this.path + '/' + id);
    }
    create(title) {
        return this._http.post(this.path, { title });
    }
    update(pbe) {
        return this._http.put(this.path + '/' + pbe.id, pbe);
    }
    saveNewTaskInKanban(kanbanId, task) {
        return this._http.post(this.path + '/' + kanbanId, task);
    }
    saveNewList(boardId, value) {
        return this._http.post(this.path + '/' + boardId + '/lists', value);
    }
};
BoardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BoardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], BoardService);



/***/ }),

/***/ "./src/app/service/form.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/form.service.ts ***!
  \*****************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormService = class FormService {
    constructor() { }
    markFormGroupTouched(formGroup) {
        Object.values(formGroup.controls).forEach((control) => {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach((c) => this.markFormGroupTouched(c));
            }
        });
    }
};
FormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FormService);



/***/ }),

/***/ "./src/app/service/task.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/task.service.ts ***!
  \*****************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TaskService = class TaskService {
    constructor(_http) {
        this._http = _http;
        this.path = '/api/tasks';
    }
    getAll() {
        return this._http.get(this.path);
    }
    getById(id) {
        return this._http.get(this.path + '/' + id);
    }
    delete(id) {
        return this._http.delete(this.path + '/' + id);
    }
    create(pbe) {
        return this._http.post(this.path, pbe);
    }
    update(pbe) {
        return this._http.put(this.path + '/' + pbe.id, pbe);
    }
};
TaskService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TaskService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch((err) => console.error(err));


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