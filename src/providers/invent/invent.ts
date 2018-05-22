import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the InventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


export class Category {
    
    public id: number;
    public name: string;
    public description: string;
    public show: boolean;

    constructor(name, description) {
        this.name = name;
        this.description = description;
    }    
}


export class InventoryItem {

    public id: number;
    public inventory: string;
    public category: number;
    public name: string;
    public description: string;
    public brand: string;
    public model: string;
    public weight: number;
    public quantity: number;
    public type: string;

    constructor(id, name, inventory, category) {
        this.id = id;
        this.name = name;
        this.inventory = inventory;
        this.category = category;
    }
}





export class BackPack {
	public items: number[] = [];
    public totalWeight: number = 0;

}





export class Settings {
    public selectedInventory: string = 'Hiking';
    public lastCatId: number = 0;
    public lastItemId: number = 0;

    validate() {
        //if( isNaN(this.lastCatId) )
            //this.lastCatId = 0;
        //if( isNaN(this.lastItemId) )
            //this.lastItemId = 0;
    }
}





@Injectable()
export class InventProvider {

    inventories : string[] = ["Hiking", "Travel"];
    settings : Settings = new Settings();
    categories : Category[] = [ {'id':0, 'name':'Clothes', 'description':'...', 'show': true},
                                {'id':1, 'name':'Shelter', 'description':'...', 'show': true},
                                {'id':2, 'name':'Sleeping system', 'description':'...', 'show': true},
                                {'id':3, 'name':'Cookware', 'description':'...', 'show': true},
                                {'id':4, 'name':'Tools', 'description':'...', 'show': true} ];
    items : InventoryItem[] = [];
	public backpack : BackPack = new BackPack();

    
  constructor(private storage: Storage) { 
      
      storage.get('settings').then((storedItems) => {
            if( storedItems){
                this.settings = storedItems;
            };
          });
      
      this.settings.validate();
      
      /*storage.get('categories').then((storedItems) => {
            if( storedItems){
                this.categories = storedItems;
            };
          });*/
          
      storage.get('items').then((storedItems) => {
            if( storedItems){
                this.items = storedItems;
            };
          });
      
      storage.get('inventories').then((storedItems) => {
            if( storedItems){
                this.inventories = storedItems;
            };
          });
	  
	  storage.get('backpack').then((storedItems) => {
            if( storedItems){
                this.backpack = storedItems;
            }
          });
          
  }


    /***                    S T O R A G E                       ***/

    saveAll() {
        this.storage.set('categories', this.categories);
        this.storage.set('items', this.items);
        this.storage.set('inventories', this.inventories);
        this.storage.set('settings', this.settings);
		this.storage.set('backpack', this.backpack);
    }

    saveItems() {
        this.storage.set('items', this.items);
    }

    eraseAllStorage() {
        this.items = [];
        this.settings = new Settings();
		this.backpack = new BackPack();
        this.storage.remove('items');
        this.storage.set('settings', this.settings);
		this.storage.remove('backpack');
        this.inventories = ["Hiking", "Travel"]
        this.storage.set('inventories', this.inventories);
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

    
    /***                    C A T E G O R I E S                 ***/

    getCategories() {
        return this.categories;
    }

    createCategory(cat) {
        cat.id = this.settings.lastCatId;
        this.settings.lastCatId ++;
        this.categories.push(cat);
    }

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
    removeItemById(itemId) {
        for(var i = this.items.length - 1; i >= 0; i--) {
            if(this.items[i].id == itemId) {
               this.items.splice(i, 1);
            }
        }
        this.storage.set('items', this.items);
    }
    createItem(name, description, category) {
        let item = new InventoryItem(this.settings.lastItemId, name, this.settings.selectedInventory, category);
        this.settings.lastItemId++;
        item.description = description;
        this.items.push(item);
        this.storage.set('items', this.items);
        this.storage.set('settings', this.settings);
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



    /***                        B A C K P A C K                     ***/

	addItemToBackpack(item) {
		this.backpack.items.push(item.id);
        this.backpack.totalWeight += item.weight;
		this.storage.set('backpack', this.backpack);
	}

	removeItemFromBackpack(item) {
		for(var i = this.backpack.items.length - 1; i >= 0; i--) {
            if(this.backpack.items[i] == item.id) {
               this.backpack.items.splice(i, 1);;
            }
        }
        this.backpack.totalWeight -= item.weight;
		this.storage.set('backpack', this.backpack);
	}

	itemIsInBackpack(item) {
		for(var i = this.backpack.items.length - 1; i >= 0; i--) {
            if(this.backpack.items[i] == item.id) {
               return { 'color': 'green', 'icon': 'remove', 'action':'remove', background: '#EEE' };
            }
        }
		return { 'color': 'gray', 'icon': 'add', 'action':'add', background: '' };
	}

	boolItemIsInBackpack(item) {
		for(var i = this.backpack.items.length - 1; i >= 0; i--) {
            if(this.backpack.items[i] == item.id) {
               return true;
            }
        }
		return false;
	}

    calculateBackpackTotalWeight() {
        this.backpack.totalWeight = 0;
		for(var i = this.items.length - 1; i >= 0; i--) {
            if( this.items[i].inventory == this.settings.selectedInventory && this.boolItemIsInBackpack(this.items[i]) ) {
               this.backpack.totalWeight += this.items[i].weight;
            }
        }
    }

	totalBackpackWeight() {
		let weight: number = 0;
		for(var i = this.items.length - 1; i >= 0; i--) {
            if( this.items[i].inventory == this.settings.selectedInventory && this.boolItemIsInBackpack(this.items[i]) ) {
               weight += this.items[i].weight;
            }
        }
		
		return weight;
	}
  

    countBackpackItemsByCategory(backpack, category) {
        let n = 0;
        for(var i = this.items.length - 1; i >= 0; i--) {
            if(this.items[i].inventory == this.settings.selectedInventory && this.items[i].category == category.id && this.boolItemIsInBackpack(this.items[i])) {
               n++;
            }
        }
        return n;
    }

    calculateBackpackWeightByCateogry(backpack, category) {
        let weight = 0;
        for(var i = this.items.length - 1; i >= 0; i--) {
            if(this.items[i].inventory == this.settings.selectedInventory && this.items[i].category == category.id && this.boolItemIsInBackpack(this.items[i])) {
               weight += this.items[i].weight;
            }
        }
        return weight;
    }


}
