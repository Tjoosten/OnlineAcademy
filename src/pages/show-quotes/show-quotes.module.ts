import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowQuotesPage } from './show-quotes';

@NgModule({
  declarations: [
    ShowQuotesPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowQuotesPage),
  ],
})
export class ShowQuotesPageModule {}
