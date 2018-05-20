import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InventProvider, Category } from '../../providers/invent/invent';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
    
    items : Category[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public invent: InventProvider ) {
        this.items = this.invent.getItems(this.invent.settings.selectedInventory);
  }

  ionViewWillEnter() {
      this.items = this.invent.getItems(this.invent.settings.selectedInventory);
  }

}
