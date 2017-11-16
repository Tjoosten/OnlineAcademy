import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  //Reference to firebase quotes
  QuotesRef: firebase.database.Reference = firebase.database().ref('/quotes/');
  Quotes = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loadQuotes();
  }
  addQuote(Author: string, Quote: string): void {
    let newQuotesRef = this.QuotesRef.push();
    newQuotesRef.set({
      Auteur: Author,
      Quote: Quote
    });
  }
  loadQuotes() {
    this.QuotesRef.on('value', quoteSnapshot => {
      let QuoteVal = quoteSnapshot.val();
      this.Quotes.push(QuoteVal);
      console.log(this.Quotes);
    });
  }



}
