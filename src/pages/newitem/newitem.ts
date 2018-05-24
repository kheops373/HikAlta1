import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, ToastController } from 'ionic-angular';
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
	storedItem: InventoryItem;
    item: InventoryItem;
    titleText: string;
    actionButtonText: string;
    weight: string;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider, public invent: InventProvider, public app: App, public alertCtrl: AlertController, private toastCtrl: ToastController) {
  
      this.operation = navParams.get('operation');
      this.storedItem = navParams.get('item');
	  this.item = new InventoryItem();
      
      if( this.operation == 'create' ) {
          this.category = navParams.get('category');
		  
          this.item.category = this.category.id;
          this.titleText = 'Create new item';
          this.actionButtonText = 'Create';
          
      } else if( this.operation == 'edit' ) {
		  this.invent.cloneItem(this.storedItem, this.item);
          this.category = navParams.get('category');
          this.titleText = 'Edit item';
          this.actionButtonText = 'Save';
          this.weight = this.item.weight.toString();
      }
      
  }

    
    actionButtonClicked() {
        if( this.operation == 'create' ) {
            //this.invent.createItem( this.item.name, this.item.description, this.category.id);
            this.item.weight = ( isNaN(parseInt(this.weight)) ? 0 : parseInt(this.weight));
            this.invent.createItemByItem(this.item);
            this.category.show = true;
        } else if( this.operation == 'edit' ) {
			this.invent.cloneItem(this.item, this.storedItem);
            this.storedItem.weight = (this.weight=='' ? 0 : parseInt(this.weight));
            this.invent.saveItems();
        }
        // ADJUST CATEGORY !!!
        this.app.getRootNav().pop();
    }



	removeItem(item)
	{
        
        if( this.invent.boolItemIsInAnyBackpack(item) ) {
			let toast = this.toastCtrl.create( {
				message: 'Item is part of a backpack and cannot be removed!',
				duration: 2000,
				position: 'bottom'
			});
			toast.present();
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
						let toast = this.toastCtrl.create( {
							message: 'Item deleted',
							duration: 2500,
							position: 'top'
						});
						toast.present();
						this.app.getRootNav().pop();
                    }
                  }
                ]
              });
            al.present();
        }
	}

}
