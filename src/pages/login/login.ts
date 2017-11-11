import { Component,EventEmitter, Output } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

import {Account} from '../../models/account/account.interface';
import { LoginResponse } from "../../models/login/login-response.interface";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account = {} as Account;
  @Output()loginStatus: EventEmitter<any>;
  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController) {
    this.loginStatus = new EventEmitter<any>();
  }
  login(event: LoginResponse){
    if(!event.error){
      this.navCtrl.setRoot('TabsPage');
    }
    console.log(event);

  }
  navigateToPage(pageName:string) {
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
