import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { MyApp } from '../../app/app.component';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';


import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AngularFireAuth]
 
})


export class LoginPage {
    
  getInfo = {
    
    name :'',
    userprofile :'',
    email :'',
  
    
  }

      email:string='';
      password:string='';

  constructor(public storage :Storage , public fir: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

goLogin(){
  this.fir.auth.signInWithEmailAndPassword(this.email, this.password).then(res=>{
                                                                             
                                                                               this.getInfo.name = res.user.displayName;
                                                                               this.getInfo.userprofile = res.user.photoURL;
                                                                               this.getInfo.email = res.user.email;
                                                                             
                                                                               
                                                                               
                                                                                this.storage.set('name', res.user.displayName);
                                                                                 this.storage.set('userprofile', res.user.photoURL);
                                                                                  this.storage.set('email', res.user.email);
                                                                                 
this.navCtrl.push(MyApp)
}).catch(function(error) {
  console.log(error);
});
}

goFacebook(){
  this.fir.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res=>
                                                                               {console.log(res);
                                                                               
                                                                               this.getInfo.name = res.user.displayName;
                                                                               this.getInfo.userprofile = res.user.photoURL;
                                                                               this.getInfo.email = res.user.email;
                                                                             
                                                                               
                                                                               
                                                                                this.storage.set('name', res.user.displayName);
                                                                                 this.storage.set('userprofile', res.user.photoURL);
                                                                                  this.storage.set('email', res.user.email);
                                                                                 
                                                                                  
                                                                                  
                                                                                  this.navCtrl.push(MyApp);

                                                                               
                                                                               })
}

goGoogle(){
   this.fir.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(user=>
                                                                               {this.navCtrl.push(MyApp);})
}

openre(){
    
  this.navCtrl.push(RegisterPage);
  }

}
