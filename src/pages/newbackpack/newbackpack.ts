import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';
import { InventProvider, InventoryItem, BackPack } from '../../providers/invent/invent';

/**
 * Generated class for the NewbackpackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export class Pram {
	public title: string;
	public button: string;
	public showlist: boolean;
	public action: string;
}

@IonicPage()
@Component({
  selector: 'page-newbackpack',
  templateUrl: 'newbackpack.html',
})
export class NewbackpackPage {
	
	public backpack: BackPack;
	public storedBackpack: BackPack;
	public text: Pram = { 'title':'Select backpack', 'button':'Create', 'showlist':true, 'action':'create' };

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, public invent: InventProvider, public viewCtrl: ViewController) {
	  this.backpack = new BackPack();
	  this.storedBackpack = navParams.get('backpack');
	  
	  if( this.storedBackpack != null ) {
		  /////////////////////////////////////////////////////////////// REPLACE BY CLONE FUNCTION
		  
		  this.backpack.name = this.storedBackpack.name;
		  this.backpack.note = this.storedBackpack.note;
		  
		  
		  this.text.title = 'Edit backpack';
		  this.text.button = 'Save changes';
		  this.text.showlist = false;
		  this.text.action = 'save'
	  }
		  
  }


	createSaveBackpackClicked() {
		if( this.text.action == 'create' ) {
			this.invent.createBackpack(this.backpack);
			//this.app.getRootNav().pop();
			this.viewCtrl.dismiss();
		}
		else if( this.text.action == 'save' ) {
			this.storedBackpack.name = this.backpack.name;
			this.storedBackpack.note = this.backpack.note;
			this.invent.saveBackpack(this.storedBackpack);
			//this.app.getRootNav().pop();
			this.viewCtrl.dismiss();
		}
	}


	backpackSelected(backpack) {
		if( backpack.id == this.invent.settings.selectedBackpack )
			return 'primary';
		else
			return '';
	}

	selectBackpack(backpack) {
		this.invent.selectBackpack(backpack);
		//this.app.getRootNav().pop();
		this.viewCtrl.dismiss();
	}

}
