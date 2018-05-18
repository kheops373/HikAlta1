webpackJsonp([6],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryPageModule", function() { return InventoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inventory__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InventoryPageModule = /** @class */ (function () {
    function InventoryPageModule() {
    }
    InventoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inventory__["a" /* InventoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inventory__["a" /* InventoryPage */]),
            ],
        })
    ], InventoryPageModule);
    return InventoryPageModule;
}());

//# sourceMappingURL=inventory.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(196);
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
 * Generated class for the InventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InventoryPage = /** @class */ (function () {
    function InventoryPage(navCtrl, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.items = [];
        this.dataService.getData().then(function (storedItems) {
            if (storedItems) {
                _this.items = storedItems;
            }
        });
    }
    InventoryPage.prototype.addButtonClicked = function (event) {
        if (this.newItem.length > 2) {
            this.items.push(this.newItem);
            this.dataService.save(this.items);
            this.newItem = '';
        }
        else
            alert('Not long enough');
    };
    InventoryPage.prototype.itemTapped = function (event, item) {
        this.items.pop();
        this.dataService.save(this.items);
    };
    InventoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inventory',template:/*ion-inline-start:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\pages\inventory\inventory.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>My Inventory</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-item>\n		<ion-label color="primary" stacked>First line label</ion-label>\n		<ion-input type="text" [(ngModel)]="newItem"></ion-input>\n	</ion-item>\n	<button ion-button round outline (click)="addButtonClicked($event)">Add item\n	<ion-icon name="add"></ion-icon></button>\n	\n	<ion-list>\n		<ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n			<h2>{{item}}</h2>\n		</ion-item>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\pages\inventory\inventory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], InventoryPage);
    return InventoryPage;
}());

//# sourceMappingURL=inventory.js.map

/***/ })

});
//# sourceMappingURL=6.js.map