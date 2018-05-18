import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

