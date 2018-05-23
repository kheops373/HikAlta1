import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { InventProvider } from '../../providers/invent/invent';

/**
 * Generated class for the NewmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newmenu',
  templateUrl: 'newmenu.html',
})
export class NewmenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public invent: InventProvider, public alertCtrl: AlertController, public modalCtrl: ModalController) {
  }
	
	
	selectInventory() {
		let selectInv = this.modalCtrl.create('SelectinventPage' );
        selectInv.present();
	}


    eraseStorage() {
        
        let al = this.alertCtrl.create({
            title: 'Erase all stored data',
            message: 'Are you sure you want to erase all stored data and to restore the default settings? This cannot be undone!',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'Erase all',
                handler: () => {
                    this.invent.eraseAllStorage();
                    alert("Storage erased");
                }
              }
            ]
          });
        al.present();
        
        
    }

}
