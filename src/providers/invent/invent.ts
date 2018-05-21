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

export class Settings {
    public selectedInventory: string = 'Main';
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

    inventories : string[] = ["Main", "Home"];
    settings : Settings = new Settings();
    categories : Category[] = [ {'id':0, 'name':'Clothes', 'description':'...'},
                                {'id':1, 'name':'Shelter', 'description':'...'},
                                {'id':2, 'name':'Sleeping system', 'description':'...'},
                                {'id':3, 'name':'Cookware', 'description':'...'},
                                {'id':4, 'name':'Tools', 'description':'...'} ];
    items : InventoryItem[] = [];

    
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
          
  }

    saveAll() {
        this.storage.set('categories', this.categories);
        this.storage.set('items', this.items);
        this.storage.set('inventories', this.inventories);
        this.storage.set('settings', this.settings);
    }

    saveItems() {
        this.storage.set('items', this.items);
    }



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
  
  
    

    remove(i)
    {
        this.categories.splice(i,1);
    }


    eraseAllStorage() {
        this.items = [];
        this.settings = new Settings();
        this.storage.set('items', this.items);
        this.storage.set('settings', this.settings);
    }


}
