import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
   goTomenu(){
    this.navCtrl.push(MenuPage);
  }
  
  


  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
  
  
 
}
