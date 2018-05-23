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
    function BackpackPage(app, navCtrl, navParams, invent) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.invent = invent;
    }
    BackpackPage.prototype.addRemoveItem = function (item, backpack, action) {
        if (action == 'add') {
            this.invent.addItemToBackpack(item, backpack);
        }
        else if (action == 'remove') {
            this.invent.removeItemFromBackpack(item, backpack);
        }
    };
    BackpackPage.prototype.ionViewWillEnter = function () {
        if (this.invent.boolInventoryHasBackpacks()) {
        }
        else
            this.app.getRootNav().push('NewbackpackPage');
    };
    BackpackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-backpack',template:/*ion-inline-start:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\pages\backpack\backpack.html"*/'<!--\n  Generated template for the BackpackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n	  <ion-title>Backpack</ion-title>\n	  <ion-buttons end>\n		  <button ion-button icon-only (click)="this.app.getRootNav().push(\'NewbackpackPage\', {\'backpack\':null})">\n			  <ion-icon name="list"></ion-icon>\n		  </button>\n	  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	\n	<ng-container  *ngIf="this.invent.boolInventoryHasBackpacks() && this.invent.getSelectedBackpack() as backpack">\n	\n		<ion-item-divider>\n			<h1>\n				{{backpack.name}} <span style="font-size: 13pt"> - {{backpack.totalWeight}} gr</span>\n			</h1>\n			<ion-icon name="create" item-end (click)="this.app.getRootNav().push(\'NewbackpackPage\', {\'backpack\':backpack})"></ion-icon>\n		</ion-item-divider>	\n\n		<ion-list *ngFor="let cat of this.invent.getCategories()">\n\n			<ion-list-header style="font-weight: bold; font-size: 12pt; ">\n				<ion-icon item-start small [name]="cat.show ? \'arrow-dropdown\' : \'arrow-dropright\'" (click)="cat.show = cat.show ? false : true"></ion-icon>\n				{{cat.name}} ({{this.invent.countBackpackItemsByCategory(backpack, cat)}}/{{this.invent.countItemsByCategory(cat)}}) - {{this.invent.calculateBackpackWeightByCateogry(backpack, cat)}} gr\n			</ion-list-header>\n\n\n			<ng-container *ngIf="cat.show">\n				<ng-container *ngFor="let item of this.invent.getItems(cat)" >\n					<ion-item *ngIf="this.invent.itemIsInBackpack(item, backpack) as param" [style.background-color]="param.background">\n							<h2 [style.color]="param.color" style="font-weight:bold;" (click)="itemTapped(item, cat)">{{item.name}}</h2>\n							<p>{{item.description}} - {{item.weight}} gr</p>\n						<ion-icon item-end  [name]="param.icon" color="primary" (click)="addRemoveItem(item, backpack, param.action)"></ion-icon>\n					</ion-item>\n				</ng-container>\n			</ng-container>\n\n\n		</ion-list>\n		\n	</ng-container>\n	\n	<ng-container *ngIf=" !this.invent.boolInventoryHasBackpacks()">\n		<h1>No backpacks created</h1>\n		<br />\n		<button ion-button block outline (click)="this.app.getRootNav().push(\'NewbackpackPage\')">Create first backpack</button>\n	</ng-container>\n	\n</ion-content>\n'/*ion-inline-end:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\pages\backpack\backpack.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_invent_invent__["b" /* InventProvider */]])
    ], BackpackPage);
    return BackpackPage;
}());

//# sourceMappingURL=backpack.js.map

/***/ })

});
//# sourceMappingURL=7.js.map