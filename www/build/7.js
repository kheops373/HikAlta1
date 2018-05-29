webpackJsonp([7],{

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistPageModule", function() { return ChecklistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checklist__ = __webpack_require__(490);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChecklistPageModule = /** @class */ (function () {
    function ChecklistPageModule() {
    }
    ChecklistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checklist__["a" /* ChecklistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checklist__["a" /* ChecklistPage */]),
            ],
        })
    ], ChecklistPageModule);
    return ChecklistPageModule;
}());

//# sourceMappingURL=checklist.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_invent_invent__ = __webpack_require__(279);
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
 * Generated class for the ChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChecklistPage = /** @class */ (function () {
    function ChecklistPage(navCtrl, navParams, invent) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.invent = invent;
    }
    ChecklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checklist',template:/*ion-inline-start:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\pages\checklist\checklist.html"*/'<!--\n  Generated template for the ChecklistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Checklist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	\n	<ng-container *ngIf="this.invent.getSelectedBackpack() as backpack">\n\n		<ion-list *ngFor="let cat of this.invent.getCategories()">\n		\n\n				<ion-list-header style="font-weight: bold; font-size: 11pt; ">\n					<ion-icon item-start small [name]="cat.show ? \'arrow-dropdown\' : \'arrow-dropright\'" (click)="cat.show = cat.show ? false : true"></ion-icon>\n					{{cat.name}} ({{this.invent.countBackpackItemsByCategory(backpack, cat)}}/{{this.invent.countItemsByCategory(cat)}})\n				</ion-list-header>\n\n\n				<ng-container *ngIf="cat.show">\n					<ng-container *ngFor="let item of this.invent.getItemsByCategoryFromSelectedBackpack(cat)">\n\n							<ion-item>\n								<ion-label color="green" >{{item.name}}</ion-label>\n								<ion-checkbox></ion-checkbox>\n							</ion-item>\n\n					</ng-container>\n				</ng-container>\n\n\n		</ion-list>\n		\n	</ng-container>\n	\n	<ng-container *ngIf=" !this.invent.boolInventoryHasBackpacks()">\n		<h1>No backpacks created</h1>\n	</ng-container>\n	\n	\n</ion-content>\n'/*ion-inline-end:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\pages\checklist\checklist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_invent_invent__["b" /* InventProvider */]])
    ], ChecklistPage);
    return ChecklistPage;
}());

//# sourceMappingURL=checklist.js.map

/***/ })

});
//# sourceMappingURL=7.js.map