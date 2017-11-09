import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImmersionPage } from './immersion';

@NgModule({
  declarations: [
    ImmersionPage,
  ],
  imports: [
    IonicPageModule.forChild(ImmersionPage),
  ],
})
export class ImmersionPageModule {}
