import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { InventProvider } from '../../providers/invent/invent';

/**
 * Generated class for the NewitemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newitem',
  templateUrl: 'newitem.html',
})
export class NewitemPage {

    nam: string;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider, public invent: InventProvider, public app: App) {
      
  }

    
    createItemClicked()
    {
        this.invent.push(this.nam);
        this.data.save(this.invent.get());
        this.app.getRootNav().pop();
    }

}
