import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App, ModalController } from 'ionic-angular';
import { InventProvider } from '../../providers/invent/invent';

import { NewitemPage } from '../../pages/newitem/newitem';
import { SelectinventPage } from '../../pages/selectinvent/selectinvent';

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


    constructor(public app: App, public navCtrl: NavController, public modalCtrl: ModalController, public viewCtrl: ViewController, public invent: InventProvider ) {
        
        /*this.dataService.getData().then((storedItems) => {
            if( storedItems){
                this.invent.clone(storedItems);
            }
        });*/
    }
  
  
  
	addButtonClicked(event)
	{
        this.app.getRootNav().push('NewitemPage');
	}
  
	itemTapped(event, item, i)
	{

	}
	removeItem(event, itemId)
	{
		//this.invent.pop();
		this.invent.removeItem(itemId);
		//this.dataService.save(this.invent.get());
        this.invent.saveAll();
	}


    selectInventory() {
        let selectInv = this.modalCtrl.create('SelectinventPage', { currentInvent: "curr"} );
        selectInv.present();
    }

}
