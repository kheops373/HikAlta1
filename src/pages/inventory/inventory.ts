import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

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

items : string[] = [];
	
	public newItem : string;

  constructor(public navCtrl: NavController, public dataService: DataProvider ) {
  
	this.dataService.getData().then((storedItems) => {
		if( storedItems){
			this.items = storedItems;
		}
	});

  }
  
  
  
	addButtonClicked(event)
	{
		if(this.newItem.length > 2)
		{
			this.items.push(this.newItem);
			this.dataService.save(this.items);
			this.newItem = '';
		}
		else
			alert('Not long enough');
	}
  
	itemTapped(event, item)
	{
		this.items.pop();
		this.dataService.save(this.items);
	}


}
