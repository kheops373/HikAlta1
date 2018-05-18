import { Tab2Page } from './../tab2/tab2';
import { Tab1Page } from './../tab1/tab1';
import { TabsPage } from './../tabs/tabs';
import { SpecialPage } from './../special/special';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';


export interface PageInterface {
    title : string;
    pageName : string;
    tabComponent? : any;
    index?: any;
    icon: string;
}


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

    rootPage = 'TabsPage';
    
    @ViewChild(Nav) nav: Nav;


    pages : PageInterface[] = [
        { title: 'Tab 1', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home'},
        { title: 'Tab 2', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'contact'},
        { title: 'Special', pageName: 'SpecialPage', icon: 'shuffle'}
        
    ]


  constructor(public navCtrl: NavController) {   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  
  
  
  openPage(page: PageInterface) {
    let params = {};
    
    if( page.index) {
        params = { tabIndex: page.index };
    }
    
    if(this.nav.getActiveChildNav() && page.index != undefined) {
        this.nav.getActiveChildNav().select(page.index);
    } else {
        this.nav.setRoot(page.pageName, params);
    }
  }
  
  
  
  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();
    
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

}
