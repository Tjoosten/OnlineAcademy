import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
tab1Root: string;
tab2Root: string;
tab3Root: string;
tab4Root: string;
  constructor() {
    this.tab1Root = 'JournalPage';
    this.tab2Root = 'ProfilePage';
    this.tab3Root = 'HomePage';
    this.tab4Root = 'MorePage';
  }


}