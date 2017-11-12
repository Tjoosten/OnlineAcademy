import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the TrainingCoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-training-courses',
  templateUrl: 'training-courses.html',
})
export class TrainingCoursesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public iab: InAppBrowser) {
  }
  openWebpage(url: string) {
    
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    const browser = this.iab.create(url, '_self', options);
   }
}
