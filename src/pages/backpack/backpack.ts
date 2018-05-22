import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InventProvider, InventoryItem } from '../../providers/invent/invent';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public invent: InventProvider) {
  }
	
	addRemoveItem(item, action) {
		if( action == 'add' ) {
			this.invent.addItemToBackpack(item);
		} else if( action == 'remove' ) {
			this.invent.removeItemFromBackpack(item);
		}
	}
    
    ionViewWillEnter() {
        this.invent.calculateBackpackTotalWeight();
    }

}
