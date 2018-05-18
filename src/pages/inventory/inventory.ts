import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { InventProvider } from '../../providers/invent/invent';

import { NewitemPage } from '../../pages/newitem/newitem';

/**
 * Generated class for the InventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {
	
	public newItem : string;


    constructor(public app: App, public navCtrl: NavController, public viewCtrl: ViewController, public dataService: DataProvider, public invent: InventProvider ) {
        
        this.dataService.getData().then((storedItems) => {
            if( storedItems){
                this.invent.clone(storedItems);
            }
        });
    }
  
  
  
	addButtonClicked(event)
	{
        this.app.getRootNav().push('NewitemPage');
	}
  
	itemTapped(event, item, i)
	{

	}
	removeItem(event, item, i)
	{
		//this.invent.pop();
		this.invent.remove(i);
		this.dataService.save(this.invent.get());
	}

}
