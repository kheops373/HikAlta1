import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
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
	public text: Pram = { 'title':'Select backpack', 'button':'Create', 'showlist':true, 'action':'create' };

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, public invent: InventProvider) {
	  this.backpack = navParams.get('backpack');
	  if( this.backpack == null ) {
		  this.backpack = new BackPack();
	  }
	  else {
		  this.text.title = 'Edit backpack';
		  this.text.button = 'Save changes';
		  this.text.showlist = false;
		  this.text.action = 'save'
	  }
		  
  }


	createSaveBackpackClicked() {
		if( this.text.action == 'create' ) {
			this.invent.createBackpack(this.backpack);
			this.app.getRootNav().pop();
		}
		else if( this.text.action == 'save' ) {
			this.invent.saveBackpack(this.backpack);
			this.app.getRootNav().pop();
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
		this.app.getRootNav().pop();
	}

}
