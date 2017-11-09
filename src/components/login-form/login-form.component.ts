import { Component, EventEmitter, Output,} from '@angular/core';
import {NavController, ToastController} from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import { LoginResponse } from "../../models/login/login-response.interface";
import {Account} from "../../models/account/account.interface";
@Component({
  selector: 'app-login-form>',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {
  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController, private toast: ToastController) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }
     navigateToPage(pageName:string) {
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }
  async login(){
    try {
      const result: LoginResponse = {
        result:  await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password),
      }
      this.toast.create({
        message: "Login Successfull",
        duration: 3000
      }).present();
      this.loginStatus.emit(result);

    } catch (e) {
      console.error(e);
      const error: LoginResponse = {
        error: e
      }
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
      this.loginStatus.emit(error);
      
    }
  }


}
