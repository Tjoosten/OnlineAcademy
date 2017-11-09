import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingCoursesPage } from './training-courses';

@NgModule({
  declarations: [
    TrainingCoursesPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingCoursesPage),
  ],
})
export class TrainingCoursesPageModule {}
