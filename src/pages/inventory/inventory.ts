import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App, ModalController, AlertController } from 'ionic-angular';
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


    constructor(public app: App, public navCtrl: NavController, public modalCtrl: ModalController, public viewCtrl: ViewController, public invent: InventProvider, public alertCtrl: AlertController ) {
        
    }
  
  
  
    newItemToCategory(category) {
        this.app.getRootNav().push('NewitemPage', { 'operation': 'create', 'category': category });
    }
  
	itemTapped(item, category) {
        this.app.getRootNav().push('NewitemPage', { 'operation': 'edit', 'item': item, 'category': category } )
	}
	removeItem(event, item)
	{
        
        if( this.invent.boolItemIsInBackpack(item) ) {
            alert("Item is part of a backpack and cannot be removed!");
        } else {
            let al = this.alertCtrl.create({
                title: 'Remove item',
                message: 'Are you sure you want to remove the item '+item.name+'?',
                buttons: [
                  {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                      console.log('Cancel clicked');
                    }
                  },
                  {
                    text: 'Confirm',
                    handler: () => {
                        this.invent.removeItemById(item.id);
                    }
                  }
                ]
              });
            al.present();
        }
	}


    selectInventory() {
        let selectInv = this.modalCtrl.create('SelectinventPage', { currentInvent: "curr"} );
        selectInv.present();
    }

}
