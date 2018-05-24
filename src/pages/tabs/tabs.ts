import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

    tab1Root: any = 'BackpackPage';
    tab2Root: any = 'ChecklistPage';
    tabMRoot: any = 'NewmenuPage';
    myIndex: number;


  constructor(public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }


}
