import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ViewChild } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})

export class ExplorePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  

  @ViewChild(Slides) slides: Slides;
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
}
