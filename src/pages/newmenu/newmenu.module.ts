import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewmenuPage } from './newmenu';

@NgModule({
  declarations: [
    NewmenuPage,
  ],
  imports: [
    IonicPageModule.forChild(NewmenuPage),
  ],
})
export class NewmenuPageModule {}
