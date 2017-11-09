import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(private videoPlayer: VideoPlayer,public navCtrl: NavController, public navParams: NavParams) {
  }
  navigateToPage(pageName:string) {
    this.navCtrl.push(pageName);
  }

}
