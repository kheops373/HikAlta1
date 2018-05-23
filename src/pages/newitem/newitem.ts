import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
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
    weight: string;
	weightType: string;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider, public invent: InventProvider, public app: App, public alertCtrl: AlertController) {
  
      this.operation = navParams.get('operation');
      //alert(navParams.get('category'));
      
      if( this.operation == 'create' ) {
          this.category = navParams.get('category');
          this.item = new InventoryItem(0,'','',0);
          this.item.category = this.category.id;
          this.titleText = 'Create new item';
          this.actionButtonText = 'Create';
          
      } else if( this.operation == 'edit' ) {
          this.item = navParams.get('item');
          this.category = navParams.get('category');
          this.titleText = 'Edit item';
          this.actionButtonText = 'Save';
          this.weight = this.item.weight.toString();
      }
      
  }

    
    actionButtonClicked() {
        if( this.operation == 'create' ) {
            //this.invent.createItem( this.item.name, this.item.description, this.category.id);
            this.item.weight = parseInt(this.weight);
            this.invent.createItemByItem(this.item);
            this.category.show = true;
        } else if( this.operation == 'edit' ) {
            this.item.weight = parseInt(this.weight);
            this.invent.saveItems();
        }
        // ADJUST CATEGORY !!!
        this.app.getRootNav().pop();
    }



	removeItem(item)
	{
        
        if( this.invent.boolItemIsInAnyBackpack(item) ) {
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
						this.app.getRootNav().pop();
                    }
                  }
                ]
              });
            al.present();
        }
	}

}
