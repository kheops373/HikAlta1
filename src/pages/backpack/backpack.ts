import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { InventProvider, InventoryItem, BackPack } from '../../providers/invent/invent';

/**
 * Generated class for the BackpackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-backpack',
  templateUrl: 'backpack.html',
})
export class BackpackPage {
	


	constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, public invent: InventProvider) {

	}
	
	newItemToCategory(category) {
        this.app.getRootNav().push('NewitemPage', { 'operation': 'create', 'category': category });
    }
  
	itemTapped(item, category) {
        this.app.getRootNav().push('NewitemPage', { 'operation': 'edit', 'item': item, 'category': category } )
	}
	
	addRemoveItem(item, backpack, action) {
		if( action == 'add' ) {
			this.invent.addItemToBackpack(item, backpack);
		} else if( action == 'remove' ) {
			this.invent.removeItemFromBackpack(item, backpack);
		}
	}
    
    /*ionViewWillEnter() {
		if( this.invent.boolInventoryHasBackpacks() ) {	
			
		}
		else
			this.app.getRootNav().push('NewbackpackPage');
    }*/

}
