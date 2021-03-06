import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

/*
  Generated class for the InventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


export class Category {
    
    public id: number;
    public name: string;
    //public description: string;
    public show: boolean;

    constructor() {
    }    
}


export class InventoryItem {

    public id: number = 0;
    public inventory: string;
    public category: number;
    public name: string;
    public description: string;
	public note: string;
    public weight: number;
    public quantity: number;
    public type: string;
	public weightType: string = 'base';

    constructor() {
    }

}


export class BackPack {
	public id:number;
	public name:string;
	public note:string;
	public inventory: string;
	public items: number[] = [];
    public totalWeight: number = 0;
	public wornWeight: number = 0;
	public baseWeight: number = 0;
	public consumableWeight: number = 0;

}





export class Settings {
    public selectedInventory: string = 'Hiking';
	public selectedBackpack: number = 0;
    public lastCatId: number = 0;
    public lastItemId: number = 0;
	public lastBackpackId: number = 0;
}


export class InventorySettings {
	public name: string;
	public useWeights: boolean = true;

	constructor(name: string) {
		this.name = name;
	}
}





@Injectable()
export class InventProvider {

    inventories : string[] = ["Hiking", "Travel"];
	inventorySettings: InventorySettings[] = [];
    settings : Settings = new Settings();
    /*categories : Category[] = [ {'id':0, 'name':'Clothes', 'description':'...', 'show': true},
                                {'id':1, 'name':'Shelter', 'description':'...', 'show': true},
                                {'id':2, 'name':'Sleeping system', 'description':'...', 'show': true},
                                {'id':3, 'name':'Cookware', 'description':'...', 'show': true},
                                {'id':4, 'name':'Tools', 'description':'...', 'show': true} ];*/
	
	cats : Observable<any[]>;
	its : AngularFireList<{}>;
	categories: Category[] = [];
	
    items : InventoryItem[] = [];
	backpacks : BackPack[] = [];

    
  constructor(private storage: Storage, afDB: AngularFireDatabase) {
	  
	  this.cats = afDB.list('/Categories').valueChanges(); ////////////////////////////////////////
	  this.its = afDB.list('/items');
	  
	  /*   npm install rxjs@6 rxjs-compat@6 --save   */ 

	  this.cats.subscribe( (elt) => { this.categories = elt } );
	  
	  
      
      storage.get('settings').then((storedItems) => {
            if( storedItems){
                this.settings = storedItems;
            };
          });
      
      /*storage.get('categories').then((storedItems) => {
            if( storedItems){
                this.categories = storedItems;
            };
          });*/
          
      storage.get('items').then((storedItems) => {
            if( storedItems){
                this.items = storedItems;
				//this.its.remove(); ////////////////////////////////////
				//this.its.push( this.items[0] ); ///////////////////////////////
            };
          });
	  
	  //this.its.push( {'name':'test', 'id':3} );
      
      storage.get('inventories').then((storedItems) => {
            if( storedItems){
                this.inventories = storedItems;
            };
          });
	  
	  storage.get('inventorysettings').then((storedItems) => {
            if(storedItems){
                this.inventorySettings = storedItems;
            } else {
				this.inventories.forEach( function(element) {
					this.inventorySettings.push( new InventorySettings(element) );
				}, this);
				storage.set('inventorysettings', this.inventorySettings);
			}
          });
	  
	  storage.get('backpacks').then((storedItems) => {
            if( storedItems){
                this.backpacks = storedItems;
            }
          });
          
  }


    /***                    S T O R A G E                       ***/

    saveAll() {
        this.storage.set('categories', this.categories);
        this.storage.set('items', this.items);
        this.storage.set('inventories', this.inventories);
		this.storage.set('inventorysettings', this.inventorySettings);
        this.storage.set('settings', this.settings);
		this.storage.set('backpacks', this.backpacks);
    }

    saveItems() {
        this.storage.set('items', this.items);
    }

	saveSettings() {
		this.storage.set('inventories', this.inventories);
		this.storage.set('inventorysettings', this.inventorySettings);
		this.storage.set('settings', this.settings);
	}

    eraseAllStorage() {
        this.items = [];
        this.settings = new Settings();
		this.backpacks = [];
		this.storage.clear();
        this.storage.set('settings', this.settings);
        this.inventories = ["Hiking", "Travel"]
        this.storage.set('inventories', this.inventories);
		this.inventorySettings = []
		this.inventories.forEach( function(element) {
			this.inventorySettings.push( new InventorySettings(element) );
		}, this);
		this.storage.set('inventorysettings', this.inventorySettings);
    }




    /***                   I N V E N T O R I E S                  ***/

    getInventories() {
        return this.inventories;
    }
    createInventory(name) {
        this.inventories.push(name);
        this.storage.set('inventories', this.inventories);
    }
    selectInventory(name) {
        this.settings.selectedInventory = name;
        this.storage.set('settings', this.settings);
    }
	getSelectedInventorySettings() {
		for(var i=0; i<this.inventorySettings.length; i++) {
			if(this.inventorySettings[i].name == this.settings.selectedInventory)
				return this.inventorySettings[i];
		}
	}

    
    /***                    C A T E G O R I E S                 ***/

    getCategories() {
        return this.categories;
    }

    /*createCategory(cat) {
        cat.id = this.settings.lastCatId;
        this.settings.lastCatId ++;
        this.categories.push(cat);
    }*/

    getCategoryNameById(catId) {
        for(var i = this.categories.length - 1; i >= 0; i--) {
            if(this.categories[i].id == catId) {
               return this.categories[i].name;
            }
        }
    }
    getCategoryById(catId) {
        for(var i = this.categories.length - 1; i >= 0; i--) {
            if(this.categories[i].id == catId) {
               return this.categories[i];
            }
        }
    }



    /***                        I  T  E  M  S                   ***/

    getItems(category) {
        let res : InventoryItem[] = [];
        
        this.items.forEach( function(element) {
            if( element.inventory == this.settings.selectedInventory && element.category == category.id ) {
                res.push(element);
                //alert("Match found");
            }
            //alert("item found "+element.name+" cat "+element.category+" invent: "+element.inventory);
        }, this);
        
        //alert("Selected: "+this.settings.selectedInventory+ " cat: "+category.name);
        
        return res;
    }
	getItemById(itemId) {
		for(var i = this.items.length - 1; i >= 0; i--) {
            if(this.items[i].id == itemId) {
               return this.items[i];
            }
        }
	}
    removeItemById(itemId) {
        for(var i = this.items.length - 1; i >= 0; i--) {
            if(this.items[i].id == itemId) {
               this.items.splice(i, 1);
            }
        }
        this.storage.set('items', this.items);
    }
    createItemByItem(item) {
        item.id = this.settings.lastItemId;
        item.inventory = this.settings.selectedInventory;
        this.settings.lastItemId++;
        this.items.push(item);
        this.storage.set('items', this.items);
        this.storage.set('settings', this.settings);
    }


    countItemsByCategory(category) {
        let n = 0;
        for(var i = this.items.length - 1; i >= 0; i--) {
            if(this.items[i].inventory == this.settings.selectedInventory && this.items[i].category == category.id) {
               n++;
            }
        }
        return n;
    }


	cloneItem(itemo, item) {
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
	}



    /***                        B A C K P A C K                     ***/


	createBackpack(backpack) {
		backpack.inventory = this.settings.selectedInventory;
		backpack.id = this.settings.lastBackpackId;
		this.settings.lastBackpackId ++;
		this.settings.selectedBackpack = backpack.id;
		this.backpacks.push(backpack);
		this.storage.set('settings', this.settings);
		this.storage.set('backpacks', this.backpacks);
	}
	saveBackpack(backpack) {
		this.storage.set('backpacks', this.backpacks);
	}
	selectBackpack(backpack) {
		this.settings.selectedBackpack = backpack.id;
		this.storage.set('settings', this.settings)
	}

	boolInventoryHasBackpacks() {
		if( this.backpacks == undefined || this.backpacks.length < 1 )
			return false;
		for(var i=0; i<this.backpacks.length; i++ ) {
			if( this.backpacks[i].inventory == this.settings.selectedInventory )
				return true;
		}
		return false;
	}
	getBackpacksFromInventory() {
		let res = []
		for(var i=0; i<this.backpacks.length; i++ ) {
			if( this.backpacks[i].inventory == this.settings.selectedInventory )
				res.push( this.backpacks[i] );
		}
		return res;
	}

	getBackpackById(backpackId) {
		for(var i=0; i<this.backpacks.length; i++ ) {
			if( this.backpacks[i].inventory == this.settings.selectedInventory && this.backpacks[i].id == backpackId )
				return this.backpacks[i];
		}
		return null;
	}
	getSelectedBackpack() {
		for(var i=0; i<this.backpacks.length; i++ ) {
			if( this.backpacks[i].inventory == this.settings.selectedInventory && this.backpacks[i].id == this.settings.selectedBackpack )
				return this.backpacks[i];
		}
		return null;
	}

	getItemsFromBackpack(backpack) {
		let items: InventoryItem[] = [];
		for(var i = backpack.items.length - 1; i >= 0; i--) {
            items.push(this.getItemById(backpack.items[i]));
        }
		return items;
	}

	getItemsFromSelectedBackpack() {
		let backpack = this.getSelectedBackpack();
		let items: InventoryItem[] = [];
		for(var i = backpack.items.length - 1; i >= 0; i--) {
            items.push(this.getItemById(backpack.items[i]));
        }
		return items;
	}

	getItemsByCategoryFromSelectedBackpack(category) {
		let backpack = this.getSelectedBackpack();
		let items: InventoryItem[] = [];
		for(var i = backpack.items.length - 1; i >= 0; i--) {
			let item = this.getItemById(backpack.items[i]);
			if( item.category == category.id )
            	items.push(this.getItemById(backpack.items[i]));
        }
		return items;
	}

	addItemToBackpack(item, backpack) {
		backpack.items.push(item.id);
        backpack.totalWeight += item.weight;
		this.storage.set('backpacks', this.backpacks);
	}

	removeItemFromBackpack(item, backpack) {
		for(var i = backpack.items.length - 1; i >= 0; i--) {
            if(backpack.items[i] == item.id) {
               backpack.items.splice(i, 1);;
            }
        }
        backpack.totalWeight -= item.weight;
		this.storage.set('backpacks', this.backpacks);
	}

	itemIsInBackpack(item, backpack) {
		for(var i = backpack.items.length - 1; i >= 0; i--) {
            if(backpack.items[i] == item.id) {
               return { 'color': 'green', 'icon': 'remove', 'action':'remove', background: '#DDFFFF' };
            }
        }
		return { 'color': 'gray', 'icon': 'add', 'action':'add', background: '' };
	}

	boolItemIsInBackpack(item, backpack) {
		for(var i = backpack.items.length - 1; i >= 0; i--) {
            if(backpack.items[i] == item.id) {
               return true;
            }
        }
		return false;
	}

	boolItemIsInAnyBackpack(item) {
		for( var j=0; j<this.backpacks.length; j++ ) {
			for(var i = this.backpacks[j].items.length - 1; i >= 0; i--) {
				if(this.backpacks[j].items[i] == item.id) {
				   return true;
				}
			}
		}
		return false;
	}

    calculateBackpackTotalWeight(backpack) {
        backpack.totalWeight = 0;
		for(var i = this.items.length - 1; i >= 0; i--) {
            if( this.items[i].inventory == this.settings.selectedInventory && this.boolItemIsInBackpack(this.items[i], backpack) ) {
               backpack.totalWeight += this.items[i].weight;
            }
        }
    }

    calculateBackpackWeights() {
		let backpack = this.getSelectedBackpack();
        backpack.totalWeight = 0;
		backpack.wornWeight = 0;
		backpack.baseWeight = 0;
		backpack.consumableWeight = 0;
		for(var i = this.items.length - 1; i >= 0; i--) {
            if( this.items[i].inventory == this.settings.selectedInventory && this.boolItemIsInBackpack(this.items[i], backpack) ) {
               backpack.totalWeight += this.items[i].weight;
				if(this.items[i].weightType == "worn") {
					backpack.wornWeight += this.items[i].weight;
				} else if(this.items[i].weightType == "base") {
					backpack.baseWeight += this.items[i].weight;
				} else if(this.items[i].weightType == "consumable") {
					backpack.consumableWeight += this.items[i].weight;
				}
            }
        }
		return true;
    }

	totalBackpackWeight(backpack) {
		let weight: number = 0;
		for(var i = this.items.length - 1; i >= 0; i--) {
            if( this.items[i].inventory == this.settings.selectedInventory && this.boolItemIsInBackpack(this.items[i], backpack) ) {
               weight += this.items[i].weight;
            }
        }
		
		return weight;
	}

	countBackpackItems(backpack) {
		return backpack.items.length;
	}
  

    countBackpackItemsByCategory(backpack, category) {
        let n = 0;
        for(var i = this.items.length - 1; i >= 0; i--) {
            if(this.items[i].inventory == this.settings.selectedInventory && this.items[i].category == category.id && this.boolItemIsInBackpack(this.items[i], backpack)) {
               n++;
            }
        }
        return n;
    }

    calculateBackpackWeightByCateogry(backpack, category) {
        let weight = 0;
        for(var i = this.items.length - 1; i >= 0; i--) {
            if(this.items[i].inventory == this.settings.selectedInventory && this.items[i].category == category.id && this.boolItemIsInBackpack(this.items[i], backpack)) {
               weight += this.items[i].weight;
            }
        }
        return weight;
    }


}
