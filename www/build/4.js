webpackJsonp([4],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewbackpackPageModule", function() { return NewbackpackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newbackpack__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewbackpackPageModule = /** @class */ (function () {
    function NewbackpackPageModule() {
    }
    NewbackpackPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__newbackpack__["a" /* NewbackpackPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newbackpack__["a" /* NewbackpackPage */]),
            ],
        })
    ], NewbackpackPageModule);
    return NewbackpackPageModule;
}());

//# sourceMappingURL=newbackpack.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Pram */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewbackpackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_invent_invent__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NewbackpackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Pram = /** @class */ (function () {
    function Pram() {
    }
    return Pram;
}());

var NewbackpackPage = /** @class */ (function () {
    function NewbackpackPage(app, navCtrl, navParams, invent) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.invent = invent;
        this.text = { 'title': 'Select backpack', 'button': 'Create', 'showlist': true, 'action': 'create' };
        this.backpack = new __WEBPACK_IMPORTED_MODULE_2__providers_invent_invent__["a" /* BackPack */]();
        this.storedBackpack = navParams.get('backpack');
        if (this.storedBackpack != null) {
            /////////////////////////////////////////////////////////////// REPLACE BY CLONE FUNCTION
            this.backpack.name = this.storedBackpack.name;
            this.backpack.note = this.storedBackpack.note;
            this.text.title = 'Edit backpack';
            this.text.button = 'Save changes';
            this.text.showlist = false;
            this.text.action = 'save';
        }
    }
    NewbackpackPage.prototype.createSaveBackpackClicked = function () {
        if (this.text.action == 'create') {
            this.invent.createBackpack(this.backpack);
            this.app.getRootNav().pop();
        }
        else if (this.text.action == 'save') {
            this.storedBackpack.name = this.backpack.name;
            this.storedBackpack.note = this.backpack.note;
            this.invent.saveBackpack(this.storedBackpack);
            this.app.getRootNav().pop();
        }
    };
    NewbackpackPage.prototype.backpackSelected = function (backpack) {
        if (backpack.id == this.invent.settings.selectedBackpack)
            return 'primary';
        else
            return '';
    };
    NewbackpackPage.prototype.selectBackpack = function (backpack) {
        this.invent.selectBackpack(backpack);
        this.app.getRootNav().pop();
    };
    NewbackpackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newbackpack',template:/*ion-inline-start:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\pages\newbackpack\newbackpack.html"*/'<!--\n  Generated template for the NewbackpackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{this.text.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ng-container *ngIf="this.invent.boolInventoryHasBackpacks() && this.text.showlist">\n		\n		<ion-card *ngFor="let backpack of this.invent.getBackpacksFromInventory()" (click)="selectBackpack(backpack)">\n			<ion-item [color]="backpackSelected(backpack)">{{backpack.name}} - {{this.invent.countBackpackItems(backpack)}} items - {{this.invent.totalBackpackWeight(backpack)}} gr</ion-item>\n		</ion-card>\n		\n	</ng-container>\n	\n	<br />\n	<ion-item-divider *ngIf="this.text.showlist">Create new backpack</ion-item-divider>\n	<ion-item>\n		<ion-label color="primary" stacked>Name</ion-label>\n		<ion-input type="text" [(ngModel)]="this.backpack.name"></ion-input>\n	</ion-item>\n    <ion-item>\n		<ion-label color="primary" stacked>Note</ion-label>\n		<ion-input type="text" [(ngModel)]="this.backpack.note"></ion-input>\n	</ion-item>\n	\n	<button ion-button outline block (click)="createSaveBackpackClicked()">{{this.text.button}}</button>\n	\n</ion-content>\n'/*ion-inline-end:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\pages\newbackpack\newbackpack.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_invent_invent__["b" /* InventProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_invent_invent__["b" /* InventProvider */]) === "function" && _d || Object])
    ], NewbackpackPage);
    return NewbackpackPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=newbackpack.js.map

/***/ })

});
//# sourceMappingURL=4.js.map