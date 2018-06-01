import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';



import { MyApp } from './app.component';
import { LoginPage } from './../pages/login/login';
import { DataProvider } from '../providers/data/data';
import { InventProvider } from '../providers/invent/invent';
import { AuthService } from '../providers/auth/auth';


export const firebaseConfig = {
    apiKey: "AIzaSyBTQ4vCQ8wLb34Eb2YUamOZXAHwqYx_rOM",
    authDomain: "hiktest1-e3819.firebaseapp.com",
    databaseURL: "https://hiktest1-e3819.firebaseio.com",
    projectId: "hiktest1-e3819",
    storageBucket: "hiktest1-e3819.appspot.com",
    messagingSenderId: "866414182123"
  };


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
	AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataProvider,
    InventProvider,
	AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,

  ]
})
export class AppModule {}
