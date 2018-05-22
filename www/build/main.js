webpackJsonp([7],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/backpack/backpack.module": [
		274,
		6
	],
	"../pages/inventory/inventory.module": [
		275,
		5
	],
	"../pages/login/login.module": [
		276,
		4
	],
	"../pages/newitem/newitem.module": [
		277,
		3
	],
	"../pages/newmenu/newmenu.module": [
		278,
		2
	],
	"../pages/selectinvent/selectinvent.module": [
		279,
		1
	],
	"../pages/tabs/tabs.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Category */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InventoryItem; });
/* unused harmony export BackPack */
/* unused harmony export Settings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the InventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var Category = /** @class */ (function () {
    function Category(name, description) {
        this.name = name;
        this.description = description;
    }
    return Category;
}());

var InventoryItem = /** @class */ (function () {
    function InventoryItem(id, name, inventory, category) {
        this.id = id;
        this.name = name;
        this.inventory = inventory;
        this.category = category;
    }
    return InventoryItem;
}());

var BackPack = /** @class */ (function () {
    function BackPack() {
        this.items = [];
        this.totalWeight = 0;
    }
    return BackPack;
}());

var Settings = /** @class */ (function () {
    function Settings() {
        this.selectedInventory = 'Hiking';
        this.lastCatId = 0;
        this.lastItemId = 0;
    }
    Settings.prototype.validate = function () {
        //if( isNaN(this.lastCatId) )
        //this.lastCatId = 0;
        //if( isNaN(this.lastItemId) )
        //this.lastItemId = 0;
    };
    return Settings;
}());

var InventProvider = /** @class */ (function () {
    function InventProvider(storage) {
        var _this = this;
        this.storage = storage;
        this.inventories = ["Hiking", "Travel"];
        this.settings = new Settings();
        this.categories = [{ 'id': 0, 'name': 'Clothes', 'description': '...' },
            { 'id': 1, 'name': 'Shelter', 'description': '...' },
            { 'id': 2, 'name': 'Sleeping system', 'description': '...' },
            { 'id': 3, 'name': 'Cookware', 'description': '...' },
            { 'id': 4, 'name': 'Tools', 'description': '...' }];
        this.items = [];
        this.backpack = new BackPack();
        storage.get('settings').then(function (storedItems) {
            if (storedItems) {
                _this.settings = storedItems;
            }
            ;
        });
        this.settings.validate();
        /*storage.get('categories').then((storedItems) => {
              if( storedItems){
                  this.categories = storedItems;
              };
            });*/
        storage.get('items').then(function (storedItems) {
            if (storedItems) {
                _this.items = storedItems;
            }
            ;
        });
        storage.get('inventories').then(function (storedItems) {
            if (storedItems) {
                _this.inventories = storedItems;
            }
            ;
        });
        storage.get('backpack').then(function (storedItems) {
            if (storedItems) {
                _this.backpack = storedItems;
            }
        });
    }
    /***                    S T O R A G E                       ***/
    InventProvider.prototype.saveAll = function () {
        this.storage.set('categories', this.categories);
        this.storage.set('items', this.items);
        this.storage.set('inventories', this.inventories);
        this.storage.set('settings', this.settings);
        this.storage.set('backpack', this.backpack);
    };
    InventProvider.prototype.saveItems = function () {
        this.storage.set('items', this.items);
    };
    InventProvider.prototype.eraseAllStorage = function () {
        this.items = [];
        this.settings = new Settings();
        this.backpack = new BackPack();
        this.storage.remove('items');
        this.storage.set('settings', this.settings);
        this.storage.remove('backpack');
    };
    /***                   I N V E N T O R I E S                  ***/
    InventProvider.prototype.getInventories = function () {
        return this.inventories;
    };
    InventProvider.prototype.createInventory = function (name) {
        this.inventories.push(name);
        this.storage.set('inventories', this.inventories);
    };
    InventProvider.prototype.selectInventory = function (name) {
        this.settings.selectedInventory = name;
        this.storage.set('settings', this.settings);
    };
    /***                    C A T E G O R I E S                 ***/
    InventProvider.prototype.getCategories = function () {
        return this.categories;
    };
    InventProvider.prototype.createCategory = function (cat) {
        cat.id = this.settings.lastCatId;
        this.settings.lastCatId++;
        this.categories.push(cat);
    };
    InventProvider.prototype.getCategoryNameById = function (catId) {
        for (var i = this.categories.length - 1; i >= 0; i--) {
            if (this.categories[i].id == catId) {
                return this.categories[i].name;
            }
        }
    };
    InventProvider.prototype.getCategoryById = function (catId) {
        for (var i = this.categories.length - 1; i >= 0; i--) {
            if (this.categories[i].id == catId) {
                return this.categories[i];
            }
        }
    };
    /***                        I  T  E  M  S                   ***/
    InventProvider.prototype.getItems = function (category) {
        var res = [];
        this.items.forEach(function (element) {
            if (element.inventory == this.settings.selectedInventory && element.category == category.id) {
                res.push(element);
                //alert("Match found");
            }
            //alert("item found "+element.name+" cat "+element.category+" invent: "+element.inventory);
        }, this);
        //alert("Selected: "+this.settings.selectedInventory+ " cat: "+category.name);
        return res;
    };
    InventProvider.prototype.removeItemById = function (itemId) {
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].id == itemId) {
                this.items.splice(i, 1);
            }
        }
        this.storage.set('items', this.items);
    };
    InventProvider.prototype.createItem = function (name, description, category) {
        var item = new InventoryItem(this.settings.lastItemId, name, this.settings.selectedInventory, category);
        this.settings.lastItemId++;
        item.description = description;
        this.items.push(item);
        this.storage.set('items', this.items);
        this.storage.set('settings', this.settings);
    };
    InventProvider.prototype.createItemByItem = function (item) {
        item.id = this.settings.lastItemId;
        item.inventory = this.settings.selectedInventory;
        this.settings.lastItemId++;
        this.items.push(item);
        this.storage.set('items', this.items);
        this.storage.set('settings', this.settings);
    };
    InventProvider.prototype.countItemsByCategory = function (category) {
        var n = 0;
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].inventory == this.settings.selectedInventory && this.items[i].category == category.id) {
                n++;
            }
        }
        return n;
    };
    /***                        B A C K P A C K                     ***/
    InventProvider.prototype.addItemToBackpack = function (item) {
        this.backpack.items.push(item.id);
        this.backpack.totalWeight += item.weight;
        this.storage.set('backpack', this.backpack);
    };
    InventProvider.prototype.removeItemFromBackpack = function (item) {
        for (var i = this.backpack.items.length - 1; i >= 0; i--) {
            if (this.backpack.items[i] == item.id) {
                this.backpack.items.splice(i, 1);
                ;
            }
        }
        this.backpack.totalWeight -= item.weight;
        this.storage.set('backpack', this.backpack);
    };
    InventProvider.prototype.itemIsInBackpack = function (item) {
        for (var i = this.backpack.items.length - 1; i >= 0; i--) {
            if (this.backpack.items[i] == item.id) {
                return { 'color': 'green', 'icon': 'remove', 'action': 'remove', background: '#EEE' };
            }
        }
        return { 'color': 'gray', 'icon': 'add', 'action': 'add', background: '' };
    };
    InventProvider.prototype.boolItemIsInBackpack = function (item) {
        for (var i = this.backpack.items.length - 1; i >= 0; i--) {
            if (this.backpack.items[i] == item.id) {
                return true;
            }
        }
        return false;
    };
    InventProvider.prototype.calculateBackpackTotalWeight = function () {
        this.backpack.totalWeight = 0;
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (this.boolItemIsInBackpack(this.items[i])) {
                this.backpack.totalWeight += this.items[i].weight;
            }
        }
    };
    InventProvider.prototype.totalBackpackWeight = function () {
        var weight = 0;
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (this.boolItemIsInBackpack(this.items[i])) {
                weight += this.items[i].weight;
            }
        }
        return weight;
    };
    InventProvider.prototype.countBackpackItemsByCategory = function (backpack, category) {
        var n = 0;
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].inventory == this.settings.selectedInventory && this.items[i].category == category.id && this.boolItemIsInBackpack(this.items[i])) {
                n++;
            }
        }
        return n;
    };
    InventProvider.prototype.calculateBackpackWeightByCateogry = function (backpack, category) {
        var weight = 0;
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].inventory == this.settings.selectedInventory && this.items[i].category == category.id && this.boolItemIsInBackpack(this.items[i])) {
                weight += this.items[i].weight;
            }
        }
        return weight;
    };
    InventProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _a || Object])
    ], InventProvider);
    return InventProvider;
    var _a;
}());

//# sourceMappingURL=invent.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataProvider = /** @class */ (function () {
    function DataProvider(storage) {
        this.storage = storage;
    }
    DataProvider.prototype.getData = function () {
        return this.storage.get('items');
    };
    DataProvider.prototype.save = function (data) {
        this.storage.set('items', data);
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_data__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_invent_invent__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/backpack/backpack.module#BackpackPageModule', name: 'BackpackPage', segment: 'backpack', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inventory/inventory.module#InventoryPageModule', name: 'InventoryPage', segment: 'inventory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newitem/newitem.module#NewitemPageModule', name: 'NewitemPage', segment: 'newitem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newmenu/newmenu.module#NewmenuPageModule', name: 'NewmenuPage', segment: 'newmenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selectinvent/selectinvent.module#SelectinventPageModule', name: 'SelectinventPage', segment: 'selectinvent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__providers_data_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_invent_invent__["a" /* InventProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { InventProvider } from '../providers/invent/invent';
//import { LoginPage } from '../pages/login/login';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'TabsPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\anton\Documents\Dev\HikAlfa1\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\anton\Documents\Dev\HikAlfa1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map