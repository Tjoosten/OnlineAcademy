import { Component,EventEmitter, Output } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

import {Account} from '../../models/account/account.interface';
import { LoginResponse } from "../../models/login/login-response.interface";
import { DataService } from '../../providers/data.service';
import { User } from 'firebase/app';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account = {} as Account;
  @Output()loginStatus: EventEmitter<any>;
  private profile$: Subscription;

  ngOnDestroy(){
    this.profile$.unsubscribe();
    console.log("Subscription destroyed");
   }
  constructor(private data: DataService, private afAuth: AngularFireAuth, private navCtrl: NavController, private toast: ToastController) {
    this.loginStatus = new EventEmitter<any>();
  }
  login(event: LoginResponse){
    if(!event.error){
      this.toast.create({
        message: `Welcome to Online Academy, ${event.result.email}`,
        duration: 2000
      }).present();

      
      this.profile$ = this.data.getProfile(<User>event.result)
      .snapshotChanges() // return an Observable
      .subscribe(action => {
        console.log(action.payload.val());
        action.payload.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('ProfilePage');
      });
} else {
  this.toast.create({
  message: event.error.message,
  duration: 3000
  }).present();
} 

  }
  navigateToPage(pageName:string) {
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
