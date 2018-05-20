import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { InventProvider, Category } from '../../providers/invent/invent';

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

    name: string;
    desc: string;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider, public invent: InventProvider, public app: App) {
      
  }

    
    createItemClicked()
    {
        this.invent.createItem( this.name, this.desc, "Main Category" );
        this.app.getRootNav().pop();
    }

}
