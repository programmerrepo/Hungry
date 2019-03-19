import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SlidePage } from '../pages/slide/slide';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { MenuPage } from '../pages/menu/menu';
import { SelectPage } from '../pages/select/select';
import { OrderlistPage } from '../pages/orderlist/orderlist';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';






  const config = {
    apiKey: "AIzaSyCe2TY0AjWlRmxACHBO5Gsdt-9Bjmpx94s",
    authDomain: "hfood-41859.firebaseapp.com",
    databaseURL: "https://hfood-41859.firebaseio.com",
    projectId: "hfood-41859",
    storageBucket: "hfood-41859.appspot.com",
    messagingSenderId: "1052571442294"
  };
  
  

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    MenuPage,
    SelectPage,
    OrderlistPage,
    LoginPage,
    RegisterPage,
    SlidePage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
     IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    MenuPage,
    SelectPage,
    OrderlistPage,
    LoginPage,
    RegisterPage,
    SlidePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
