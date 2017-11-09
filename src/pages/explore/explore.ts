import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})

export class ExplorePage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  playVideo()
  {

  }


}
