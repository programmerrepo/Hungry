import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SlidePage } from '../pages/slide/slide';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { OrderlistPage } from '../pages/orderlist/orderlist';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { AngularFireAuth } from 'angularfire2/auth';

import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = SlidePage;

  pages: Array<{ title: string, component: any,  icon: string , active: boolean}>;

  
  rightMenuItems: Array<{ icon: string, active: boolean }>;
  
  
   getInfo = {
    
    name :'',
    userprofile :'',
    email :'',
  
    
  }
    
    
  constructor(public fire:AngularFireAuth, public storage: Storage , public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    
      storage.get('name').then((val) => {
    this.getInfo.name = val;
  });


      storage.get('userprofile').then((val) => {
    this.getInfo.userprofile = val;
  });
      
      
            storage.get('email').then((val) => {
    this.getInfo.email = val;
  });
            
            

    
    this.initializeApp();

    // used for an example of ngFor and navigation
    
    this.rightMenuItems = [
      { icon: 'home', active: true },
      { icon: 'alarm', active: false },
      { icon: 'archive', active: false },
      { icon: 'basket', active: false },
      { icon: 'body', active: false },
      { icon: 'bookmarks', active: false },
      { icon: 'camera', active: false },
      { icon: 'beer', active: false },
      { icon: 'power', active: false },
    ];
    
    
    this.pages = [
      { title: 'Home', component: HomePage , icon: 'home', active: true },
      { title: 'Restaurants', component: ListPage , icon: 'book', active: false },
      { title: 'Order', component: OrderlistPage , icon: 'basket', active: false },
      { title: 'Offers', component: ListPage , icon: 'body', active: false},
      { title: 'Other', component: ListPage , icon: 'archive', active: false },
      { title: 'Contact', component: ContactPage , icon: 'power', active: false }
    ];
    
    
    
    

  }
  
    @ViewChild(Nav) nav: Nav;


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  login()
  {
    this.nav.setRoot(LoginPage);
  }
  
  register()
  {
    this.nav.setRoot(RegisterPage);
  }
}
