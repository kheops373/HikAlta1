webpackJsonp([6],{

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryPageModule", function() { return InventoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inventory__ = __webpack_require__(492);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inventory__["a" /* InventoryPage */]),
            ],
        })
    ], InventoryPageModule);
    return InventoryPageModule;
}());

//# sourceMappingURL=inventory.module.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_invent_invent__ = __webpack_require__(280);
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
    function InventoryPage(app, navCtrl, modalCtrl, viewCtrl, invent, alertCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.invent = invent;
        this.alertCtrl = alertCtrl;
    }
    InventoryPage.prototype.newItemToCategory = function (category) {
        this.app.getRootNav().push('NewitemPage', { 'operation': 'create', 'category': category });
    };
    InventoryPage.prototype.itemTapped = function (item, category) {
        this.app.getRootNav().push('NewitemPage', { 'operation': 'edit', 'item': item, 'category': category });
    };
    InventoryPage.prototype.removeItem = function (event, item) {
        var _this = this;
        if (this.invent.boolItemIsInAnyBackpack(item)) {
            alert("Item is part of a backpack and cannot be removed!");
        }
        else {
            var al = this.alertCtrl.create({
                title: 'Remove item',
                message: 'Are you sure you want to remove the item ' + item.name + '?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Confirm',
                        handler: function () {
                            _this.invent.removeItemById(item.id);
                        }
                    }
                ]
            });
            al.present();
        }
    };
    InventoryPage.prototype.selectInventory = function () {
        var selectInv = this.modalCtrl.create('SelectinventPage', { currentInvent: "curr" });
        selectInv.present();
    };
    InventoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inventory',template:/*ion-inline-start:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\pages\inventory\inventory.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Inventory</ion-title>\n\n    <ion-buttons end>\n\n\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	\n\n    <ion-item-divider><h1>{{this.invent.settings.selectedInventory}}</h1><ion-icon name="list" item-end  (click)="selectInventory()"></ion-icon></ion-item-divider>\n\n    \n\n    <ion-list *ngFor="let cat of this.invent.getCategories()">\n\n	\n\n        <ion-list-header style="font-weight: bold; font-size: 12pt; ">\n\n            <ion-icon item-start small [name]="cat.show ? \'arrow-dropdown\' : \'arrow-dropright\'" (click)="cat.show = cat.show ? false : true"></ion-icon>\n\n            {{cat.name}} ({{this.invent.countItemsByCategory(cat)}})\n\n            <button ion-button item-end small round outline (click)="newItemToCategory(cat)"><ion-icon name="add"></ion-icon></button>\n\n        </ion-list-header>\n\n        \n\n\n\n        <ng-container *ngIf="cat.show">\n\n            <ion-item *ngFor="let item of this.invent.getItems(cat); let i=index">\n\n                    <h2 style="color:green; font-weight:bold;" (click)="itemTapped(item, cat)">{{item.name}}</h2>\n\n                    <p>{{item.description}} - {{item.weight.toString()}} gr</p>\n\n                <!--<button ion-button round outline item-end (click)="removeItem($event, item)"><ion-icon name="backspace"></ion-icon></button>-->\n\n                <ion-icon item-end name="close" color="primary" (click)="removeItem($event, item)"></ion-icon>\n\n            </ion-item>\n\n        </ng-container>\n\n    </ion-list>\n\n	\n\n\n\n	\n\n	<!--<ion-fab bottom right>\n\n        <button ion-fab (click)="addButtonClicked($event)"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>-->\n\n</ion-content>'/*ion-inline-end:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\pages\inventory\inventory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_invent_invent__["b" /* InventProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InventoryPage);
    return InventoryPage;
}());

//# sourceMappingURL=inventory.js.map

/***/ })

});
//# sourceMappingURL=6.js.map