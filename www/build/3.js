webpackJsonp([3],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewitemPageModule", function() { return NewitemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newitem__ = __webpack_require__(284);
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

/***/ 284:
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
    function NewitemPage(navCtrl, navParams, data, invent, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.invent = invent;
        this.app = app;
        this.operation = navParams.get('operation');
        //alert(navParams.get('category'));
        if (this.operation == 'create') {
            this.category = navParams.get('category');
            this.item = new __WEBPACK_IMPORTED_MODULE_3__providers_invent_invent__["b" /* InventoryItem */](0, '', '', 0);
            this.item.category = this.category.id;
            this.titleText = 'Create new item';
            this.actionButtonText = 'Create';
        }
        else if (this.operation == 'edit') {
            this.item = navParams.get('item');
            this.category = navParams.get('category');
            this.titleText = 'Edit item';
            this.actionButtonText = 'Save';
            this.weight = this.item.weight.toString();
        }
    }
    NewitemPage.prototype.actionButtonClicked = function () {
        if (this.operation == 'create') {
            //this.invent.createItem( this.item.name, this.item.description, this.category.id);
            this.item.weight = parseInt(this.weight);
            this.invent.createItemByItem(this.item);
            this.category.show = true;
        }
        else if (this.operation == 'edit') {
            this.item.weight = parseInt(this.weight);
            this.invent.saveItems();
        }
        // ADJUST CATEGORY !!!
        this.app.getRootNav().pop();
    };
    NewitemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newitem',template:/*ion-inline-start:"C:\Users\anton\Documents\Dev\HikAlfa1\src\pages\newitem\newitem.html"*/'<!--\n\n  Generated template for the NewitemPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>{{this.titleText}}</ion-title>\n\n        <ion-buttons end>\n\n            <a style="font-size:12pt" (click)="actionButtonClicked()">{{this.actionButtonText}}</a>\n\n		</ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-item-divider><h1>In the category : {{this.category.name}}</h1></ion-item-divider>\n\n    \n\n    <ion-item>\n\n		<ion-label color="primary" stacked>Name</ion-label>\n\n		<ion-input type="text" [(ngModel)]="this.item.name"></ion-input>\n\n	</ion-item>\n\n    <!--<ion-item>\n\n		<ion-label color="primary" stacked>Type</ion-label>\n\n		<ion-input type="text" [(ngModel)]="this.item.type"></ion-input>\n\n	</ion-item>-->\n\n    <ion-item>\n\n		<ion-label color="primary" stacked>Description</ion-label>\n\n		<ion-input type="text" [(ngModel)]="this.item.description"></ion-input>\n\n	</ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary" stacked>Weight (gr)</ion-label>\n\n        <ion-input type="number" [(ngModel)]="this.weight"></ion-input>\n\n    </ion-item>\n\n    \n\n    <!--<button ion-button outline (click)="actionButtonClicked()">{{this.actionButtonText}}</button>-->\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\anton\Documents\Dev\HikAlfa1\src\pages\newitem\newitem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_invent_invent__["a" /* InventProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], NewitemPage);
    return NewitemPage;
}());

//# sourceMappingURL=newitem.js.map

/***/ })

});
//# sourceMappingURL=3.js.map