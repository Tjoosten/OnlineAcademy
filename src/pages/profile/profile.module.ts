import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import {ComponentsModule } from '../../components/components.module';
import { AuthService } from '../../providers/auth.service'

@NgModule({
  declarations: [
    ProfilePage
  ],
  providers: [
    AuthService,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    ComponentsModule
  ],
})
export class ProfilePageModule {}
