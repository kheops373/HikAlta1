import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { InventProvider, Category, InventoryItem } from '../../providers/invent/invent';

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

    operation: string;
    category: Category;
    item: InventoryItem;
    titleText: string;
    actionButtonText: string;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider, public invent: InventProvider, public app: App) {
  
      this.operation = navParams.get('operation');
      //alert(navParams.get('category'));
      
      if( this.operation == 'create' ) {
          this.category = navParams.get('category');
          this.item = new InventoryItem('','','',0);
          this.item.category = this.category.id;
          this.titleText = 'Create new item';
          this.actionButtonText = 'Create';
          
      } else if( this.operation == 'edit' ) {
          this.item = navParams.get('item');
          this.category = navParams.get('category');
          this.titleText = 'Edit item';
          this.actionButtonText = 'Save changes';
      }
      
  }

    
    actionButtonClicked() {
        if( this.operation == 'create' ) {
            //this.invent.createItem( this.item.name, this.item.description, this.category.id);
            this.invent.createItemByItem(this.item);
        } else if( this.operation == 'edit' ) {
            this.invent.saveItems();
        }
        // ADJUST CATEGORY !!!
        this.app.getRootNav().pop();
    }

}
