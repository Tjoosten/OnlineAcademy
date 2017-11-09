import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomePage } from './welcome';
import { VideoPlayer } from '@ionic-native/video-player';

@NgModule({
  declarations: [
    WelcomePage,
  ],
  providers:[
    VideoPlayer,
  ],
  imports: [
    IonicPageModule.forChild(WelcomePage),
  ],
})
export class WelcomePageModule {}
