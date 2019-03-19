import { Component } from '@angular/core';
import { IonicPage, NavController , NavParams } from 'ionic-angular';

import { MyApp } from '../../app/app.component';
import { HomePage } from '../home/home';

/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  
   slides = [
    {
      title: "Welcome to HuNgry!",
      description: "The <b>HuNgry Application Service</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/pic.png",
    },
    {
      title: "Our Restaurant?",
      description: "<b>Restaurant Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/res.png",
    },
    {
      title: "Did you here about HuNgry offer?",
      description: "The <b>Offer Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/so.png",
    }
  ];
   
   goApp(){
    this.navCtrl.setRoot(HomePage);
   }
}
