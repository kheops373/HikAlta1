import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { InventProvider } from '../../providers/invent/invent';

/**
 * Generated class for the SelectinventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selectinvent',
  templateUrl: 'selectinvent.html',
})
export class SelectinventPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private invent: InventProvider) {
  }
    
    inventSelected(item) {
        if( this.invent.settings.selectedInventory == item )
            return "primary";
    }
    
    selectInvent(event, item) {
        this.invent.selectInventory(item);
        this.viewCtrl.dismiss();
    }

}
