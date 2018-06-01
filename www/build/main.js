webpackJsonp([9],{

/***/ 184:
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
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/backpack/backpack.module": [
		481,
		8
	],
	"../pages/checklist/checklist.module": [
		482,
		7
	],
	"../pages/inventory/inventory.module": [
		483,
		6
	],
	"../pages/login/login.module": [
		484,
		5
	],
	"../pages/newbackpack/newbackpack.module": [
		485,
		4
	],
	"../pages/newitem/newitem.module": [
		486,
		3
	],
	"../pages/newmenu/newmenu.module": [
		487,
		2
	],
	"../pages/selectinvent/selectinvent.module": [
		488,
		1
	],
	"../pages/tabs/tabs.module": [
		489,
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
webpackAsyncContext.id = 225;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Category */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return InventoryItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackPack; });
/* unused harmony export Settings */
/* unused harmony export InventorySettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(226);
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
    function Category() {
    }
    return Category;
}());

var InventoryItem = /** @class */ (function () {
    function InventoryItem() {
        this.id = 0;
        this.weightType = 'base';
    }
    return InventoryItem;
}());

var BackPack = /** @class */ (function () {
    function BackPack() {
        this.items = [];
        this.totalWeight = 0;
        this.wornWeight = 0;
        this.baseWeight = 0;
        this.consumableWeight = 0;
    }
    return BackPack;
}());

var Settings = /** @class */ (function () {
    function Settings() {
        this.selectedInventory = 'Hiking';
        this.selectedBackpack = 0;
        this.lastCatId = 0;
        this.lastItemId = 0;
        this.lastBackpackId = 0;
    }
    return Settings;
}());

var InventorySettings = /** @class */ (function () {
    function InventorySettings(name) {
        this.useWeights = true;
        this.name = name;
    }
    return InventorySettings;
}());

var InventProvider = /** @class */ (function () {
    function InventProvider(storage, afDB) {
        var _this = this;
        this.storage = storage;
        this.inventories = ["Hiking", "Travel"];
        this.inventorySettings = [];
        this.settings = new Settings();
        this.categories = [];
        this.items = [];
        this.backpacks = [];
        this.cats = afDB.list('/Categories').valueChanges(); ////////////////////////////////////////
        this.its = afDB.list('/items');
        /*   npm install rxjs@6 rxjs-compat@6 --save   */
        this.cats.subscribe(function (elt) { _this.categories = elt; });
        storage.get('settings').then(function (storedItems) {
            if (storedItems) {
                _this.settings = storedItems;
            }
            ;
        });
        /*storage.get('categories').then((storedItems) => {
              if( storedItems){
                  this.categories = storedItems;
              };
            });*/
        storage.get('items').then(function (storedItems) {
            if (storedItems) {
                _this.items = storedItems;
                //this.its.remove(); ////////////////////////////////////
                //this.its.push( this.items[0] ); ///////////////////////////////
            }
            ;
        });
        //this.its.push( {'name':'test', 'id':3} );
        storage.get('inventories').then(function (storedItems) {
            if (storedItems) {
                _this.inventories = storedItems;
            }
            ;
        });
        storage.get('inventorysettings').then(function (storedItems) {
            if (storedItems) {
                _this.inventorySettings = storedItems;
            }
            else {
                _this.inventories.forEach(function (element) {
                    this.inventorySettings.push(new InventorySettings(element));
                }, _this);
                storage.set('inventorysettings', _this.inventorySettings);
            }
        });
        storage.get('backpacks').then(function (storedItems) {
            if (storedItems) {
                _this.backpacks = storedItems;
            }
        });
    }
    /***                    S T O R A G E                       ***/
    InventProvider.prototype.saveAll = function () {
        this.storage.set('categories', this.categories);
        this.storage.set('items', this.items);
        this.storage.set('inventories', this.inventories);
        this.storage.set('inventorysettings', this.inventorySettings);
        this.storage.set('settings', this.settings);
        this.storage.set('backpacks', this.backpacks);
    };
    InventProvider.prototype.saveItems = function () {
        this.storage.set('items', this.items);
    };
    InventProvider.prototype.saveSettings = function () {
        this.storage.set('inventories', this.inventories);
        this.storage.set('inventorysettings', this.inventorySettings);
        this.storage.set('settings', this.settings);
    };
    InventProvider.prototype.eraseAllStorage = function () {
        this.items = [];
        this.settings = new Settings();
        this.backpacks = [];
        this.storage.clear();
        this.storage.set('settings', this.settings);
        this.inventories = ["Hiking", "Travel"];
        this.storage.set('inventories', this.inventories);
        this.inventorySettings = [];
        this.inventories.forEach(function (element) {
            this.inventorySettings.push(new InventorySettings(element));
        }, this);
        this.storage.set('inventorysettings', this.inventorySettings);
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
    InventProvider.prototype.getSelectedInventorySettings = function () {
        for (var i = 0; i < this.inventorySettings.length; i++) {
            if (this.inventorySettings[i].name == this.settings.selectedInventory)
                return this.inventorySettings[i];
        }
    };
    /***                    C A T E G O R I E S                 ***/
    InventProvider.prototype.getCategories = function () {
        return this.categories;
    };
    /*createCategory(cat) {
        cat.id = this.settings.lastCatId;
        this.settings.lastCatId ++;
        this.categories.push(cat);
    }*/
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
    InventProvider.prototype.getItemById = function (itemId) {
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].id == itemId) {
                return this.items[i];
            }
        }
    };
    InventProvider.prototype.removeItemById = function (itemId) {
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].id == itemId) {
                this.items.splice(i, 1);
            }
        }
        this.storage.set('items', this.items);
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
    InventProvider.prototype.cloneItem = function (itemo, item) {
        item.id = itemo.id;
        item.inventory = itemo.inventory;
        item.category = itemo.category;
        item.name = itemo.name;
        item.description = itemo.description;
        item.note = itemo.note;
        item.weight = itemo.weight;
        item.quantity = itemo.quantity;
        item.type = itemo.type;
        item.weightType = itemo.weightType;
    };
    /***                        B A C K P A C K                     ***/
    InventProvider.prototype.createBackpack = function (backpack) {
        backpack.inventory = this.settings.selectedInventory;
        backpack.id = this.settings.lastBackpackId;
        this.settings.lastBackpackId++;
        this.settings.selectedBackpack = backpack.id;
        this.backpacks.push(backpack);
        this.storage.set('settings', this.settings);
        this.storage.set('backpacks', this.backpacks);
    };
    InventProvider.prototype.saveBackpack = function (backpack) {
        this.storage.set('backpacks', this.backpacks);
    };
    InventProvider.prototype.selectBackpack = function (backpack) {
        this.settings.selectedBackpack = backpack.id;
        this.storage.set('settings', this.settings);
    };
    InventProvider.prototype.boolInventoryHasBackpacks = function () {
        if (this.backpacks == undefined || this.backpacks.length < 1)
            return false;
        for (var i = 0; i < this.backpacks.length; i++) {
            if (this.backpacks[i].inventory == this.settings.selectedInventory)
                return true;
        }
        return false;
    };
    InventProvider.prototype.getBackpacksFromInventory = function () {
        var res = [];
        for (var i = 0; i < this.backpacks.length; i++) {
            if (this.backpacks[i].inventory == this.settings.selectedInventory)
                res.push(this.backpacks[i]);
        }
        return res;
    };
    InventProvider.prototype.getBackpackById = function (backpackId) {
        for (var i = 0; i < this.backpacks.length; i++) {
            if (this.backpacks[i].inventory == this.settings.selectedInventory && this.backpacks[i].id == backpackId)
                return this.backpacks[i];
        }
        return null;
    };
    InventProvider.prototype.getSelectedBackpack = function () {
        for (var i = 0; i < this.backpacks.length; i++) {
            if (this.backpacks[i].inventory == this.settings.selectedInventory && this.backpacks[i].id == this.settings.selectedBackpack)
                return this.backpacks[i];
        }
        return null;
    };
    InventProvider.prototype.getItemsFromBackpack = function (backpack) {
        var items = [];
        for (var i = backpack.items.length - 1; i >= 0; i--) {
            items.push(this.getItemById(backpack.items[i]));
        }
        return items;
    };
    InventProvider.prototype.getItemsFromSelectedBackpack = function () {
        var backpack = this.getSelectedBackpack();
        var items = [];
        for (var i = backpack.items.length - 1; i >= 0; i--) {
            items.push(this.getItemById(backpack.items[i]));
        }
        return items;
    };
    InventProvider.prototype.getItemsByCategoryFromSelectedBackpack = function (category) {
        var backpack = this.getSelectedBackpack();
        var items = [];
        for (var i = backpack.items.length - 1; i >= 0; i--) {
            var item = this.getItemById(backpack.items[i]);
            if (item.category == category.id)
                items.push(this.getItemById(backpack.items[i]));
        }
        return items;
    };
    InventProvider.prototype.addItemToBackpack = function (item, backpack) {
        backpack.items.push(item.id);
        backpack.totalWeight += item.weight;
        this.storage.set('backpacks', this.backpacks);
    };
    InventProvider.prototype.removeItemFromBackpack = function (item, backpack) {
        for (var i = backpack.items.length - 1; i >= 0; i--) {
            if (backpack.items[i] == item.id) {
                backpack.items.splice(i, 1);
                ;
            }
        }
        backpack.totalWeight -= item.weight;
        this.storage.set('backpacks', this.backpacks);
    };
    InventProvider.prototype.itemIsInBackpack = function (item, backpack) {
        for (var i = backpack.items.length - 1; i >= 0; i--) {
            if (backpack.items[i] == item.id) {
                return { 'color': 'green', 'icon': 'remove', 'action': 'remove', background: '#DDFFFF' };
            }
        }
        return { 'color': 'gray', 'icon': 'add', 'action': 'add', background: '' };
    };
    InventProvider.prototype.boolItemIsInBackpack = function (item, backpack) {
        for (var i = backpack.items.length - 1; i >= 0; i--) {
            if (backpack.items[i] == item.id) {
                return true;
            }
        }
        return false;
    };
    InventProvider.prototype.boolItemIsInAnyBackpack = function (item) {
        for (var j = 0; j < this.backpacks.length; j++) {
            for (var i = this.backpacks[j].items.length - 1; i >= 0; i--) {
                if (this.backpacks[j].items[i] == item.id) {
                    return true;
                }
            }
        }
        return false;
    };
    InventProvider.prototype.calculateBackpackTotalWeight = function (backpack) {
        backpack.totalWeight = 0;
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].inventory == this.settings.selectedInventory && this.boolItemIsInBackpack(this.items[i], backpack)) {
                backpack.totalWeight += this.items[i].weight;
            }
        }
    };
    InventProvider.prototype.calculateBackpackWeights = function () {
        var backpack = this.getSelectedBackpack();
        backpack.totalWeight = 0;
        backpack.wornWeight = 0;
        backpack.baseWeight = 0;
        backpack.consumableWeight = 0;
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].inventory == this.settings.selectedInventory && this.boolItemIsInBackpack(this.items[i], backpack)) {
                backpack.totalWeight += this.items[i].weight;
                if (this.items[i].weightType == "worn") {
                    backpack.wornWeight += this.items[i].weight;
                }
                else if (this.items[i].weightType == "base") {
                    backpack.baseWeight += this.items[i].weight;
                }
                else if (this.items[i].weightType == "consumable") {
                    backpack.consumableWeight += this.items[i].weight;
                }
            }
        }
        return true;
    };
    InventProvider.prototype.totalBackpackWeight = function (backpack) {
        var weight = 0;
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].inventory == this.settings.selectedInventory && this.boolItemIsInBackpack(this.items[i], backpack)) {
                weight += this.items[i].weight;
            }
        }
        return weight;
    };
    InventProvider.prototype.countBackpackItems = function (backpack) {
        return backpack.items.length;
    };
    InventProvider.prototype.countBackpackItemsByCategory = function (backpack, category) {
        var n = 0;
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].inventory == this.settings.selectedInventory && this.items[i].category == category.id && this.boolItemIsInBackpack(this.items[i], backpack)) {
                n++;
            }
        }
        return n;
    };
    InventProvider.prototype.calculateBackpackWeightByCateogry = function (backpack, category) {
        var weight = 0;
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].inventory == this.settings.selectedInventory && this.items[i].category == category.id && this.boolItemIsInBackpack(this.items[i], backpack)) {
                weight += this.items[i].weight;
            }
        }
        return weight;
    };
    InventProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], InventProvider);
    return InventProvider;
}());

//# sourceMappingURL=invent.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.signInWithEmail = function (credentials) {
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.authenticated = function () {
        return this.user !== null;
    };
    AuthService.prototype.getEmail = function () {
        return this.user && this.user.email;
    };
    AuthService.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(125);
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

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(406);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_data_data__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_invent_invent__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var firebaseConfig = {
    apiKey: "AIzaSyBTQ4vCQ8wLb34Eb2YUamOZXAHwqYx_rOM",
    authDomain: "hiktest1-e3819.firebaseapp.com",
    databaseURL: "https://hiktest1-e3819.firebaseio.com",
    projectId: "hiktest1-e3819",
    storageBucket: "hiktest1-e3819.appspot.com",
    messagingSenderId: "866414182123"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/backpack/backpack.module#BackpackPageModule', name: 'BackpackPage', segment: 'backpack', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checklist/checklist.module#ChecklistPageModule', name: 'ChecklistPage', segment: 'checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inventory/inventory.module#InventoryPageModule', name: 'InventoryPage', segment: 'inventory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newbackpack/newbackpack.module#NewbackpackPageModule', name: 'NewbackpackPage', segment: 'newbackpack', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newitem/newitem.module#NewitemPageModule', name: 'NewitemPage', segment: 'newitem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newmenu/newmenu.module#NewmenuPageModule', name: 'NewmenuPage', segment: 'newmenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selectinvent/selectinvent.module#SelectinventPageModule', name: 'SelectinventPage', segment: 'selectinvent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__providers_data_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_invent_invent__["b" /* InventProvider */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__["a" /* AuthService */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { LoginPage } from '../pages/login/login';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        var _this = this;
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        auth.afAuth.authState
            .subscribe(function (user) {
            if (user) {
                _this.rootPage = 'TabsPage';
            }
            else {
                _this.rootPage = 'LoginPage';
            }
        }, function () {
            _this.rootPage = 'LoginPage';
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"c:\Users\anton.ryhlov\cordova\git\HikAlfa1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthService */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[283]);
//# sourceMappingURL=main.js.map