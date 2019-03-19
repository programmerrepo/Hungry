import { Component } from '@angular/core';
import { IonicPage , NavController , NavParams , Platform } from 'ionic-angular';


import { SelectPage } from '../select/select';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  pet: string = "puppies";
  isAndroid: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams , public platform: Platform) {
    
     this.isAndroid = platform.is('android');
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  
  goToSelect(){
    
    this.navCtrl.push(SelectPage);
  }
  
}
