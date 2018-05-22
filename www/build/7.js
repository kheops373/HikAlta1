webpackJsonp([7],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackpackPageModule", function() { return BackpackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backpack__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BackpackPageModule = /** @class */ (function () {
    function BackpackPageModule() {
    }
    BackpackPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__backpack__["a" /* BackpackPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__backpack__["a" /* BackpackPage */]),
            ],
        })
    ], BackpackPageModule);
    return BackpackPageModule;
}());

//# sourceMappingURL=backpack.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackpackPage; });
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
 * Generated class for the BackpackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BackpackPage = /** @class */ (function () {
    function BackpackPage(navCtrl, navParams, invent) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.invent = invent;
    }
    BackpackPage.prototype.addRemoveItem = function (item, action) {
        if (action == 'add') {
            this.invent.addItemToBackpack(item);
        }
        else if (action == 'remove') {
            this.invent.removeItemFromBackpack(item);
        }
    };
    BackpackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-backpack',template:/*ion-inline-start:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\pages\backpack\backpack.html"*/'<!--\n  Generated template for the BackpackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>BackPack weight: {{this.invent.totalBackpackWeight()}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list *ngFor="let cat of this.invent.getCategories()">\n	\n        <ion-item-divider style="font-weight: bold; font-size: 13pt; ">{{cat.name}}\n        </ion-item-divider>\n        \n\n        <ng-container *ngFor="let item of this.invent.getItems(cat)" >\n			<ion-item *ngIf="this.invent.backpack.itemIsInBackpack(item) as param" [style.background-color]="param.background">\n					<h2 [style.color]="param.color" style="font-weight:bold;" (click)="itemTapped(item, cat)">{{item.name}}</h2>\n					<p>{{item.description}} - {{item.weight}}gr ({{item.id}})</p>\n				<ion-icon item-end small [name]="param.icon" color="primary" (click)="addRemoveItem(item, param.action)"></ion-icon>\n			</ion-item>\n        </ng-container>\n    </ion-list>\n	\n</ion-content>\n'/*ion-inline-end:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\pages\backpack\backpack.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_invent_invent__["a" /* InventProvider */]])
    ], BackpackPage);
    return BackpackPage;
}());

//# sourceMappingURL=backpack.js.map

/***/ })

});
//# sourceMappingURL=7.js.map