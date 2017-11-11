import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import{VideoPlayer, VideoOptions} from '@ionic-native/video-player';




@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})

export class ExplorePage {
  
  videoOptions: VideoOptions;
  videoUrl: string;
  constructor(private videoPlayer: VideoPlayer, public navCtrl: NavController, public navParams: NavParams) {

  }
  stopVideo(){
    this.videoPlayer.close()
    console.log("The video was stopped.")
  }
  async playVideo(){
    try{
      this.videoOptions = {
        volume: 0.7
      }
      this.videoUrl = "https://www.youtube.com/watch?v=2vbs6yZTGmc"
      setTimeout(()=>{
        this.stopVideo();
      }, 3000);
      await this.videoPlayer.play(this.videoUrl, this.videoOptions)
      console.log("video has completed")
  
    }catch(e){
      console.error(e);
    }
  }

}
