import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';  

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


    persons: Observable<any[]>;

  constructor(public navCtrl: NavController , public db:AngularFirestore) {
 
       this.persons = db.collection('brand').valueChanges();
  }

}
