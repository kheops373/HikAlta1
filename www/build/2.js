webpackJsonp([2],{

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewmenuPageModule", function() { return NewmenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newmenu__ = __webpack_require__(496);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewmenuPageModule = /** @class */ (function () {
    function NewmenuPageModule() {
    }
    NewmenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__newmenu__["a" /* NewmenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newmenu__["a" /* NewmenuPage */]),
            ],
        })
    ], NewmenuPageModule);
    return NewmenuPageModule;
}());

//# sourceMappingURL=newmenu.module.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewmenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_invent_invent__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(281);
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
 * Generated class for the NewmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewmenuPage = /** @class */ (function () {
    function NewmenuPage(navCtrl, navParams, invent, alertCtrl, modalCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.invent = invent;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
    }
    NewmenuPage.prototype.selectInventory = function () {
        var selectInv = this.modalCtrl.create('SelectinventPage');
        selectInv.present();
    };
    NewmenuPage.prototype.eraseStorage = function () {
        var _this = this;
        var al = this.alertCtrl.create({
            title: 'Erase all stored data',
            message: 'Are you sure you want to erase all stored data and to restore the default settings? This cannot be undone!',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Erase all',
                    handler: function () {
                        _this.invent.eraseAllStorage();
                        alert("Storage erased");
                    }
                }
            ]
        });
        al.present();
    };
    NewmenuPage.prototype.logout = function () {
        this.auth.signOut();
        this.navCtrl.setRoot('LoginPage');
    };
    NewmenuPage.prototype.ionViewWillLeave = function () {
        this.invent.saveSettings();
    };
    NewmenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newmenu',template:/*ion-inline-start:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\pages\newmenu\newmenu.html"*/'<!--\n\n  Generated template for the NewmenuPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Menu</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	\n\n	<ion-list>\n\n		<ion-item>\n\n			<ion-label>Signed in with  <span style="font-weight: bold">{{this.auth.getEmail()}}</span></ion-label>\n\n			\n\n		</ion-item>\n\n		<ion-item *ngIf="this.auth.authenticated()">\n\n			<button ion-button block (click)="logout()" outline>Logout</button>\n\n		</ion-item>\n\n	</ion-list>\n\n    \n\n	<ion-list>\n\n		<ion-list-header>Inventory</ion-list-header>\n\n		<button ion-item (click)="selectInventory()">Select Inventory</button>\n\n		<ion-item>\n\n			<ion-label>Use weights</ion-label>\n\n			<ion-toggle [(ngModel)]="this.invent.getSelectedInventorySettings().useWeights"></ion-toggle>\n\n		</ion-item>\n\n	</ion-list>\n\n	\n\n	\n\n	<ion-list>\n\n        <ion-list-header>Storage</ion-list-header>\n\n        <button ion-item detail-none (click)="eraseStorage()">Erase storage</button>\n\n    </ion-list>\n\n	\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\pages\newmenu\newmenu.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_invent_invent__["b" /* InventProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_invent_invent__["b" /* InventProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthService */]) === "function" && _f || Object])
    ], NewmenuPage);
    return NewmenuPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=newmenu.js.map

/***/ })

});
//# sourceMappingURL=2.js.map