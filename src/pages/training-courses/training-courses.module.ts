import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingCoursesPage } from './training-courses';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    TrainingCoursesPage,
  ],
  providers: [
    InAppBrowser,
  ],
  imports: [
    IonicPageModule.forChild(TrainingCoursesPage),
  ],
})
export class TrainingCoursesPageModule {}
