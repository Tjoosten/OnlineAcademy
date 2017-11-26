import { Component, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ComponentsModule } from "../../components/components.module";
import { Profile } from '../../models/profile/profile.interface';
import { DataService } from "../../providers/data.service";
import {AuthService} from '../../providers/auth.service';
import { User } from "firebase/app";
import { NavController } from 'ionic-angular/navigation/nav-controller';
@Component({
  selector: 'app-profile-form',
  templateUrl: 'profile-form.component.html'
})
export class ProfileFormComponent implements OnDestroy {

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  profile = {} as Profile;

  constructor(private auth: AuthService, private data: DataService,private navCtrl: NavController) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User)=> {
      this.authenticatedUser = user
    })
  }
  signOut(){
    this.auth.signOut();
    this.navCtrl.setRoot('WelcomePage');
  }

  async saveProfile(){
    if(this.authenticatedUser){
      this.profile.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
      this.navigateToPage("LoginPage")
    }
    
  }
  navigateToPage(pageName:string) {
    this.navCtrl.setRoot(pageName);
  }
ngOnDestroy(): void {
  this.authenticatedUser$.unsubscribe();
  }
}
