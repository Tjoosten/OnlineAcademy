import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

import { AngularFireDatabase } from "angularfire2/database";
import { Item } from 'ionic-angular/components/item/item';
@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  //Reference to firebase quotes
  QuotesRef: firebase.database.Reference = firebase.database().ref('/quotes/');
  Quotes : Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase) {
  }
  addQuote(Author: string, Quote: string): void {
    this.QuotesRef.push({
      Auteur: Author,
      Quote: Quote
    });
  }
  ionViewDidLoad() {
    this.QuotesRef.on('value' , quoteSnapshot => {
      this.Quotes = [];
     quoteSnapshot.forEach(quoteSnap => {
      this.Quotes.push(quoteSnap.val());
           return false;
     });
    });
  }


}
