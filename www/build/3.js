webpackJsonp([3],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewitemPageModule", function() { return NewitemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newitem__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewitemPageModule = /** @class */ (function () {
    function NewitemPageModule() {
    }
    NewitemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__newitem__["a" /* NewitemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newitem__["a" /* NewitemPage */]),
            ],
        })
    ], NewitemPageModule);
    return NewitemPageModule;
}());

//# sourceMappingURL=newitem.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewitemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_invent_invent__ = __webpack_require__(194);
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
 * Generated class for the NewitemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewitemPage = /** @class */ (function () {
    function NewitemPage(navCtrl, navParams, data, invent, app, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.invent = invent;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.operation = navParams.get('operation');
        this.storedItem = navParams.get('item');
        this.item = new __WEBPACK_IMPORTED_MODULE_3__providers_invent_invent__["c" /* InventoryItem */]();
        if (this.operation == 'create') {
            this.category = navParams.get('category');
            this.item.category = this.category.id;
            this.titleText = 'Create new item';
            this.actionButtonText = 'Create';
        }
        else if (this.operation == 'edit') {
            this.invent.cloneItem(this.storedItem, this.item);
            this.category = navParams.get('category');
            this.titleText = 'Edit item';
            this.actionButtonText = 'Save';
            this.weight = this.item.weight.toString();
        }
    }
    NewitemPage.prototype.actionButtonClicked = function () {
        if (this.operation == 'create') {
            //this.invent.createItem( this.item.name, this.item.description, this.category.id);
            this.item.weight = (isNaN(parseInt(this.weight)) ? 0 : parseInt(this.weight));
            this.invent.createItemByItem(this.item);
            this.category.show = true;
        }
        else if (this.operation == 'edit') {
            this.invent.cloneItem(this.item, this.storedItem);
            this.storedItem.weight = (this.weight == '' ? 0 : parseInt(this.weight));
            this.invent.saveItems();
        }
        // ADJUST CATEGORY !!!
        this.app.getRootNav().pop();
    };
    NewitemPage.prototype.removeItem = function (item) {
        var _this = this;
        if (this.invent.boolItemIsInAnyBackpack(item)) {
            var toast = this.toastCtrl.create({
                message: 'Item is part of a backpack and cannot be removed!',
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
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
                            var toast = _this.toastCtrl.create({
                                message: 'Item deleted',
                                duration: 2500,
                                position: 'top'
                            });
                            toast.present();
                            _this.app.getRootNav().pop();
                        }
                    }
                ]
            });
            al.present();
        }
    };
    NewitemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newitem',template:/*ion-inline-start:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\pages\newitem\newitem.html"*/'<!--\n\n  Generated template for the NewitemPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>{{this.titleText}}</ion-title>\n\n        <ion-buttons end>\n\n            <a style="font-size:12pt" (click)="actionButtonClicked()">{{this.actionButtonText}}</a>\n\n		</ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-item-divider><h1>In the category : {{this.category.name}}</h1></ion-item-divider>\n\n    \n\n    <ion-item>\n\n		<ion-label color="primary" stacked>Name</ion-label>\n\n		<ion-input type="text" [(ngModel)]="this.item.name"></ion-input>\n\n	</ion-item>\n\n    <!--<ion-item>\n\n		<ion-label color="primary" stacked>Type</ion-label>\n\n		<ion-input type="text" [(ngModel)]="this.item.type"></ion-input>\n\n	</ion-item>-->\n\n    <ion-item>\n\n		<ion-label color="primary" stacked>Description</ion-label>\n\n		<ion-input type="text" [(ngModel)]="this.item.description"></ion-input>\n\n	</ion-item>\n\n    <ion-item *ngIf="this.invent.getSelectedInventorySettings().useWeights">\n\n        <ion-label color="primary" stacked>Weight (gr)</ion-label>\n\n        <ion-input type="number" [(ngModel)]="this.weight"></ion-input>\n\n    </ion-item>\n\n	\n\n	<ion-segment [(ngModel)]="this.item.weightType" color="primary" *ngIf="this.invent.getSelectedInventorySettings().useWeights">\n\n		<ion-segment-button value="worn">\n\n			Worn\n\n		</ion-segment-button>\n\n		<ion-segment-button value="base">\n\n			Base\n\n		</ion-segment-button>\n\n		<ion-segment-button value="consumable">\n\n			Consumable\n\n		</ion-segment-button>\n\n	</ion-segment>\n\n	\n\n	<ion-item>\n\n		<ion-label color="primary" stacked>Note</ion-label>\n\n		<ion-textarea [(ngModel)]="this.item.note"></ion-textarea>\n\n	</ion-item>\n\n	\n\n	<br />\n\n	<br />\n\n	\n\n    \n\n    <button ion-button block outline (click)="actionButtonClicked()">{{this.actionButtonText}}</button>\n\n	\n\n\n\n	<br />\n\n	<button ion-button *ngIf="this.operation == \'edit\'" block color="danger" (click)="removeItem(this.item)">Delete item</button>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\pages\newitem\newitem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_invent_invent__["b" /* InventProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], NewitemPage);
    return NewitemPage;
}());

//# sourceMappingURL=newitem.js.map

/***/ })

});
//# sourceMappingURL=3.js.map