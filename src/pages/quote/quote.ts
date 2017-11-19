import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { Quote } from '../../models/quote/quote.interface';

import { AngularFireDatabase } from "angularfire2/database";
@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  quote = {} as Quote
  //Reference to firebase quotes
  QuotesRef: firebase.database.Reference = firebase.database().ref('/quotes/');
  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase) {
  }
  navigateToPage(pageName:string) {
    this.navCtrl.setRoot(pageName);
  }
  addQuote(auteur: string, quote: string): void {
    try {
      this.QuotesRef.push({
        Auteur: auteur,
        Quote: quote,
        Day: new Date().getDate(),
        Month: new Date().getMonth(),
        Year: new Date().getFullYear(),
      });
    } 
    catch (error) {
      console.log(error.error);
    }
    this.navigateToPage('ShowQuotesPage');
    
    
  }


}
