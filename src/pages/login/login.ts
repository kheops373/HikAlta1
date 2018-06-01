import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	
	private email: string;
	private password: string;

	constructor(private navCtrl: NavController, private auth: AuthService ) {
		
	}

  ionViewDidLoad() {

  }
  
  doLogin() {
    this.navCtrl.setRoot('TabsPage');
  }


	login() {

		if (!this.email) {
			return;
		}

		let credentials = {
			email: this.email,
			password: this.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot('TabsPage'),
				error => alert(error.message)
			);
	}


	signup() {
		let credentials = {
			email: this.email,
			password: this.password
		};
		this.auth.signUp(credentials).then(
			() => this.navCtrl.setRoot('TabsPage'),
			error => alert(error.message)
		);
	}



}
