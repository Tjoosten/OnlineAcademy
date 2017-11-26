import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import { LoginResponse } from "../../models/login/login-response.interface";
import { NavController } from 'ionic-angular/navigation/nav-controller';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  account = {} as Account

  constructor(private toast: ToastController, private navCtrl: NavController) {
  }
  register(event){
    if(!event.error) {
      this.toast.create({
        message: `Account created: ${event.result.email}`,
        duration: 2000
      }).present();
      this.navigateToPage("ProfilePage");
    }
    else {
      this.toast.create({
        message: `Account not created. ${event.error.message}`,
        duration: 2000
      }).present();
    }
  }
  navigateToPage(pageName:string) {
    this.navCtrl.push(pageName);
  }


}
